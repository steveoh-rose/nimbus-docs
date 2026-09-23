"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import type { Heading } from "@/lib/mdx"

/** "On this page" list with scroll tracking. */
export function TableOfContents({
  headings,
  className,
}: {
  headings: Heading[]
  className?: string
}) {
  const [active, setActive] = React.useState<string | null>(null)

  React.useEffect(() => {
    const els = headings
      .map((h) => document.getElementById(h.slug))
      .filter((el): el is HTMLElement => !!el)
    if (!els.length) return
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        }
        const first = els.find((el) => visible.has(el.id))
        if (first) setActive(first.id)
      },
      { rootMargin: "-120px 0px -65% 0px" }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <aside className={cn("sticky top-[7rem] hidden h-fit max-h-[calc(100vh-8rem)] w-56 shrink-0 overflow-y-auto xl:block", className)}>
      <h4 className="mb-2 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">On this page</h4>
      <ul className="flex flex-col text-sm">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              aria-current={active === heading.slug ? "location" : undefined}
              className={cn(
                "block py-1 transition-colors hover:text-foreground",
                heading.depth === 3 && "pl-3",
                active === heading.slug ? "font-medium text-foreground" : "text-muted-foreground"
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
