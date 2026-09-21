"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { sidebarNav } from "@/lib/nav-config"

export function DocsNavList({
  onNavigate,
  className,
}: {
  onNavigate?: () => void
  className?: string
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      {sidebarNav.map((group, i) => {
        const newSection = sidebarNav[i - 1]?.section !== group.section
        return (
          <div key={`${group.section}-${group.title ?? ""}`} className={cn(newSection && i > 0 && "mt-6")}>
            {newSection ? (
              <h4 className="mb-2 font-heading text-sm font-semibold text-foreground">{group.section}</h4>
            ) : null}
            {group.title ? (
              <h5 className={cn("mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase", !newSection && "mt-4")}>
                {group.title}
              </h5>
            ) : null}
            <ul className="flex flex-col gap-0.5 border-l">
              {group.items.map((item) => {
                const active = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        "-ml-px block border-l py-1 pl-3 text-sm transition-colors",
                        active
                          ? "border-l-primary font-medium text-primary"
                          : "border-l-transparent text-muted-foreground hover:border-l-foreground/40 hover:text-foreground"
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
        "sticky top-[--header-height] hidden h-[calc(100vh-var(--header-height))] w-56 shrink-0 overflow-y-auto py-8 pr-4 lg:block",
        className
      )}
      style={{ "--header-height": "3.5rem" } as React.CSSProperties}
    >
      <DocsNavList />
    </aside>
  )
}
