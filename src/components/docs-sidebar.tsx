"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { sectionOf, sidebarNav } from "@/lib/nav-config"

/**
 * Sidebar list. On desktop it shows only the current section (the header tabs pick the
 * section); the mobile sheet passes `all` to show every section.
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
          <div key={`${group.section}-${group.title ?? ""}`} className={cn(newSection && i > 0 && "mt-7")}>
            {newSection ? (
              <h4 className="mb-2 px-3 font-heading text-[0.95rem] font-semibold text-foreground">{group.section}</h4>
            ) : null}
            {group.title ? (
              <h5
                className={cn(
                  "mb-1.5 px-3 text-[0.68rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase",
                  !newSection && "mt-5"
                )}
              >
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
                        "relative block rounded-lg px-3 py-[7px] text-[0.9rem] transition-colors",
                        active
                          ? "bg-[var(--color-primary-100)] font-semibold text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-full"
                          style={{ background: "linear-gradient(180deg, var(--color-brand-purple), var(--color-brand-aqua))" }}
                        />
                      ) : null}
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
        "sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 overflow-y-auto border-r py-8 pr-4 lg:block",
        className
      )}
    >
      <DocsNavList />
    </aside>
  )
}
