import { semanticTokens } from "@/lib/tokens"

/** Semantic -> palette mapping, straight from cc-design-tokens. */
export function SemanticTokens({ only }: { only?: string[] }) {
  const groups = semanticTokens().filter((g) => !only || only.includes(g.group))
  return (
    <div className="not-prose my-6 space-y-8">
      {groups.map(({ group, tokens }) => (
        <div key={group}>
          <h4 className="mb-2 text-sm font-semibold capitalize">{group}</h4>
          <div className="overflow-x-auto rounded-md border">
            <table className="w-full text-sm tabular-nums">
              <thead className="bg-muted/60 text-left text-xs text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-medium">Token</th>
                  <th className="px-3 py-2 font-medium">Resolves to</th>
                  <th className="px-3 py-2 font-medium">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {tokens.map((t) => (
                  <tr key={t.name}>
                    <td className="px-3 py-2">
                      <span className="flex items-center gap-2">
                        <span
                          className="size-4 shrink-0 rounded-[3px] border"
                          style={{ background: `var(${t.name})` }}
                          aria-hidden
                        />
                        <code className="font-mono text-[12.5px]">{t.name}</code>
                      </span>
                    </td>
                    <td className="px-3 py-2 font-mono text-[12.5px] text-muted-foreground">{t.alias}</td>
                    <td className="px-3 py-2 font-mono text-[12.5px]">{t.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

const RADII = [
  { token: "none", value: "0", use: "Subtle and plain variants (Callout subtle, group edges)" },
  { token: "$size-spacer-xs", value: "5px", use: "Default for controls and surfaces: Button, TextInput, Callout, Table, Popover, Menu" },
  { token: "$size-spacer-sm", value: "10px", use: "Larger containers, such as Disclosure groups" },
  { token: "toast neutral", value: "8px", use: "Neutral Toast" },
  { token: "$button-borderRadius-rounded", value: "30px", use: "Button with the rounded prop (pill)" },
]

export function RadiusScale() {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-md border">
      <table className="w-full text-sm tabular-nums">
        <thead className="bg-muted/60 text-left text-xs text-muted-foreground">
          <tr>
            <th className="w-28 px-3 py-2 font-medium">Sample</th>
            <th className="px-3 py-2 font-medium">Token</th>
            <th className="px-3 py-2 font-medium">Value</th>
            <th className="px-3 py-2 font-medium">Used for</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {RADII.map((r) => (
            <tr key={r.token}>
              <td className="px-3 py-3">
                <div
                  className="h-10 w-20 border-2 border-primary bg-[var(--color-primary-100)]"
                  style={{ borderRadius: r.value === "0" ? 0 : r.value }}
                />
              </td>
              <td className="px-3 py-2 font-mono text-[12.5px]">{r.token}</td>
              <td className="px-3 py-2 font-mono text-[12.5px]">{r.value}</td>
              <td className="px-3 py-2 text-muted-foreground">{r.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
