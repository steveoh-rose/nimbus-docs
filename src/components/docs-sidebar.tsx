"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { sectionOf, sidebarNav } from "@/lib/nav-config"

/**
 * Sidebar list. On desktop it shows only the current section (like heroui.com, where the
 * header tabs pick the section); the mobile sheet passes `all` to show every section.
 */
export function DocsNavList({
  onNavigate,
  className,
  all,
}: {
  onNavigate?: () => void
  className?: string
  all?: boolean
}) {
  const pathname = usePathname()
  const current = sectionOf(pathname)
  const groups = all || !current ? sidebarNav : sidebarNav.filter((g) => g.section === current)

  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      {groups.map((group, i) => {
        const newSection = groups[i - 1]?.section !== group.section
        return (
          <div key={`${group.section}-${group.title ?? ""}`} className={cn(newSection && i > 0 && "mt-6")}>
            {newSection ? (
              <h4 className="mb-1.5 px-3 text-sm font-medium text-foreground">{group.section}</h4>
            ) : null}
            {group.title ? (
              <h5 className={cn("mb-1 px-3 text-xs font-medium text-muted-foreground", !newSection && "mt-4")}>
                {group.title}
              </h5>
            ) : null}
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                        active
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-accent/40 hover:text-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </nav>
  )
}

export function DocsSidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "sticky top-[6.25rem] hidden h-[calc(100vh-6.25rem)] w-60 shrink-0 overflow-y-auto py-6 pr-3 lg:block",
        className
      )}
    >
      <DocsNavList />
    </aside>
  )
}
