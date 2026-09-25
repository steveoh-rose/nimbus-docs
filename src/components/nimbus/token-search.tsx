"use client"

import { useMemo, useState } from "react"
import { CopyButton } from "@/components/copy-button"
import { cn } from "@/lib/utils"

export type SearchableToken = {
  name: string
  value: string
  scss: string
  category: string
}

function Swatch({ token }: { token: SearchableToken }) {
  if (token.category !== "Color") return null
  return <span className="size-4 shrink-0 rounded-[3px] border" style={{ background: `var(${token.name})` }} aria-hidden />
}

export function TokenSearch({ tokens }: { tokens: SearchableToken[] }) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return tokens
    return tokens.filter(
      (t) => t.name.toLowerCase().includes(q) || t.scss.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)
    )
  }, [tokens, query])

  const grouped = useMemo(() => {
    const map = new Map<string, SearchableToken[]>()
    for (const t of filtered) map.set(t.category, [...(map.get(t.category) ?? []), t])
    return [...map.entries()]
  }, [filtered])

  return (
    <div className="not-prose space-y-6">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tokens by name or value…"
          className={cn(
            "w-full rounded-md border bg-background px-4 py-2.5 text-sm",
            "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          )}
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
          {filtered.length} of {tokens.length}
        </span>
      </div>

      {grouped.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">No tokens match &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className="space-y-8">
          {grouped.map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                {category} <span className="font-normal text-muted-foreground">({items.length})</span>
              </h4>
              <div className="overflow-hidden rounded-md border">
                {items.map((t) => (
                  <div key={t.name} className="flex items-center justify-between gap-3 border-b px-4 py-2 text-xs last:border-b-0">
                    <span className="flex min-w-0 items-center gap-2">
                      <Swatch token={t} />
                      <code className="truncate font-mono text-[12.5px]">{t.name}</code>
                    </span>
                    <span className="flex shrink-0 items-center gap-3 font-mono text-muted-foreground">
                      <span>{t.value}</span>
                      <CopyButton text={t.scss} className="size-6 opacity-60 hover:opacity-100" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
