import type { Heading } from "@/lib/mdx"
import { TableOfContents } from "@/components/table-of-contents"
import { CopyPageButton } from "@/components/copy-page-button"

export function DocShell({
  title,
  description,
  headings = [],
  actions,
  children,
}: {
  title: string
  description?: string
  headings?: Heading[]
  /** Pill links shown under the description (React Aria docs, Source, ...). */
  actions?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-10">
      <article className="min-w-0 flex-1 py-8">
        <div className="mb-5 flex items-start justify-between gap-4">
          <h1 className="scroll-mt-32 font-heading text-[2rem] leading-[1.2] font-semibold tracking-tight">{title}</h1>
          <CopyPageButton />
        </div>
        {description ? (
          <p className="max-w-[60ch] text-[1.07rem] leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
        {actions ? <div className="mt-5">{actions}</div> : null}
        <div className="mt-8">{children}</div>
      </article>
      <TableOfContents headings={headings} />
    </div>
  )
}
