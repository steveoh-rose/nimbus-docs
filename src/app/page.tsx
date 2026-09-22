import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import * as appIcons from "@nimbus/assets/icons/app"
import * as brandIcons from "@nimbus/assets/icons/brand"
import {
  ArrowRight,
  Bookmark,
  Calendar,
  CheckCircle,
  Cloud,
  Grid,
  Home as HomeIcon,
  Info,
  Notifications,
  Person,
  Search,
  Sparkles,
} from "@nimbus/assets/icons/app"

import { Showcase } from "@/components/nimbus/hero-demo"
import { GitHubMarkIcon } from "@/components/icons"
import { documentedComponents } from "@/lib/nimbus-nav"
import { siteConfig } from "@/lib/nav-config"
import { listContent } from "@/lib/content"
import { shadowTokens, spacingTokens } from "@/lib/tokens"

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

const CHECKLIST = ["Design tokens", "React Aria under the hood", "Source-synced docs", "Accessible by default"]

const BRAND_SWATCHES = [
  "--color-brand-navy",
  "--color-brand-pink",
  "--color-brand-purple",
  "--color-brand-green",
  "--color-brand-blue",
  "--color-brand-aqua",
]

const GALLERY_ICONS = [Cloud, Grid, Search, Notifications, Person, Calendar, Bookmark, HomeIcon, Info, Sparkles]

function Card({
  href,
  title,
  description,
  children,
}: {
  href: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[14px] border border-white/10 bg-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex h-32 items-center justify-center bg-[var(--color-bg-100)] px-6">{children}</div>
      <div className="border-t px-5 py-4">
        <div className="flex items-center gap-1.5 font-heading text-[1.05rem] font-semibold">
          {title}
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  const componentCount = documentedComponents().length
  const patternCount = listContent("patterns").length
  const sources = syncInfo()
  const spacers = spacingTokens()
  const maxSpacer = Math.max(...spacers.map((t) => parseFloat(t.value)))
  const modalShadow = shadowTokens().find((s) => s.name === "modal")?.css

  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 pt-14 pb-12 text-center lg:px-8 lg:pt-20">
        {sources ? (
          <Link
            href="/docs/introduction"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary-200)] bg-[var(--color-primary-100)] px-3 py-1 text-xs text-[var(--color-primary-500)] transition-colors hover:bg-[var(--color-primary-200)]"
          >
            nimbus-ui v{sources["nimbus-ui"].version} · tokens v{sources["cc-design-tokens"].version}
          </Link>
        ) : null}
        <h1 className="font-heading text-[2.75rem] leading-[1.08] font-bold tracking-tight sm:text-[4.25rem]">
          Consistent by default.
          <br />
          <span className="text-[var(--color-system-200)]">Themed by tokens.</span>
        </h1>
        <p className="mt-5 max-w-[52ch] text-[1.14rem] leading-relaxed text-muted-foreground">
          Nimbus is the design system behind Console Connect: the tokens, React components and patterns
          that keep our products consistent, documented from the same source the code is built from.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {CHECKLIST.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1 text-xs text-muted-foreground"
            >
              <CheckCircle className="size-3.5 text-[var(--color-success-400)]" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/introduction"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-[var(--color-primary-400)]"
          >
            Get started
          </Link>
          <Link
            href="/docs/components/button"
            className="inline-flex h-11 items-center gap-2 rounded-full border bg-white px-6 text-sm font-medium transition-colors hover:bg-[var(--color-bg-200)]"
          >
            View components
          </Link>
        </div>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <GitHubMarkIcon className="size-3.5" />
          Source on GitHub
        </a>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-4 pb-16 lg:px-8">
        <Showcase />
      </section>

      <p className="mx-auto max-w-[62ch] px-4 pb-16 text-center text-[1.3rem] leading-snug font-medium tracking-tight sm:text-[1.6rem]">
        Nimbus is the <span className="text-primary">single source</span> for how Console Connect looks
        and behaves — tokens, components and patterns kept in{" "}
        <span className="text-primary">lockstep</span> with the code that ships them.
      </p>

      <section className="w-full bg-[var(--color-accent-dark)]">
        <div className="mx-auto w-full max-w-[1100px] px-4 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
              What&apos;s inside
            </span>
            <h2 className="mt-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Foundations, tokens and components — all documented from source.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card href="/docs/tokens/overview#color" title="Color system" description="Semantic and palette tokens, generated straight from cc-design-tokens.">
              <div className="flex gap-1.5">
                {BRAND_SWATCHES.map((v) => (
                  <span key={v} className="size-8 rounded-full border" style={{ background: `var(${v})` }} />
                ))}
              </div>
            </Card>

            <Card href="/docs/tokens/overview#typography" title="Typography" description="Two families, weighted scales for headings, body and article text.">
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-family-accent)" }}>
                  Aa
                </div>
                <div className="mt-1 font-mono text-[11px] text-muted-foreground">Open Sans · Montserrat</div>
              </div>
            </Card>

            <Card href="/docs/tokens/overview#icons" title="Icons" description={`${iconCount()}+ icons across app and brand sets, one import each.`}>
              <div className="grid grid-cols-5 gap-2.5">
                {GALLERY_ICONS.map((Icon, i) => (
                  <Icon key={i} className="size-4 text-[var(--color-primary-400)]" />
                ))}
              </div>
            </Card>

            <Card href="/docs/tokens/overview#spacing" title="Spacing & radius" description="One spacer scale drives padding, gaps and the corner radius everywhere.">
              <div className="flex h-full items-end gap-1.5">
                {spacers.map((t) => (
                  <span
                    key={t.name}
                    className="w-3 rounded-t-sm bg-[var(--color-primary-300)]"
                    style={{ height: `${(parseFloat(t.value) / maxSpacer) * 100}%` }}
                  />
                ))}
              </div>
            </Card>

            <Card href="/docs/tokens/overview#shadows" title="Shadows & blurs" description="Elevation for navigation, containers and overlays.">
              <div className="size-14 rounded-md bg-white" style={modalShadow ? { boxShadow: modalShadow } : undefined} />
            </Card>

            <Card href="/docs/components/button" title="Components" description={`${componentCount} core React components, each documented from live Storybook stories.`}>
              <div className="flex flex-col items-center gap-2">
                <span className="h-6 w-16 rounded-full bg-primary" />
                <div className="flex gap-2">
                  <span className="h-4 w-4 rounded-[4px] border-2 border-[var(--color-primary-300)]" />
                  <span className="h-4 w-8 rounded-full bg-[var(--color-success-100)]" />
                </div>
              </div>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-white/50 italic">
            …and {patternCount} patterns, breakpoints, and a full responsive grid system.
          </p>
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
