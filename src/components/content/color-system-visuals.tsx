import { allTokens, PALETTE_FAMILIES, PALETTE_STEPS, paletteContrastTable } from "@/lib/tokens"
import { cn } from "@/lib/utils"

/**
 * Real WCAG contrast-vs-white ratio for every palette family, at every step — computed
 * straight from the shipped hex values in cc-design-tokens, not asserted.
 */
export function ContrastConsistencyTable() {
  const rows = paletteContrastTable()
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-md border">
      <table className="w-full text-sm tabular-nums">
        <thead className="bg-muted/60 text-left text-xs text-muted-foreground">
          <tr>
            <th className="px-3 py-2 font-medium">Step</th>
            {PALETTE_FAMILIES.map((family) => (
              <th key={family} className="px-3 py-2 font-medium capitalize">
                {family}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.map((row) => (
            <tr key={row.step}>
              <td className="px-3 py-2 font-mono text-xs font-medium">{row.step}</td>
              {PALETTE_FAMILIES.map((family) => {
                const ratio = row.values[family]
                const passesAA = ratio != null && ratio >= 4.5
                return (
                  <td
                    key={family}
                    className={cn(
                      "px-3 py-2 font-mono text-xs",
                      passesAA ? "font-semibold text-[var(--color-success-500)]" : "text-muted-foreground"
                    )}
                  >
                    {ratio?.toFixed(2) ?? "—"}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
        Contrast ratio against white. <span className="text-[var(--color-success-500)]">Green</span> cells clear the
        WCAG AA threshold for normal text (4.5:1).
      </p>
    </div>
  )
}

/** The ten hue families' full ramps, in the same order and steps as the contrast table above. */
export function PaletteFamilySwatches() {
  const byName = new Map(allTokens().map((t) => [t.name, t]))
  return (
    <div className="not-prose my-6 space-y-2.5">
      {PALETTE_FAMILIES.map((family) => (
        <div key={family} className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-xs font-medium text-muted-foreground capitalize">{family}</span>
          <div className="flex flex-1 overflow-hidden rounded-md border">
            {PALETTE_STEPS.map((step) => {
              const token = byName.get(`--color-palette-${family}-${step}`)
              if (!token) return null
              return (
                <div
                  key={step}
                  className="h-8 flex-1"
                  style={{ background: token.value }}
                  title={`${family} ${step} — ${token.value}`}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
