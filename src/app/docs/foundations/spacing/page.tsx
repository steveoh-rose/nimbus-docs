import { DocShell } from "@/components/doc-shell"
import { SpacingTokens } from "@/components/nimbus/token-views"

export const metadata = { title: "Spacing" }

const HEADINGS = [{ depth: 2 as const, text: "Spacer scale", slug: "spacer-scale" }]

export default function SpacingPage() {
  return (
    <DocShell
      title="Spacing"
      description="The spacer scale used for padding, margin and gaps."
      headings={HEADINGS}
    >
      <section id="spacer-scale" className="scroll-mt-24">
        <SpacingTokens />
      </section>
    </DocShell>
  )
}
