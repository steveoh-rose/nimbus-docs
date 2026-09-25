import { DocShell } from "@/components/doc-shell"
import { TypographyTokens } from "@/components/nimbus/token-views"

export const metadata = { title: "Typography" }

const HEADINGS = [
  { depth: 2 as const, text: "Families & weights", slug: "families" },
  { depth: 2 as const, text: "Headings", slug: "headings" },
  { depth: 2 as const, text: "Body", slug: "body" },
  { depth: 2 as const, text: "Article", slug: "article" },
  { depth: 2 as const, text: "Community", slug: "community" },
]

export default function TypographyPage() {
  return (
    <DocShell
      title="Typography"
      description="Font families, weights and the heading / body / article type scales."
      headings={HEADINGS}
    >
      <TypographyTokens />
    </DocShell>
  )
}
