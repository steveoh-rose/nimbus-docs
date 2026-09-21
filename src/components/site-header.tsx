import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CommandMenu } from "@/components/command-menu"
import { MobileNav } from "@/components/mobile-nav"
import { GitHubMarkIcon } from "@/components/icons"
import { mainNav, siteConfig } from "@/lib/nav-config"
import { Cloud } from "@nimbus/assets/icons/app"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-8">
        <MobileNav />

        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Cloud className="size-4" />
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <Link href={item.href}>{item.title}</Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <CommandMenu />
          <Button variant="ghost" size="icon" className="size-8" asChild>
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              <GitHubMarkIcon className="size-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
