"use client"

import * as React from "react"
import * as appIcons from "@nimbus/assets/icons/app"
import * as brandIcons from "@nimbus/assets/icons/brand"
import { Check, Copy, Search } from "@nimbus/assets/icons/app"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { GradientName } from "@/components/brand/brand-art"

type IconProps = React.SVGProps<SVGSVGElement> & { gradient?: GradientName; contrastMode?: "light" | "dark" }
const sets = {
  app: appIcons as unknown as Record<string, React.ComponentType<IconProps>>,
  brand: brandIcons as unknown as Record<string, React.ComponentType<IconProps>>,
}

const PAGE_SIZE = 60
const GRADIENTS: GradientName[] = ["purple-rain", "luscious-green", "blue-hour", "the-way-of-water"]
const noopSubscribe = () => () => {}

export function IconGallery({ set }: { set: "app" | "brand" }) {
  const [query, setQuery] = React.useState("")
  const [copied, setCopied] = React.useState<string | null>(null)
  const [limit, setLimit] = React.useState(PAGE_SIZE)
  const [gradient, setGradient] = React.useState<GradientName>("purple-rain")
  const [mode, setMode] = React.useState<"light" | "dark">("light")
  // Brand icons mint a random gradient id on mount; render them client-side only to avoid hydration mismatches.
  const isClient = React.useSyncExternalStore(noopSubscribe, () => true, () => false)
  const isBrand = set === "brand"
  const dark = isBrand && mode === "dark"

  const names = React.useMemo(
    () => Object.keys(sets[set]).filter((n) => n !== "default").sort(),
    [set]
  )
  const matches = names.filter((n) => n.toLowerCase().includes(query.trim().toLowerCase()))
  // Rendering all 100+ icons at once (each a mounted SVG component) is wasted work when most
  // visits only look at a handful — show a page's worth up front and let people ask for more.
  const shown = matches.slice(0, limit)

  async function copy(name: string) {
    const snippet = isBrand
      ? `import { ${name} } from '@console/nimbus-assets/icons/brand';\n\n<${name} gradient="${gradient}" contrastMode="${mode}" />`
      : `import { ${name} } from '@console/nimbus-assets/icons/app';`
    await navigator.clipboard.writeText(snippet)
    setCopied(name)
    setTimeout(() => setCopied((c) => (c === name ? null : c)), 1400)
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setLimit(PAGE_SIZE)
            }}
            placeholder={`Search ${names.length} ${set} icons…`}
            className="h-10 rounded-full pl-10"
            aria-label={`Search ${set} icons`}
          />
        </div>
        {isBrand ? (
          <>
            <div role="radiogroup" aria-label="Gradient" className="flex flex-wrap gap-1.5">
              {GRADIENTS.map((g) => (
                <button
                  key={g}
                  type="button"
                  role="radio"
                  aria-checked={gradient === g}
                  onClick={() => setGradient(g)}
                  className={cn(
                    "inline-flex h-10 items-center gap-2 rounded-full border px-3 text-[0.8rem] font-semibold transition-colors",
                    gradient === g ? "border-foreground bg-foreground text-background" : "bg-background hover:bg-muted"
                  )}
                >
                  <span aria-hidden className="size-4 rounded-full" style={{ background: `var(--gradient-${g})` }} />
                  {g}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-pressed={dark}
              onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
              className="inline-flex h-10 items-center gap-2 rounded-full border bg-background px-3.5 text-[0.8rem] font-semibold transition-colors hover:bg-muted"
            >
              <span
                aria-hidden
                className="relative h-5 w-9 rounded-full transition-colors"
                style={{ background: dark ? "var(--color-brand-navy)" : "var(--color-system-200)" }}
              >
                <span className={cn("absolute top-0.5 size-4 rounded-full bg-white transition-all", dark ? "left-[18px]" : "left-0.5")} />
              </span>
              Dark contrast
            </button>
          </>
        ) : null}
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        {matches.length === names.length
          ? `${names.length} icons`
          : `${matches.length} of ${names.length} icons`}
        , showing {shown.length}. Click an icon to copy {isBrand ? "its snippet" : "its import"}.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {shown.map((name) => {
          const Icon = sets[set][name]
          const size = isBrand ? 48 : 28
          return (
            <button
              key={name}
              type="button"
              onClick={() => copy(name)}
              className={cn(
                "gradient-ring group flex flex-col items-center gap-3 rounded-2xl border p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-ring",
                dark ? "border-transparent bg-[var(--color-brand-navy)]" : "bg-card"
              )}
            >
              <span className="flex h-12 items-center justify-center text-foreground" style={{ fontSize: size }}>
                {isClient || !isBrand ? (
                  isBrand ? (
                    <Icon width="1em" height="1em" gradient={gradient} contrastMode={mode} />
                  ) : (
                    <Icon width="1em" height="1em" />
                  )
                ) : null}
              </span>
              <span
                className={cn(
                  "flex max-w-full items-center gap-1 font-mono text-[11px]",
                  dark ? "text-white/70 group-hover:text-white" : "text-muted-foreground group-hover:text-foreground"
                )}
              >
                <span className="truncate">{name}</span>
                {copied === name ? <Check className="size-3.5 text-primary" /> : <Copy className="size-3.5 opacity-0 group-hover:opacity-100" />}
              </span>
            </button>
          )
        })}
      </div>
      {matches.length > shown.length ? (
        <button
          type="button"
          onClick={() => setLimit((l) => l + PAGE_SIZE)}
          className="mt-5 inline-flex h-10 items-center rounded-full border bg-background px-5 text-sm font-semibold transition-colors hover:bg-muted"
        >
          Show {Math.min(PAGE_SIZE, matches.length - shown.length)} more
        </button>
      ) : null}
    </div>
  )
}
