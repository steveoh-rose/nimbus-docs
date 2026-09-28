"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import type { Heading } from "@/lib/mdx"

/** "On this page" list with scroll tracking; the active entry carries the brand gradient bar. */
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
    <aside className={cn("sticky top-24 hidden h-fit max-h-[calc(100vh-7rem)] w-56 shrink-0 overflow-y-auto pt-8 xl:block", className)}>
      <h4 className="brand-kicker mb-3">On this page</h4>
      <ul className="flex flex-col border-l-2 border-[var(--border)] text-[0.85rem]">
        {headings.map((heading) => {
          const isActive = active === heading.slug
          return (
            <li key={heading.slug} className="relative">
              {isActive ? (
                <span
                  aria-hidden
                  className="absolute top-1 bottom-1 -left-[2px] w-[2px] rounded-full"
                  style={{ background: "linear-gradient(180deg, var(--color-brand-purple), var(--color-brand-aqua))" }}
                />
              ) : null}
              <a
                href={`#${heading.slug}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block py-1.5 pl-4 leading-snug transition-colors hover:text-foreground",
                  heading.depth === 3 && "pl-7",
                  isActive ? "font-semibold text-foreground" : "text-muted-foreground"
                )}
              >
                {heading.text}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
