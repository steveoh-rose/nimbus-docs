"use client"

import { useMemo, type ComponentType, type CSSProperties, type ReactNode, type SVGProps } from "react"
import * as AppIcons from "@nimbus/assets/icons/app"
import * as BrandIcons from "@nimbus/assets/icons/brand"

import {
  CheckRing,
  GRADIENT_HEX,
  LegacyCloud,
  NAVY,
  NimbusLogo,
  Shape,
  Snake,
  Trail,
  type GradientName,
} from "@/components/brand/brand-art"
import {
  BODY,
  DISPLAY,
  Floaty,
  H,
  ReelExportStage,
  ReelPlayer,
  SOFT_SHADOW,
  TAGLINE,
  Title,
  ToggleArt,
  W,
  clamp,
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

export type ReelData = {
  steps: string[]
  palette: { family: string; steps: string[] }[]
  step500: { family: string; hex: string; ratio: number }[]
  button: { rest: string; hover: string; pressed: string; contrastOnRest: number }
  stats: { components: number; tokens: number; icons: number; appIcons: number; brandIcons: number }
  brandIconsAtLaunch: number
}

type Icon = ComponentType<SVGProps<SVGSVGElement>>
type BrandIcon = ComponentType<SVGProps<SVGSVGElement> & { gradient?: GradientName; contrastMode?: "light" | "dark" }>
const appIcon = (name: string) => (AppIcons as unknown as Record<string, Icon>)[name]
const brandIcon = (name: string) => (BrandIcons as unknown as Record<string, BrandIcon>)[name]

/* ------------------------------------------------------------------ */
/* Scene 1 — the wordmark                                              */
/* ------------------------------------------------------------------ */

function SceneIntro({ t }: { t: number }) {
  const logoW = 600
  const letter = (i: number) => outBack(seg(t, 0.55 + i * 0.1, 1.25 + i * 0.1))
  const gone = inOut3(seg(t, 6.1, 6.8))
  return (
    <>
      <Floaty t={t} at={0.1} leave={6.1} x={-80} y={70} from={[-280, -220]} rot={-16} bob={8}>
        <Shape name="triangle" size={260} gradient="blue-hour" />
      </Floaty>
      <Floaty t={t} at={0.25} leave={6.2} x={860} y={62} from={[480, -40]} bob={6} phase={1}>
        <ToggleArt width={450} on={seg(t, 2.4, 2.9)} />
      </Floaty>
      <Floaty t={t} at={0.4} leave={6.25} x={440} y={560} from={[0, 320]} bob={6} phase={2}>
        <Shape name="circle" size={330} gradient="luscious-green" />
      </Floaty>
      <Floaty t={t} at={0.55} leave={6.3} x={1120} y={540} from={[260, 160]} rot={90} bob={9} phase={3}>
        <Shape name="leaf" size={120} gradient="blue-hour" />
      </Floaty>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ opacity: 1 - gone, transform: `translateY(${-gone * 40}px) scale(${1 + gone * 0.04})` }}
      >
        <NimbusLogo width={logoW} letter={letter} />
        <div style={{ ...rise(t, 1.75), marginTop: 30, font: `500 27px/1 ${DISPLAY}`, color: TAGLINE, letterSpacing: "0.01em" }}>
          collaborate. accelerate.
        </div>
        <p style={{ ...rise(t, 2.1), marginTop: 18, font: `400 19px/1 ${BODY}`, color: ink(0.62) }}>
          The design system behind Console Connect
        </p>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 2 — brand gradients                                           */
/* ------------------------------------------------------------------ */

const GRADIENT_CELLS: Array<{ name: GradientName; shape: "circle" | "leaf" | "gem" | "flower"; x: number; y: number }> = [
  { name: "purple-rain", shape: "circle", x: 610, y: 118 },
  { name: "luscious-green", shape: "leaf", x: 900, y: 118 },
  { name: "blue-hour", shape: "gem", x: 610, y: 392 },
  { name: "the-way-of-water", shape: "flower", x: 900, y: 392 },
]

function SceneGradients({ t }: { t: number }) {
  return (
    <>
      <Title
        t={t}
        at={0.3}
        y={170}
        width={420}
        kicker="Brand gradients"
        lines={["Four brand", "gradients"]}
        body="Each one is a pair of brand color tokens — and every brand icon can switch between them."
      />
      <div className="absolute" style={{ left: 60, top: 470 }}>
        <Trail name="wave" width={430} progress={inOut3(seg(t, 1.6, 4.4))} />
      </div>
      {GRADIENT_CELLS.map((cell, i) => {
        const at = 0.7 + i * 0.16
        const p = outBack(seg(t, at, at + 0.8))
        const [a, b] = GRADIENT_HEX[cell.name]
        return (
          <div key={cell.name} className="absolute" style={{ left: cell.x, top: cell.y, width: 250 }}>
            <div
              style={{
                width: 150,
                height: 150,
                opacity: seg(t, at, at + 0.2),
                transform: `scale(${p}) rotate(${(1 - p) * -70 + Math.sin(t * 0.8 + i) * 5}deg)`,
              }}
            >
              <Shape name={cell.shape} size={150} gradient={cell.name} />
            </div>
            <div style={{ ...rise(t, at + 0.35, { dist: 12 }), marginTop: 14 }}>
              <div style={{ font: `600 19px/1.2 ${DISPLAY}`, color: NAVY }}>{cell.name}</div>
              <div className="flex items-center" style={{ marginTop: 8, gap: 8, font: `600 13px/1 ${BODY}`, color: ink(0.6) }}>
                <span style={{ width: 14, height: 14, borderRadius: 4, background: a }} />
                {a}
                <span style={{ color: ink(0.35) }}>→</span>
                <span style={{ width: 14, height: 14, borderRadius: 4, background: b }} />
                {b}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 3 — the palette                                               */
/* ------------------------------------------------------------------ */

function ScenePalette({ t, d }: { t: number; d: ReelData }) {
  const cell = 40
  const gap = 6
  const cols = d.palette.length
  const rows = d.steps.length
  const gw = cols * cell + (cols - 1) * gap
  const gh = rows * cell + (rows - 1) * gap
  const gx = 1184 - gw
  const gy = (H - gh) / 2 + 12
  const highlightRow = d.steps.indexOf("500")
  const hl = outExpo(seg(t, 2.2, 3.0)) * (1 - seg(t, 4.3, 4.6))
  const burst = seg(t, 5.25, 5.9)

  return (
    <>
      <Floaty t={t} at={0.2} leave={4.6} x={-60} y={560} from={[-200, 160]} rot={0} bob={7}>
        <Shape name="corner" size={170} gradient="the-way-of-water" />
      </Floaty>
      <Title
        t={t}
        at={0.45}
        leave={4.5}
        y={200}
        kicker="cc-design-tokens · palette"
        lines={[`${cols * rows} colors.`, "One scale"]}
        body={`${cols} families, ${rows} perceptual steps each — a step means the same thing in every hue.`}
      />

      {d.steps.map((step, r) => {
        const on = r === highlightRow
        return (
          <span
            key={step}
            className="absolute text-right"
            style={{
              left: gx - 56,
              top: gy + r * (cell + gap) + cell / 2 - 7,
              width: 42,
              font: `600 12px/14px ${BODY}`,
              color: on ? mix(ink(0.4), NAVY, hl) : ink(0.4),
              opacity: seg(t, 0.35 + r * 0.035, 0.75 + r * 0.035) * (1 - seg(t, 4.5, 4.9)),
            }}
          >
            {step}
          </span>
        )
      })}

      <div
        className="absolute"
        style={{
          left: gx - 8,
          top: gy + highlightRow * (cell + gap) - 6,
          width: gw + 16,
          height: cell + 12,
          borderRadius: 12,
          border: `2px solid ${NAVY}`,
          transformOrigin: "left center",
          transform: `scaleX(${hl})`,
          opacity: hl,
        }}
      />

      {d.palette.map((fam, c) =>
        fam.steps.map((hex, r) => {
          const at = 0.35 + (c + r) * 0.035
          const p = seg(t, at, at + 0.55)
          const s = outBack(p)
          const cx = gx + c * (cell + gap) + cell / 2
          const cy = gy + r * (cell + gap) + cell / 2
          const ip = inOut3(seg(t, 4.5 + (c + r) * 0.02, 5.1 + (c + r) * 0.02))
          const dim = r === highlightRow ? 1 : 1 - hl * 0.6
          return (
            <div
              key={`${c}-${r}`}
              className="absolute left-0 top-0"
              style={{
                width: cell,
                height: cell,
                borderRadius: 9,
                background: hex,
                boxShadow: "inset 0 0 0 1px rgba(22,38,63,0.06)",
                opacity: p > 0 ? dim : 0,
                transform: `translate3d(${lerp(cx, W / 2, ip) - cell / 2}px, ${lerp(cy, H / 2, ip) - cell / 2}px, 0) scale(${s * (1 - ip)}) rotate(${(1 - s) * -30 + ip * 90}deg)`,
              }}
            />
          )
        })
      )}

      <div
        className="absolute rounded-full"
        style={{
          left: W / 2 - 160,
          top: H / 2 - 160,
          width: 320,
          height: 320,
          border: `3px solid ${tok("brand-blue")}`,
          opacity: burst > 0 ? 1 - burst : 0,
          transform: `scale(${0.1 + outExpo(burst) * 1.6})`,
        }}
      />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 4 — a button assembled from tokens                            */
/* ------------------------------------------------------------------ */

type Chip = {
  label: string
  name: string
  value: string
  swatch?: string
  anchor: [number, number]
  target: [number, number]
  from: [number, number]
  at: number
}

function TokenChip({ chip, t, fade }: { chip: Chip; t: number; fade: number }) {
  const p = outExpo(seg(t, chip.at, chip.at + 0.7))
  return (
    <div
      className="absolute left-0 top-0 whitespace-nowrap"
      style={{
        padding: "11px 15px",
        borderRadius: 12,
        background: "#fff",
        boxShadow: SOFT_SHADOW,
        opacity: seg(t, chip.at, chip.at + 0.25) * fade,
        transform: `translate3d(${chip.anchor[0] + chip.from[0] * (1 - p)}px, ${chip.anchor[1] + chip.from[1] * (1 - p)}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div style={{ font: `700 10.5px/1 ${BODY}`, color: ink(0.45), letterSpacing: "0.1em", textTransform: "uppercase" }}>{chip.label}</div>
      <div className="flex items-center" style={{ marginTop: 8, gap: 8, font: `600 15px/1 ${BODY}` }}>
        {chip.swatch ? <span style={{ width: 14, height: 14, borderRadius: 4, background: chip.swatch }} /> : null}
        <span style={{ color: NAVY }}>{chip.name}</span>
        <span style={{ color: tok("primary-300") }}>{chip.value}</span>
      </div>
    </div>
  )
}

function SceneAnatomy({ t, d }: { t: number; d: ReelData }) {
  const S = 2.8
  const label = "Create port"
  const chips: Chip[] = [
    { label: "padding-inline", name: "$size-spacer-md", value: "15px", anchor: [252, 390], target: [470, 390], from: [-260, 0], at: 1.0 },
    { label: "padding-block", name: "$size-spacer-sm", value: "10px", anchor: [640, 240], target: [640, 340], from: [0, -220], at: 1.85 },
    { label: "font", name: "$font-body-bold-md", value: "600 1rem", anchor: [640, 580], target: [640, 410], from: [0, 220], at: 2.7 },
    { label: "background", name: "$color-primary-300", value: d.button.rest, swatch: tok("primary-300"), anchor: [1034, 300], target: [778, 362], from: [260, 0], at: 3.55 },
    { label: "border-radius", name: "$button-borderRadius-box", value: "5px", anchor: [1030, 486], target: [810, 440], from: [260, 60], at: 4.4 },
  ]

  const frame = out3(seg(t, 0.2, 0.9))
  const annot = 1 - seg(t, 5.3, 5.8)
  const padX = seg(t, 1.5, 1.8) * annot
  const padY = seg(t, 2.35, 2.65) * annot
  const typed = Math.floor(clamp((t - 3.2) / 0.06, 0, label.length))
  const caret = t > 3.0 && t < 4.1 && Math.floor(t * 4) % 2 === 0
  const fill = inOut3(seg(t, 4.05, 4.6))
  const radius = outBack(seg(t, 4.9, 5.4)) * 5 * S
  const settle = inOut3(seg(t, 5.5, 6.4))
  const hatch = `repeating-linear-gradient(45deg, color-mix(in oklab, ${tok("primary-300")} 30%, transparent) 0 2px, transparent 2px 7px)`
  const measure: CSSProperties = { font: `700 14px/1 ${BODY}`, color: tok("primary-300") }

  return (
    <>
      <Floaty t={t} at={0.3} x={1080} y={560} from={[260, 220]} bob={8}>
        <Shape name="circle" size={200} gradient="luscious-green" />
      </Floaty>
      <Floaty t={t} at={0.45} x={-30} y={580} from={[-200, 160]} bob={6} phase={2}>
        <Shape name="bowl" size={180} gradient="purple-rain" />
      </Floaty>
      <Title t={t} at={0.25} y={104} width={560} kicker="Anatomy" lines={["Built from tokens"]} />

      <svg className="absolute inset-0" width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ opacity: annot }}>
        {chips.map((c) => {
          const len = Math.hypot(c.target[0] - c.anchor[0], c.target[1] - c.anchor[1])
          const p = inOut3(seg(t, c.at + 0.45, c.at + 0.85))
          return (
            <g key={c.name}>
              <line
                x1={c.anchor[0]}
                y1={c.anchor[1]}
                x2={c.target[0]}
                y2={c.target[1]}
                stroke={tok("primary-300")}
                strokeOpacity={0.55}
                strokeWidth={1.5}
                strokeDasharray={len}
                strokeDashoffset={len * (1 - p)}
              />
              <circle cx={c.target[0]} cy={c.target[1]} r={4.5 * outBack(seg(t, c.at + 0.8, c.at + 1.1))} fill={tok("primary-300")} />
            </g>
          )
        })}
      </svg>

      <div
        className="absolute left-0 top-0"
        style={{
          transform: `translate3d(640px, ${lerp(390, 360, settle)}px, 0) translate(-50%, -50%) scale(${(0.9 + frame * 0.1) * lerp(1, 0.62, settle)})`,
          opacity: frame,
        }}
      >
        <div
          className="relative"
          style={{
            padding: `${10 * S}px ${15 * S}px`,
            font: `600 ${16 * S}px/1 ${BODY}`,
            color: mix(NAVY, "#fff", fill),
            borderRadius: radius,
            whiteSpace: "nowrap",
            boxShadow: fill > 0.5 ? `0 ${20 * fill}px ${50 * fill}px rgba(6,116,228,${0.25 * fill})` : undefined,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ borderRadius: radius, background: tok("primary-300"), clipPath: `inset(0 ${(1 - fill) * 100}% 0 0 round ${radius}px)` }}
          />
          <div className="absolute inset-0" style={{ borderRadius: radius, border: `1.5px dashed ${ink(0.4)}`, opacity: 1 - fill }} />
          <div className="absolute inset-y-0 left-0" style={{ width: 15 * S, background: hatch, opacity: padX }} />
          <div className="absolute inset-y-0 right-0" style={{ width: 15 * S, background: hatch, opacity: padX }} />
          <div className="absolute inset-x-0 top-0" style={{ height: 10 * S, background: hatch, opacity: padY }} />
          <div className="absolute inset-x-0 bottom-0" style={{ height: 10 * S, background: hatch, opacity: padY }} />
          <span className="absolute" style={{ ...measure, left: 15 * S * 0.5, top: "50%", transform: "translate(-50%,-50%)", opacity: padX }}>
            15
          </span>
          <span className="absolute" style={{ ...measure, left: "50%", top: 10 * S * 0.5, transform: "translate(-50%,-50%)", opacity: padY }}>
            10
          </span>
          <span className="relative">
            {label.slice(0, typed)}
            <span className="relative inline-block" style={{ width: 0 }}>
              <span className="absolute" style={{ left: 1, top: "-0.05em", width: 3, height: "1.05em", background: NAVY, opacity: caret ? 1 : 0 }} />
            </span>
            <span style={{ opacity: 0 }}>{label.slice(typed)}</span>
          </span>
        </div>
      </div>

      {chips.map((c) => (
        <TokenChip key={c.name} chip={c} t={t} fade={annot} />
      ))}

      <div className="absolute left-0 right-0 text-center" style={{ top: 470, ...rise(t, 6.0), font: `600 21px/1 ${BODY}` }}>
        <span style={{ color: tok("brand-purple") }}>&lt;Button</span> <span style={{ color: tok("primary-300") }}>variant</span>
        <span style={{ color: NAVY }}>=</span>
        <span style={{ color: tok("success-400") }}>&quot;primary&quot;</span>
        <span style={{ color: tok("brand-purple") }}>&gt;</span>
        <span style={{ color: NAVY }}>Create port</span>
        <span style={{ color: tok("brand-purple") }}>&lt;/Button&gt;</span>
        <p style={{ marginTop: 18, font: `400 18px/1.4 ${BODY}`, color: ink(0.62), ...rise(t, 6.25) }}>
          Five tokens, one component. Change a token and every button follows.
        </p>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* The form card shared by the interaction and accessibility scenes     */
/* ------------------------------------------------------------------ */

type Rect = { x: number; y: number; w: number; h: number; r: number }
const CARD: Rect = { x: 468, y: 160, w: 364, h: 312, r: 16 }
const INPUT: Rect = { x: 496, y: 214, w: 308, h: 44, r: 5 }
const CHECK: Rect = { x: 496, y: 284, w: 22, h: 22, r: 5 }
const SWITCH: Rect = { x: 496, y: 330, w: 44, h: 24, r: 12 }
const BTN: Rect = { x: 496, y: 396, w: 308, h: 48, r: 5 }
const PANEL_X = 860
const PANEL_W = 328

const box = (r: Rect): CSSProperties => ({ position: "absolute", left: r.x, top: r.y, width: r.w, height: r.h, borderRadius: r.r })

type FormState = {
  switchOn: number
  switchHover?: number
  checkOn: number
  checkHover?: number
  btnHover?: number
  btnPress?: number
  inputFocus?: number
}

function FormCard({ s, style }: { s: FormState; style?: CSSProperties }) {
  const { switchOn, switchHover = 0, checkOn, checkHover = 0, btnHover = 0, btnPress = 0, inputFocus = 0 } = s
  const track = mix(
    mix(tok("system-200"), tok("system-400"), switchHover),
    mix(tok("success-400"), tok("success-500"), switchHover),
    switchOn
  )
  const checkFill = clamp(checkOn * 2)
  const checkDraw = clamp(checkOn * 1.6 - 0.6)
  const label: CSSProperties = { position: "absolute", font: `400 16px/1 ${BODY}`, color: tok("text-500"), whiteSpace: "nowrap" }

  return (
    <div className="absolute inset-0" style={style} data-nimbus-canvas>
      <div style={{ ...box(CARD), background: tok("bg-default"), boxShadow: "0 36px 80px rgba(22,38,63,0.16), 0 2px 8px rgba(22,38,63,0.06)" }} />
      <span style={{ ...label, left: INPUT.x, top: INPUT.y - 26, font: `600 15px/1 ${BODY}` }}>Connection name</span>
      <div
        style={{
          ...box(INPUT),
          border: `1px solid ${mix(tok("system-100"), tok("primary-300"), inputFocus)}`,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          font: `400 16px/1 ${BODY}`,
          color: tok("text-500"),
        }}
      >
        my-cloud-router
      </div>

      <div
        style={{
          ...box(CHECK),
          border: `1px solid ${mix(mix(tok("system-200"), tok("system-400"), checkHover), tok("primary-300"), checkFill)}`,
          background: mix(tok("bg-default"), mix(tok("primary-300"), tok("primary-400"), checkHover), checkFill),
        }}
      >
        <svg viewBox="0 0 22 22" width={22} height={22} style={{ position: "absolute", left: -1, top: -1 }}>
          <path
            d="M5.5 11.5l3.6 3.6 7.4-8"
            fill="none"
            stroke="#fff"
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={18}
            strokeDashoffset={18 * (1 - checkDraw)}
          />
        </svg>
      </div>
      <span style={{ ...label, left: CHECK.x + 36, top: CHECK.y + 3 }}>Notify team</span>

      <div style={{ ...box(SWITCH), background: track }}>
        <div
          className="absolute rounded-full"
          style={{ top: 3, left: 3 + out3(switchOn) * 20, width: 18, height: 18, background: tok("bg-default"), boxShadow: "0 1px 3px rgba(0,0,0,0.25)" }}
        />
      </div>
      <span style={{ ...label, left: SWITCH.x + 58, top: SWITCH.y + 4 }}>Auto-renew</span>

      <div
        style={{
          ...box(BTN),
          background: mix(mix(tok("primary-300"), tok("primary-400"), btnHover), tok("primary-500"), btnPress),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          font: `600 16px/1 ${BODY}`,
          color: tok("text-100"),
        }}
      >
        Create port
      </div>
    </div>
  )
}

const panelStyle: CSSProperties = {
  position: "absolute",
  left: PANEL_X,
  top: CARD.y,
  width: PANEL_W,
  padding: "20px 22px",
  borderRadius: 16,
  background: "#fff",
  boxShadow: SOFT_SHADOW,
}

/* ------------------------------------------------------------------ */
/* Scene 5 — interaction states                                        */
/* ------------------------------------------------------------------ */

const CURSOR_PATH: Array<[number, number, number]> = [
  [0, 1080, 720],
  [0.9, 1080, 720],
  [1.8, 522, 346],
  [2.55, 522, 346],
  [3.1, 509, 298],
  [3.75, 509, 298],
  [4.4, 662, 424],
  [5.85, 662, 424],
  [6.7, 770, 600],
]

function cursorAt(t: number): [number, number] {
  for (let i = 1; i < CURSOR_PATH.length; i++) {
    const [t1, x1, y1] = CURSOR_PATH[i]
    if (t <= t1) {
      const [t0, x0, y0] = CURSOR_PATH[i - 1]
      const p = inOut3(seg(t, t0, t1))
      return [lerp(x0, x1, p), lerp(y0, y1, p)]
    }
  }
  const last = CURSOR_PATH[CURSOR_PATH.length - 1]
  return [last[1], last[2]]
}

const CLICKS = [2.15, 3.35, 5.0]

function Cursor({ t }: { t: number }) {
  const [x, y] = cursorAt(t)
  const press = CLICKS.some((c) => t >= c && t < c + 0.16)
  return (
    <>
      {CLICKS.map((c) => {
        const p = seg(t, c, c + 0.5)
        if (p <= 0 || p >= 1) return null
        const [cx, cy] = cursorAt(c)
        return (
          <div
            key={c}
            className="absolute rounded-full"
            style={{
              left: cx - 28,
              top: cy - 28,
              width: 56,
              height: 56,
              border: `2px solid ${tok("brand-blue")}`,
              opacity: (1 - p) * 0.8,
              transform: `scale(${0.2 + out3(p)})`,
            }}
          />
        )
      })}
      <svg
        className="absolute left-0 top-0"
        width={28}
        height={32}
        viewBox="0 0 16 20"
        style={{
          transform: `translate3d(${x - 3}px, ${y - 2}px, 0) scale(${press ? 0.84 : 1})`,
          transformOrigin: "3px 2px",
          filter: "drop-shadow(0 4px 8px rgba(22,38,63,0.3))",
        }}
      >
        <path d="M1.5 1.5v14.2l3.9-3.5 2.6 6 2.4-1-2.6-5.9h5.3z" fill={NAVY} stroke="#fff" strokeWidth={1.2} strokeLinejoin="round" />
      </svg>
    </>
  )
}

type InspectorRow = { k: string; v: string; hex?: string; at: number }

function Inspector({ t, title, rows, style }: { t: number; title: string; rows: InspectorRow[]; style?: CSSProperties }) {
  return (
    <div style={{ ...panelStyle, ...style }}>
      <div style={kickerStyle}>Inspector</div>
      <div style={{ marginTop: 12, font: `600 22px/1 ${DISPLAY}`, color: NAVY }}>&lt;{title}&gt;</div>
      <div style={{ marginTop: 16, display: "grid", gap: 6 }}>
        {rows.map((row) => {
          const flash = t >= row.at ? 1 - seg(t, row.at, row.at + 0.7) : 0
          return (
            <div
              key={row.k}
              className="flex items-center justify-between"
              style={{
                gap: 12,
                padding: "8px 10px",
                margin: "0 -10px",
                borderRadius: 8,
                background: `color-mix(in oklab, ${tok("primary-100")} ${Math.round(flash * 100)}%, transparent)`,
                font: `600 14px/1.2 ${BODY}`,
              }}
            >
              <span style={{ color: ink(0.5) }}>{row.k}</span>
              <span className="flex items-center" style={{ gap: 8, color: NAVY }}>
                {row.hex ? <span style={{ width: 12, height: 12, borderRadius: 3, background: row.hex, boxShadow: `0 0 0 1px ${ink(0.12)}` }} /> : null}
                {row.v}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SceneStates({ t, d }: { t: number; d: ReelData }) {
  const enter = out3(seg(t, 0.1, 0.9))
  const switchHover = seg(t, 1.75, 1.85) * (1 - seg(t, 2.55, 2.65))
  const switchOn = out3(seg(t, 2.15, 2.35))
  const checkHover = seg(t, 3.05, 3.15) * (1 - seg(t, 3.75, 3.85))
  const checkOn = seg(t, 3.35, 3.7)
  const btnHover = seg(t, 4.35, 4.45) * (1 - seg(t, 5.85, 5.95))
  const btnPress = seg(t, 5.0, 5.06) * (1 - seg(t, 5.25, 5.33))
  const pressed = t >= 5.0 && t < 5.25
  const hovered = t >= 4.35 && t < 5.85

  let title = "Switch"
  let rows: InspectorRow[] = [
    { k: "data-hovered", v: t >= 1.75 ? "true" : "false", at: 1.75 },
    { k: "data-selected", v: t >= 2.15 ? "true" : "false", at: 2.15 },
    {
      k: "track",
      v: t >= 2.15 ? "$color-success-500" : t >= 1.75 ? "$color-system-400" : "$color-system-200",
      hex: t >= 2.15 ? tok("success-500") : t >= 1.75 ? tok("system-400") : tok("system-200"),
      at: t >= 2.15 ? 2.15 : 1.75,
    },
  ]
  if (t >= 2.9 && t < 4.2) {
    title = "Checkbox"
    rows = [
      { k: "data-hovered", v: "true", at: 3.05 },
      { k: "data-selected", v: t >= 3.35 ? "true" : "false", at: 3.35 },
      { k: "background", v: t >= 3.35 ? "$color-primary-400" : "transparent", hex: t >= 3.35 ? tok("primary-400") : undefined, at: 3.35 },
    ]
  } else if (t >= 4.2) {
    title = "Button"
    rows = [
      { k: "variant", v: "primary", at: 99 },
      { k: "data-hover", v: hovered ? "true" : "false", at: t >= 5.85 ? 5.85 : 4.35 },
      { k: "data-pressed", v: pressed ? "true" : "false", at: t >= 5.25 ? 5.25 : 5.0 },
      {
        k: "background",
        v: pressed ? "$color-primary-500" : hovered ? "$color-primary-400" : "$color-primary-300",
        hex: pressed ? d.button.pressed : hovered ? d.button.hover : d.button.rest,
        at: t >= 5.85 ? 5.85 : t >= 5.25 ? 5.25 : t >= 5.0 ? 5.0 : 4.35,
      },
    ]
  }
  const toast = outExpo(seg(t, 5.4, 6.2))

  return (
    <>
      <Floaty t={t} at={0.4} x={40} y={560} from={[-300, 100]} bob={7}>
        <Snake size={240} gradient="luscious-green" />
      </Floaty>
      <Floaty t={t} at={0.6} x={1150} y={40} from={[200, -200]} rot={20} spin={6} bob={5} phase={1}>
        <Shape name="gem" size={110} gradient="blue-hour" />
      </Floaty>
      <Title
        t={t}
        at={0.3}
        leave={8.0}
        y={206}
        width={340}
        kicker="Interaction"
        lines={["Every state,", "tokenized"]}
        body="Hover, press and selection each resolve to a named token — never a one-off hex."
      />
      <FormCard
        s={{ switchOn, switchHover, checkOn, checkHover, btnHover, btnPress }}
        style={{ opacity: enter, transform: `translateY(${(1 - enter) * 40}px)` }}
      />
      <Inspector t={t} title={title} rows={rows} style={rise(t, 0.9)} />
      <div
        className="absolute flex items-start"
        data-nimbus-canvas
        style={{
          left: PANEL_X,
          top: 470,
          width: PANEL_W,
          gap: 12,
          padding: "16px 18px",
          borderRadius: 12,
          background: tok("bg-default"),
          boxShadow: SOFT_SHADOW,
          opacity: seg(t, 5.4, 5.7),
          transform: `translateX(${(1 - toast) * 60}px)`,
        }}
      >
        <AppIcons.CheckCircle style={{ fontSize: 22, color: tok("success-400"), flexShrink: 0 }} />
        <div>
          <div style={{ font: `600 15px/1.2 ${BODY}`, color: tok("text-500") }}>Port created</div>
          <div style={{ marginTop: 4, font: `400 14px/1.3 ${BODY}`, color: tok("text-300") }}>London · 10G · provisioning</div>
        </div>
      </div>
      <Cursor t={t} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 6 — keyboard + screen reader                                  */
/* ------------------------------------------------------------------ */

const ringFor = (r: Rect, width: number, offset: number) => {
  const o = width + offset
  return { x: r.x - o, y: r.y - o, w: r.w + o * 2, h: r.h + o * 2, r: r.r + o, bw: width }
}
type Ring = ReturnType<typeof ringFor>
const lerpRing = (a: Ring, b: Ring, p: number): Ring => ({
  x: lerp(a.x, b.x, p),
  y: lerp(a.y, b.y, p),
  w: lerp(a.w, b.w, p),
  h: lerp(a.h, b.h, p),
  r: lerp(a.r, b.r, p),
  bw: lerp(a.bw, b.bw, p),
})

// TextInput's focus style is a 1px outline hugging its border; Checkbox, Switch and Button use 2px at a 2px offset.
const FOCUS = [
  { at: 0.9, ring: ringFor(INPUT, 1, 0) },
  { at: 2.6, ring: ringFor(CHECK, 2, 2) },
  { at: 4.2, ring: ringFor(SWITCH, 2, 2) },
  { at: 6.9, ring: ringFor(BTN, 2, 2) },
]
const KEYS = [
  { at: 0.9, key: "Tab" },
  { at: 2.6, key: "Tab" },
  { at: 4.2, key: "Tab" },
  { at: 5.5, key: "Space" },
  { at: 6.9, key: "Tab" },
  { at: 8.2, key: "Enter" },
]
const SPEECH = [
  { at: 1.0, text: "Connection name, edit text, my-cloud-router" },
  { at: 2.7, text: "Notify team, checkbox, checked" },
  { at: 4.3, text: "Auto-renew, switch, on" },
  { at: 5.6, text: "off" },
  { at: 7.0, text: "Create port, button" },
]

function Keycap({ t }: { t: number }) {
  const past = KEYS.filter((k) => k.at <= t)
  const cur = past[past.length - 1]
  if (!cur) return null
  const pop = outBack(seg(t, cur.at, cur.at + 0.35))
  const down = t >= cur.at && t < cur.at + 0.18
  const width = cur.key === "Space" ? 200 : cur.key === "Enter" ? 124 : 108
  return (
    <div className="absolute" style={{ left: 650 - width / 2, top: 516, width, ...rise(t, 0.9, { dist: 16 }) }}>
      <div
        className="flex items-center justify-center"
        style={{
          height: 54,
          borderRadius: 12,
          background: "#fff",
          border: `1px solid ${ink(0.1)}`,
          boxShadow: down ? `0 1px 0 ${ink(0.2)}` : `0 5px 0 ${ink(0.16)}, 0 16px 30px rgba(22,38,63,0.12)`,
          transform: `translateY(${down ? 4 : 0}px) scale(${0.85 + pop * 0.15})`,
          font: `700 17px/1 ${BODY}`,
          color: NAVY,
        }}
      >
        {cur.key === "Tab" ? "⇥ Tab" : cur.key === "Enter" ? "↵ Enter" : cur.key}
      </div>
    </div>
  )
}

function ScreenReader({ t }: { t: number }) {
  const heard = SPEECH.filter((e) => e.at <= t)
  const newest = heard[heard.length - 1]
  const shift = newest ? outExpo(seg(t, newest.at, newest.at + 0.45)) : 0
  const rowH = 64
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        left: PANEL_X,
        top: CARD.y,
        width: PANEL_W,
        height: CARD.h,
        padding: "20px 22px",
        borderRadius: 16,
        background: NAVY,
        boxShadow: "0 30px 70px rgba(22,38,63,0.3)",
        ...rise(t, 0.6),
      }}
    >
      <div
        className="flex items-center"
        style={{ gap: 8, font: `700 11px/1 ${BODY}`, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}
      >
        <span className="rounded-full" style={{ width: 8, height: 8, background: tok("brand-green"), opacity: 0.5 + 0.5 * Math.abs(Math.sin(t * 3)) }} />
        Screen reader
      </div>
      <div
        className="absolute"
        style={{ left: 22, right: 22, bottom: 20, height: 236, maskImage: "linear-gradient(to bottom, transparent, #000 38%)" }}
      >
        {heard.slice(-4).map((e, i, arr) => {
          const k = arr.length - 1 - i
          const y = k === 0 ? (1 - shift) * 20 : -(k - 1 + shift) * rowH
          const chars = k === 0 ? Math.floor((t - e.at) * 48) : e.text.length
          return (
            <div
              key={e.at}
              className="absolute inset-x-0"
              style={{
                bottom: 0,
                height: rowH - 10,
                paddingLeft: 12,
                borderLeft: `2px solid ${k === 0 ? tok("brand-aqua") : "rgba(255,255,255,0.15)"}`,
                transform: `translateY(${y}px)`,
                opacity: k === 0 ? seg(t, e.at, e.at + 0.2) : Math.max(0, 0.55 - (k - 1 + shift) * 0.16),
                font: `400 17px/1.35 ${BODY}`,
                color: "#fff",
              }}
            >
              {e.text.slice(0, chars)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SceneA11y({ t }: { t: number }) {
  const past = FOCUS.filter((f) => f.at <= t)
  const cur = past[past.length - 1]
  const prev = past[past.length - 2] ?? cur
  const p = cur ? outExpo(seg(t, cur.at, cur.at + 0.55)) : 0
  const ring = cur ? lerpRing(prev.ring, cur.ring, p) : null
  const ping = cur ? seg(t, cur.at + 0.3, cur.at + 1.0) : 0
  const switchOn = 1 - out3(seg(t, 5.5, 5.7))
  const btnPress = seg(t, 8.2, 8.26) * (1 - seg(t, 8.45, 8.55))
  const inputFocus = seg(t, 0.9, 1.0) * (1 - seg(t, 2.6, 2.7))

  return (
    <>
      <Floaty t={t} at={0.4} x={1160} y={560} from={[220, 200]} rot={-20} bob={8}>
        <Shape name="tab" size={110} gradient="the-way-of-water" />
      </Floaty>
      <Title
        t={t}
        at={0.3}
        y={196}
        width={350}
        kicker="Accessibility"
        lines={["Keyboard", "first"]}
        body="Built on React Aria — focus, labels, roles and keyboard behaviour come with every component."
      />
      <div className="absolute" style={{ left: 96, top: 486, ...rise(t, 1.6), font: `600 13px/1.6 ${BODY}`, color: ink(0.5) }}>
        Focus ring · 2px · $color-primary-300 · 2px offset
      </div>
      <FormCard s={{ switchOn, checkOn: 1, btnPress, inputFocus }} />
      {ring ? (
        <>
          <div
            className="absolute"
            style={{
              left: ring.x,
              top: ring.y,
              width: ring.w,
              height: ring.h,
              borderRadius: ring.r,
              border: `${ring.bw}px solid ${tok("primary-300")}`,
              opacity: seg(t, 0.9, 1.05),
            }}
          />
          {ping > 0 && ping < 1 && cur ? (
            <div
              className="absolute"
              style={{
                left: cur.ring.x,
                top: cur.ring.y,
                width: cur.ring.w,
                height: cur.ring.h,
                borderRadius: cur.ring.r,
                border: `2px solid ${tok("brand-aqua")}`,
                opacity: (1 - ping) * 0.8,
                transform: `scale(${1 + out3(ping) * 0.18})`,
              }}
            />
          ) : null}
        </>
      ) : null}
      <Keycap t={t} />
      <div className="absolute" style={{ left: 740, top: 506, opacity: seg(t, 8.3, 8.5), transform: `scale(${outBack(seg(t, 8.3, 8.8))})` }}>
        <CheckRing size={72} progress={inOut3(seg(t, 8.35, 9.1))} check={out3(seg(t, 9.0, 9.4))} />
      </div>
      <ScreenReader t={t} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 7 — app icons                                                 */
/* ------------------------------------------------------------------ */

const APP_GRID = [
  "Activity", "Add", "AddCircle", "Antiddos", "Article", "Bookmark", "Calculator", "Calendar", "Categories", "Chat",
  "Check", "CheckCircle", "Cloud", "CloudDownload", "CloudRouter", "CloudSecurity", "CloudUpload", "Colocation", "Community", "Company",
  "Compute", "Connections", "ConsoleEdge", "Copy", "CreditCard", "Dashboard", "Datacenter", "Dcport", "Delete", "Discount",
  "EdgePort", "EdgeSd", "Edit", "EmailOutline", "Explore", "Favorite", "FilterOutline", "Firewall", "Grid", "Help",
  "History", "Home", "Info", "Inventory", "Invite", "Iot", "Key", "Language", "Link", "List",
  "Messages", "Notifications", "Partner", "People", "Pricing", "Refresh", "Search", "Share", "Speed", "Star",
]

const APP_GRID_ICONS = APP_GRID.flatMap((name) => {
  const Glyph = appIcon(name)
  return Glyph ? [{ name, Glyph }] : []
})

function SceneIcons({ t, d }: { t: number; d: ReelData }) {
  const cols = 10
  const tile = 56
  const gap = 10
  const gx = 534
  const gy = 168
  const colorWave = lerp(-3, 17, seg(t, 2.3, 4.3))
  const sizeWave = lerp(17, -3, seg(t, 4.2, 6.0))
  const chip = (at: number, active: number): CSSProperties => ({
    ...rise(t, at, { dist: 10 }),
    padding: "8px 12px",
    borderRadius: 999,
    background: mix("#fff", tok("primary-100"), active),
    boxShadow: SOFT_SHADOW,
    font: `600 14px/1 ${BODY}`,
    color: mix(NAVY, tok("primary-400"), active),
  })

  return (
    <>
      <Floaty t={t} at={0.3} x={-30} y={585} from={[-200, 200]} rot={-10} bob={7}>
        <Shape name="capsule" size={190} gradient="luscious-green" />
      </Floaty>
      <Title
        t={t}
        at={0.3}
        y={196}
        width={400}
        kicker="nimbus-assets · app icons"
        lines={[`${d.stats.appIcons} app`, "icons"]}
        body="Each takes its color from currentColor and its size from font-size — so they follow the text around them."
      />
      <div className="absolute flex" style={{ left: 96, top: 500, gap: 10 }}>
        <span style={chip(2.2, seg(t, 2.3, 2.5) * (1 - seg(t, 4.2, 4.4)))}>color: currentColor</span>
        <span style={chip(4.1, seg(t, 4.2, 4.4))}>font-size: 1em</span>
      </div>
      {APP_GRID_ICONS.map(({ name, Glyph }, i) => {
        const c = i % cols
        const r = Math.floor(i / cols)
        const at = 0.5 + (c + r) * 0.04
        const p = outBack(seg(t, at, at + 0.55))
        const tint = clamp(1 - Math.abs(c + r - colorWave) / 2.5)
        const grow = clamp(1 - Math.abs(c + r - sizeWave) / 2.5)
        return (
          <div
            key={name}
            className="absolute flex items-center justify-center"
            style={{
              left: gx + c * (tile + gap),
              top: gy + r * (tile + gap),
              width: tile,
              height: tile,
              borderRadius: 14,
              background: mix("#fff", tok("primary-100"), tint),
              boxShadow: "0 6px 16px rgba(22,38,63,0.08)",
              color: mix(NAVY, tok("primary-300"), tint),
              fontSize: 26 + grow * 8,
              opacity: seg(t, at, at + 0.2),
              transform: `scale(${p})`,
            }}
          >
            <Glyph />
          </div>
        )
      })}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 8 — brand icons, before and after                             */
/* ------------------------------------------------------------------ */

const GRAD_ORDER: GradientName[] = ["purple-rain", "luscious-green", "blue-hour", "the-way-of-water"]
const BRAND_GRID = [
  "Cloud", "CloudRouter", "Api", "Ai", "Globe", "Network", "Firewall", "Datacentre",
  "Connection", "Integration", "Idea", "Heart", "Iot", "Key", "Location", "MarketPlace",
  "Mobile", "OnDemand", "Graph", "Chat", "Community", "Design", "Efficiency", "ManagedSecurity",
]
const BRAND_GRID_ICONS = BRAND_GRID.flatMap((name) => {
  const Glyph = brandIcon(name)
  return Glyph ? [{ name, Glyph }] : []
})
const BrandCloud = brandIcon("Cloud")
const GRADIENT_SWITCHES = [1.8, 2.4, 3.0]
const DARK_AT = 3.7

function SceneBrand({ t, d }: { t: number; d: ReelData }) {
  const gi = GRADIENT_SWITCHES.filter((at) => t >= at).length
  const gradient = GRAD_ORDER[gi]
  const changedAt = gi > 0 ? GRADIENT_SWITCHES[gi - 1] : -1
  const pop = changedAt > 0 ? 1 + 0.08 * (1 - seg(t, changedAt, changedAt + 0.35)) : 1
  const dark = seg(t, DARK_AT, DARK_AT + 0.3)
  const exitA = inOut3(seg(t, 5.3, 5.9))
  const flashGradient = changedAt > 0 ? 1 - seg(t, changedAt, changedAt + 0.6) : 0
  const flashMode = t >= DARK_AT ? 1 - seg(t, DARK_AT, DARK_AT + 0.6) : 0

  const card = (at: number, from: number): CSSProperties => {
    const p = out3(seg(t, at, at + 0.7))
    return {
      position: "absolute",
      top: 150,
      width: 300,
      height: 330,
      borderRadius: 20,
      padding: 24,
      boxShadow: SOFT_SHADOW,
      opacity: seg(t, at, at + 0.3) * (1 - exitA),
      transform: `translate3d(${(1 - p) * from - exitA * 80}px, ${(1 - p) * 20}px, 0)`,
    }
  }
  const cardLabel: CSSProperties = { font: `700 11px/1 ${BODY}`, letterSpacing: "0.12em", textTransform: "uppercase" }
  const fact = (color: string): CSSProperties => ({ font: `400 14px/1.5 ${BODY}`, color })

  const cols = 8
  const tile = 112
  const gap = 14
  const gx = (W - (cols * tile + (cols - 1) * gap)) / 2
  const gy = 262

  return (
    <>
      <Floaty t={t} at={0.3} leave={5.3} x={60} y={500} from={[-200, 200]} bob={6}>
        <Trail name="hook" width={240} progress={inOut3(seg(t, 0.6, 2.6))} />
      </Floaty>
      <Title
        t={t}
        at={0.3}
        leave={5.2}
        y={180}
        width={400}
        kicker="nimbus-assets · brand icons"
        lines={["Brand icons,", "rebuilt"]}
        body="One React component per icon, with a gradient and a contrast mode you choose."
      />

      <div style={{ ...card(0.6, -40), left: 530, background: "#fff" }}>
        <div style={{ ...cardLabel, color: ink(0.45) }}>March 2024</div>
        <div className="flex justify-center" style={{ marginTop: 18 }}>
          <LegacyCloud size={140} />
        </div>
        <div style={{ marginTop: 18 }}>
          <div style={{ font: `600 16px/1.3 ${DISPLAY}`, color: NAVY }}>{d.brandIconsAtLaunch} icons</div>
          <div style={fact(ink(0.62))}>Six-stop gradient baked into each SVG</div>
          <div style={fact(ink(0.62))}>Outline fixed to #16263F</div>
        </div>
      </div>

      <svg className="absolute" width={60} height={40} style={{ left: 836, top: 296, opacity: seg(t, 1.1, 1.3) * (1 - exitA) }} viewBox="0 0 60 40">
        <path
          d="M6 20h44M38 8l12 12-12 12"
          fill="none"
          stroke={NAVY}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={80}
          strokeDashoffset={80 * (1 - out3(seg(t, 1.1, 1.6)))}
        />
      </svg>

      <div style={{ ...card(0.9, 40), left: 884, background: mix("#fff", NAVY, dark) }}>
        <div style={{ ...cardLabel, color: mix(ink(0.45), "rgba(255,255,255,0.6)", dark) }}>Today</div>
        <div className="flex justify-center" style={{ marginTop: 18, fontSize: 140, lineHeight: 0, transform: `scale(${pop})` }}>
          {BrandCloud ? <BrandCloud gradient={gradient} contrastMode={dark > 0.5 ? "dark" : "light"} /> : null}
        </div>
        <div style={{ marginTop: 18 }}>
          <div style={{ font: `600 16px/1.3 ${DISPLAY}`, color: mix(NAVY, "#fff", dark) }}>{d.stats.brandIcons} icons</div>
          <div style={fact(mix(ink(0.62), "rgba(255,255,255,0.7)", dark))}>4 gradient presets, one prop</div>
          <div style={fact(mix(ink(0.62), "rgba(255,255,255,0.7)", dark))}>Light &amp; dark outlines</div>
        </div>
      </div>

      <div
        className="absolute text-center"
        style={{ left: 530, width: 654, top: 512, ...rise(t, 1.4, { leave: 5.3 }), font: `600 18px/1 ${BODY}`, color: NAVY }}
      >
        <span style={{ color: tok("brand-purple") }}>&lt;Cloud</span>{" "}
        <span style={{ color: tok("primary-300") }}>gradient</span>=
        <span style={{ color: tok("success-400"), borderRadius: 6, padding: "2px 4px", background: mix("transparent", tok("primary-100"), flashGradient) }}>
          &quot;{gradient}&quot;
        </span>{" "}
        <span style={{ color: tok("primary-300") }}>contrastMode</span>=
        <span style={{ color: tok("success-400"), borderRadius: 6, padding: "2px 4px", background: mix("transparent", tok("primary-100"), flashMode) }}>
          &quot;{t >= DARK_AT ? "dark" : "light"}&quot;
        </span>{" "}
        <span style={{ color: tok("brand-purple") }}>/&gt;</span>
      </div>

      <Title
        t={t}
        at={5.7}
        y={104}
        x={0}
        width={W}
        size={44}
        align="center"
        lines={["One component. Eight looks"]}
        body="Four gradients × light and dark outlines, on every brand icon."
      />
      {BRAND_GRID_ICONS.map(({ name, Glyph }, i) => {
        const c = i % cols
        const r = Math.floor(i / cols)
        const at = 6.0 + (c + r) * 0.05
        const p = outBack(seg(t, at, at + 0.6))
        const wave = Math.max(0, Math.floor((t - 6.9) * 1.5 - (c + r) * 0.4 + 1))
        const g = GRAD_ORDER[(i + wave) % GRAD_ORDER.length]
        const dk = seg(t, 8.6 + c * 0.07, 8.9 + c * 0.07) * (1 - seg(t, 10.3 + c * 0.07, 10.6 + c * 0.07))
        return (
          <div
            key={name}
            className="absolute flex items-center justify-center"
            style={{
              left: gx + c * (tile + gap),
              top: gy + r * (tile + gap),
              width: tile,
              height: tile,
              borderRadius: 20,
              background: mix("#fff", NAVY, dk),
              boxShadow: "0 10px 24px rgba(22,38,63,0.1)",
              fontSize: 60,
              opacity: seg(t, at, at + 0.2),
              transform: `scale(${p})`,
            }}
          >
            <Glyph gradient={g} contrastMode={dk > 0.5 ? "dark" : "light"} />
          </div>
        )
      })}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 9 — contrast, measured                                        */
/* ------------------------------------------------------------------ */

function SceneContrast({ t, d }: { t: number; d: ReelData }) {
  const x0 = 560
  const x1 = 1100
  const base = 560
  const top = 150
  const max = Math.max(7, Math.ceil(Math.max(...d.step500.map((s) => s.ratio)) + 0.5))
  const yOf = (ratio: number) => base - (ratio / max) * (base - top)
  const slot = (x1 - x0) / d.step500.length
  const barW = 36
  const allPass = d.step500.every((s) => s.ratio >= 4.5)
  const stat = out3(seg(t, 1.2, 2.4))
  const primaryPasses = d.button.contrastOnRest >= 4.5

  return (
    <>
      <Title
        t={t}
        at={0.25}
        y={132}
        width={400}
        kicker="Color × accessibility"
        lines={["Contrast you", "can predict"]}
        body={
          allPass
            ? `Step 500 against white, in all ${d.step500.length} families — every one clears WCAG AA.`
            : `Step 500 against white, across all ${d.step500.length} families.`
        }
      />

      <div className="absolute" style={{ left: 96, top: 468, ...rise(t, 1.1) }}>
        <div style={{ font: `600 13px/1 ${BODY}`, color: ink(0.5) }}>White on $color-primary-300</div>
        <div className="flex items-center" style={{ marginTop: 12, gap: 18 }}>
          <span style={{ font: `600 60px/1 ${DISPLAY}`, color: NAVY, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>
            {(d.button.contrastOnRest * stat).toFixed(2)}
            <span style={{ color: ink(0.35) }}>:1</span>
          </span>
          {primaryPasses ? (
            <span
              className="flex items-center"
              style={{
                gap: 6,
                padding: "6px 10px",
                borderRadius: 999,
                background: tok("success-100"),
                color: tok("success-500"),
                font: `600 14px/1 ${BODY}`,
                opacity: seg(t, 2.4, 2.6),
                transform: `scale(${0.6 + 0.4 * outBack(seg(t, 2.4, 2.8))})`,
              }}
            >
              <AppIcons.Check style={{ fontSize: 16 }} /> AA
            </span>
          ) : null}
        </div>
      </div>

      {[
        { r: 4.5, label: "AA", value: "4.5:1" },
        { r: 3, label: "AA large", value: "3:1" },
      ].map((line, i) => {
        const p = inOut3(seg(t, 0.5 + i * 0.15, 1.3 + i * 0.15))
        return (
          <div key={line.r} className="absolute" style={{ left: x0 - 16, top: yOf(line.r), width: x1 - x0 + 32 }}>
            <div style={{ borderTop: `1.5px dashed ${ink(0.28)}`, transformOrigin: "left", transform: `scaleX(${p})` }} />
            <span
              className="absolute whitespace-nowrap"
              style={{ left: "100%", top: -13, marginLeft: 12, font: `600 12px/1.3 ${BODY}`, color: ink(0.55), opacity: seg(t, 1.1 + i * 0.15, 1.5 + i * 0.15) }}
            >
              {line.label}
              <br />
              <span style={{ color: NAVY }}>{line.value}</span>
            </span>
          </div>
        )
      })}

      <div className="absolute" style={{ left: x0 - 16, top: base, width: x1 - x0 + 32, height: 1.5, background: ink(0.3), opacity: seg(t, 0.4, 0.8) }} />

      {d.step500.map((s, i) => {
        const at = 0.9 + i * 0.09
        const p = outExpo(seg(t, at, at + 1.1))
        const h = (s.ratio / max) * (base - top) * p
        const cx = x0 + slot * i + slot / 2
        const tick = outBack(seg(t, at + 0.9, at + 1.25))
        return (
          <div key={s.family}>
            <div className="absolute" style={{ left: cx - barW / 2, top: base - h, width: barW, height: h, borderRadius: "8px 8px 0 0", background: s.hex }} />
            <div
              className="absolute text-center"
              style={{
                left: cx - 30,
                top: base - h - 24,
                width: 60,
                font: `600 13px/1 ${BODY}`,
                color: NAVY,
                opacity: seg(t, at, at + 0.2),
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {(s.ratio * p).toFixed(2)}
            </div>
            {s.ratio >= 4.5 ? (
              <AppIcons.Check
                className="absolute"
                style={{ left: cx - 9, top: base - h - 50, fontSize: 18, color: tok("success-400"), opacity: clamp(tick), transform: `scale(${tick})` }}
              />
            ) : null}
            <div
              className="absolute text-center"
              style={{ left: cx - slot / 2, top: base + 14, width: slot, font: `600 11.5px/1 ${BODY}`, color: ink(0.55), opacity: seg(t, at, at + 0.4) }}
            >
              {s.family}
            </div>
          </div>
        )
      })}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 10 — outro                                                    */
/* ------------------------------------------------------------------ */

function SceneOutro({ t, d }: { t: number; d: ReelData }) {
  const count = out3(seg(t, 2.6, 3.8))
  const stats: Array<[number, string]> = [
    [d.stats.components, "components"],
    [d.stats.tokens, "tokens"],
    [d.stats.icons, "icons"],
  ]
  return (
    <>
      <div className="absolute" style={{ left: 10, top: 430, opacity: seg(t, 0.2, 0.4) }}>
        <Trail name="zig" width={360} progress={inOut3(seg(t, 0.2, 2.4))} />
      </div>
      <div className="absolute" style={{ left: 830, top: 30, opacity: seg(t, 0.5, 0.7) }}>
        <Trail name="wave" width={430} progress={inOut3(seg(t, 0.5, 2.8))} />
      </div>
      <div className="absolute" style={{ left: 1010, top: 420, opacity: seg(t, 0.8, 1.0) }}>
        <Trail name="chevron" width={250} progress={inOut3(seg(t, 0.8, 2.8))} />
      </div>
      <Floaty t={t} at={0.3} x={-70} y={-40} from={[-240, -200]} rot={-16} bob={8}>
        <Shape name="triangle" size={220} gradient="blue-hour" />
      </Floaty>

      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingBottom: 20 }}>
        <NimbusLogo width={500} letter={(i) => outBack(seg(t, 1.0 + i * 0.09, 1.7 + i * 0.09))} />
        <div style={{ ...rise(t, 2.0), marginTop: 22, font: `500 24px/1 ${DISPLAY}`, color: TAGLINE }}>collaborate. accelerate.</div>
        <div className="flex" style={{ marginTop: 38, gap: 56 }}>
          {stats.map(([n, label], i) => (
            <div key={label} className="text-center" style={rise(t, 2.5 + i * 0.12, { dist: 18 })}>
              <div style={{ font: `600 44px/1 ${DISPLAY}`, color: NAVY, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                {Math.round(n * count)}
              </div>
              <div style={{ marginTop: 10, font: `600 13px/1 ${BODY}`, color: ink(0.5) }}>{label}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            ...rise(t, 3.6, { dist: 14 }),
            marginTop: 40,
            padding: "14px 24px",
            borderRadius: 999,
            background: NAVY,
            color: "#fff",
            font: `600 16px/1 ${BODY}`,
            boxShadow: "0 16px 36px rgba(22,38,63,0.25)",
          }}
        >
          Consistent by default. Themed by tokens.
        </div>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Player                                                              */
/* ------------------------------------------------------------------ */

type Scene = {
  title: string
  dur: number
  caption: (d: ReelData) => string
  render: (t: number, d: ReelData) => ReactNode
  hud?: (t: number) => number
}

const SCENES: Scene[] = [
  {
    title: "Nimbus",
    dur: 7.2,
    caption: () =>
      "Gradient brand shapes float in around the Nimbus wordmark, with the tagline collaborate, accelerate, and the line: the design system behind Console Connect.",
    render: (t) => <SceneIntro t={t} />,
    hud: (t) => seg(t, 6.2, 6.8),
  },
  {
    title: "Gradients",
    dur: 7.4,
    caption: () =>
      "The four brand gradients — purple-rain, luscious-green, blue-hour and the-way-of-water — each shown on a brand shape with its two color stops, while a motion trail draws itself.",
    render: (t) => <SceneGradients t={t} />,
  },
  {
    title: "Palette",
    dur: 6.2,
    caption: (d) =>
      `The palette builds in: ${d.palette.length} color families of ${d.steps.length} steps each, with step 500 highlighted.`,
    render: (t, d) => <ScenePalette t={t} d={d} />,
  },
  {
    title: "Anatomy",
    dur: 7.6,
    caption: () =>
      "A primary button is assembled from five tokens: 15px horizontal padding, 10px vertical padding, the bold body font, the primary 300 fill and a 5px radius.",
    render: (t, d) => <SceneAnatomy t={t} d={d} />,
  },
  {
    title: "Interaction",
    dur: 8.6,
    caption: () =>
      "A cursor turns on a switch, checks a checkbox, then hovers and presses the Create port button. An inspector shows each state attribute and the token it resolves to, and a Port created toast appears.",
    render: (t, d) => <SceneStates t={t} d={d} />,
  },
  {
    title: "Accessibility",
    dur: 10.2,
    caption: () =>
      "Using only the keyboard, focus moves from the text input to the checkbox, the switch and the button, while a screen reader announces each control's name, role and state.",
    render: (t) => <SceneA11y t={t} />,
  },
  {
    title: "App icons",
    dur: 6.8,
    caption: (d) =>
      `A grid of Nimbus app icons, from a set of ${d.stats.appIcons}. A wave recolors them to show they follow currentColor, then another resizes them to show they follow font-size.`,
    render: (t, d) => <SceneIcons t={t} d={d} />,
  },
  {
    title: "Brand icons",
    dur: 11.6,
    caption: (d) =>
      `Before and after for brand icons. In March 2024 there were ${d.brandIconsAtLaunch}, each with a six-stop gradient baked in and a fixed navy outline. Today there are ${d.stats.brandIcons}, and the Cloud icon cycles through four gradient presets and switches to a dark outline through its gradient and contrastMode props. A grid of brand icons then ripples through every gradient, in light and dark.`,
    render: (t, d) => <SceneBrand t={t} d={d} />,
  },
  {
    title: "Contrast",
    dur: 7.4,
    caption: (d) => {
      const pass = d.step500.filter((s) => s.ratio >= 4.5).length
      return `Bars chart the contrast of each family's step 500 against white: ${pass} of ${d.step500.length} clear the WCAG AA 4.5:1 threshold. White text on primary 300 measures ${d.button.contrastOnRest}:1.`
    },
    render: (t, d) => <SceneContrast t={t} d={d} />,
  },
  {
    title: "Outro",
    dur: 7.6,
    caption: (d) =>
      `Motion trails draw around the Nimbus wordmark with ${d.stats.components} components, ${d.stats.tokens} tokens and ${d.stats.icons} icons. Consistent by default. Themed by tokens.`,
    render: (t, d) => <SceneOutro t={t} d={d} />,
    hud: (t) => 1 - seg(t, 0.3, 0.8),
  },
]

function useScenes(data: ReelData): ReelScene[] {
  return useMemo(
    () =>
      SCENES.map((s) => ({
        title: s.title,
        dur: s.dur,
        hud: s.hud,
        caption: s.caption(data),
        render: (t: number) => s.render(t, data),
      })),
    [data]
  )
}

export function NimbusReel({ data }: { data: ReelData }) {
  return <ReelPlayer scenes={useScenes(data)} />
}

export function NimbusReelExport({ data }: { data: ReelData }) {
  return <ReelExportStage scenes={useScenes(data)} />
}
