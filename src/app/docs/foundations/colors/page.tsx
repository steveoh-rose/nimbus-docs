import { DocShell } from "@/components/doc-shell"
import { ColorTokens } from "@/components/nimbus/token-views"

export const metadata = { title: "Colors" }

const HEADINGS = [
  { depth: 2 as const, text: "Brand colors", slug: "color-brand" },
  { depth: 2 as const, text: "Palette colors", slug: "color-palette" },
  { depth: 2 as const, text: "Semantic colors", slug: "color-semantic" },
]

export default function ColorsPage() {
  return (
    <DocShell
      title="Colors"
      description="Brand, palette and semantic colors. Reference semantic tokens in product code — they move with you when the palette shifts."
      headings={HEADINGS}
    >
      <ColorTokens />
    </DocShell>
  )
}
