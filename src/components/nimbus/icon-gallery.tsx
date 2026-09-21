"use client"

import * as React from "react"
import * as appIcons from "@nimbus/assets/icons/app"
import * as brandIcons from "@nimbus/assets/icons/brand"
import { Check, Copy, Search } from "@nimbus/assets/icons/app"

import { Input } from "@/components/ui/input"

const sets = {
  app: appIcons as unknown as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>,
  brand: brandIcons as unknown as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>,
}

export function IconGallery({ set }: { set: "app" | "brand" }) {
  const [query, setQuery] = React.useState("")
  const [copied, setCopied] = React.useState<string | null>(null)

  const names = React.useMemo(
    () => Object.keys(sets[set]).filter((n) => n !== "default").sort(),
    [set]
  )
  const shown = names.filter((n) => n.toLowerCase().includes(query.trim().toLowerCase()))

  async function copy(name: string) {
    await navigator.clipboard.writeText(`import { ${name} } from '@console/nimbus-assets/icons/${set}';`)
    setCopied(name)
    setTimeout(() => setCopied((c) => (c === name ? null : c)), 1400)
  }

  return (
    <div>
      <div className="relative mb-4 max-w-sm">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${names.length} ${set} icons…`}
          className="pl-9"
          aria-label="Search icons"
        />
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        {shown.length} of {names.length} icons. Click an icon to copy its import.
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {shown.map((name) => {
          const Icon = sets[set][name]
          const size = set === "app" ? 28 : 44
          return (
            <button
              key={name}
              type="button"
              onClick={() => copy(name)}
              className="group flex flex-col items-center gap-3 rounded-lg border bg-card p-4 text-center transition-colors hover:border-primary hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
            >
              <span className="flex h-11 items-center justify-center" style={{ fontSize: size }}>
                <Icon width="1em" height="1em" />
              </span>
              <span className="flex max-w-full items-center gap-1 font-mono text-[11px] text-muted-foreground group-hover:text-foreground">
                <span className="truncate">{name}</span>
                {copied === name ? <Check className="size-3.5 text-primary" /> : <Copy className="size-3.5 opacity-0 group-hover:opacity-100" />}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
