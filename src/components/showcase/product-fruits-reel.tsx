"use client"

import type { CSSProperties, ReactNode } from "react"
import { ArrowRight, Article, Cancel, Check, CheckCircle, ChevronDown, Connections, Dcport, HelpOutline, Invite, Search } from "@nimbus/assets/icons/app"
import { Badge, Button, Dialog, Modal } from "@nimbus/core"
import modalStyles from "@nimbus/core/Modal/Modal.module.scss"

import { NAVY } from "@/components/brand/brand-art"
import {
  BODY,
  DISPLAY,
  MONO,
  ReelExportStage,
  ReelPlayer,
  SOFT_SHADOW,
  W,
  clamp,
  cubicBezier,
  ink,
  inOut3,
  kickerStyle,
  lerp,
  mix,
  out3,
  outBack,
  outExpo,
  rise,
  seg,
  tok,
  type ReelScene,
} from "./reel-engine"

/* ------------------------------------------------------------------ */
/* Source material                                                     */
/* ------------------------------------------------------------------ */

/**
 * The custom CSS shown in the "Making it feel native" chapter. The selectors and variables are the
 * hooks Product Fruits documents (help.productfruits.com: "CSS Classes for Tours", "Easy to Adjust CSS
 * Variables"); every value comes from the Nimbus Modal source (src/core/Modal/Modal.module.scss) and
 * cc-design-tokens. Replace it with the production stylesheet to show the exact code that shipped.
 */
export const CUSTOM_CSS = `/* Product Fruits → Branding → Custom CSS */
.productfruits--container-root {
  --card-border-radius: 10px;        /* Modal radius */
  --card-header-padding: 15px 20px;  /* $size-spacer-md lg */
  --card-footer-padding: 15px 20px;
  --card-body-text-padding: 20px;    /* $size-spacer-lg */
  --btn-border-radius: 5px;          /* Button box radius */
  --btn-padding: 10px 15px;          /* $size-spacer-sm md */
}

.productfruits--card-dialog-style {
  max-width: 30rem;                  /* Modal size="sm" */
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1),
              0 4px 6px -2px rgb(0 0 0 / .05);
}

.productfruits--card-header {
  font: 600 1.29rem/1.79rem 'Open Sans'; /* $font-heading-h4 */
  color: #272727;                        /* $color-text-500 */
}
.productfruits--card-header:after,
.productfruits--card-footer:before {
  width: 100%;                       /* full-bleed dividers */
  border-color: #ccd2dc;             /* $color-system-100 */
}

.productfruits--card-body {
  min-height: 0;
  font: 400 1rem/1.43rem 'Open Sans';    /* $font-body-md */
  color: #383838;                        /* $color-text-400 */
}

.productfruits--btn {
  background-color: #0674e4;         /* $color-primary-300 */
  font: 600 1rem/1.43rem 'Open Sans';    /* $font-body-bold-md */
}
.productfruits--btn:hover {
  background-color: #015fbf;         /* $color-primary-400 */
}`

const ANNOUNCEMENT = {
  title: "Introducing a simpler way to navigate",
  badge: "New",
  heading: "Navigation",
  body: "It is now easier to use the Console Connect navigation to find what you need, discover what's possible and move around the platform.",
  cta: "Next",
}

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

const PINK = tok("brand-pink")
const PF_BLUE = "#3047ec" // Product Fruits' documented default button colour
const PF_GREY = "#919192" // Product Fruits' documented step-counter colour

function Chip({ children, style, tone = "light" }: { children: ReactNode; style?: CSSProperties; tone?: "light" | "navy" | "pink" }) {
  const tones = {
    light: { background: "#fff", color: NAVY, boxShadow: SOFT_SHADOW },
    navy: { background: NAVY, color: "#fff", boxShadow: "0 12px 30px rgba(22,38,63,0.25)" },
    pink: { background: PINK, color: "#fff", boxShadow: "0 12px 30px rgba(255,39,111,0.3)" },
  }[tone]
  return (
    <span
      className="inline-flex items-center whitespace-nowrap"
      style={{ gap: 8, padding: "9px 14px", borderRadius: 999, font: `600 14px/1 ${BODY}`, ...tones, ...style }}
    >
      {children}
    </span>
  )
}

function Caption({ t, at = 0.2, leave, children }: { t: number; at?: number; leave?: number; children: ReactNode }) {
  return (
    <div className="absolute text-center" style={{ left: 0, width: W, top: 28, ...rise(t, at, { leave, dist: 10 }) }}>
      <Chip>{children}</Chip>
    </div>
  )
}

function BrowserFrame({ width, children, url = "Console Connect" }: { width: number; children: ReactNode; url?: string }) {
  return (
    <div style={{ width, borderRadius: 14, overflow: "hidden", background: "#fff", boxShadow: "0 40px 90px rgba(22,38,63,0.22), 0 2px 8px rgba(22,38,63,0.08)" }}>
      <div className="flex items-center" style={{ height: 32, gap: 7, padding: "0 14px", background: "#eef1f6", borderBottom: `1px solid ${ink(0.08)}` }}>
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: 999, background: c }} />
        ))}
        <span style={{ marginLeft: 16, padding: "3px 14px", borderRadius: 999, background: "#fff", font: `600 11px/1.4 ${BODY}`, color: ink(0.55) }}>{url}</span>
      </div>
      {children}
    </div>
  )
}

/* The Console Connect welcome page, laid out at 1280 × 800 and scaled by the caller. */
const APP_W = 1280
const APP_H = 800
const VIDEO = { x: 91, y: 190, w: 719, h: 428 }
const GET_STARTED = { x: 818, y: 190, w: 356, h: 367 }
const QUICK_LINKS = { x: 818, y: 565, w: 356, h: 230 }
const PRODUCTS = { x: 91, y: 626, w: 719, h: 174 }

const appText = (size: number, weight = 400, color = "#272727"): CSSProperties => ({ font: `${weight} ${size}px/1.3 ${BODY}`, color })

function CardShell({ r, children }: { r: { x: number; y: number; w: number; h: number }; children: ReactNode }) {
  return (
    <div
      className="absolute overflow-hidden"
      style={{ left: r.x, top: r.y, width: r.w, height: r.h, background: "#fff", borderRadius: 6, boxShadow: "0 1px 3px rgba(0,0,0,0.12)" }}
    >
      {children}
    </div>
  )
}

function WelcomePage() {
  const links: Array<[string, boolean]> = [
    ["Create or join a company", true],
    ["Order a port", false],
    ["Add L2 Connection", false],
    ["Add Internet On-Demand", false],
    ["Create CloudRouter", false],
    ["Add sites", false],
    ["Order IoT Global SIMs", false],
  ]
  return (
    <div data-nimbus-canvas className="relative overflow-hidden" style={{ width: APP_W, height: APP_H, background: "#e9ebee" }}>
      <div className="absolute inset-x-0 top-0 flex items-center" style={{ height: 52, padding: "0 18px", background: "#fff", borderBottom: "1px solid #dfe2e7" }}>
        <span aria-hidden style={{ width: 32, height: 32, borderRadius: 999, background: `linear-gradient(135deg, ${PINK}, ${tok("brand-purple")})` }} />
        <div className="flex items-center" style={{ marginLeft: 36, gap: 32, ...appText(13, 600) }}>
          <span>Dashboard</span>
          <span>Security</span>
          <span className="flex items-center" style={{ gap: 4 }}>
            Ecosystem <ChevronDown style={{ fontSize: 14 }} />
          </span>
          <span>Pricing</span>
        </div>
        <div className="ml-auto flex items-center" style={{ gap: 20, fontSize: 18, color: "#272727" }}>
          <Search />
          <Invite />
          <HelpOutline />
          <span className="flex items-center justify-center" style={{ width: 34, height: 34, borderRadius: 999, background: tok("brand-purple"), ...appText(13, 600, "#fff") }}>
            SR
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0" style={{ top: 52, height: 122, background: "#fff", padding: "26px 18px" }}>
        <div style={appText(30, 400, tok("brand-purple"))}>Welcome Steve Rose</div>
        <div style={{ ...appText(13), marginTop: 16 }}>Get started with Console Connect</div>
      </div>

      <CardShell r={VIDEO}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, #f5eef9 0%, #e9e2f0 45%, #d8cfe2 100%)" }} />
        <div className="absolute" style={{ left: 30, top: 60, width: 140, height: 330, borderRadius: 999, background: "linear-gradient(180deg, #ffd1f0, #ff7ac8)", filter: "blur(28px)", opacity: 0.55 }} />
        <div className="absolute flex items-center justify-center" style={{ left: VIDEO.w / 2 - 60, top: 150, width: 120, height: 120, borderRadius: 999, background: "rgba(40,40,40,0.72)" }}>
          <span style={{ width: 0, height: 0, marginLeft: 10, borderLeft: "40px solid #fff", borderTop: "26px solid transparent", borderBottom: "26px solid transparent" }} />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-end" style={{ height: 24, padding: "0 24px", background: "#16263f" }}>
          <span style={{ ...appText(11, 400, "#fff"), textDecoration: "underline" }}>Hide video</span>
        </div>
      </CardShell>

      <CardShell r={GET_STARTED}>
        <div style={{ padding: "22px 24px" }}>
          <div style={appText(22, 400)}>GET STARTED</div>
          <div style={{ ...appText(12), marginTop: 2 }}>Start building your network</div>
          <div style={{ marginTop: 16, borderTop: "1px solid #dfe2e7" }}>
            {links.map(([label, active], i) => (
              <div
                key={label}
                style={{
                  ...appText(active ? 15 : 14, 400, active ? tok("primary-300") : "#9aa0a8"),
                  padding: active ? "16px 0" : "5px 0",
                  borderBottom: i === 0 || i === 3 || i === 5 ? "1px solid #dfe2e7" : undefined,
                  marginBottom: i === 0 || i === 3 || i === 5 ? 8 : 0,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </CardShell>

      <CardShell r={QUICK_LINKS}>
        <div style={{ padding: "22px 24px" }}>
          <div style={appText(22, 400)}>QUICK LINKS</div>
          <div className="flex" style={{ gap: 14, marginTop: 18, paddingTop: 18, borderTop: "1px solid #dfe2e7" }}>
            <span className="flex shrink-0 items-center justify-center" style={{ width: 68, height: 68, borderRadius: 999, background: "#d9dde6", fontSize: 32, color: tok("primary-400") }}>
              <Article />
            </span>
            <div>
              <div style={appText(15, 600)}>API Docs</div>
              <div style={{ ...appText(11.5, 400, "#383838"), marginTop: 4 }}>Our API Docs are a vital reference with all the information you need to integrate</div>
              <div className="flex items-center" style={{ ...appText(12, 600, tok("primary-300")), gap: 4, marginTop: 6 }}>
                Go to the API Docs <ArrowRight style={{ fontSize: 13 }} />
              </div>
            </div>
          </div>
        </div>
      </CardShell>

      <CardShell r={PRODUCTS}>
        <div style={{ padding: "22px 30px" }}>
          <div style={appText(22, 400)}>PRODUCTS AND SERVICES</div>
          <div style={{ ...appText(12), marginTop: 2 }}>Take control, cut complexity and make connections effortlessly with our suite of products and services</div>
          <div className="flex" style={{ gap: 40, marginTop: 18, paddingTop: 16, borderTop: "1px solid #dfe2e7" }}>
            {[
              [Dcport, "Port", "Platform access from hundreds of locations"],
              [Connections, "L2 Connections", "Direct connections to Clouds, SaaS and more"],
            ].map(([Icon, name, body]) => {
              const Glyph = Icon as typeof Dcport
              return (
                <div key={name as string} className="flex" style={{ gap: 12 }}>
                  <span className="flex items-center justify-center" style={{ width: 46, height: 46, borderRadius: 999, background: "#d9dde6", fontSize: 22, color: tok("primary-400") }}>
                    <Glyph />
                  </span>
                  <div>
                    <div style={appText(17, 400)}>{name as string}</div>
                    <div style={appText(12)}>{body as string}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardShell>
    </div>
  )
}

/** The navigation illustration inside the announcement, animated the way the Jitter version moved. */
function NavIllustration({ t }: { t: number }) {
  const a = out3(seg(t, 0, 1.2))
  const rows = [0, 1, 2, 3]
  return (
    <div className="relative overflow-hidden" style={{ height: 270, borderRadius: 8, border: "1px solid #dfe2e7", background: "#e8ecf3" }}>
      <svg className="absolute" style={{ left: -30, top: -40, transform: `rotate(${Math.sin(t * 0.8) * 4}deg) scale(${0.8 + 0.2 * a})`, transformOrigin: "30% 30%" }} width={220} height={200} viewBox="0 0 220 200">
        <defs>
          <linearGradient id="pf-blob-a" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#c74bd6" />
            <stop offset="1" stopColor="#ff2d7a" />
          </linearGradient>
        </defs>
        <path d="M0 0H170C150 60 120 70 90 110S40 190 0 200Z" fill="url(#pf-blob-a)" />
      </svg>
      <svg className="absolute" style={{ right: -20, bottom: -10, transform: `translateX(${(1 - a) * 60 + Math.sin(t * 1.1) * 6}px)` }} width={330} height={120} viewBox="0 0 330 120">
        <defs>
          <linearGradient id="pf-blob-b" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#8a55ff" />
            <stop offset="1" stopColor="#ff2d7a" />
          </linearGradient>
        </defs>
        <path d="M0 60C30 20 60 20 80 60S130 100 150 60 200 20 220 60 270 100 290 60 320 30 330 40V120H0Z" fill="url(#pf-blob-b)" />
      </svg>
      <div
        className="absolute"
        style={{
          left: 38,
          top: 34,
          right: 30,
          height: 200,
          borderRadius: 8,
          background: "#fff",
          boxShadow: "0 18px 40px rgba(22,38,63,0.2)",
          transform: `translateY(${(1 - a) * 40}px)`,
          opacity: a,
          padding: 10,
        }}
      >
        <div className="flex items-center" style={{ gap: 10, ...appText(6.5, 600, "#666") }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: NAVY }} />
          <span style={{ color: "#272727", borderBottom: `1.5px solid ${PINK}` }}>Dashboard</span>
          <span>Security</span>
          <span>Solutions</span>
          <span>Ecosystem</span>
          <span>Pricing</span>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginTop: 10 }}>
          {["Unread Messages", "Support tickets", "Chat with your account manager"].map((label, i) => (
            <div key={label} style={{ height: 28, borderRadius: 4, border: "1px solid #e6e8ec", padding: 4, ...appText(5.5, 600), opacity: seg(t, 0.5 + i * 0.12, 0.8 + i * 0.12) }}>
              {label}
            </div>
          ))}
        </div>
        <div className="flex" style={{ gap: 10, marginTop: 8 }}>
          <div style={{ width: 70 }}>
            <div style={appText(6, 600)}>Services</div>
            {["Data Centre Port", "Layer 2", "Layer 3", "Internet On-Demand"].map((s, i) => (
              <div key={s} className="flex items-center" style={{ gap: 3, marginTop: 5, ...appText(5, 400, "#555"), opacity: seg(t, 0.8 + i * 0.1, 1.1 + i * 0.1) }}>
                <span style={{ width: 5, height: 5, borderRadius: 999, background: i === 0 ? PINK : "#aab" }} />
                {s}
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="flex" style={{ gap: 4 }}>
              <span style={{ padding: "2px 6px", borderRadius: 3, border: `1px solid ${tok("primary-300")}`, ...appText(5, 600, tok("primary-300")) }}>Add new service</span>
              <span style={{ padding: "2px 6px", borderRadius: 3, border: "1px solid #ccd", ...appText(5, 600, "#555") }}>Manage service keys</span>
            </div>
            {rows.map((r) => (
              <div
                key={r}
                className="flex items-center"
                style={{
                  gap: 6,
                  marginTop: 6,
                  height: 12,
                  borderBottom: "1px solid #eef0f3",
                  opacity: seg(t, 1.0 + r * 0.14, 1.3 + r * 0.14),
                  transform: `translateX(${(1 - out3(seg(t, 1.0 + r * 0.14, 1.4 + r * 0.14))) * 14}px)`,
                }}
              >
                <span style={{ width: 60, height: 4, borderRadius: 2, background: "#c9ced8" }} />
                <span style={{ width: 5, height: 5, borderRadius: 999, background: tok("success-300") }} />
                <span style={{ width: 24, height: 4, borderRadius: 2, background: "#dfe2e7" }} />
                <span style={{ width: 30, height: 4, borderRadius: 2, background: "#dfe2e7" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** The real Nimbus Modal parts (header, title, close, body, footer) on the real Modal surface, rendered in place. */
function NimbusAnnouncement({ t, style, compact }: { t: number; style?: CSSProperties; compact?: boolean }) {
  return (
    <div data-nimbus-canvas className={modalStyles.modal} data-size="sm" style={{ maxHeight: "none", ...style }}>
      <Dialog aria-label={ANNOUNCEMENT.title}>
        <Modal.Header style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Modal.Title>{ANNOUNCEMENT.title} ✨</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <div className="flex items-center" style={{ gap: 10 }}>
            <Badge intent="info">
              <Badge.Label>{ANNOUNCEMENT.badge}</Badge.Label>
            </Badge>
            <span style={{ font: "var(--font-heading-h5)", color: "var(--color-text-500)" }}>{ANNOUNCEMENT.heading}</span>
          </div>
          <p style={{ margin: 0 }}>{ANNOUNCEMENT.body}</p>
          {compact ? (
            <div style={{ height: 150, overflow: "hidden", borderRadius: 8 }}>
              <div style={{ transform: "scale(0.56)", transformOrigin: "top left", width: "178%" }}>
                <NavIllustration t={t} />
              </div>
            </div>
          ) : (
            <NavIllustration t={t} />
          )}
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "flex-start" }}>
          <Button variant="primary">{ANNOUNCEMENT.cta}</Button>
        </Modal.Footer>
      </Dialog>
    </div>
  )
}

/**
 * A Product Fruits "modal" tour card. At p = 0 it wears Product Fruits' documented defaults (bold header,
 * inset dividers, #3047ec buttons, 350px minimum body, 440px max width); each `p*` value moves one part of
 * it onto the Nimbus Modal as the matching block of custom CSS lands.
 */
function PfCard({
  pVars = 0,
  pDialog = 0,
  pHeader = 0,
  pBody = 0,
  pBtn = 0,
  typedTitle = ANNOUNCEMENT.title.length,
  typedBody = ANNOUNCEMENT.body.length,
  image = 1,
  t = 10,
}: {
  pVars?: number
  pDialog?: number
  pHeader?: number
  pBody?: number
  pBtn?: number
  typedTitle?: number
  typedBody?: number
  image?: number
  t?: number
}) {
  const font = pDialog > 0.5 ? BODY : "Helvetica, Arial, sans-serif"
  const dividerInset = lerp(20, 0, pHeader)
  return (
    <div
      style={{
        width: lerp(440, 420, pDialog),
        borderRadius: lerp(4, 10, pVars),
        background: "#fff",
        fontFamily: font,
        boxShadow: `0 10px 15px -3px rgba(0,0,0,${0.1 * pDialog}), 0 4px 6px -2px rgba(0,0,0,${0.05 * pDialog}), 0 0 0 1px rgba(0,0,0,${0.08 * (1 - pDialog)})`,
        overflow: "hidden",
      }}
    >
      <div className="relative flex items-center justify-between" style={{ padding: `${lerp(12, 15, pVars)}px ${lerp(20, 20, pVars)}px` }}>
        <span style={{ font: `${Math.round(lerp(700, 600, pHeader))} ${lerp(16, 20.6, pHeader)}px/1.4 ${font}`, color: mix("#1f1f1f", "#272727", pHeader) }}>
          {ANNOUNCEMENT.title.slice(0, typedTitle)}
          {typedTitle >= ANNOUNCEMENT.title.length ? " ✨" : ""}
        </span>
        <Cancel style={{ fontSize: 20, color: "#383838", opacity: pHeader }} />
        <span className="absolute bottom-0" style={{ left: dividerInset, right: dividerInset, borderBottom: `1px solid ${mix("#e3e3e3", "#ccd2dc", pHeader)}` }} />
      </div>
      <div style={{ minHeight: lerp(262, 0, pBody), padding: lerp(16, 20, pVars), font: `400 ${lerp(14, 16, pBody)}px/1.45 ${font}`, color: mix("#4a4a4a", "#383838", pBody) }}>
        <div className="flex items-center" style={{ gap: 8, opacity: seg(typedBody, 1, 8) }}>
          <span style={{ padding: "3px 8px", borderRadius: lerp(2, 5, pVars), background: mix("#eef0ff", "#ecf5fd", pBtn), color: mix(PF_BLUE, "#003870", pBtn), font: `600 12px/1.2 ${font}` }}>
            {ANNOUNCEMENT.badge}
          </span>
          <span style={{ font: `600 15px/1.3 ${font}`, color: "#272727" }}>{ANNOUNCEMENT.heading}</span>
        </div>
        <p style={{ margin: "10px 0 0" }}>{ANNOUNCEMENT.body.slice(0, typedBody)}</p>
        <div style={{ marginTop: 12, opacity: image, transform: `scale(${0.92 + 0.08 * image})`, transformOrigin: "top center" }}>
          <div style={{ height: 150, overflow: "hidden", borderRadius: 8 }}>
            <div style={{ transform: "scale(0.56)", transformOrigin: "top left", width: "178%" }}>
              <NavIllustration t={t} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-between" style={{ padding: `${lerp(12, 15, pVars)}px 20px` }}>
        <span className="absolute top-0" style={{ left: dividerInset, right: dividerInset, borderTop: `1px solid ${mix("#e3e3e3", "#ccd2dc", pHeader)}` }} />
        <span style={{ font: `400 13px/1 ${font}`, color: PF_GREY, opacity: 1 - pBtn * 0.8 }}>1/3</span>
        <span
          style={{
            padding: `${lerp(8, 10, pVars)}px ${lerp(18, 15, pVars)}px`,
            borderRadius: lerp(3, 5, pVars),
            background: mix(PF_BLUE, tok("primary-300"), pBtn),
            color: "#fff",
            font: `${pBtn > 0.5 ? 600 : 500} 14px/1 ${font}`,
          }}
        >
          {ANNOUNCEMENT.cta}
        </span>
      </div>
    </div>
  )
}

function Cursor({ x, y, press = false }: { x: number; y: number; press?: boolean }) {
  return (
    <svg
      className="absolute left-0 top-0"
      width={28}
      height={32}
      viewBox="0 0 16 20"
      style={{ transform: `translate3d(${x - 3}px, ${y - 2}px, 0) scale(${press ? 0.84 : 1})`, transformOrigin: "3px 2px", filter: "drop-shadow(0 4px 8px rgba(22,38,63,0.3))" }}
    >
      <path d="M1.5 1.5v14.2l3.9-3.5 2.6 6 2.4-1-2.6-5.9h5.3z" fill={NAVY} stroke="#fff" strokeWidth={1.2} strokeLinejoin="round" />
    </svg>
  )
}

function pathAt(path: Array<[number, number, number]>, t: number): [number, number] {
  for (let i = 1; i < path.length; i++) {
    const [t1, x1, y1] = path[i]
    if (t <= t1) {
      const [t0, x0, y0] = path[i - 1]
      const p = inOut3(seg(t, t0, t1))
      return [lerp(x0, x1, p), lerp(y0, y1, p)]
    }
  }
  const last = path[path.length - 1]
  return [last[1], last[2]]
}

function Ripple({ t, at, x, y }: { t: number; at: number; x: number; y: number }) {
  const p = seg(t, at, at + 0.5)
  if (p <= 0 || p >= 1) return null
  return (
    <div
      className="absolute rounded-full"
      style={{ left: x - 26, top: y - 26, width: 52, height: 52, border: `2px solid ${tok("brand-blue")}`, opacity: (1 - p) * 0.8, transform: `scale(${0.2 + out3(p)})` }}
    />
  )
}

/* ------------------------------------------------------------------ */
/* 2 — The problem: the legacy Welcome page                            */
/* ------------------------------------------------------------------ */

const PROBLEM_SCALE = 0.74
const PROBLEM_FRAME = { x: (W - APP_W * PROBLEM_SCALE) / 2, y: 72 }

const ISSUES: Array<{ n: number; at: number; label: string; rect: { x: number; y: number; w: number; h: number }; labelAt: [number, number] }> = [
  { n: 1, at: 1.4, label: "Outdated videos", rect: VIDEO, labelAt: [VIDEO.x + 24, VIDEO.y + 24] },
  { n: 2, at: 2.8, label: "Broken links", rect: GET_STARTED, labelAt: [GET_STARTED.x + 110, GET_STARTED.y + 190] },
  { n: 3, at: 4.2, label: "Resources that pull users out of the product", rect: QUICK_LINKS, labelAt: [QUICK_LINKS.x - 360, QUICK_LINKS.y + 120] },
]

function IssueMark({ t, issue }: { t: number; issue: (typeof ISSUES)[number] }) {
  const p = outExpo(seg(t, issue.at, issue.at + 0.6))
  const { rect } = issue
  return (
    <div style={{ opacity: seg(t, issue.at, issue.at + 0.2) }}>
      <div
        className="absolute"
        style={{
          left: rect.x - 8,
          top: rect.y - 8,
          width: rect.w + 16,
          height: rect.h + 16,
          borderRadius: 12,
          border: `3px dashed ${PINK}`,
          background: `color-mix(in srgb, ${PINK} ${Math.round(8 * p)}%, transparent)`,
          transform: `scale(${1.04 - 0.04 * p})`,
        }}
      />
      <div
        className="absolute flex items-center"
        style={{
          left: issue.labelAt[0],
          top: issue.labelAt[1],
          gap: 10,
          padding: "10px 18px 10px 10px",
          borderRadius: 999,
          background: "#fff",
          boxShadow: "0 16px 40px rgba(22,38,63,0.25)",
          font: `700 22px/1 ${BODY}`,
          color: NAVY,
          whiteSpace: "nowrap",
          transform: `translateY(${(1 - p) * 20}px) scale(${0.9 + 0.1 * p})`,
        }}
      >
        <span className="flex items-center justify-center" style={{ width: 34, height: 34, borderRadius: 999, background: PINK, color: "#fff", font: `700 18px/1 ${DISPLAY}` }}>
          {issue.n}
        </span>
        {issue.label}
      </div>
    </div>
  )
}

function SceneProblem({ t }: { t: number }) {
  const frameW = APP_W * PROBLEM_SCALE
  const enter = out3(seg(t, 0.1, 0.9))
  return (
    <>
      <Caption t={t}>The legacy Welcome page</Caption>
      <div className="absolute left-0 top-0" style={{ transform: `translate3d(${PROBLEM_FRAME.x}px, ${PROBLEM_FRAME.y + (1 - enter) * 40}px, 0)`, opacity: enter }}>
        <BrowserFrame width={frameW}>
          <div style={{ width: frameW, height: APP_H * PROBLEM_SCALE, overflow: "hidden" }}>
            <div className="relative" style={{ width: APP_W, height: APP_H, transform: `scale(${PROBLEM_SCALE})`, transformOrigin: "top left" }}>
              <WelcomePage />
              {ISSUES.map((issue) => (
                <IssueMark key={issue.n} t={t} issue={issue} />
              ))}
            </div>
          </div>
        </BrowserFrame>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 6 — Build and publish in Product Fruits                             */
/* ------------------------------------------------------------------ */

const EDITOR = { x: 70, y: 118, w: 1140, h: 560 }
const SAVE_AT = 7.0
const PUBLISH_AT = 8.2
const EDITOR_CURSOR: Array<[number, number, number]> = [
  [0, 1180, 760],
  [5.8, 1180, 760],
  [6.8, 1066, 147],
  [7.4, 1066, 147],
  [8.0, 1151, 147],
  [9.6, 1151, 147],
  [10.6, 1060, 400],
]

function SceneBuild({ t }: { t: number }) {
  const typedTitle = Math.floor(clamp((t - 1.4) / 0.04, 0, ANNOUNCEMENT.title.length))
  const typedBody = Math.floor(clamp((t - 3.0) / 0.018, 0, ANNOUNCEMENT.body.length))
  const image = out3(seg(t, 5.2, 5.8))
  const saved = t >= SAVE_AT + 0.1
  const published = seg(t, PUBLISH_AT + 0.1, PUBLISH_AT + 0.4)
  const [cx, cy] = pathAt(EDITOR_CURSOR, t)
  const press = [SAVE_AT, PUBLISH_AT].some((c) => t >= c && t < c + 0.16)
  const enter = out3(seg(t, 0.1, 0.9))
  const field = (label: string, value: string, at: number) => (
    <div style={{ marginTop: 14, opacity: seg(t, at, at + 0.4) }}>
      <div style={{ font: `600 11px/1 ${BODY}`, letterSpacing: "0.08em", textTransform: "uppercase", color: ink(0.5) }}>{label}</div>
      <div style={{ marginTop: 6, padding: "9px 12px", borderRadius: 8, border: `1px solid ${ink(0.14)}`, font: `600 13px/1 ${BODY}`, color: NAVY, background: "#fff" }}>{value}</div>
    </div>
  )

  return (
    <>
      <Caption t={t}>In Product Fruits: write the announcement, target it, then publish</Caption>
      <div
        className="absolute overflow-hidden"
        style={{
          left: EDITOR.x,
          top: EDITOR.y,
          width: EDITOR.w,
          height: EDITOR.h,
          borderRadius: 18,
          background: "#fff",
          boxShadow: "0 40px 90px rgba(22,38,63,0.2)",
          opacity: enter,
          transform: `translateY(${(1 - enter) * 40}px)`,
        }}
      >
        <div className="flex items-center" style={{ height: 58, padding: "0 18px", borderBottom: `1px solid ${ink(0.1)}`, gap: 12 }}>
          <span style={{ font: `700 15px/1 ${BODY}`, color: NAVY }}>Product Fruits</span>
          <span style={{ font: `400 14px/1 ${BODY}`, color: ink(0.45) }}>Tours ›</span>
          <span style={{ font: `600 14px/1 ${BODY}`, color: NAVY }}>{ANNOUNCEMENT.title}</span>
          <span
            style={{
              marginLeft: 8,
              padding: "5px 10px",
              borderRadius: 999,
              font: `700 11px/1 ${BODY}`,
              background: mix(tok("bg-200"), tok("success-100"), published),
              color: mix(ink(0.6), tok("success-500"), published),
            }}
          >
            {published > 0.5 ? "Published" : saved ? "Saved draft" : "Draft"}
          </span>
          <span className="ml-auto" style={{ padding: "9px 16px", borderRadius: 8, border: `1px solid ${ink(0.2)}`, font: `600 13px/1 ${BODY}`, color: NAVY }}>
            {saved ? "Saved ✓" : "Save"}
          </span>
          <span style={{ padding: "9px 16px", borderRadius: 8, background: mix(PF_BLUE, tok("success-400"), published), font: `600 13px/1 ${BODY}`, color: "#fff" }}>
            {published > 0.5 ? "Published ✓" : "Publish"}
          </span>
        </div>

        <div className="absolute" style={{ left: 0, top: 58, bottom: 0, width: 210, borderRight: `1px solid ${ink(0.1)}`, padding: 16, background: tok("bg-100") }}>
          <div style={{ font: `600 11px/1 ${BODY}`, letterSpacing: "0.08em", textTransform: "uppercase", color: ink(0.5) }}>Cards · modal</div>
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex items-center"
              style={{
                marginTop: 10,
                gap: 10,
                padding: 10,
                borderRadius: 10,
                background: n === 1 ? "#fff" : "transparent",
                border: `1px solid ${n === 1 ? PF_BLUE : "transparent"}`,
                font: `600 13px/1.2 ${BODY}`,
                color: n === 1 ? NAVY : ink(0.55),
              }}
            >
              <span className="flex items-center justify-center" style={{ width: 22, height: 22, borderRadius: 6, background: n === 1 ? PF_BLUE : ink(0.12), color: "#fff", font: `700 11px/1 ${BODY}` }}>
                {n}
              </span>
              Card {n}
            </div>
          ))}
        </div>

        <div
          className="absolute flex items-center justify-center"
          style={{ left: 210, right: 280, top: 58, bottom: 0, background: `radial-gradient(${ink(0.12)} 1px, transparent 1.3px) 0 0 / 18px 18px`, backgroundColor: tok("bg-100") }}
        >
          <div style={{ transform: "scale(0.9)", opacity: seg(t, 0.9, 1.3) }}>
            <PfCard typedTitle={typedTitle} typedBody={typedBody} image={image} t={t - 5.2} />
          </div>
        </div>

        <div className="absolute" style={{ right: 0, top: 58, bottom: 0, width: 280, borderLeft: `1px solid ${ink(0.1)}`, padding: 18 }}>
          <div style={{ font: `600 15px/1 ${DISPLAY}`, color: NAVY }}>Targeting</div>
          {field("Audience", "New navigation rollout", 5.8)}
          {field("Show on", "Dashboard", 6.0)}
          {field("Trigger", "First visit after release", 6.2)}
          <div style={{ marginTop: 22, padding: 14, borderRadius: 12, background: mix(tok("bg-100"), tok("success-100"), published), opacity: seg(t, PUBLISH_AT + 0.3, PUBLISH_AT + 0.7) }}>
            <div style={{ font: `700 13px/1.3 ${BODY}`, color: tok("success-500") }}>Live for the audience above</div>
            <div style={{ marginTop: 4, font: `400 12.5px/1.4 ${BODY}`, color: ink(0.65) }}>No engineering release needed.</div>
          </div>
        </div>
      </div>
      <Ripple t={t} at={SAVE_AT} x={1066} y={147} />
      <Ripple t={t} at={PUBLISH_AT} x={1151} y={147} />
      {t > 5.8 ? <Cursor x={cx} y={cy} press={press} /> : null}
      <div className="absolute flex items-center" style={{ left: 380, top: 640, gap: 12, ...rise(t, 9.4, { dist: 12 }) }}>
        <Chip tone="navy">Product & Marketing publish</Chip>
        <ArrowRight style={{ fontSize: 22, color: NAVY }} />
        <Chip tone="navy">Customers see it</Chip>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 7 — Making it feel native: the custom CSS                           */
/* ------------------------------------------------------------------ */

const CSS_LINES = CUSTOM_CSS.split("\n")
const LINE_STEP = 0.2
const CSS_START = 0.9
const lineAt = (i: number) => CSS_START + i * LINE_STEP
/** The line index that closes each block of rules, used to switch the preview over as each block lands. */
const blockEnd = (selector: string) => {
  const start = CSS_LINES.findIndex((l) => l.startsWith(selector))
  return CSS_LINES.findIndex((l, i) => i > start && l.trim() === "}")
}
const BLOCKS = {
  vars: blockEnd(".productfruits--container-root"),
  dialog: blockEnd(".productfruits--card-dialog-style"),
  header: blockEnd(".productfruits--card-footer:before"),
  body: blockEnd(".productfruits--card-body"),
  btn: blockEnd(".productfruits--btn:hover"),
}

function highlight(line: string): ReactNode {
  const comment = line.indexOf("/*")
  const code = comment >= 0 ? line.slice(0, comment) : line
  const note = comment >= 0 ? line.slice(comment) : ""
  let body: ReactNode = code
  const decl = /^(\s*)([\w-]+)(:)(.*)$/.exec(code)
  if (/^\s*[.:]/.test(code) || /\{\s*$/.test(code)) body = <span style={{ color: "#c9b6ff" }}>{code}</span>
  else if (decl)
    body = (
      <>
        {decl[1]}
        <span style={{ color: "#8fd3ff" }}>{decl[2]}</span>
        {decl[3]}
        <span style={{ color: "#8fe3bd" }}>{decl[4]}</span>
      </>
    )
  return (
    <>
      {body}
      {note ? <span style={{ color: "rgba(255,255,255,0.4)" }}>{note}</span> : null}
    </>
  )
}

function SceneNative({ t }: { t: number }) {
  const land = (i: number) => out3(seg(t, lineAt(i) + 0.2, lineAt(i) + 0.8))
  const pVars = land(BLOCKS.vars)
  const pDialog = land(BLOCKS.dialog)
  const pHeader = land(BLOCKS.header)
  const pBody = land(BLOCKS.body)
  const pBtn = land(BLOCKS.btn)
  const done = lineAt(CSS_LINES.length - 1) + 0.8
  const lineH = 19
  const visible = 27
  const current = Math.max(0, Math.floor((t - CSS_START) / LINE_STEP))
  const scroll = Math.max(0, Math.min(current, CSS_LINES.length) - visible + 2) * lineH
  const matchP = seg(t, done + 0.4, done + 0.9)
  const flip = t > done + 1.2 ? Math.floor((t - done - 1.2) / 1.1) % 2 : 0
  const diffs: Array<[string, number]> = [
    ["10px radius · spacer paddings", pVars],
    ["Modal size sm · Open Sans · Modal shadow", pDialog],
    ["H4 title · full-bleed dividers", pHeader],
    ["body-md · no forced min-height", pBody],
    ["$color-primary-300 buttons", pBtn],
  ]

  return (
    <>
      <Caption t={t}>Custom CSS maps the Product Fruits card onto the Nimbus Modal, block by block</Caption>
      <div className="absolute overflow-hidden" style={{ left: 60, top: 100, width: 610, height: 580, borderRadius: 18, background: NAVY, boxShadow: "0 30px 70px rgba(22,38,63,0.3)", ...rise(t, 0.3, { dist: 20 }) }}>
        <span aria-hidden className="absolute inset-x-0 top-0" style={{ height: 2, background: "var(--gradient-the-way-of-water)" }} />
        <div className="flex items-center" style={{ height: 40, padding: "0 16px", gap: 10, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ font: `700 11px/1 ${BODY}`, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Branding → Custom CSS</span>
          <span className="ml-auto" style={{ font: `600 11px/1 ${BODY}`, color: tok("brand-aqua") }}>
            {t > done ? "Saved" : "Editing…"}
          </span>
        </div>
        <div className="relative overflow-hidden" style={{ height: 540, padding: "12px 0" }}>
          <div style={{ transform: `translateY(${-scroll}px)`, transition: "none" }}>
            {CSS_LINES.map((line, i) => {
              const p = seg(t, lineAt(i), lineAt(i) + LINE_STEP * 0.9)
              if (p <= 0) return <div key={i} style={{ height: lineH }} />
              const chars = Math.ceil(line.length * p)
              return (
                <div key={i} className="flex" style={{ height: lineH, font: `500 12.5px/${lineH}px ${MONO}`, color: "#fff", whiteSpace: "pre" }}>
                  <span style={{ width: 38, textAlign: "right", paddingRight: 12, color: "rgba(255,255,255,0.25)" }}>{i + 1}</span>
                  <span>{highlight(line.slice(0, chars))}</span>
                  {i === current && t < done ? <span style={{ width: 7, background: tok("brand-aqua"), opacity: Math.floor(t * 4) % 2 ? 1 : 0.2 }} /> : null}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute" style={{ left: 700, top: 100, width: 520, height: 580, borderRadius: 18, background: "#fff", boxShadow: SOFT_SHADOW, overflow: "hidden", ...rise(t, 0.5, { dist: 20 }) }}>
        <div className="flex items-center" style={{ height: 40, padding: "0 16px", borderBottom: `1px solid ${ink(0.08)}` }}>
          <span style={{ ...kickerStyle, fontSize: 11 }}>Live preview</span>
          <span className="ml-auto" style={{ font: `600 12px/1 ${BODY}`, color: ink(0.55) }}>
            {matchP > 0.5 ? (flip ? "Nimbus Modal" : "Product Fruits + custom CSS") : "Product Fruits card"}
          </span>
        </div>
        <div className="relative flex items-start justify-center" style={{ height: 540, paddingTop: 30, background: `radial-gradient(${ink(0.1)} 1px, transparent 1.3px) 0 0 / 18px 18px` }}>
          <div style={{ transform: "scale(0.86)", transformOrigin: "top center", opacity: matchP > 0.5 && flip ? 0 : 1 }}>
            <PfCard pVars={pVars} pDialog={pDialog} pHeader={pHeader} pBody={pBody} pBtn={pBtn} t={t} />
          </div>
          {matchP > 0.5 ? (
            <div className="absolute" style={{ top: 30, width: 420, transform: "scale(0.86)", transformOrigin: "top center", opacity: flip ? 1 : 0 }}>
              <NimbusAnnouncement t={t} compact />
            </div>
          ) : null}
        </div>
      </div>

      <div className="absolute flex flex-wrap" style={{ left: 720, top: 590, gap: 6, width: 480 }}>
        {diffs.map(([label, p]) => (
          <span key={label} style={{ opacity: seg(p, 0.05, 0.4) * (1 - matchP), transform: `translateY(${(1 - p) * 12}px)` }}>
            <Chip tone="navy" style={{ padding: "7px 11px", fontSize: 12 }}>
              <Check style={{ fontSize: 13, color: tok("brand-green") }} />
              {label}
            </Chip>
          </span>
        ))}
      </div>
      <div className="absolute" style={{ left: 760, top: 630, opacity: matchP }}>
        <Chip tone="pink">Can you spot the difference?</Chip>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 8 — Live in Console Connect                                         */
/* ------------------------------------------------------------------ */

// Nimbus Modal's enter/exit easing curves (Modal.module.scss), replayed here at quarter speed.
const MODAL_ENTER = cubicBezier(0.85, 0.1, 0.15, 0.9)
const MODAL_EXIT = cubicBezier(0.35, 0.5, 0.15, 0.9)
const SLOW = 4
const APP_SCALE = 0.72
const ENTER_AT = 1.4
const ESC_AT = 7.6

function Keycap({ t, at, label }: { t: number; at: number; label: string }) {
  const p = outBack(seg(t, at - 0.4, at))
  const down = t >= at && t < at + 0.18
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        left: W / 2 - 56,
        top: 600,
        width: 112,
        height: 52,
        borderRadius: 12,
        background: "#fff",
        border: `1px solid ${ink(0.12)}`,
        boxShadow: down ? `0 1px 0 ${ink(0.2)}` : `0 5px 0 ${ink(0.18)}, 0 16px 30px rgba(22,38,63,0.2)`,
        transform: `translateY(${down ? 4 : 0}px) scale(${p})`,
        opacity: seg(t, at - 0.4, at - 0.2) * (1 - seg(t, at + 1.2, at + 1.5)),
        font: `700 17px/1 ${BODY}`,
        color: NAVY,
      }}
    >
      {label}
    </div>
  )
}

function SceneLive({ t }: { t: number }) {
  const frameW = APP_W * APP_SCALE
  const enterP = MODAL_ENTER(seg(t, ENTER_AT, ENTER_AT + 0.15 * SLOW))
  const exitP = MODAL_EXIT(seg(t, ESC_AT + 0.05, ESC_AT + 0.05 + 0.15 * SLOW))
  const shown = enterP * (1 - exitP)
  const overlay = seg(t, ENTER_AT - 0.2, ENTER_AT + 0.1 * SLOW) * (1 - seg(t, ESC_AT, ESC_AT + 0.1 * SLOW))
  const modalY = (1 - enterP) * 5 + exitP * 5
  const modalS = 0.95 + 0.05 * enterP - 0.05 * exitP
  const facts: Array<[string, number]> = [
    ["Targeted to the rollout audience", 8.9],
    ["Keyboard dismissible", 9.05],
    ["Sits above existing UI", 9.2],
    ["State persists on refresh", 9.35],
  ]
  const recap = seg(t, 8.6, 9.1)
  return (
    <>
      <Caption t={t} at={0.3}>Live in Console Connect · rendered by Product Fruits · styled as Nimbus Modal</Caption>
      <div className="absolute" style={{ left: W / 2 - frameW / 2, top: 92, ...rise(t, 0.1, { dist: 30 }) }}>
        <BrowserFrame width={frameW}>
          <div style={{ width: frameW, height: APP_H * APP_SCALE, overflow: "hidden" }}>
            <div className="relative" style={{ width: APP_W, height: APP_H, transform: `scale(${APP_SCALE})`, transformOrigin: "top left" }}>
              <WelcomePage />
              <div className="absolute inset-0" style={{ background: "rgba(55,56,59,0.5)", opacity: overlay }} />
              <span className="absolute" style={{ right: 16, top: 12, font: `400 30px/1 ${BODY}`, color: "#fff", opacity: overlay }}>
                ✕
              </span>
              {shown > 0.001 ? (
                <div
                  className="absolute"
                  style={{ left: APP_W / 2 - 240, top: 70, width: 480, opacity: shown, transform: `translateY(${modalY}%) scale(${modalS})`, transformOrigin: "center" }}
                >
                  <NimbusAnnouncement t={t - ENTER_AT - 0.8} />
                </div>
              ) : null}
              <div className="absolute flex items-center" style={{ left: APP_W / 2 - 70, top: 745, gap: 14, opacity: overlay }}>
                <span style={{ font: `700 18px/1 ${BODY}`, color: "#fff" }}>1 / 3</span>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{ width: 18, height: 18, borderRadius: 999, background: i === 0 ? "#fff" : "rgba(255,255,255,0.45)" }} />
                ))}
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>
      <div className="absolute" style={{ left: 1010, top: 260, opacity: seg(t, 3.0, 3.3) * (1 - seg(t, ESC_AT - 0.4, ESC_AT)) }}>
        <Chip tone="navy">
          <span style={{ width: 8, height: 8, borderRadius: 999, background: tok("brand-green") }} />
          Jitter micro-interaction
        </Chip>
      </div>
      <div className="absolute" style={{ left: 60, top: 260, opacity: seg(t, 2.0, 2.3) * (1 - seg(t, ESC_AT - 0.4, ESC_AT)) }}>
        <Chip>modal-enter · 150ms · shown at ¼ speed</Chip>
      </div>
      <Keycap t={t} at={ESC_AT} label="Esc" />
      <div
        className="absolute"
        style={{ left: W / 2 - frameW / 2, top: 124, width: frameW, height: APP_H * APP_SCALE, background: "rgba(248,249,252,0.72)", backdropFilter: "blur(6px)", opacity: recap }}
      />
      <div className="absolute grid" style={{ left: W / 2 - 310, top: 340, width: 620, gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {facts.map(([label, at]) => (
          <div key={label} className="flex justify-center" style={rise(t, at, { dist: 12 })}>
            <Chip>
              <CheckCircle style={{ fontSize: 16, color: tok("success-400") }} />
              {label}
            </Chip>
          </div>
        ))}
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

const SCENES: ReelScene[] = [
  {
    title: "The problem",
    dur: 7.5,
    caption:
      "The legacy Console Connect Welcome page, with the issues flagged in the case study marked on it: outdated videos, broken links, and resources that pull users out of the product.",
    render: (t) => <SceneProblem t={t} />,
  },
  {
    title: "Build & publish",
    dur: 11,
    caption:
      "In a recreated Product Fruits editor, the announcement card is written, targeted, saved and published — live for its audience without an engineering release.",
    render: (t) => <SceneBuild t={t} />,
  },
  {
    title: "Custom CSS",
    dur: 12.5,
    caption:
      "Custom CSS types out, using the CSS hooks Product Fruits documents with values taken from the Nimbus Modal and design tokens. With each block, the vendor-default card in the live preview takes on the Nimbus Modal's radius, spacing, type, dividers and button colour, until it can't be told apart from the real Nimbus Modal.",
    render: (t) => <SceneNative t={t} />,
  },
  {
    title: "In the app",
    dur: 11.5,
    caption:
      "In Console Connect, the announcement opens over the Welcome page as a Nimbus Modal — entering on the Modal's own easing curve, shown at quarter speed — with its animated navigation illustration. Pressing Escape dismisses it, and chips recap what the proof of concept checked: targeting, keyboard dismissal, stacking above existing UI and state on refresh.",
    render: (t) => <SceneLive t={t} />,
  },
]

export function ProductFruitsReel() {
  return <ReelPlayer scenes={SCENES} />
}

export function ProductFruitsReelExport() {
  return <ReelExportStage scenes={SCENES} />
}
