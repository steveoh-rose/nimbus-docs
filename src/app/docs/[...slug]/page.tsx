import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"

import { getAllDocSlugs, getDocBySlug, getHeadings } from "@/lib/mdx"
import { mdxComponents } from "@/components/mdx-components"
import { DocsSidebar } from "@/components/docs-sidebar"
import { TableOfContents } from "@/components/table-of-contents"

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }))
}

type PageProps = {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const doc = getDocBySlug(slug)
  if (!doc) return {}
  return {
    title: doc.meta.title,
    description: doc.meta.description,
  }
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const doc = getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  const headings = getHeadings(doc.content)

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-1 items-start gap-8 px-4 lg:px-8">
      <DocsSidebar />
      <article className="min-w-0 flex-1 py-8">
        <div className="mb-8 space-y-2">
          <h1 className="scroll-mt-24 text-3xl font-bold tracking-tight">
            {doc.meta.title}
          </h1>
          {doc.meta.description ? (
            <p className="text-lg text-muted-foreground">{doc.meta.description}</p>
          ) : null}
        </div>
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-pre:border-none prose-pre:bg-transparent prose-pre:p-0">
          <MDXRemote
            source={doc.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  [
                    rehypePrettyCode,
                    {
                      theme: {
                        light: "github-light-default",
                        dark: "github-dark-default",
                      },
                      defaultLang: "tsx",
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </article>
      <TableOfContents headings={headings} />
    </div>
  )
}
