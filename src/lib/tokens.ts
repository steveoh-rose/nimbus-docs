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
    .map(([key, tokens]) => ({ key, title: titleCase(key.replace(/^palette-/, "")), tokens }))
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

/** WCAG 2 relative luminance + contrast ratio, straight from the spec formula. */
function relativeLuminance(hex: string): number {
  const n = hex.replace("#", "")
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
  const f = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
  const [R, G, B] = [r, g, b].map(f)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

export function contrastRatio(hexA: string, hexB: string): number {
  const [l1, l2] = [relativeLuminance(hexA), relativeLuminance(hexB)].sort((a, b) => b - a)
  return (l1 + 0.05) / (l2 + 0.05)
}

export const PALETTE_FAMILIES = [
  "sky",
  "lavender",
  "ocean",
  "emerald",
  "gold",
  "amber",
  "ruby",
  "graphite",
  "stone",
  "slate",
] as const

export const PALETTE_STEPS = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const

/**
 * Contrast ratio against white for every palette family, at every step. Used to demonstrate
 * that the palette's perceptual-lightness steps hold a consistent contrast regardless of hue —
 * step 500 passes AA text contrast (4.5:1) in every family, not just some.
 */
export function paletteContrastTable() {
  const byName = new Map(allTokens().map((t) => [t.name, t]))
  return PALETTE_STEPS.map((step) => ({
    step,
    values: Object.fromEntries(
      PALETTE_FAMILIES.map((family) => {
        const token = byName.get(`--color-palette-${family}-${step}`)
        return [family, token ? Math.round(contrastRatio(token.value, "#ffffff") * 100) / 100 : null]
      })
    ) as Record<(typeof PALETTE_FAMILIES)[number], number | null>,
  }))
}

export type SemanticToken = { name: string; alias: string; value: string; note?: string }

/**
 * Semantic tokens (themes.tokens.json) resolve to palette tokens. Returns them grouped
 * (bg, system, text, ...) with the palette alias each one points at.
 */
export function semanticTokens(): Array<{ group: string; tokens: SemanticToken[] }> {
  const raw = JSON.parse(fs.readFileSync(path.join(TOKENS, "source", "themes.tokens.json"), "utf8")).color as Record<
    string,
    Record<string, any>
  >
  const byName = new Map(allTokens().map((t) => [t.name, t]))
  const groups: Array<{ group: string; tokens: SemanticToken[] }> = []
  for (const [group, entries] of Object.entries(raw)) {
    const tokens: SemanticToken[] = []
    for (const [key, node] of Object.entries(entries)) {
      if (!node || typeof node !== "object" || !("value" in node)) continue
      const name = `--color-${group}-${key}`
      const resolved = byName.get(name)
      const ref = /^\{color\.palette\.(.+)\.value\}$/.exec(String(node.value))
      tokens.push({
        name,
        alias: node.docs?.alias ?? (ref ? `$color-palette-${ref[1].replace(/\./g, "-")}` : "(literal)"),
        value: resolved?.value ?? String(node.value),
        note: node.deprecated ? "deprecated" : node.docs?.description,
      })
    }
    if (tokens.length) groups.push({ group, tokens })
  }
  return groups
}
