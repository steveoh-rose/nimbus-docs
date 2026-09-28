import { DocShell } from "@/components/doc-shell"
import { BrandGradients } from "@/components/content/brand-gradients"
import { ColorTokens } from "@/components/nimbus/token-views"

export const metadata = { title: "Colors" }

const HEADINGS = [
  { depth: 2 as const, text: "Brand colors", slug: "color-brand" },
  { depth: 2 as const, text: "Brand gradients", slug: "brand-gradients" },
  { depth: 2 as const, text: "Palette colors", slug: "color-palette" },
  { depth: 2 as const, text: "Semantic colors", slug: "color-semantic" },
]

export default function ColorsPage() {
  return (
    <DocShell
      title="Colors"
      description="Brand colors and gradients, the perceptual palette, and the semantic colors product code should reference — they move with you when the palette shifts."
      headings={HEADINGS}
    >
      <ColorTokens afterBrand={<BrandGradients />} />
    </DocShell>
  )
}
