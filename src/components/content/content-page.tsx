import { notFound } from "next/navigation"

import { DocShell } from "@/components/doc-shell"
import { MdxBody } from "@/components/nimbus/mdx-body"
import { readContent } from "@/lib/content"
import { getHeadings } from "@/lib/mdx"

export function ContentPage({ section, slug }: { section: string; slug: string }) {
  const page = readContent(section, slug)
  if (!page) notFound()
  return (
    <DocShell title={page.title} description={page.description} headings={getHeadings(page.body)}>
      <MdxBody source={page.body} />
    </DocShell>
  )
}
