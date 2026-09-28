"use client"

import { useId, useMemo, type CSSProperties } from "react"

import { GRADIENTS, LOGO_PURPLE, NAVY, type GradientName } from "./brand-constants"

// Plain values live in brand-constants so server components can read them; this module is client-only.
export { GRADIENTS, GRADIENT_HEX, LOGO_PURPLE, NAVY, type GradientName } from "./brand-constants"

const tok = (name: string) => `var(--color-${name})`

const safeId = (id: string) => id.replace(/[^a-zA-Z0-9_-]/g, "")

/* ------------------------------------------------------------------ */
/* Official Nimbus wordmark                                            */
/* ------------------------------------------------------------------ */

// Letter order left to right: n, i (stem), i (dot), m, b, u, s.
const LOGO_LETTERS = [
  "M87.0672 101.969C85.9105 101.969 84.9464 101.005 84.9464 99.8481V76.5842C84.9464 58.8471 76.2065 49.1431 60.3973 49.1431C43.7527 49.1431 34.2415 59.1684 34.2415 76.5842V99.8481C34.2415 101.005 33.2775 101.969 32.1208 101.969C30.964 101.969 30 101.005 30 99.8481V76.5842C30 56.7264 41.3748 44.9016 60.333 44.9016C68.6231 44.9016 75.628 47.4079 80.5764 52.2278C86.2317 57.6903 89.1237 65.9162 89.1237 76.5842V99.8481C89.1237 101.069 88.224 101.969 87.0672 101.969Z",
  "M100.241 101.905C99.0847 101.905 98.1207 100.941 98.1207 99.7839V57.0477C98.1207 55.891 99.0847 54.927 100.241 54.927C101.398 54.927 102.362 55.891 102.362 57.0477V99.7839C102.298 100.941 101.398 101.905 100.241 101.905Z",
  "M99.7916 35.2619C102.812 35.2619 105.318 37.7039 105.318 40.7886C105.318 43.8091 102.876 46.3154 99.7916 46.3154C96.7069 46.3154 94.2648 43.8734 94.2648 40.7886C94.3291 37.7682 96.7711 35.2619 99.7916 35.2619ZM99.7916 31.8558C94.8432 31.8558 90.8588 35.8403 90.8588 40.7886C90.8588 45.737 94.8432 49.7215 99.7916 49.7215C104.74 49.7215 108.724 45.737 108.724 40.7886C108.724 35.8403 104.74 31.8558 99.7916 31.8558Z",
  "M180.251 40.7887C173.568 40.7887 167.463 43.2308 163.028 47.665C161.679 49.0146 160.522 50.557 159.558 52.2278C158.144 34.6193 144.713 28 136.101 28C129.353 28 123.248 30.3778 118.878 34.7478C113.866 39.6962 111.231 46.9581 111.231 55.7624V99.6553C111.231 100.812 112.195 101.776 113.352 101.776C114.508 101.776 115.472 100.812 115.472 99.6553V55.7624C115.472 38.4109 126.14 32.1772 136.166 32.1772C141.564 32.1772 155.509 36.2902 155.509 55.2483V68.8724V75.6845V77.8053C155.509 78.962 156.473 79.926 157.63 79.926C158.787 79.926 159.751 78.962 159.751 77.8053V75.6845V68.8724C159.751 57.8832 165.149 45.0302 180.316 45.0302C186.999 45.0302 199.659 49.85 199.659 68.1013V99.6553C199.659 100.812 200.623 101.776 201.78 101.776C202.937 101.776 203.901 100.812 203.901 99.6553V68.1013C203.836 48.0506 189.762 40.7887 180.251 40.7887Z",
  "M243.231 40.7887C231.92 40.7887 221.895 46.7654 216.304 55.7624V31.3418C216.304 30.185 215.34 29.2211 214.183 29.2211C213.026 29.2211 212.062 30.185 212.062 31.3418V99.7839C212.062 100.941 213.026 101.905 214.183 101.905C215.34 101.905 216.304 100.941 216.304 99.7839V89.1159C221.895 98.113 231.856 104.09 243.231 104.09C260.711 104.09 274.913 89.8871 274.913 72.4071C274.913 54.927 260.711 40.7887 243.231 40.7887ZM243.231 99.9124C228.064 99.9124 215.79 87.5735 215.79 72.4713C215.79 57.3048 228.129 45.0302 243.231 45.0302C258.333 45.0302 270.672 57.3691 270.672 72.4713C270.672 87.5735 258.397 99.9124 243.231 99.9124Z",
  "M308.331 104.09C290.723 104.09 280.633 93.1645 280.633 74.1421V58.6543C280.633 57.4975 281.597 56.5336 282.754 56.5336C283.91 56.5336 284.874 57.4975 284.874 58.6543V74.1421C284.874 82.9464 287.124 89.63 291.558 94C295.542 97.9201 301.198 99.9123 308.395 99.9123C322.791 99.9123 330.374 90.9795 330.374 74.1421V58.6543C330.374 57.4975 331.338 56.5336 332.495 56.5336C333.651 56.5336 334.615 57.4975 334.615 58.6543V74.1421C334.487 100.169 318.099 104.09 308.331 104.09Z",
  "M362.699 104.09C362.249 104.09 361.864 104.09 361.414 104.09C355.437 103.897 346.89 101.776 340.656 96.3778C339.757 95.6066 339.692 94.3213 340.464 93.4216C341.235 92.5219 342.52 92.4577 343.42 93.2288C348.818 97.9202 356.337 99.7196 361.607 99.9124C371.054 100.234 376.066 97.2133 376.709 90.9153C377.352 84.1675 373.946 81.3398 360.064 77.0984C349.653 73.9494 340.399 70.3505 341.106 61.2892C341.813 52.8062 348.754 47.7936 359.743 47.7936C370.604 47.7936 376.902 52.6777 377.159 52.8705C378.058 53.5774 378.251 54.927 377.48 55.8267C376.773 56.7264 375.424 56.9192 374.524 56.2123C374.395 56.148 368.997 52.0351 359.679 52.0351C351.003 52.0351 345.733 55.5696 345.219 61.6748C344.834 66.4304 348.882 69.3223 361.221 73.1139C373.367 76.8413 381.85 80.3116 380.822 91.3652C380.051 99.5911 373.624 104.09 362.699 104.09Z",
]
export const LOGO_ASPECT = 356 / 80

/** `letter(i)` returns 0..1 reveal progress for each of the 7 glyph paths; omit it for the static logo. */
export function NimbusLogo({
  width,
  color = LOGO_PURPLE,
  letter,
  animated,
  title = "nimbus",
  className,
  style,
}: {
  width: number | string
  color?: string
  letter?: (i: number) => number
  /** Spring each glyph in once with CSS (respects prefers-reduced-motion). */
  animated?: boolean
  title?: string
  className?: string
  style?: CSSProperties
}) {
  const fixed = typeof width === "number"
  return (
    <svg
      role="img"
      aria-label={title}
      width={fixed ? width : undefined}
      height={fixed ? width / LOGO_ASPECT : undefined}
      viewBox="28 26 356 80"
      className={className}
      style={{ overflow: "visible", ...(fixed ? null : { width, height: "auto" }), ...style }}
    >
      {LOGO_LETTERS.map((d, i) => {
        if (animated) {
          return (
            <path
              key={i}
              d={d}
              fill={color}
              className="nb-rise"
              style={{ transformBox: "fill-box", transformOrigin: "50% 100%", "--nb-delay": `${0.15 + i * 0.08}s` } as CSSProperties}
            />
          )
        }
        const p = letter ? letter(i) : 1
        return (
          <path
            key={i}
            d={d}
            fill={color}
            style={{
              opacity: Math.min(1, p * 1.6),
              transformBox: "fill-box",
              transformOrigin: "50% 100%",
              transform: `translateY(${(1 - p) * 22}px) scale(${0.55 + 0.45 * p})`,
            }}
          />
        )
      })}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Gradient shapes (brand graphic library)                             */
/* ------------------------------------------------------------------ */

type ShapeDef = { w: number; h: number; d: string; g: [number, number, number, number] }

export const SHAPES = {
  arch: {
    w: 350,
    h: 500,
    d: "M175 58.3604C104.44 58.3604 47.24 115.56 47.24 186.12V441.64H302.76V186.12C302.76 115.56 245.56 58.3604 175 58.3604Z",
    g: [177.2, 58.4, 177.2, 441.6],
  },
  flower: {
    w: 350,
    h: 350,
    d: "M313.61 175C313.61 197.7 281.42 211.97 270.82 230.3C259.88 249.21 263.24 284.11 244.33 295.05C226 305.66 197.71 285.61 175.01 285.61C152.31 285.61 124.02 305.66 105.69 295.05C86.78 284.11 90.14 249.21 79.2 230.3C68.59 211.97 36.41 197.7 36.41 175C36.41 152.3 68.6 138.03 79.2 119.7C90.14 100.79 86.78 65.8902 105.69 54.9502C124.02 44.3402 152.31 64.3902 175.01 64.3902C197.71 64.3902 226 44.3402 244.33 54.9502C263.24 65.8902 259.88 100.79 270.82 119.7C281.43 138.03 313.61 152.3 313.61 175Z",
    g: [276.7, 92.9, 94.1, 278.6],
  },
  capsule: {
    w: 350,
    h: 350,
    d: "M277.03 242.14L160.02 296.22C108.09 320.22 46.31 297.5 22.31 245.57C-1.68999 193.64 21.03 131.86 72.96 107.86L189.97 53.7799C241.9 29.7799 303.68 52.4999 327.68 104.43C351.68 156.36 328.96 218.14 277.03 242.14ZM111.68 191.62C105.94 194.27 103.42 201.11 106.08 206.85C108.73 212.59 115.57 215.11 121.31 212.45L238.32 158.37C244.06 155.72 246.58 148.88 243.92 143.14C241.27 137.4 234.43 134.88 228.69 137.54L111.68 191.62Z",
    g: [337.2, 179.3, 12.7, 179.3],
  },
  circle: {
    w: 350,
    h: 350,
    d: "M175 316.04C252.894 316.04 316.04 252.894 316.04 175C316.04 97.1057 252.894 33.96 175 33.96C97.1058 33.96 33.96 97.1057 33.96 175C33.96 252.894 97.1058 316.04 175 316.04Z",
    g: [278.4, 81, 70.4, 269],
  },
  gem: {
    w: 350,
    h: 350,
    d: "M127.26 52.7804L52.78 127.26C49.186 130.855 46.601 135.332 45.2845 140.241C43.9681 145.151 43.9665 150.32 45.28 155.23L72.54 256.97C73.8565 261.881 76.4421 266.359 80.037 269.953C83.6319 273.548 88.1095 276.134 93.02 277.45L194.76 304.71C199.67 306.027 204.84 306.027 209.751 304.71C214.661 303.394 219.137 300.807 222.73 297.21L297.21 222.73C300.804 219.136 303.389 214.659 304.706 209.75C306.022 204.84 306.023 199.671 304.71 194.76L277.45 93.0204C276.134 88.1099 273.548 83.6323 269.953 80.0374C266.358 76.4425 261.881 73.8569 256.97 72.5404L155.23 45.2804C150.32 43.9638 145.15 43.9638 140.239 45.2804C135.329 46.5971 130.853 49.1838 127.26 52.7804Z",
    g: [82.2, 83, 267, 267.8],
  },
  leaf: {
    w: 350,
    h: 350,
    d: "M47.24 47.2402H180.1C247.8 47.2402 302.76 102.2 302.76 169.9V302.76H183.85C108.45 302.76 47.24 241.55 47.24 166.15V47.2402Z",
    g: [302.8, 179.2, 47.2, 179.2],
  },
  corner: {
    w: 350,
    h: 350,
    d: "M302.76 302.76H47.24L302.76 47.2402V302.76Z",
    g: [268.1, 87.6, 87.6, 268.1],
  },
  triangle: {
    w: 350,
    h: 350,
    d: "M149.94 68.9597L44.2 252.11C33.06 271.4 46.98 295.51 69.26 295.51H280.74C303.01 295.51 316.93 271.4 305.8 252.11L200.06 68.9597C188.92 49.6697 161.08 49.6697 149.94 68.9597Z",
    g: [309.7, 179, 40.3, 179],
  },
  bowl: {
    w: 350,
    h: 350,
    d: "M233.07 274.18C314.34 238.31 351.15 143.36 315.29 62.0898L20.98 191.97C56.85 273.24 151.8 310.05 233.07 274.19V274.18Z",
    g: [21, 178.9, 329, 178.9],
  },
  tab: {
    w: 350,
    h: 350,
    d: "M47.24 47.2402H183.3C249.23 47.2402 302.76 100.77 302.76 166.7V302.75H47.24V47.2402Z",
    g: [177.2, 47.2, 177.2, 302.8],
  },
} satisfies Record<string, ShapeDef>
export type ShapeName = keyof typeof SHAPES

export function Shape({
  name,
  size,
  gradient = "luscious-green",
  style,
}: {
  name: ShapeName
  size: number
  gradient?: GradientName
  style?: CSSProperties
}) {
  const id = safeId(useId())
  const s: ShapeDef = SHAPES[name]
  const [a, b] = GRADIENTS[gradient]
  return (
    <svg width={size} height={(size * s.h) / s.w} viewBox={`0 0 ${s.w} ${s.h}`} style={style}>
      <defs>
        <linearGradient id={id} x1={s.g[0]} y1={s.g[1]} x2={s.g[2]} y2={s.g[3]} gradientUnits="userSpaceOnUse">
          <stop stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <path d={s.d} fill={`url(#${id})`} />
    </svg>
  )
}

/** The zig-zag "snake" graphic with its navy dot. */
export function Snake({ size, gradient = "luscious-green", style }: { size: number; gradient?: GradientName; style?: CSSProperties }) {
  const id = safeId(useId())
  const [a, b] = GRADIENTS[gradient]
  return (
    <svg width={size} height={(size * 180) / 450} viewBox="0 0 450 180" style={style}>
      <defs>
        <linearGradient id={id} x1="59.45" y1="91.93" x2="404.83" y2="91.93" gradientUnits="userSpaceOnUse">
          <stop stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <path
        d="M404.83 148.2L374.33 118.72L351.32 140.96C344.91 147.16 336.61 150.26 328.31 150.26C320.01 150.26 311.72 147.16 305.3 140.96L282.3 118.72L259.3 140.96C246.47 153.36 226.12 153.36 213.29 140.96L190.29 118.72L167.29 140.96C154.46 153.36 134.11 153.36 121.28 140.96L59.45 81.1898L105.46 33.5898L144.28 71.1198L167.28 48.8798C180.11 36.4798 200.46 36.4798 213.29 48.8798L236.29 71.1198L259.29 48.8798C272.12 36.4798 292.47 36.4798 305.3 48.8798L328.3 71.1198L351.31 48.8798C364.14 36.4798 384.49 36.4798 397.32 48.8798L404.81 56.1198V148.19L404.83 148.2Z"
        fill={`url(#${id})`}
      />
      <circle cx="83.56" cy="58.13" r="33.39" fill={NAVY} />
    </svg>
  )
}

/** Gradient progress ring that resolves to a check mark. `progress` 0..1 sweeps the ring, `check` 0..1 draws the tick. */
export function CheckRing({ size, progress, check, style }: { size: number; progress: number; check: number; style?: CSSProperties }) {
  const id = safeId(useId())
  const [a, b] = GRADIENTS["luscious-green"]
  const r = 175
  const c = 2 * Math.PI * r
  return (
    <svg width={size} height={size} viewBox="0 0 402 403" style={style}>
      <defs>
        <linearGradient id={id} x1="0" y1="208" x2="402" y2="208" gradientUnits="userSpaceOnUse">
          <stop stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <circle
        cx="201"
        cy="201"
        r={r}
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="52"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - progress)}
        transform="rotate(-60 201 201)"
      />
      <path
        d="M144 198l44 44 86-86"
        fill="none"
        stroke={NAVY}
        strokeWidth="44"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="200"
        strokeDashoffset={200 * (1 - check)}
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Motion trails — a navy dot drawing a gradient ribbon of circles      */
/* ------------------------------------------------------------------ */

type TrailDef = { w: number; h: number; r: number; pts: Array<[number, number]>; from: string; to: string; startDot?: boolean }

// Waypoints traced from the brand motion-trail graphics.
export const TRAILS = {
  zig: {
    w: 500,
    h: 350,
    r: 33.3,
    pts: [[351, 241], [148, 241], [349, 109], [149, 109]],
    from: tok("brand-blue"),
    to: tok("brand-green"),
    startDot: true,
  },
  wave: {
    w: 600,
    h: 300,
    r: 33.3,
    pts: [[117, 193], [186, 125], [236, 166], [283, 124], [331, 165], [374, 124], [422, 165], [483, 107]],
    from: tok("brand-blue"),
    to: tok("brand-green"),
  },
  chevron: {
    w: 400,
    h: 380,
    r: 45.7,
    pts: [[141.6, 305], [304, 190], [141.6, 75]],
    from: tok("brand-blue"),
    to: tok("brand-green"),
  },
  hook: {
    w: 500,
    h: 400,
    r: 40.2,
    pts: [[390, 307], [151, 307], [252, 194], [110, 93]],
    from: tok("brand-green"),
    to: tok("brand-blue"),
  },
} satisfies Record<string, TrailDef>
export type TrailName = keyof typeof TRAILS

function sampleTrail(def: TrailDef, step = 6.25) {
  const segs = def.pts.slice(1).map((p, i) => {
    const a = def.pts[i]
    return { a, b: p, len: Math.hypot(p[0] - a[0], p[1] - a[1]) }
  })
  const total = segs.reduce((n, s) => n + s.len, 0)
  const count = Math.max(2, Math.round(total / step))
  const out: Array<{ x: number; y: number; color: string }> = []
  for (let i = 0; i < count; i++) {
    let d = (i / (count - 1)) * total
    let seg = segs[0]
    for (const s of segs) {
      seg = s
      if (d <= s.len) break
      d -= s.len
    }
    const k = seg.len ? Math.min(1, d / seg.len) : 0
    const pct = Math.round((i / (count - 1)) * 1000) / 10
    out.push({
      x: seg.a[0] + (seg.b[0] - seg.a[0]) * k,
      y: seg.a[1] + (seg.b[1] - seg.a[1]) * k,
      color: `color-mix(in srgb, ${def.from}, ${def.to} ${pct}%)`,
    })
  }
  return out
}

export function Trail({ name, width, progress, style }: { name: TrailName; width: number; progress: number; style?: CSSProperties }) {
  const def: TrailDef = TRAILS[name]
  const pts = useMemo(() => sampleTrail(def), [def])
  const shown = Math.round(Math.min(1, Math.max(0, progress)) * (pts.length - 1))
  const head = pts[shown]
  return (
    <svg width={width} height={(width * def.h) / def.w} viewBox={`0 0 ${def.w} ${def.h}`} style={{ overflow: "visible", ...style }}>
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={def.r} fill={p.color} opacity={i <= shown ? 1 : 0} />
      ))}
      {def.startDot ? <circle cx={pts[0].x} cy={pts[0].y} r={def.r} fill={NAVY} opacity={progress > 0 ? 1 : 0} /> : null}
      <circle cx={head.x} cy={head.y} r={def.r} fill={NAVY} opacity={progress > 0 ? 1 : 0} />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* The Cloud brand icon as first shipped (nimbus-assets, March 2024)    */
/* ------------------------------------------------------------------ */

export function LegacyCloud({ size, style }: { size: number; style?: CSSProperties }) {
  const id = safeId(useId())
  return (
    <svg width={size} height={size} viewBox="0 0 106 106" fill="none" style={style}>
      <path
        d="M79.0401 91.14H48.3301C47.2101 91.14 46.3101 90.23 46.3101 89.12C46.3101 88.01 47.2201 87.1 48.3301 87.1H79.0401C84.9101 87.1 90.4201 84.82 94.5501 80.68C98.7001 76.54 100.98 71.04 100.98 65.17C100.98 59.3 98.7001 53.8 94.5501 49.66C91.5647 46.6555 87.7651 44.5906 83.6201 43.72C82.5301 43.49 81.8301 42.42 82.0601 41.32C82.2901 40.22 83.3601 39.53 84.4601 39.76C89.3801 40.79 93.8601 43.23 97.4201 46.8C102.33 51.71 105.03 58.23 105.03 65.17C105.03 72.11 102.33 78.64 97.4201 83.54C92.5301 88.45 86.0001 91.15 79.0501 91.15L79.0401 91.14Z"
        fill={`url(#${id})`}
      />
      <path
        d="M38.2 91.14H21.32C10.1 91.14 0.97998 82.01 0.97998 70.8C0.97998 62.81 5.68998 55.52 12.98 52.24C13.2226 52.1242 13.4858 52.0581 13.7543 52.0455C14.0227 52.0328 14.291 52.0739 14.5434 52.1663C14.7958 52.2587 15.0272 52.4005 15.2241 52.5836C15.4209 52.7666 15.5792 52.987 15.6897 53.232C15.8002 53.477 15.8607 53.7416 15.8676 54.0103C15.8745 54.279 15.8277 54.5463 15.73 54.7967C15.6322 55.047 15.4854 55.2754 15.2983 55.4682C15.1111 55.6611 14.8873 55.8147 14.64 55.92C8.79998 58.55 5.01998 64.39 5.01998 70.79C5.01998 79.78 12.33 87.09 21.32 87.09H38.2C39.32 87.09 40.22 88 40.22 89.11C40.22 90.22 39.31 91.13 38.2 91.13V91.14Z"
        fill="#16263F"
      />
      <path
        d="M49.34 91.1401H29.46C28.34 91.1401 27.44 90.2301 27.44 89.1201C27.44 88.0101 28.35 87.1001 29.46 87.1001H49.34C58.45 87.1001 67.01 83.5501 73.44 77.1101C79.88 70.6601 83.43 62.1001 83.43 53.0001C83.43 49.6001 82.93 46.2301 81.93 42.9801C80.2919 37.6582 77.3773 32.8176 73.44 28.8801C67 22.4401 58.44 18.8901 49.34 18.8901C30.54 18.8901 15.24 34.1901 15.24 52.9901C15.24 54.1101 14.33 55.0201 13.22 55.0201C12.11 55.0201 11.2 54.1201 11.2 53.0001C11.19 31.9701 28.31 14.8501 49.34 14.8501C59.52 14.8501 69.1 18.8201 76.31 26.0201C80.71 30.4201 84 35.8801 85.81 41.7901C86.92 45.4301 87.48 49.1901 87.48 52.9901C87.48 63.1601 83.5099 72.7401 76.31 79.9501C69.12 87.1501 59.54 91.1201 49.34 91.1201V91.1401Z"
        fill="#16263F"
      />
      <defs>
        <linearGradient id={id} x1="46.3001" y1="65.42" x2="105.02" y2="65.42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7647FD" />
          <stop offset="0.08" stopColor="#8543EC" />
          <stop offset="0.35" stopColor="#B837B6" />
          <stop offset="0.58" stopColor="#DD2E8F" />
          <stop offset="0.77" stopColor="#F42877" />
          <stop offset="0.89" stopColor="#FD276F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
