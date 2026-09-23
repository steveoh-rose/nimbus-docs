import { notFound } from "next/navigation"

import { DocShell } from "@/components/doc-shell"
import { MdxBody } from "@/components/nimbus/mdx-body"
import { ShareLinksBar } from "@/components/nimbus/blocks"
import { componentHeadings, getComponentSections } from "@/lib/nimbus"
import { componentBySlug, componentSlug, componentTiers, documentedComponents } from "@/lib/nimbus-nav"

export const dynamicParams = false

export function generateStaticParams() {
  return documentedComponents().map((c) => ({ slug: componentSlug(c.name) }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const c = componentBySlug(slug)
  return c ? { title: c.name } : {}
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params
  const component = componentBySlug(slug)
  if (!component) notFound()

  const isComplex = componentTiers().complex.includes(component.name)
  const sections = getComponentSections(component.name, isComplex)
  const links = {
    github: `https://github.com/ConsoleConnect/nimbus-ui/tree/main/src/core/${component.name}`,
    ...(sections.find((s) => Object.keys(s.links).length)?.links ?? {}),
  }

  return (
    <DocShell
      title={component.name}
      eyebrow={isComplex ? "Complex component" : "Core component"}
      headings={componentHeadings(sections)}
      actions={<ShareLinksBar links={links} />}
    >
      {sections.map((section, i) => (
        <div key={i}>
          {section.title ? (
            <h2 id={section.title.toLowerCase()} className="mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight">
              {section.title}
            </h2>
          ) : null}
          <MdxBody source={section.body} />
        </div>
      ))}
    </DocShell>
  )
}
