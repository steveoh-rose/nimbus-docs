"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { sectionOf, sectionTabs } from "@/lib/nav-config"

/** Header tab row, shadcn/ui docs style: plain text links, no icons or underline. */
export function SectionTabs() {
  const pathname = usePathname()
  const active = sectionOf(pathname)

  return (
    <nav aria-label="Sections" className="flex gap-4 overflow-x-auto">
      {sectionTabs.map((tab) => {
        const isActive = active === tab.title
        return (
          <Link
            key={tab.title}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-10 shrink-0 items-center text-sm transition-colors",
              isActive ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.title}
          </Link>
        )
      })}
    </nav>
  )
}
