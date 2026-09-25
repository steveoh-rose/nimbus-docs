import { colorGroups, contrastRatio, fontTokens, shadowTokens, spacingTokens, type Token } from "@/lib/tokens"
import { CopyButton } from "@/components/copy-button"

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
 * One color family: its name floats above as a plain label (no background), followed by a
 * card stacking every step, each row filled with that step's own resolved color.
 */
function ColorGroupCard({ group }: { group: ReturnType<typeof colorGroups>[number] }) {
  const tokens = group.tokens.filter((t) => !t.deprecatedNote)
  if (!tokens.length) return null
  return (
    <div id={group.key} className="scroll-mt-24">
      <h4 className="mb-2 text-sm font-semibold text-foreground">{group.title}</h4>
      <div className="overflow-hidden rounded-md border">
        {tokens.map((t) => {
          const contrast = t.value.startsWith("#") ? contrastRatio(t.value, "#ffffff") : null
          return (
            <div
              key={t.name}
              className="group flex items-center justify-between gap-3 px-4 py-2 text-xs"
              style={{ background: `var(${t.name})`, color: textColorFor(t.value) }}
              title={t.name}
            >
              <span className="font-mono opacity-80">{stepOf(t.name, group.key)}</span>
              <span className="flex items-center gap-3 font-mono">
                {contrast !== null ? (
                  <span className="opacity-70" title="Contrast ratio against white">
                    {contrast.toFixed(2)}:1
                  </span>
                ) : null}
                <span>{t.value}</span>
                <CopyButton
                  text={t.scss}
                  className="size-6 text-inherit opacity-60 hover:bg-black/10 hover:text-inherit hover:opacity-100"
                />
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ColorGroupGrid({ groups }: { groups: ReturnType<typeof colorGroups> }) {
  return (
    <div className="not-prose grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {groups.map((group) => (
        <ColorGroupCard key={group.key} group={group} />
      ))}
    </div>
  )
}

export function ColorTokens() {
  const groups = colorGroups()
  const brand = groups.filter((g) => g.key === "brand")
  const palette = groups.filter((g) => g.key.startsWith("palette"))
  const semantic = groups.filter((g) => g.key !== "brand" && !g.key.startsWith("palette"))

  return (
    <div className="space-y-10">
      <section id="color-brand" className="scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Brand colors</h2>
        <ColorGroupGrid groups={brand} />
      </section>
      <section id="color-palette" className="scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Palette colors</h2>
        <ColorGroupGrid groups={palette} />
      </section>
      <section id="color-semantic" className="scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Semantic colors</h2>
        <ColorGroupGrid groups={semantic} />
      </section>
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
