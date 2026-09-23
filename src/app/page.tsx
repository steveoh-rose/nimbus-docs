import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import * as appIcons from "@nimbus/assets/icons/app"
import * as brandIcons from "@nimbus/assets/icons/brand"
import { Article, ArrowRight, Grid, Sparkles, Workspaces } from "@nimbus/assets/icons/app"

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
    <div className="mx-auto w-full max-w-[1100px] flex-1 px-4 py-14 lg:px-8">
      <p className="text-sm font-medium text-muted-foreground">Design system</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Nimbus</h1>
      <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
        The tokens, React components and patterns behind Console Connect, documented from the same source
        the code is built from.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
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

      <div className="mt-14 border-t pt-8">
        <h2 className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Getting started
        </h2>
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
        <p className="mt-3 text-xs text-muted-foreground">
          {patternCount} documented patterns in total.
        </p>
      </div>

      <footer className="mt-14 border-t pt-6 text-xs text-muted-foreground">
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
