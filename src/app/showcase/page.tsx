import Link from "next/link"
import { ArrowRight } from "@nimbus/assets/icons/app"

import { CursorTitle } from "@/components/brand/brand-backdrop"
import { NimbusReel } from "@/components/showcase/nimbus-reel"
import { reelData } from "@/lib/reel-data"

export const metadata = {
  title: "Showcase",
  description:
    "A motion reel of the Nimbus design system: brand gradients, tokens, interaction states, keyboard accessibility and icons.",
}

export default function ShowcasePage() {
  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 py-10 lg:px-8 lg:py-14">
      <div className="mb-8 max-w-[62ch]">
        <p className="brand-kicker">Showcase</p>
        <CursorTitle className="mt-4 font-heading text-[2.4rem] leading-[1.06] font-semibold tracking-[-0.025em] text-foreground sm:text-[2.9rem]">
          Nimbus in motion
        </CursorTitle>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">
          Brand gradients, tokens, interaction states, keyboard accessibility and icons. Every color,
          contrast ratio, icon and count in this reel is read from cc-design-tokens, nimbus-ui and
          nimbus-assets at build time.
        </p>
      </div>
      <NimbusReel data={reelData()} />
      <Link
        href="/showcase/product-fruits"
        className="group mt-10 inline-flex items-center gap-2 font-semibold text-[var(--color-primary-300)]"
      >
        Case study reel: contextual onboarding with Product Fruits
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </main>
  )
}
