import * as brandIcons from "@nimbus/assets/icons/brand"

import { DocShell } from "@/components/doc-shell"
import { CodeBlock } from "@/components/code-block"
import { IconGallery } from "@/components/nimbus/icon-gallery"
import { LegacyCloud } from "@/components/brand/brand-art"
import { BrandIconStrip } from "@/components/brand/brand-icon-strip"

export const metadata = { title: "Icons" }

const HEADINGS = [
  { depth: 2 as const, text: "App icons", slug: "app" },
  { depth: 2 as const, text: "Brand icons", slug: "brand" },
  { depth: 3 as const, text: "What changed", slug: "brand-changes" },
  { depth: 3 as const, text: "Gallery", slug: "brand-gallery" },
]

// Brand SVGs in nimbus-assets' first asset commit (907a8aa, March 2024).
const BRAND_ICONS_AT_LAUNCH = 105

export default function IconsPage() {
  const brandCount = Object.keys(brandIcons).filter((k) => k !== "default").length
  return (
    <DocShell
      title="Icons"
      description="App and brand icons from @console/nimbus-assets. App icons take their color from currentColor and their size from font-size; brand icons take a gradient and a contrast mode."
      headings={HEADINGS}
    >
      <div className="space-y-14">
        <section id="app" className="scroll-mt-24">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight">App icons</h2>
          <p className="mb-4 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
            Single-color UI icons. Set their color with CSS <code className="font-mono text-[13px]">color</code> and
            their size with <code className="font-mono text-[13px]">font-size</code>.
          </p>
          <CodeBlock code={"import { Add } from '@console/nimbus-assets/icons/app';\n\n<Add />"} lang="tsx" className="mt-0 mb-8" />
          <IconGallery set="app" />
        </section>

        <section id="brand" className="scroll-mt-24">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight">Brand icons</h2>
          <p className="mb-6 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
            Illustrative icons for marketing and empty states. Each is a React component with a{" "}
            <code className="font-mono text-[13px]">gradient</code> prop (<code className="font-mono text-[13px]">purple-rain</code>{" "}
            by default, <code className="font-mono text-[13px]">luscious-green</code>,{" "}
            <code className="font-mono text-[13px]">blue-hour</code> or{" "}
            <code className="font-mono text-[13px]">the-way-of-water</code>) and a{" "}
            <code className="font-mono text-[13px]">contrastMode</code> prop that switches the outline between{" "}
            <code className="font-mono text-[13px]">#0F1A2B</code> for light backgrounds and white for dark ones.
          </p>

          <h3 id="brand-changes" className="mb-4 scroll-mt-24 text-lg font-semibold">
            What changed
          </h3>
          <div className="not-prose mb-10 grid gap-5 md:grid-cols-2">
            <figure className="rounded-2xl border p-6">
              <figcaption className="brand-kicker mb-5">March 2024</figcaption>
              <div className="flex h-32 items-center justify-center">
                <LegacyCloud size={112} />
              </div>
              <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">{BRAND_ICONS_AT_LAUNCH} icons</strong>, shipped as static SVGs
                </li>
                <li>A six-stop purple → pink gradient baked into each file</li>
                <li>Outline fixed to #16263F</li>
              </ul>
            </figure>
            <figure className="rounded-2xl border bg-[var(--color-brand-navy)] p-6 text-white">
              <figcaption className="mb-5 text-xs font-semibold tracking-[0.14em] text-white/60 uppercase">Today</figcaption>
              <div className="flex h-32 items-center justify-center">
                <BrandIconStrip size={112} contrastMode="dark" items={[{ name: "Cloud", gradient: "the-way-of-water" }]} />
              </div>
              <ul className="mt-5 space-y-1.5 text-sm text-white/70">
                <li>
                  <strong className="text-white">{brandCount} icons</strong>, each a React component
                </li>
                <li>Four two-stop gradients built from brand color tokens</li>
                <li>Light and dark outlines, and a unique gradient id per instance</li>
              </ul>
            </figure>
          </div>

          <h3 id="brand-gallery" className="mb-4 scroll-mt-24 text-lg font-semibold">
            Gallery
          </h3>
          <IconGallery set="brand" />
        </section>
      </div>
    </DocShell>
  )
}
