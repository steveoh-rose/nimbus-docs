"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { sectionOf, sectionTabs } from "@/lib/nav-config"

/** Header tab row, shadcn/ui style: plain ghost-button links, no underline or color on the active one. */
export function SectionTabs() {
  const pathname = usePathname()
  const active = sectionOf(pathname)

  return (
    <nav aria-label="Sections" className="flex items-center gap-0.5 overflow-x-auto">
      {sectionTabs.map((tab) => {
        const isActive = active === tab.title
        return (
          <Link
            key={tab.title}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-8 shrink-0 items-center rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-accent",
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.title}
          </Link>
        )
      })}
    </nav>
  )
}
