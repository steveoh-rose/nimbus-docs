import { colorGroups, fontTokens, shadowTokens, spacingTokens, type Token } from "@/lib/tokens"
import { Badge } from "@/components/ui/badge"

function Mono({ children }: { children: React.ReactNode }) {
  return <code className="font-mono text-xs text-muted-foreground">{children}</code>
}

function ColorCard({ token }: { token: Token }) {
  const translucent = token.value.startsWith("rgba")
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div
        className="h-16 border-b"
        style={
          translucent
            ? {
                // checkerboard shows translucency for rgba() tokens
                backgroundImage: `linear-gradient(var(${token.name}), var(${token.name})), conic-gradient(#e5e5e5 25%, #fff 0 50%, #e5e5e5 0 75%, #fff 0)`,
                backgroundSize: "auto, 12px 12px",
              }
            : { background: `var(${token.name})` }
        }
      />
      <div className="space-y-0.5 p-2.5">
        <div className="flex items-center gap-1.5">
          <span className="truncate font-mono text-[12px] font-medium">{token.name}</span>
          {token.deprecatedNote ? (
            <Badge variant="outline" className="px-1.5 py-0 text-[10px]" title={token.deprecatedNote}>
              deprecated
            </Badge>
          ) : null}
        </div>
        <Mono>{token.scss}</Mono>
        <div className="font-mono text-xs">{token.value}</div>
      </div>
    </div>
  )
}

export function ColorTokens() {
  return (
    <div className="not-prose space-y-10">
      {colorGroups().map((group) => (
        <section key={group.key} id={group.key} className="scroll-mt-24">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{group.title}</h2>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {group.tokens.map((t) => (
              <ColorCard key={t.name} token={t} />
            ))}
          </div>
        </section>
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

export function typographyHeadings() {
  return [
    { depth: 2 as const, text: "Families & weights", slug: "families" },
    { depth: 2 as const, text: "Headings", slug: "headings" },
    { depth: 2 as const, text: "Body", slug: "body" },
    { depth: 2 as const, text: "Article", slug: "article" },
    { depth: 2 as const, text: "Community", slug: "community" },
  ]
}

export function colorHeadings() {
  return colorGroups().map((g) => ({ depth: 2 as const, text: g.title, slug: g.key }))
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
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Families &amp; weights</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {f.families.map((t) => (
            <div key={t.name} className="rounded-lg border p-4">
              <div className="text-3xl" style={{ fontFamily: `var(${t.name})` }}>
                Aa Bb Cc 123
              </div>
              <div className="mt-2 font-mono text-[12px] font-medium">{t.name}</div>
              <Mono>{t.scss}</Mono>
              <div className="font-mono text-xs">{t.value}</div>
            </div>
          ))}
          {f.weights.map((t) => (
            <div key={t.name} className="rounded-lg border p-4">
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
          <h2 className="mb-1 text-lg font-semibold tracking-tight">{title}</h2>
          <div className="rounded-lg border px-4">
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
    <div className="not-prose rounded-lg border px-4">
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
        <div key={s.name} className="rounded-lg border bg-muted/30 p-4">
          <div className="mb-4 h-24 rounded-md bg-white" style={{ boxShadow: s.css }} />
          <div className="font-mono text-[12px] font-medium">shadow-{s.name}</div>
          <div className="font-mono text-xs text-muted-foreground">{s.css}</div>
        </div>
      ))}
    </div>
  )
}
