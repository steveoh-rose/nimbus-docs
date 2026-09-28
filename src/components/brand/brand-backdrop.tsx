import { Children, Fragment, type CSSProperties, type ReactNode } from "react"

import { cn } from "@/lib/utils"

const WAVES = [
  "M-120 400C80 310 250 540 520 480S930 290 1020 -80H-120Z",
  "M-120 740V610C150 560 360 700 650 640S1080 500 1400 600V760Z",
  "M1400 -60C1170 30 1090 230 1170 380S1320 540 1400 580Z",
]

/**
 * The brand illustration ground: a cool tint with soft white waves, dot rings and a hatched
 * circle. Purely decorative and CSS-only; place it inside a `relative overflow-hidden` parent.
 */
export function BrandBackdrop({
  className,
  rings = true,
  hatch = true,
  tone = "light",
}: {
  className?: string
  rings?: boolean
  hatch?: boolean
  tone?: "light" | "navy"
}) {
  const navy = tone === "navy"
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0" style={{ background: navy ? "var(--color-brand-navy)" : "var(--color-bg-200)" }} />
      <svg viewBox="0 0 1280 720" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {WAVES.map((d, i) => (
          <path key={d} d={d} fill="#fff" fillOpacity={(navy ? 0.05 : 0.62) - i * (navy ? 0.012 : 0.08)} />
        ))}
      </svg>
      {rings ? (
        <>
          <div className={cn("dot-rings absolute top-[10%] left-0 h-[112px] w-[210px]", navy && "opacity-40 invert")} />
          <div className={cn("dot-rings absolute right-[2%] bottom-[5%] h-[80px] w-[240px]", navy && "opacity-40 invert")} />
        </>
      ) : null}
      {hatch ? <div className={cn("hatch-circle absolute top-[38%] left-[22%] size-40", navy && "opacity-40 invert")} /> : null}
    </div>
  )
}

/** Wraps a brand graphic in a slow CSS float. Honors prefers-reduced-motion via the .nb-float class. */
export function Floating({
  children,
  className,
  rotate = 0,
  duration = 9,
  delay = 0,
  bob = -14,
  sway = 5,
}: {
  children: ReactNode
  className?: string
  rotate?: number
  duration?: number
  delay?: number
  bob?: number
  sway?: number
}) {
  return (
    <div
      aria-hidden
      className={cn("nb-float pointer-events-none absolute", className)}
      style={
        {
          "--nb-rot": `${rotate}deg`,
          "--nb-duration": `${duration}s`,
          "--nb-delay": `${delay}s`,
          "--nb-bob": `${bob}px`,
          "--nb-sway": `${sway}deg`,
          transform: `rotate(${rotate}deg)`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}

/** The gradient pill with a navy knob that flips back and forth, like a Switch. */
export function ToggleArt({ width }: { width: number }) {
  const h = Math.round(width * 0.21)
  const knob = Math.round(h * 1.12)
  return (
    <div aria-hidden className="relative" style={{ width, height: h }}>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: h, background: "linear-gradient(90deg, var(--color-brand-blue), var(--color-brand-purple))" }}
      >
        <div
          className="absolute"
          style={{
            left: "-6%",
            top: "-150%",
            width: "64%",
            height: "190%",
            opacity: 0.8,
            transform: "rotate(-29deg)",
            background: "linear-gradient(90deg, var(--color-brand-aqua), var(--color-brand-blue))",
          }}
        />
      </div>
      <div
        className="nb-toggle-knob absolute rounded-full"
        style={
          {
            top: (h - knob) / 2,
            left: -knob * 0.05,
            width: knob,
            height: knob,
            background: "var(--color-brand-navy)",
            "--nb-travel": `${width - knob * 0.9}px`,
          } as CSSProperties
        }
      />
    </div>
  )
}

/** A heading followed by the blinking gradient underscore. */
export function CursorTitle({
  children,
  className,
  style,
  id,
  as: Tag = "h1",
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  id?: string
  as?: "h1" | "h2" | "h3"
}) {
  return (
    <Tag id={id} className={className} style={style}>
      {withCursor(children)}
    </Tag>
  )
}

/** Glue the cursor to the title's last word so it never wraps onto a line of its own. */
function withCursor(children: ReactNode) {
  const parts = Children.toArray(children)
  const last = parts[parts.length - 1]
  const cursor = <span aria-hidden className="title-cursor" />
  if (typeof last !== "string") return [...parts, <Fragment key="cursor">{cursor}</Fragment>]
  const cut = last.lastIndexOf(" ") + 1
  return [
    ...parts.slice(0, -1),
    last.slice(0, cut),
    <span key="cursor" className="whitespace-nowrap">
      {last.slice(cut)}
      {cursor}
    </span>,
  ]
}
