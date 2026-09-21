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

const pill =
  "hidden h-9 items-center gap-2 rounded-full border bg-white px-3.5 text-sm text-foreground transition-colors hover:bg-[var(--color-bg-200)] sm:inline-flex"

export function SiteHeader() {
  const version = nimbusVersion()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[var(--color-bg-100)]">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4 lg:px-8">
        <MobileNav />

        <Link href="/" className="mr-2 flex items-center gap-2">
          <Cloud className="size-6 text-primary" />
          <span className="font-heading text-[17px] font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>

        <CommandMenu />

        <div className="ml-auto flex items-center gap-2">
          {version ? (
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className={pill}>
              nimbus-ui v{version}
            </a>
          ) : null}
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className={pill} aria-label="GitHub">
            <GitHubMarkIcon className="size-4" />
            GitHub
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-2 lg:px-6">
        <SectionTabs />
      </div>
    </header>
  )
}
