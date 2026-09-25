import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import * as appIcons from "@nimbus/assets/icons/app"
import * as brandIcons from "@nimbus/assets/icons/brand"
import { Article, ArrowRight, Grid, Sparkles, Workspaces } from "@nimbus/assets/icons/app"

import { HeroPanels } from "@/components/nimbus/hero-panels"
import { documentedComponents } from "@/lib/nimbus-nav"
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

const iconCount = () => {
  const count = (m: object) => Object.keys(m).filter((k) => k !== "default").length
  return count(appIcons) + count(brandIcons)
}

const GETTING_STARTED = [
  { title: "Introduction", href: "/docs/introduction" },
  { title: "Contributing", href: "/docs/contributing" },
  { title: "Testing guide", href: "/docs/testing-guide" },
  { title: "Tone of voice", href: "/docs/foundations/tone-of-voice" },
  { title: "Form validation pattern", href: "/docs/patterns/form-validation" },
]

function SectionCard({
  href,
  icon: Icon,
  title,
  count,
  description,
}: {
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  count: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-lg border bg-card p-5 transition-colors hover:border-foreground/20 hover:shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="flex size-9 items-center justify-center rounded-md bg-[var(--color-bg-100)]">
          <Icon className="size-[18px] text-foreground" />
        </span>
        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-base font-semibold">{title}</h2>
          <span className="text-xs text-muted-foreground">{count}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  const componentCount = documentedComponents().length
  const patternCount = listContent("patterns").length
  const tokenCount = sidebarNav.find((g) => g.section === "Tokens")?.items.length ?? 0
  const sources = syncInfo()

  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 pt-16 pb-14 text-center lg:px-8 lg:pt-24">
        {sources ? (
          <Link
            href="/docs/introduction"
            className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent"
          >
            nimbus-ui v{sources["nimbus-ui"].version} · tokens v{sources["cc-design-tokens"].version}
            <ArrowRight className="size-3" />
          </Link>
        ) : null}
        <h1 className="text-[2.75rem] leading-[1.08] font-bold tracking-tight sm:text-[4.25rem]">
          Consistent by default.
          <br />
          <span className="text-muted-foreground">Themed by tokens.</span>
        </h1>
        <p className="mt-5 max-w-[52ch] text-[1.14rem] leading-relaxed text-muted-foreground">
          Nimbus is the design system behind Console Connect: the tokens, React components and patterns
          that keep our products consistent, documented from the same source the code is built from.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/introduction"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-[var(--color-primary-400)]"
          >
            Get started
          </Link>
          <Link
            href="/docs/components"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-muted px-4 text-sm font-medium transition-colors hover:bg-accent"
          >
            View components
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-4 pb-20 lg:px-8">
        <HeroPanels />
      </section>

      <p className="mx-auto max-w-[70ch] px-4 pb-20 text-center text-lg leading-relaxed text-muted-foreground">
        Nimbus is an internal component library for Console Connect. It combines React Aria with our own
        design tokens to provide accessible behavior, typed APIs and polished defaults — documented straight
        from the same source the code ships from, so the docs never drift from what&apos;s actually built.
      </p>

      <section className="mx-auto w-full max-w-[1100px] border-t px-4 py-16 lg:px-8">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Explore the docs</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <SectionCard
            href="/docs/introduction"
            icon={Article}
            title="Docs"
            count="Guides"
            description="Foundations, patterns and how to contribute to Nimbus."
          />
          <SectionCard
            href="/docs/tokens"
            icon={Sparkles}
            title="Tokens"
            count={`${tokenCount} categories`}
            description="Color, typography, spacing, radius, shadows and the layout grid."
          />
          <SectionCard
            href="/docs/icons"
            icon={Grid}
            title="Icons"
            count={`${iconCount()}+ icons`}
            description="App and brand icon sets from @console/nimbus-assets."
          />
          <SectionCard
            href="/docs/components"
            icon={Workspaces}
            title="Components"
            count={`${componentCount} components`}
            description="Core primitives and complex components, each with live examples."
          />
        </div>

        <div className="mt-12">
          <h3 className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Getting started
          </h3>
          <ul className="divide-y">
            {GETTING_STARTED.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between gap-4 py-2.5 text-sm transition-colors hover:text-foreground"
                >
                  <span className="text-foreground">{item.title}</span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">{patternCount} documented patterns in total.</p>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-[1100px] px-4 py-10 text-center text-xs text-muted-foreground lg:px-8">
        {sources ? (
          <p>
            Generated from nimbus-ui v{sources["nimbus-ui"].version}, cc-design-tokens v
            {sources["cc-design-tokens"].version} and nimbus-assets v{sources["nimbus-assets"].version}.
          </p>
        ) : null}
      </footer>
    </div>
  )
}
