import fs from "node:fs"
import path from "node:path"
import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowRight } from "@nimbus/assets/icons/app"

import { HeroPanels } from "@/components/nimbus/hero-panels"
import { LazyReel } from "@/components/showcase/lazy-reel"
import { BrandBackdrop, CursorTitle, Floating, ToggleArt } from "@/components/brand/brand-backdrop"
import { NimbusLogo, Shape, Snake, type ShapeName } from "@/components/brand/brand-art"
import { GRADIENT_HEX, type GradientName } from "@/components/brand/brand-constants"
import { BrandIconStrip } from "@/components/brand/brand-icon-strip"
import { reelData } from "@/lib/reel-data"
import { listContent } from "@/lib/content"
import { sidebarNav } from "@/lib/nav-config"

function syncInfo() {
  try {
    const meta = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "nimbus", "SOURCE.json"), "utf8"))
    return meta.sources as Record<string, { version: string }>
  } catch {
    return null
  }
}

const delay = (s: number) => ({ "--nb-delay": `${s}s` }) as CSSProperties

const GRADIENT_ICONS: Record<GradientName, string[]> = {
  "purple-rain": ["Heart", "Idea", "Chat"],
  "luscious-green": ["Cloud", "Network", "Globe"],
  "blue-hour": ["Api", "Integration", "Iot"],
  "the-way-of-water": ["Firewall", "Key", "Location"],
}

function SectionHeading({ kicker, title, children, id }: { kicker: string; title: string; children?: React.ReactNode; id?: string }) {
  return (
    <div>
      <p className="brand-kicker">{kicker}</p>
      <CursorTitle
        as="h2"
        id={id}
        className="mt-4 scroll-mt-24 font-heading text-[2.1rem] leading-[1.08] font-semibold tracking-[-0.025em] text-foreground sm:text-[2.6rem]"
      >
        {title}
      </CursorTitle>
      {children ? <p className="mt-4 max-w-[58ch] text-[1.05rem] leading-relaxed text-muted-foreground">{children}</p> : null}
    </div>
  )
}

const pill =
  "inline-flex h-12 items-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition-all hover:-translate-y-0.5 focus-visible:-translate-y-0.5"

export default function Home() {
  const data = reelData()
  const { stats } = data
  const patternCount = listContent("patterns").length
  const foundationsCount = sidebarNav.filter((g) => g.section === "Foundations").reduce((n, g) => n + g.items.length, 0)
  const aaFamilies = data.step500.filter((s) => s.ratio >= 4.5).length
  const sources = syncInfo()

  const explore: Array<{ href: string; title: string; meta: string; body: string; shape: ShapeName; gradient: GradientName }> = [
    {
      href: "/docs/introduction",
      title: "Getting started",
      meta: "Guides",
      body: "Install Nimbus, contribute to it and test it against your app.",
      shape: "triangle",
      gradient: "blue-hour",
    },
    {
      href: "/docs/foundations/tokens",
      title: "Foundations",
      meta: `${foundationsCount} pages`,
      body: "Searchable tokens, colors, type, spacing, size, borders, layout and icons.",
      shape: "circle",
      gradient: "luscious-green",
    },
    {
      href: "/docs/components",
      title: "Components",
      meta: `${stats.components} components`,
      body: "Core primitives and complex components, each with live, editable examples.",
      shape: "gem",
      gradient: "the-way-of-water",
    },
    {
      href: "/docs/patterns/overview",
      title: "Patterns",
      meta: `${patternCount} patterns`,
      body: "Recurring UI behaviour, like form validation, built from Nimbus components.",
      shape: "flower",
      gradient: "purple-rain",
    },
  ]

  const numbers: Array<[string, string]> = [
    [String(stats.components), "components, documented from their Storybook stories"],
    [String(stats.tokens), "design tokens, read straight from cc-design-tokens"],
    [String(stats.icons), `icons — ${stats.appIcons} app and ${stats.brandIcons} brand`],
    [`${aaFamilies}/${data.step500.length}`, "palette families clear WCAG AA at step 500"],
  ]

  return (
    <div className="flex flex-1 flex-col">
      {/* ------------------------------------------------------------ Hero */}
      <section className="relative isolate overflow-hidden border-b">
        <BrandBackdrop />
        <Floating className="top-14 -left-20 hidden md:block" rotate={-16} duration={10}>
          <Shape name="triangle" size={260} gradient="blue-hour" />
        </Floating>
        <Floating className="top-12 -right-28 hidden md:block" duration={13} bob={-8} sway={1}>
          <ToggleArt width={440} />
        </Floating>
        <Floating className="-bottom-44 left-[28%] hidden sm:block" duration={11} bob={-12} sway={3}>
          <Shape name="circle" size={340} gradient="luscious-green" />
        </Floating>
        <Floating className="right-[7%] bottom-16 hidden md:block" rotate={90} duration={8} delay={-2}>
          <Shape name="leaf" size={112} gradient="blue-hour" />
        </Floating>
        <Floating className="bottom-28 left-[5%] hidden lg:block" duration={9} delay={-4} bob={-10}>
          <Snake size={210} />
        </Floating>

        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-4 pt-20 pb-28 text-center lg:pt-24 lg:pb-36">
          <p className="brand-kicker nb-fade-up">The Console Connect design system</p>
          <NimbusLogo animated width="min(560px, 80vw)" className="mt-9" />
          <CursorTitle
            className="nb-fade-up mt-10 font-heading text-[2.2rem] leading-[1.06] font-semibold tracking-[-0.03em] text-foreground sm:text-[3.3rem]"
            style={delay(0.55)}
          >
            Consistent by default.
            <br />
            Themed by tokens
          </CursorTitle>
          <p className="nb-fade-up mt-6 max-w-[54ch] text-[1.12rem] leading-relaxed text-muted-foreground" style={delay(0.7)}>
            Brand, tokens, React components and patterns for Console Connect — documented from the same
            source the code ships from, so the docs never drift from what&apos;s built.
          </p>
          <div className="nb-fade-up mt-9 flex flex-wrap items-center justify-center gap-3" style={delay(0.85)}>
            <Link href="/docs/introduction" className={`${pill} bg-[var(--color-brand-navy)] text-white shadow-[var(--shadow-lift)]`}>
              Get started <ArrowRight className="size-4" />
            </Link>
            <Link href="/docs/components" className={`${pill} border bg-background text-foreground shadow-[var(--shadow-soft)]`}>
              Browse components
            </Link>
            <Link href="#reel" className={`${pill} text-foreground hover:bg-background/70`}>
              Watch the reel
            </Link>
          </div>
          {sources ? (
            <p className="nb-fade-up mt-10 rounded-full border bg-background/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur" style={delay(1)}>
              nimbus-ui v{sources["nimbus-ui"].version} · tokens v{sources["cc-design-tokens"].version} · assets v
              {sources["nimbus-assets"].version}
            </p>
          ) : null}
        </div>
      </section>

      {/* ------------------------------------------------------------ Live components */}
      <section className="mx-auto w-full max-w-[1200px] px-4 py-24 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Components" title="Real components, live">
            Every example on this site is a working Nimbus component on React Aria. Open the menu, pick a region, tab
            through the form.
          </SectionHeading>
          <Link href="/docs/components" className="group inline-flex items-center gap-2 font-semibold text-[var(--color-primary-300)]">
            All {stats.components} components
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <HeroPanels />
      </section>

      {/* ------------------------------------------------------------ Numbers */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pb-24 lg:px-8">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {numbers.map(([value, label]) => (
            <div key={label} className="relative flex flex-col-reverse rounded-3xl border bg-background p-7 pt-8">
              <span
                aria-hidden
                className="absolute top-0 left-7 h-[3px] w-12 rounded-full"
                style={{ background: "var(--gradient-the-way-of-water)" }}
              />
              <dt className="mt-3 text-[0.95rem] leading-snug text-muted-foreground">{label}</dt>
              <dd className="font-heading text-[2.6rem] leading-none font-semibold tracking-[-0.03em] text-foreground tabular-nums">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------------------------ Reel */}
      <section className="relative isolate overflow-hidden border-y">
        <BrandBackdrop rings={false} />
        <div className="relative mx-auto w-full max-w-[1200px] px-4 py-24 lg:px-8">
          <div className="mb-10">
            <SectionHeading kicker="Showcase" title="Nimbus in motion" id="reel">
              Brand gradients, tokens, interaction states, keyboard accessibility and icons — every value in the reel is
              read from the source repos at build time.
            </SectionHeading>
          </div>
          <LazyReel data={data} />
        </div>
      </section>

      {/* ------------------------------------------------------------ Explore */}
      <section className="mx-auto w-full max-w-[1200px] px-4 py-24 lg:px-8">
        <div className="mb-12">
          <SectionHeading kicker="Explore" title="Find your way around" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {explore.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="gradient-ring group relative flex min-h-[260px] flex-col overflow-hidden rounded-3xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span aria-hidden className="absolute -top-10 -right-10 transition-transform duration-500 group-hover:rotate-[18deg] group-hover:scale-110">
                <Shape name={card.shape} size={150} gradient={card.gradient} />
              </span>
              <span className="mt-auto text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">{card.meta}</span>
              <h3 className="mt-2 font-heading text-[1.35rem] font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-[0.93rem] leading-relaxed text-muted-foreground">{card.body}</p>
              <ArrowRight className="mt-5 size-5 text-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ Brand */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pb-28 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Brand" title="Four gradients, one prop">
            The brand runs on four gradients built from brand color tokens. Every brand icon in nimbus-assets can wear
            any of them with a single <code className="rounded bg-[var(--color-primary-100)] px-1.5 py-0.5 font-mono text-[0.85em] text-[var(--color-primary-500)]">gradient</code> prop.
          </SectionHeading>
          <div className="flex flex-wrap gap-5">
            <Link href="/docs/foundations/colors#brand-gradients" className="group inline-flex items-center gap-2 font-semibold text-[var(--color-primary-300)]">
              Brand colors <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/docs/foundations/icons#brand" className="group inline-flex items-center gap-2 font-semibold text-[var(--color-primary-300)]">
              Brand icons <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(GRADIENT_ICONS) as GradientName[]).map((name) => {
            const [a, b] = GRADIENT_HEX[name]
            return (
              <div key={name} className="overflow-hidden rounded-3xl border bg-background">
                <div className="h-32" style={{ background: `var(--gradient-${name})` }} />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {a} → {b}
                  </p>
                  <BrandIconStrip
                    className="mt-5 gap-4"
                    size={42}
                    items={GRADIENT_ICONS[name].map((icon) => ({ name: icon, gradient: name }))}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
