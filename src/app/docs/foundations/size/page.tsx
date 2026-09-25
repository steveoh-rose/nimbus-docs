import { DocShell } from "@/components/doc-shell"
import { Note } from "@/components/content/guidance"
import { spacingTokens } from "@/lib/tokens"

export const metadata = { title: "Size" }

const HEADINGS = [
  { depth: 2 as const, text: "Spacer scale", slug: "spacer-scale" },
  { depth: 2 as const, text: "Proposed 4pt sizing scale", slug: "proposed-4pt-scale" },
]

const PROPOSED_4PT_SCALE = [4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64] as const

export default function SizePage() {
  const spacers = spacingTokens()
  return (
    <DocShell
      title="Size"
      description="Sizing for icons, avatars and other fixed-dimension elements."
      headings={HEADINGS}
    >
      <div className="space-y-10">
        <section id="spacer-scale" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Spacer scale</h2>
          <p className="mb-4 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
            Nimbus doesn&apos;t ship a dedicated element-sizing token set today. The closest existing
            scale is <code className="font-mono text-[13px]">size.spacer</code> from cc-design-tokens,
            used for padding, margin and gaps rather than fixed element sizes.
          </p>
          <div className="not-prose rounded-md border px-4">
            {spacers.map((t) => (
              <div
                key={t.name}
                className="grid items-center gap-3 border-b py-4 last:border-b-0 sm:grid-cols-[minmax(0,260px)_1fr]"
              >
                <div className="space-y-1">
                  <div className="font-mono text-[12px] font-medium">{t.name}</div>
                  <code className="font-mono text-xs text-muted-foreground">{t.scss}</code>
                  <div className="font-mono text-xs">{t.value}</div>
                </div>
                <div className="h-5 rounded-sm bg-primary" style={{ width: `var(${t.name})` }} />
              </div>
            ))}
          </div>
        </section>

        <section id="proposed-4pt-scale" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Proposed 4pt sizing scale</h2>
          <Note title="Proposed — not a shipped token">
            The spacer scale above isn&apos;t 4pt-aligned and has no steps under 16px, which makes it a
            poor fit for icon and avatar sizing. Nothing below is in cc-design-tokens yet — it&apos;s a
            draft for review. If approved, it would ship as a new <code>size.element</code> token group.
          </Note>
          <div className="not-prose mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {PROPOSED_4PT_SCALE.map((px) => (
              <div key={px} className="flex flex-col items-center gap-3 rounded-md border p-4">
                <div
                  className="rounded-sm bg-primary/80"
                  style={{ width: px, height: px, minWidth: 4, minHeight: 4 }}
                />
                <div className="text-center font-mono text-xs text-muted-foreground">{px}px</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DocShell>
  )
}
