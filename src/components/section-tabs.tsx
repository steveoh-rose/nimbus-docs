"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Article, Categories, Explore, Grid, Sparkles, Workspaces } from "@nimbus/assets/icons/app"

import { cn } from "@/lib/utils"
import { sectionOf, sectionTabs } from "@/lib/nav-config"

const ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "Getting Started": Explore,
  Foundations: Article,
  Tokens: Sparkles,
  Components: Grid,
  Patterns: Workspaces,
}

/** Header tab row, like heroui.com: icon + label, underline on the active section. */
export function SectionTabs() {
  const pathname = usePathname()
  const active = sectionOf(pathname)

  return (
    <nav aria-label="Sections" className="-mb-px flex gap-1 overflow-x-auto">
      {sectionTabs.map((tab) => {
        const Icon = ICONS[tab.title] ?? Grid
        const isActive = active === tab.title
        return (
          <Link
            key={tab.title}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-11 shrink-0 items-center gap-2 border-b-2 px-3 text-sm transition-colors",
              isActive
                ? "border-primary font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="size-[18px]" />
            {tab.title}
          </Link>
        )
      })}
    </nav>
  )
}
