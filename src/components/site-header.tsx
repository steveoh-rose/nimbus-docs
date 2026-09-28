import fs from "node:fs"
import path from "node:path"
import Link from "next/link"

import { CommandMenu } from "@/components/command-menu"
import { MobileNav } from "@/components/mobile-nav"
import { SectionTabs } from "@/components/section-tabs"
import { GitHubMarkIcon } from "@/components/icons"
import { NimbusLogo } from "@/components/brand/brand-art"
import { siteConfig } from "@/lib/nav-config"

function nimbusVersion() {
  try {
    const meta = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "nimbus", "SOURCE.json"), "utf8"))
    return meta.sources["nimbus-ui"].version as string
  } catch {
    return null
  }
}

export function SiteHeader() {
  const version = nimbusVersion()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-5 px-4 lg:px-8">
        <MobileNav />

        <Link href="/" aria-label={`${siteConfig.name} home`} className="flex shrink-0 items-center rounded-md py-1">
          <NimbusLogo width={92} />
        </Link>

        <div className="hidden lg:block">
          <SectionTabs />
        </div>

        <div className="ml-auto flex flex-1 items-center justify-end gap-2 lg:flex-none">
          <CommandMenu />
          {version ? (
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden h-8 items-center rounded-full bg-[var(--color-primary-100)] px-3 text-xs font-semibold text-[var(--color-primary-500)] transition-colors hover:bg-[var(--color-primary-200)] sm:inline-flex"
            >
              v{version}
            </a>
          ) : null}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
          >
            <GitHubMarkIcon className="size-[18px]" />
          </a>
        </div>
      </div>
    </header>
  )
}
