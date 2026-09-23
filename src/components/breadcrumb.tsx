"use client"

import { usePathname } from "next/navigation"

import { sectionOf, sidebarNav } from "@/lib/nav-config"

/** Primer-style breadcrumb: "Section / Subsection / Page", derived from the current route. */
export function Breadcrumb({ title }: { title: string }) {
  const pathname = usePathname()
  const section = sectionOf(pathname)
  const group = sidebarNav.find((g) => g.items.some((i) => i.href === pathname))

  let crumbs = [section, group?.title, title].filter((c): c is string => !!c)
  crumbs = crumbs.filter((c, i) => i === 0 || c !== crumbs[i - 1])
  if (crumbs.length < 2) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-2 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 ? <span className="text-muted-foreground/50">/</span> : null}
          <span className={i === crumbs.length - 1 ? "text-foreground" : undefined}>{c}</span>
        </span>
      ))}
    </nav>
  )
}
