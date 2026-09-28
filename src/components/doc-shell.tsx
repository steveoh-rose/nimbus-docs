import type { Heading } from "@/lib/mdx"
import { TableOfContents } from "@/components/table-of-contents"
import { CopyPageButton } from "@/components/copy-page-button"
import { SectionKicker } from "@/components/section-kicker"
import { BrandBackdrop, CursorTitle, Floating } from "@/components/brand/brand-backdrop"
import { Shape, type GradientName, type ShapeName } from "@/components/brand/brand-art"

const DECOR: Array<[ShapeName, GradientName, ShapeName, GradientName]> = [
  ["circle", "luscious-green", "leaf", "blue-hour"],
  ["gem", "blue-hour", "circle", "the-way-of-water"],
  ["flower", "the-way-of-water", "tab", "luscious-green"],
  ["leaf", "purple-rain", "gem", "luscious-green"],
  ["arch", "luscious-green", "bowl", "purple-rain"],
  ["triangle", "blue-hour", "circle", "luscious-green"],
  ["tab", "the-way-of-water", "triangle", "purple-rain"],
  ["bowl", "purple-rain", "flower", "blue-hour"],
]

/** Every page gets its own brand mark, chosen consistently from its title. */
function decorFor(title: string) {
  const hash = [...title].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)
  return DECOR[hash % DECOR.length]
}

export function DocShell({
  title,
  description,
  eyebrow,
  headings = [],
  actions,
  children,
}: {
  title: string
  description?: string
  /** Extra label after the section name in the kicker, e.g. "Core component". */
  eyebrow?: string
  headings?: Heading[]
  /** Pill links shown under the description (React Aria docs, Source, ...). */
  actions?: React.ReactNode
  children: React.ReactNode
}) {
  const [shape, gradient, accent, accentGradient] = decorFor(title)
  return (
    <div className="flex items-start gap-10">
      <article className="min-w-0 flex-1 pt-6 pb-20">
        <header className="relative isolate mb-10 overflow-hidden rounded-[28px] px-6 py-9 sm:px-10 sm:py-12">
          <BrandBackdrop hatch={false} />
          <Floating className="-top-12 -right-10 hidden sm:block" rotate={-12} duration={11}>
            <Shape name={shape} size={230} gradient={gradient} />
          </Floating>
          <Floating className="right-40 -bottom-9 hidden md:block" rotate={20} duration={8} delay={-3} bob={-10}>
            <Shape name={accent} size={84} gradient={accentGradient} />
          </Floating>
          <div className="relative max-w-[min(100%,40rem)]">
            <SectionKicker eyebrow={eyebrow} />
            <CursorTitle className="scroll-mt-32 font-heading text-[2.25rem] leading-[1.08] font-semibold tracking-[-0.025em] text-foreground sm:text-[2.85rem]">
              {title}
            </CursorTitle>
            {description ? (
              <p className="mt-4 max-w-[58ch] text-[1.08rem] leading-relaxed text-muted-foreground">{description}</p>
            ) : null}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {actions}
              <CopyPageButton />
            </div>
          </div>
        </header>
        <div>{children}</div>
      </article>
      <TableOfContents headings={headings} />
    </div>
  )
}
