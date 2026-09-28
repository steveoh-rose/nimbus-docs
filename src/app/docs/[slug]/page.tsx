import { notFound } from "next/navigation"

import { DocShell } from "@/components/doc-shell"
import { MdxBody } from "@/components/nimbus/mdx-body"
import { getHeadings } from "@/lib/mdx"
import { readDocFile } from "@/lib/nimbus"

export const dynamicParams = false

/** Getting-started guides, sourced from nimbus-ui's README / CONTRIBUTING / Storybook docs pages. */
const GUIDES = {
  introduction: {
    title: "Introduction",
    description: "Nimbus UI is the React library counterpart of Console Connect's design system.",
    file: "README.md",
  },
  contributing: {
    title: "Contributing",
    description: "How to develop, test and release changes to Nimbus.",
    file: "CONTRIBUTING.md",
  },
  "testing-guide": {
    title: "Testing Guide",
    description: "Testing a local Nimbus package in a consuming app.",
    file: "pages/testing-guide.mdx",
  },
} as const

export function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({ slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const g = GUIDES[slug as keyof typeof GUIDES]
  return g ? { title: g.title } : {}
}

function clean(raw: string) {
  let fence = false
  let titleDropped = false
  return raw
    .split("\n")
    .filter((line) => {
      if (line.trim().startsWith("```")) fence = !fence
      if (fence) return true
      // The page title comes from the shell, so drop the document's own first top-level heading.
      if (!titleDropped && /^# /.test(line)) {
        titleDropped = true
        return false
      }
      return !/^import\s/.test(line)
    })
    .join("\n")
    .replace(/<Meta[\s\S]*?\/>/g, "")
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params
  const guide = GUIDES[slug as keyof typeof GUIDES]
  if (!guide) notFound()

  const source = clean(readDocFile(guide.file))
  return (
    <DocShell title={guide.title} description={guide.description} headings={getHeadings(source)}>
      <MdxBody source={source} format="md" />
    </DocShell>
  )
}
