import { colorGroups, contrastRatio, fontTokens, shadowTokens, spacingTokens, type Token } from "@/lib/tokens"

function Mono({ children }: { children: React.ReactNode }) {
  return <code className="font-mono text-xs text-muted-foreground">{children}</code>
}

/** Step label from a token name, relative to its group's own prefix: --color-brand-light-grey
 *  in group "brand" -> "light-grey", --color-palette-sky-500 in group "palette-sky" -> "500". */
function stepOf(name: string, groupKey: string) {
  const prefix = `--color-${groupKey}-`
  return name.startsWith(prefix) ? name.slice(prefix.length) : (name.split("-").pop() ?? name)
}

/** White or near-black, whichever reads better on this swatch. Falls back to dark for rgba() tokens. */
function textColorFor(hex: string): string {
  if (!hex.startsWith("#")) return "#111111"
  return contrastRatio(hex, "#ffffff") >= contrastRatio(hex, "#000000") ? "#ffffff" : "#111111"
}

/**
 * One color family as a swatch card: a colored header (family name + its representative step)
 * over a stacked list of every step, each row filled with that step's own resolved color.
 */
function ColorGroupCard({ group }: { group: ReturnType<typeof colorGroups>[number] }) {
  const header = group.tokens.find((t) => stepOf(t.name, group.key) === "500") ?? group.tokens[0]
  return (
    <div id={group.key} className="scroll-mt-24 overflow-hidden rounded-md border">
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ background: `var(${header.name})`, color: textColorFor(header.value) }}
      >
        <span className="text-xs font-bold tracking-wide uppercase">{group.title}</span>
        <span className="font-mono text-xs">
          {stepOf(header.name, group.key)} {header.value}
        </span>
      </div>
      <div>
        {group.tokens.map((t) => (
          <div
            key={t.name}
            className="flex items-center justify-between px-4 py-2 text-xs"
            style={{ background: `var(${t.name})`, color: textColorFor(t.value) }}
            title={t.deprecatedNote ? `Deprecated: ${t.deprecatedNote}` : t.name}
          >
            <span className="font-mono opacity-80">{stepOf(t.name, group.key)}</span>
            <span className="font-mono">{t.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ColorTokens() {
  return (
    <div className="not-prose grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {colorGroups().map((group) => (
        <ColorGroupCard key={group.key} group={group} />
      ))}
    </div>
  )
}

function FontRow({ token }: { token: Token }) {
  return (
    <div className="grid gap-2 border-b py-4 last:border-b-0 md:grid-cols-[minmax(0,260px)_1fr] md:gap-6">
      <div className="space-y-1">
        <div className="font-mono text-[12px] font-medium">{token.name}</div>
        <Mono>{token.scss}</Mono>
        <div className="font-mono text-xs">{token.value}</div>
      </div>
      <div style={{ font: `var(${token.name})` }} className="self-center text-foreground">
        Console Connect connects you to the cloud
      </div>
    </div>
  )
}

export function TypographyTokens() {
  const f = fontTokens()
  const sections: Array<[string, string, Token[]]> = [
    ["headings", "Headings", f.headings],
    ["body", "Body", f.body],
    ["article", "Article", f.article],
    ["community", "Community", f.community],
  ]
  return (
    <div className="not-prose space-y-10">
      <section id="families" className="scroll-mt-24">
        <h3 className="mb-3 text-lg font-semibold tracking-tight">Families &amp; weights</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {f.families.map((t) => (
            <div key={t.name} className="rounded-md border p-4">
              <div className="text-3xl" style={{ fontFamily: `var(${t.name})` }}>
                Aa Bb Cc 123
              </div>
              <div className="mt-2 font-mono text-[12px] font-medium">{t.name}</div>
              <Mono>{t.scss}</Mono>
              <div className="font-mono text-xs">{t.value}</div>
            </div>
          ))}
          {f.weights.map((t) => (
            <div key={t.name} className="rounded-md border p-4">
              <div className="text-3xl" style={{ fontWeight: Number(t.value) }}>
                Weight {t.value}
              </div>
              <div className="mt-2 font-mono text-[12px] font-medium">{t.name}</div>
              <Mono>{t.scss}</Mono>
            </div>
          ))}
        </div>
      </section>
      {sections.map(([id, title, tokens]) => (
        <section key={id} id={id} className="scroll-mt-24">
          <h3 className="mb-1 text-lg font-semibold tracking-tight">{title}</h3>
          <div className="rounded-md border px-4">
            {tokens.map((t) => (
              <FontRow key={t.name} token={t} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export function SpacingTokens() {
  return (
    <div className="not-prose rounded-md border px-4">
      {spacingTokens().map((t) => (
        <div
          key={t.name}
          className="grid items-center gap-3 border-b py-4 last:border-b-0 sm:grid-cols-[minmax(0,260px)_1fr]"
        >
          <div className="space-y-1">
            <div className="font-mono text-[12px] font-medium">{t.name}</div>
            <Mono>{t.scss}</Mono>
            <div className="font-mono text-xs">{t.value}</div>
          </div>
          <div className="h-5 rounded-sm bg-primary" style={{ width: `var(${t.name})` }} />
        </div>
      ))}
    </div>
  )
}

export function ShadowTokens() {
  return (
    <div className="not-prose grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {shadowTokens().map((s) => (
        <div key={s.name} className="rounded-md border bg-muted/30 p-4">
          <div className="mb-4 h-24 rounded-md bg-white" style={{ boxShadow: s.css }} />
          <div className="font-mono text-[12px] font-medium">shadow-{s.name}</div>
          <div className="font-mono text-xs text-muted-foreground">{s.css}</div>
        </div>
      ))}
    </div>
  )
}
