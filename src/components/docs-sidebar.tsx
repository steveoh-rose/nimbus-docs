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
    <nav className={cn("flex flex-col gap-6", className)}>
      {sidebarNav.map((group) => (
        <div key={group.title}>
          <h4 className="mb-2 text-sm font-semibold text-foreground">
            {group.title}
          </h4>
          <ul className="flex flex-col gap-0.5 border-l">
            {group.items.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                      "-ml-px block border-l pl-3 py-1 text-sm transition-colors",
                      active
                        ? "border-l-foreground font-medium text-foreground"
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
      ))}
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
