"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react"
import { flushSync } from "react-dom"
import { Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LOGO_PURPLE, NAVY, NimbusLogo } from "@/components/brand/brand-art"

/* ------------------------------------------------------------------ */
/* Timing + style helpers shared by every reel                         */
/* ------------------------------------------------------------------ */

export const W = 1280
export const H = 720

export const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v))
export const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a))
export const lerp = (a: number, b: number, p: number) => a + (b - a) * p
export const out3 = (p: number) => 1 - (1 - p) ** 3
export const inOut3 = (p: number) => (p < 0.5 ? 4 * p ** 3 : 1 - (-2 * p + 2) ** 3 / 2)
export const outExpo = (p: number) => (p >= 1 ? 1 : 1 - 2 ** (-10 * p))
export const outBack = (p: number) => {
  const c = 1.70158
  return 1 + (c + 1) * (p - 1) ** 3 + c * (p - 1) ** 2
}
/** CSS cubic-bezier evaluated in JS, so reels can replay a component's real easing curve. */
export function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const bez = (a: number, b: number, t: number) => 3 * a * t * (1 - t) ** 2 + 3 * b * t ** 2 * (1 - t) + t ** 3
  return (x: number) => {
    if (x <= 0) return 0
    if (x >= 1) return 1
    let lo = 0
    let hi = 1
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2
      if (bez(x1, x2, mid) < x) lo = mid
      else hi = mid
    }
    return bez(y1, y2, (lo + hi) / 2)
  }
}

export const tok = (name: string) => `var(--color-${name})`
export const mix = (a: string, b: string, p: number) =>
  `color-mix(in oklab, ${a}, ${b} ${Math.round(clamp(p) * 1000) / 10}%)`
export const ink = (alpha: number) => `color-mix(in srgb, ${NAVY} ${Math.round(alpha * 100)}%, transparent)`

export const DISPLAY = "var(--font-family-accent)"
export const BODY = "var(--font-family-regular)"
export const MONO = "var(--font-geist-mono), ui-monospace, monospace"
export const TAGLINE = "#6E2DCC"
export const SOFT_SHADOW = "0 18px 44px rgba(22,38,63,0.12), 0 2px 6px rgba(22,38,63,0.06)"

export function rise(t: number, at: number, { leave, dist = 26, dur = 0.7 }: { leave?: number; dist?: number; dur?: number } = {}) {
  const pin = out3(seg(t, at, at + dur))
  const pout = leave === undefined ? 0 : inOut3(seg(t, leave, leave + 0.5))
  return {
    opacity: pin * (1 - pout),
    transform: `translate3d(0, ${(1 - pin) * dist - pout * dist * 0.6}px, 0)`,
  } satisfies CSSProperties
}

/** A line of text that slides up out of a clipping mask. */
export function Mask({ t, at, leave, inline, children }: { t: number; at: number; leave?: number; inline?: boolean; children: ReactNode }) {
  const pin = outExpo(seg(t, at, at + 0.9))
  const pout = leave === undefined ? 0 : inOut3(seg(t, leave, leave + 0.55))
  return (
    <span style={{ display: inline ? "inline-block" : "block", overflow: "hidden", paddingBottom: "0.12em", marginBottom: "-0.12em" }}>
      <span style={{ display: "inline-block", transform: `translate3d(0, ${(1 - pin) * 115 - pout * 115}%, 0)` }}>{children}</span>
    </span>
  )
}

export const kickerStyle: CSSProperties = {
  font: `700 12.5px/1 ${BODY}`,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  background: `linear-gradient(90deg, ${tok("brand-purple")}, ${tok("brand-blue")})`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  width: "fit-content",
}

/** The blinking gradient underscore that follows every title. */
export function TitleCursor({ t, at, size }: { t: number; at: number; size: number }) {
  const grow = outBack(seg(t, at, at + 0.45))
  const blink = t > at + 0.8 ? 0.2 + 0.8 * (0.5 + 0.5 * Math.cos((t - at - 0.8) * Math.PI * 2 * 0.85)) : 1
  return (
    <span
      style={{
        display: "inline-block",
        width: size * 0.66,
        height: size * 0.13,
        marginLeft: size * 0.14,
        borderRadius: size,
        background: `linear-gradient(90deg, ${tok("brand-aqua")}, ${tok("brand-purple")})`,
        transformOrigin: "left center",
        transform: `scaleX(${grow})`,
        opacity: blink,
      }}
    />
  )
}

export function Title({
  t,
  at,
  leave,
  kicker,
  lines,
  body,
  x = 96,
  y,
  width = 380,
  size = 56,
  align = "left",
  color = NAVY,
}: {
  t: number
  at: number
  leave?: number
  kicker?: string
  lines: string[]
  body?: ReactNode
  x?: number
  y: number
  width?: number
  size?: number
  align?: "left" | "center"
  color?: string
}) {
  const landed = at + 0.25 + lines.length * 0.1
  return (
    <div className="absolute" style={{ left: x, top: y, width, textAlign: align }}>
      {kicker ? (
        <div style={{ ...rise(t, at, { leave, dist: 12 }), ...kickerStyle, margin: align === "center" ? "0 auto" : undefined }}>{kicker}</div>
      ) : null}
      <h2
        style={{
          margin: kicker ? "18px 0 0" : 0,
          font: `600 ${size}px/1.08 ${DISPLAY}`,
          color,
          letterSpacing: "-0.025em",
          whiteSpace: "nowrap",
        }}
      >
        {lines.map((line, i) => (
          <Mask key={line} t={t} at={at + 0.1 + i * 0.1} leave={leave}>
            {line}
            {i === lines.length - 1 ? <TitleCursor t={t} at={landed} size={size} /> : null}
          </Mask>
        ))}
      </h2>
      {body ? (
        <p
          style={{
            ...rise(t, at + 0.35 + lines.length * 0.08, { leave }),
            margin: "22px 0 0",
            font: `400 18px/1.55 ${BODY}`,
            color: color === NAVY ? ink(0.7) : "rgba(255,255,255,0.72)",
          }}
        >
          {body}
        </p>
      ) : null}
    </div>
  )
}

/** A floating brand graphic: flies in from `from`, bobs gently, and flies back out at `leave`. */
export function Floaty({
  t,
  at,
  leave,
  x,
  y,
  from = [0, 0],
  rot = 0,
  spin = 0,
  bob = 10,
  phase = 0,
  children,
}: {
  t: number
  at: number
  leave?: number
  x: number
  y: number
  from?: [number, number]
  rot?: number
  spin?: number
  bob?: number
  phase?: number
  children: ReactNode
}) {
  const pin = outExpo(seg(t, at, at + 1.2))
  const pout = leave === undefined ? 0 : inOut3(seg(t, leave, leave + 0.7))
  const away = 1 - pin + pout
  return (
    <div
      className="absolute left-0 top-0"
      style={{
        opacity: seg(t, at, at + 0.3) * (1 - pout),
        willChange: "transform",
        transform: `translate3d(${x + from[0] * away}px, ${y + from[1] * away + Math.sin(t * 0.9 + phase) * bob}px, 0) rotate(${rot + away * -35 + spin * t}deg)`,
      }}
    >
      {children}
    </div>
  )
}

export function ToggleArt({ on, width }: { on: number; width: number }) {
  const h = width * 0.21
  const knob = h * 1.12
  return (
    <div className="relative" style={{ width, height: h }}>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: h, background: `linear-gradient(90deg, ${tok("brand-blue")}, ${tok("brand-purple")})` }}
      >
        <div
          className="absolute"
          style={{
            left: "-6%",
            top: "-150%",
            width: "64%",
            height: "190%",
            background: `linear-gradient(90deg, ${tok("brand-aqua")}, ${tok("brand-blue")})`,
            transform: "rotate(-29deg)",
            opacity: 0.8,
          }}
        />
      </div>
      <div
        className="absolute rounded-full"
        style={{ top: (h - knob) / 2, left: lerp(-knob * 0.05, width - knob * 0.95, out3(on)), width: knob, height: knob, background: NAVY }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

export type ReelScene = {
  title: string
  dur: number
  caption: string
  render: (t: number) => ReactNode
  /** Opacity of the corner HUD (logo + chapter counter) at local time t. Defaults to fully visible. */
  hud?: (t: number) => number
}

const FADE = 0.7

function timeline(scenes: ReelScene[]) {
  const starts: number[] = []
  let acc = 0
  for (const s of scenes) {
    starts.push(acc)
    acc += s.dur
  }
  return { starts, total: acc }
}

function sceneAt(starts: number[], time: number) {
  for (let i = starts.length - 1; i >= 0; i--) if (time >= starts[i]) return i
  return 0
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`

const reducedQuery = "(prefers-reduced-motion: reduce)"
function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(reducedQuery)
  mq.addEventListener("change", cb)
  return () => mq.removeEventListener("change", cb)
}

const WAVES = [
  "M-120 400C80 310 250 540 520 480S930 290 1020 -80H-120Z",
  "M-120 740V610C150 560 360 700 650 640S1080 500 1400 600V760Z",
  "M1400 -60C1170 30 1090 230 1170 380S1320 540 1400 580Z",
]

// Everything here moves by transform only, so the browser composites it instead of repainting the stage.
function Backdrop({ time }: { time: number }) {
  return (
    <>
      <div className="absolute inset-0" style={{ background: tok("bg-200") }} />
      {WAVES.map((d, i) => (
        <svg
          key={d}
          className="absolute left-0 top-0"
          width={W}
          height={H}
          viewBox={`0 0 ${W} ${H}`}
          style={{
            overflow: "visible",
            willChange: "transform",
            transform: `translate3d(${Math.sin(time * 0.15 + i * 2) * 26}px, ${Math.cos(time * 0.12 + i) * 16}px, 0)`,
          }}
        >
          <path d={d} fill="#fff" fillOpacity={0.6 - i * 0.08} />
        </svg>
      ))}
      <svg
        className="absolute"
        width={220}
        height={150}
        style={{ left: 0, top: 96, willChange: "transform", transform: `translate3d(0, ${Math.sin(time * 0.3) * 6}px, 0)` }}
      >
        {Array.from({ length: 24 }, (_, i) => (
          <circle key={i} cx={14 + (i % 6) * 36} cy={14 + Math.floor(i / 6) * 36} r={7} fill="none" stroke={ink(0.09)} strokeWidth={1.4} />
        ))}
      </svg>
      <svg
        className="absolute"
        width={250}
        height={110}
        style={{ left: 1000, top: 610, willChange: "transform", transform: `translate3d(${Math.cos(time * 0.25) * 8}px, 0, 0)` }}
      >
        {Array.from({ length: 21 }, (_, i) => (
          <circle key={i} cx={14 + (i % 7) * 36} cy={14 + Math.floor(i / 7) * 36} r={7} fill="none" stroke={ink(0.08)} strokeWidth={1.4} />
        ))}
      </svg>
      <svg
        className="absolute"
        width={170}
        height={170}
        viewBox="0 0 170 170"
        style={{ left: 300, top: 290, willChange: "transform", transform: `translate3d(0, ${Math.sin(time * 0.2 + 1) * 10}px, 0) rotate(${time * 3}deg)` }}
      >
        <defs>
          <clipPath id="reel-hatch">
            <circle cx="85" cy="85" r="80" />
          </clipPath>
        </defs>
        <g clipPath="url(#reel-hatch)">
          {Array.from({ length: 30 }, (_, i) => (
            <line key={i} x1={-40 + i * 9} y1={0} x2={-40 + i * 9 + 170} y2={170} stroke={ink(0.06)} strokeWidth={1.5} />
          ))}
        </g>
      </svg>
      {[
        [690, 250, 12],
        [210, 390, 10],
        [1050, 330, 9],
        [560, 90, 7],
      ].map(([x, y, r], i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: x,
            top: y,
            width: r * 2,
            height: r * 2,
            border: `1.5px solid ${ink(0.1)}`,
            transform: `translate3d(0, ${Math.sin(time * 0.4 + i) * 8}px, 0)`,
          }}
        />
      ))}
    </>
  )
}

/** One frame of a reel at `time` seconds, drawn at W × H. */
export function ReelStage({ scenes, time }: { scenes: ReelScene[]; time: number }) {
  const { starts } = useMemo(() => timeline(scenes), [scenes])
  const idx = sceneAt(starts, time)
  const local = time - starts[idx]
  const scene = scenes[idx]
  const blending = idx > 0 && local < FADE
  const curOpacity = blending ? out3(seg(local, 0, FADE * 0.6)) : 1
  const prevOpacity = blending ? 1 - seg(local, FADE * 0.45, FADE) : 0
  const hud = scene.hud ? scene.hud(local) : 1
  const counter = rise(local, 0.2, { dist: 8 })

  return (
    <>
      <Backdrop time={time} />
      {blending ? (
        <div className="absolute inset-0" style={{ opacity: prevOpacity }}>
          {scenes[idx - 1].render(time - starts[idx - 1])}
        </div>
      ) : null}
      <div
        className="absolute inset-0"
        style={{ opacity: curOpacity, transform: blending ? `scale(${lerp(1.015, 1, curOpacity)})` : undefined }}
      >
        {scene.render(local)}
      </div>

      <div className="absolute" style={{ left: 40, top: 30, opacity: hud }}>
        <NimbusLogo width={92} color={LOGO_PURPLE} />
      </div>
      <div
        key={idx}
        className="absolute text-right"
        style={{ right: 40, top: 36, font: `600 13px/1 ${BODY}`, color: ink(0.45), ...counter, opacity: counter.opacity * hud }}
      >
        <span style={{ color: NAVY }}>{String(idx + 1).padStart(2, "0")}</span> / {String(scenes.length).padStart(2, "0")}
        <span style={{ marginLeft: 12 }}>{scene.title}</span>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Player                                                              */
/* ------------------------------------------------------------------ */

export function ReelPlayer({ scenes }: { scenes: ReelScene[] }) {
  const { starts, total } = useMemo(() => timeline(scenes), [scenes])
  const poster = total - 0.01
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(reducedQuery).matches, () => true)
  const [userPlaying, setUserPlaying] = useState<boolean | null>(null)
  const [seekTime, setSeekTime] = useState<number | null>(null)
  const [inView, setInView] = useState(true)
  const [scale, setScale] = useState<number | null>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number | null>(null)

  const playing = userPlaying ?? !reduced
  const time = seekTime ?? (playing ? 0 : poster)

  useEffect(() => {
    const el = frameRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / W))
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 })
    ro.observe(el)
    io.observe(el)
    return () => {
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!playing || !inView) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      // rAF timestamps can predate the performance.now() taken when the loop started.
      const dt = clamp((now - last) / 1000, 0, 0.1)
      last = now
      const next = (timeRef.current ?? 0) + dt
      timeRef.current = next >= total ? 0 : next
      setSeekTime(timeRef.current)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, inView, total])

  const seek = useCallback((to: number) => {
    timeRef.current = to
    setSeekTime(to)
  }, [])

  const toggle = useCallback(() => {
    if (!playing && time >= poster) seek(0)
    setUserPlaying(!playing)
  }, [playing, time, poster, seek])

  const idx = sceneAt(starts, time)
  const local = time - starts[idx]
  const scene = scenes[idx]

  return (
    <figure
      className="m-0"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") seek(starts[Math.min(scenes.length - 1, idx + 1)])
        else if (e.key === "ArrowLeft") seek(starts[local < 1 ? Math.max(0, idx - 1) : idx])
        else if (e.key === "k" || e.key === "K") toggle()
        else return
        e.preventDefault()
      }}
    >
      <div
        ref={frameRef}
        className="relative w-full cursor-pointer overflow-hidden rounded-xl border bg-[var(--color-bg-200)] shadow-sm"
        style={{ aspectRatio: `${W} / ${H}` }}
        onClick={toggle}
      >
        <div
          aria-hidden
          inert
          className="absolute left-0 top-0 origin-top-left select-none"
          style={{ width: W, height: H, transform: `scale(${scale ?? 1})`, visibility: scale === null ? "hidden" : "visible" }}
        >
          {scale !== null ? <ReelStage scenes={scenes} time={time} /> : null}
        </div>

        {!playing ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-[var(--color-brand-navy)] text-white shadow-lg">
              <Play className="ml-1 size-7" fill="currentColor" />
            </span>
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex items-start gap-4">
        <Button variant="outline" size="icon" onClick={toggle} aria-label={playing ? "Pause reel" : "Play reel"} className="shrink-0">
          {playing ? <Pause /> : <Play />}
        </Button>
        <ol className="flex min-w-0 flex-1 gap-1.5" aria-label="Chapters">
          {scenes.map((s, i) => {
            const fill = i < idx ? 1 : i > idx ? 0 : clamp(local / s.dur)
            return (
              <li key={s.title} className="min-w-0" style={{ flexGrow: s.dur, flexBasis: 0 }}>
                <button
                  type="button"
                  onClick={() => seek(starts[i])}
                  aria-label={s.title}
                  aria-current={i === idx ? "step" : undefined}
                  className="group w-full rounded-sm pt-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="block h-1 overflow-hidden rounded-full bg-muted">
                    <span className="block h-full rounded-full bg-foreground" style={{ width: `${fill * 100}%` }} />
                  </span>
                  <span
                    className={cn(
                      "mt-2 hidden truncate text-xs transition-colors lg:block",
                      i === idx ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {s.title}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
        <span className="shrink-0 pt-1.5 font-mono text-xs tabular-nums text-muted-foreground">
          {fmt(time)} / {fmt(total)}
        </span>
      </div>

      <p className="sr-only" aria-live="polite">
        {playing ? `${scene.title}. ${scene.caption}` : ""}
      </p>

      <figcaption className="mt-6">
        <details className="group rounded-lg border px-4 py-3 text-sm">
          <summary className="cursor-pointer select-none font-medium">Transcript</summary>
          <ol className="mt-3 space-y-2 text-muted-foreground">
            {scenes.map((s, i) => (
              <li key={s.title}>
                <span className="font-medium text-foreground">
                  {i + 1}. {s.title}
                </span>{" "}
                — {s.caption}
              </li>
            ))}
          </ol>
        </details>
      </figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------------ */
/* Export stage (scripts/export-reel.mjs steps through it frame by frame) */
/* ------------------------------------------------------------------ */

declare global {
  interface Window {
    __reel?: { duration: number; seek: (time: number) => Promise<void> }
  }
}

const noopSubscribe = () => () => {}

export function ReelExportStage({ scenes }: { scenes: ReelScene[] }) {
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false)
  const [time, setTime] = useState(0)
  const { total } = useMemo(() => timeline(scenes), [scenes])

  useEffect(() => {
    window.__reel = {
      duration: total,
      // Commit the frame synchronously, then wait two frames so it has been painted before the screenshot.
      seek: (t) =>
        new Promise((resolve) => {
          flushSync(() => setTime(t))
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
        }),
    }
    return () => {
      delete window.__reel
    }
  }, [total])

  return (
    <div id="reel-stage" aria-hidden inert className="relative overflow-hidden" style={{ width: W, height: H, background: "var(--color-bg-200)" }}>
      {isClient ? <ReelStage scenes={scenes} time={time} /> : null}
    </div>
  )
}
