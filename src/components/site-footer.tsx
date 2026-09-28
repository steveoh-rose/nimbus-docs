import fs from "node:fs"
import path from "node:path"
import Link from "next/link"

import { BrandBackdrop } from "@/components/brand/brand-backdrop"
import { NimbusLogo, Trail } from "@/components/brand/brand-art"
import { mainNav, sidebarNav, siteConfig } from "@/lib/nav-config"

function sources() {
  try {
    const meta = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "nimbus", "SOURCE.json"), "utf8"))
    return meta.sources as Record<string, { version: string }>
  } catch {
    return null
  }
}

const COLUMNS = mainNav.map((tab) => ({
  title: tab.title,
  items: sidebarNav
    .filter((g) => g.section === tab.title)
    .flatMap((g) => g.items)
    .slice(0, 5),
}))

export function SiteFooter() {
  const src = sources()
  return (
    <footer className="relative isolate mt-auto overflow-hidden text-white">
      <BrandBackdrop tone="navy" hatch={false} />
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-24 hidden opacity-30 lg:block">
        <Trail name="zig" width={340} progress={1} />
      </div>
      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-4 py-14 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-block">
            <NimbusLogo width={120} color="#fff" />
          </Link>
          <p className="mt-4 font-heading text-lg font-semibold text-[var(--color-brand-aqua)]">collaborate. accelerate.</p>
          <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-white/65">
            The design system behind Console Connect — tokens, components and patterns, documented from the
            source they ship from.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="mb-3 font-heading text-sm font-semibold text-white">{col.title}</h2>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/65 transition-colors hover:text-white">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="relative border-t border-white/10 bg-[var(--color-brand-navy)]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-white/55 lg:px-8">
          <span>
            {src
              ? `Generated from nimbus-ui v${src["nimbus-ui"].version} · cc-design-tokens v${src["cc-design-tokens"].version} · nimbus-assets v${src["nimbus-assets"].version}`
              : "Generated from nimbus-ui, cc-design-tokens and nimbus-assets"}
          </span>
          <span className="flex gap-4">
            <Link href="/showcase" className="transition-colors hover:text-white">
              Showcase reel
            </Link>
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
