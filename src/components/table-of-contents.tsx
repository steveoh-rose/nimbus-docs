import { cn } from "@/lib/utils"
import type { Heading } from "@/lib/mdx"

export function TableOfContents({
  headings,
  className,
}: {
  headings: Heading[]
  className?: string
}) {
  if (headings.length === 0) return null

  return (
    <aside
      className={cn(
        "sticky top-[4.5rem] hidden h-fit w-56 shrink-0 xl:block",
        className
      )}
    >
      <h4 className="mb-3 text-sm font-semibold">On this page</h4>
      <ul className="flex flex-col gap-2 border-l text-sm">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              className={cn(
                "-ml-px block border-l pl-3 text-muted-foreground transition-colors hover:border-l-foreground/40 hover:text-foreground",
                heading.depth === 3 && "pl-6"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
