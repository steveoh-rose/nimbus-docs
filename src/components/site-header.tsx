import fs from "node:fs"
import path from "node:path"
import Link from "next/link"

import { CommandMenu } from "@/components/command-menu"
import { MobileNav } from "@/components/mobile-nav"
import { SectionTabs } from "@/components/section-tabs"
import { GitHubMarkIcon } from "@/components/icons"
import { siteConfig } from "@/lib/nav-config"
import { Cloud } from "@nimbus/assets/icons/app"

function nimbusVersion() {
  try {
    const meta = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "nimbus", "SOURCE.json"), "utf8"))
    return meta.sources["nimbus-ui"].version as string
  } catch {
    return null
  }
}

const ghost =
  "hidden h-8 items-center gap-1.5 rounded-md px-2 text-sm text-muted-foreground transition-colors hover:bg-[var(--color-bg-200)] hover:text-foreground sm:inline-flex"

export function SiteHeader() {
  const version = nimbusVersion()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-8">
        <MobileNav />

        <Link href="/" className="mr-2 flex items-center gap-2">
          <Cloud className="size-5 text-primary" />
          <span className="font-heading text-[15px] font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>

        <div className="hidden lg:block">
          <SectionTabs />
        </div>

        <div className="ml-auto flex flex-1 items-center justify-end gap-2 lg:flex-none">
          <CommandMenu />
          {version ? (
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className={ghost}>
              v{version}
            </a>
          ) : null}
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className={ghost} aria-label="GitHub">
            <GitHubMarkIcon className="size-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
