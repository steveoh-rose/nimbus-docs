import { notFound } from "next/navigation"

import { DocShell } from "@/components/doc-shell"
import { IconGallery } from "@/components/nimbus/icon-gallery"
import { CodeBlock } from "@/components/code-block"

export const dynamicParams = false

const SETS = {
  app: {
    title: "App icons",
    description: "Interface icons from @console/nimbus-assets. They inherit color from currentColor and size from font-size.",
  },
  brand: {
    title: "Brand icons",
    description: "Product and brand illustrations from @console/nimbus-assets.",
  },
} as const

export function generateStaticParams() {
  return Object.keys(SETS).map((set) => ({ set }))
}

type PageProps = { params: Promise<{ set: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { set } = await params
  const s = SETS[set as keyof typeof SETS]
  return s ? { title: s.title } : {}
}

export default async function IconsPage({ params }: PageProps) {
  const { set } = await params
  const s = SETS[set as keyof typeof SETS]
  if (!s) notFound()
  const sample = set === "app" ? "Add" : "Cloud"

  return (
    <DocShell title={s.title} description={s.description}>
      <CodeBlock
        code={`import { ${sample} } from '@console/nimbus-assets/icons/${set}';\n\n<${sample} />`}
        lang="tsx"
        className="mt-0 mb-8"
      />
      <IconGallery set={set as "app" | "brand"} />
    </DocShell>
  )
}
