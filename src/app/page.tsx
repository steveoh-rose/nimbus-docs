import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import * as appIcons from "@nimbus/assets/icons/app"
import * as brandIcons from "@nimbus/assets/icons/brand"
import {
  ArrowRight,
  Bookmark,
  Calendar,
  Chat,
  Check,
  Cloud,
  Copy,
  Delete,
  Edit,
  Grid,
  Home as HomeIcon,
  Info,
  Key,
  Link as LinkIcon,
  Notifications,
  Person,
  Search,
  Share,
  Sparkles,
  Star,
  Warning,
} from "@nimbus/assets/icons/app"

import { HeroPanels } from "@/components/nimbus/hero-panels"
import { ComponentGallery } from "@/components/nimbus/component-gallery"
import { documentedComponents } from "@/lib/nimbus-nav"
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

const BRAND_SWATCHES = [
  "--color-brand-navy",
  "--color-brand-pink",
  "--color-brand-purple",
  "--color-brand-green",
  "--color-brand-blue",
  "--color-brand-aqua",
]

const GALLERY_ICONS = [
  Cloud,
  Grid,
  Search,
  Notifications,
  Person,
  Calendar,
  Bookmark,
  HomeIcon,
  Info,
  Sparkles,
  Check,
  Star,
  Warning,
  Share,
  Copy,
  Edit,
  Delete,
  Key,
  LinkIcon,
  Chat,
]

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
      className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-foreground/20 hover:shadow-sm"
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
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 pt-16 pb-14 text-center lg:px-8 lg:pt-24">
        <h1 className="font-heading text-[2.75rem] leading-[1.08] font-bold tracking-tight sm:text-[4.25rem]">
          Consistent by default.
          <br />
          <span className="text-[var(--color-system-200)]">Themed by tokens.</span>
        </h1>
        <p className="mt-5 max-w-[52ch] text-[1.14rem] leading-relaxed text-muted-foreground">
          Nimbus is the design system behind Console Connect: the tokens, React components and patterns
          that keep our products consistent, documented from the same source the code is built from.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/introduction"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-[var(--color-primary-400)]"
          >
            Get started
          </Link>
          <Link
            href="/docs/components"
            className="inline-flex h-11 items-center gap-2 rounded-full border bg-white px-6 text-sm font-medium transition-colors hover:bg-[var(--color-bg-200)]"
          >
            View components
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-4 pb-16 lg:px-8">
        <HeroPanels />
      </section>

      <p className="mx-auto max-w-[62ch] px-4 pb-16 text-center text-[1.3rem] leading-snug font-medium tracking-tight sm:text-[1.6rem]">
        Nimbus is the <span className="text-primary">single source</span> for how Console Connect looks
        and behaves — tokens, components and patterns kept in{" "}
        <span className="text-primary">lockstep</span> with the code that ships them.
      </p>

      <section className="w-full border-y bg-muted/30">
        <div className="mx-auto w-full max-w-[1100px] px-4 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium text-muted-foreground">What&apos;s inside</p>
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              Foundations, tokens and components — all documented from source.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card href="/docs/tokens#color" title="Color system" description="Semantic and palette tokens, generated straight from cc-design-tokens.">
              <div className="flex gap-1.5">
                {BRAND_SWATCHES.map((v) => (
                  <span key={v} className="size-8 rounded-full border" style={{ background: `var(${v})` }} />
                ))}
              </div>
            </Card>

            <Card href="/docs/tokens#typography" title="Typography" description="Two families, weighted scales for headings, body and article text.">
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-family-accent)" }}>
                  Aa
                </div>
                <div className="mt-1 font-mono text-[11px] text-muted-foreground">Open Sans · Montserrat</div>
              </div>
            </Card>

            <Card href="/docs/icons" title="Icons" description={`${iconCount()}+ icons across app and brand sets, one import each.`}>
              <div className="grid grid-cols-5 gap-2.5">
                {GALLERY_ICONS.slice(0, 10).map((Icon, i) => (
                  <Icon key={i} className="size-4 text-[var(--color-primary-400)]" />
                ))}
              </div>
            </Card>

            <Card href="/docs/tokens#spacing" title="Spacing & radius" description="One spacer scale drives padding, gaps and the corner radius everywhere.">
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

            <Card href="/docs/tokens#shadows" title="Shadows & blurs" description="Elevation for navigation, containers and overlays.">
              <div className="size-14 rounded-md bg-white" style={modalShadow ? { boxShadow: modalShadow } : undefined} />
            </Card>

            <Card href="/docs/patterns/overview" title="Patterns" description={`${patternCount} recurring problems solved once, like form validation.`}>
              <div className="flex items-center gap-2">
                <span className="rounded-full border bg-[var(--color-bg-100)] px-2.5 py-1 text-[11px] font-medium">Field</span>
                <ArrowRight className="size-3.5 text-muted-foreground" />
                <span className="rounded-full border bg-[var(--color-bg-100)] px-2.5 py-1 text-[11px] font-medium">Hint</span>
                <ArrowRight className="size-3.5 text-muted-foreground" />
                <span className="rounded-full border bg-[var(--color-error-100)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-error-400)]">Error</span>
              </div>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            …and breakpoints, and a full responsive grid system — all synced from source.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-4 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">{iconCount()}+ icons, one import each.</h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-muted-foreground">
            From <code className="font-mono text-[0.85em]">@console/nimbus-assets</code> — app icons and brand
            icons, colored by <code className="font-mono text-[0.85em]">currentColor</code>.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
          {GALLERY_ICONS.map((Icon, i) => (
            <div key={i} className="flex aspect-square items-center justify-center rounded-md border bg-white">
              <Icon className="size-5 text-[var(--color-primary-400)]" />
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/docs/icons" className="text-sm font-medium text-primary hover:underline">
            Browse the full icon set →
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-4 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {componentCount} components, styled and accessible by default.
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-muted-foreground">
            Built on React Aria, themed with Nimbus tokens, documented from live Storybook stories.
          </p>
        </div>
        <ComponentGallery />
        <div className="mt-8 text-center">
          <Link href="/docs/components" className="text-sm font-medium text-primary hover:underline">
            Browse all components →
          </Link>
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
