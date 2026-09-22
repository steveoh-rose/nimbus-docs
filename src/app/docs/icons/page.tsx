import { DocShell } from "@/components/doc-shell"
import { CodeBlock } from "@/components/code-block"
import { IconGallery } from "@/components/nimbus/icon-gallery"

export const metadata = { title: "Icons" }

const HEADINGS = [
  { depth: 2 as const, text: "App icons", slug: "app" },
  { depth: 2 as const, text: "Brand icons", slug: "brand" },
]

export default function IconsPage() {
  return (
    <DocShell
      title="Icons"
      description="Icons from @console/nimbus-assets. They take their color from currentColor and their size from font-size."
      headings={HEADINGS}
    >
      <CodeBlock
        code={"import { Add } from '@console/nimbus-assets/icons/app';\n\n<Add />"}
        lang="tsx"
        className="mt-0 mb-10"
      />
      <div className="space-y-10">
        <section id="app" className="scroll-mt-24">
          <h2 className="mb-3 font-heading text-xl font-semibold tracking-tight">App icons</h2>
          <IconGallery set="app" />
        </section>
        <section id="brand" className="scroll-mt-24">
          <h2 className="mb-3 font-heading text-xl font-semibold tracking-tight">Brand icons</h2>
          <IconGallery set="brand" />
        </section>
      </div>
    </DocShell>
  )
}
