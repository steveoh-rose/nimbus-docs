"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { sectionOf, sectionTabs } from "@/lib/nav-config"

/** Header tab row, HeroUI (Fumadocs) style: text links with a primary-colored underline on the active section. */
export function SectionTabs() {
  const pathname = usePathname()
  const active = sectionOf(pathname)

  return (
    <nav aria-label="Sections" className="flex gap-5 overflow-x-auto">
      {sectionTabs.map((tab) => {
        const isActive = active === tab.title
        return (
          <Link
            key={tab.title}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-10 shrink-0 items-center border-b-2 pb-0.5 text-sm font-medium transition-colors",
              isActive ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.title}
          </Link>
        )
      })}
    </nav>
  )
}
