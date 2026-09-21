import type { Heading } from "@/lib/mdx"
import { TableOfContents } from "@/components/table-of-contents"

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
  actions?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-8">
      <article className="min-w-0 flex-1 py-8">
        <div className="mb-6 space-y-2">
          <h1 className="scroll-mt-24 font-heading text-[2.5rem] leading-[1.2] font-semibold tracking-tight">{title}</h1>
          {description ? <p className="max-w-[60ch] text-[1.07rem] leading-relaxed text-muted-foreground">{description}</p> : null}
        </div>
        {actions}
        {children}
      </article>
      <TableOfContents headings={headings} />
    </div>
  )
}
