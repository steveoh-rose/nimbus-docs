import "server-only"
import fs from "node:fs"
import path from "node:path"

const TOKENS = path.join(process.cwd(), "src", "nimbus", "tokens")

export type Token = { name: string; value: string; scss: string; deprecatedNote?: string }

let cache: Token[] | null = null

/** Every token from cc-design-tokens' built CSS (values already resolved). */
export function allTokens(): Token[] {
  if (cache) return cache
  const css = fs.readFileSync(path.join(TOKENS, "build", "css", "_variables.css"), "utf8")
  const out: Token[] = []
  for (const m of css.matchAll(/^\s*(--[\w-]+):\s*(.+?);\s*(?:\/\*\s*(.*?)\s*\*\/)?\s*$/gm)) {
    out.push({
      name: m[1],
      value: m[2].trim(),
      scss: `$${m[1].slice(2)}`,
      deprecatedNote: m[3]?.replace(/`/g, ""),
    })
  }
  cache = out
  return out
}

const titleCase = (s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

const COLOR_ORDER = ["brand", "primary", "accent", "success", "error", "status", "text", "system", "bg"]

export function colorGroups() {
  const groups = new Map<string, Token[]>()
  for (const t of allTokens().filter((t) => t.name.startsWith("--color-"))) {
    const parts = t.name.slice("--color-".length).split("-")
    let key = parts[0]
    if (key === "palette") key = /^(black|white)$/.test(parts[1]) ? "palette-basics" : `palette-${parts[1]}`
    if (key === "pricing") key = "pricing-zone"
    groups.set(key, [...(groups.get(key) ?? []), t])
  }
  const rank = (k: string) => {
    const i = COLOR_ORDER.indexOf(k)
    if (i >= 0) return i
    return k.startsWith("palette") ? 100 : 50
  }
  return [...groups.entries()]
    .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b))
    .map(([key, tokens]) => ({ key, title: titleCase(key.replace("palette-", "Palette ")), tokens }))
}

export function fontTokens() {
  const fonts = allTokens().filter((t) => t.name.startsWith("--font-"))
  const spec = (t: Token) => !/-(size|line-height)$/.test(t.name)
  const pick = (prefix: string) => fonts.filter((t) => t.name.startsWith(prefix) && spec(t))
  return {
    families: fonts.filter((t) => t.name.startsWith("--font-family-")),
    weights: fonts.filter((t) => t.name.startsWith("--font-weight-")),
    headings: pick("--font-heading-"),
    body: pick("--font-body-"),
    article: pick("--font-article-"),
    community: pick("--font-community-"),
  }
}

export function spacingTokens() {
  return allTokens().filter((t) => t.name.startsWith("--size-spacer-"))
}

export type ShadowToken = { name: string; css: string }

export function shadowTokens(): ShadowToken[] {
  const raw = JSON.parse(fs.readFileSync(path.join(TOKENS, "source", "shadow.tokens.json"), "utf8")).shadow as Record<
    string,
    { x: string; y: string; blur: string; color: string; alpha: string }
  >
  return Object.entries(raw).map(([name, s]) => ({
    name,
    css: `${s.x}px ${s.y}px ${s.blur}px ${s.color.replace(/\{[^}]+\}/, s.alpha)}`,
  }))
}
