"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { sectionOf, sectionTabs } from "@/lib/nav-config"

/** Header tab row. The active section is marked with the brand's gradient cursor bar. */
export function SectionTabs() {
  const pathname = usePathname()
  const active = sectionOf(pathname)

  return (
    <nav aria-label="Sections" className="flex items-center gap-1">
      {sectionTabs.map((tab) => {
        const isActive = active === tab.title
        return (
          <Link
            key={tab.title}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative flex h-9 shrink-0 items-center rounded-full px-3.5 text-[0.9rem] font-semibold transition-colors",
              isActive ? "text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {tab.title}
            {isActive ? (
              <span
                aria-hidden
                className="absolute inset-x-3.5 -bottom-[13px] h-[3px] rounded-full"
                style={{ background: "var(--gradient-the-way-of-water)" }}
              />
            ) : null}
          </Link>
        )
      })}
    </nav>
  )
}
