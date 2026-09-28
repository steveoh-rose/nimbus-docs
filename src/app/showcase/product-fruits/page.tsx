import Link from "next/link"
import { ArrowRight } from "@nimbus/assets/icons/app"

import { CursorTitle } from "@/components/brand/brand-backdrop"
import { ProductFruitsReel } from "@/components/showcase/product-fruits-reel"

export const metadata = {
  title: "Product Fruits case study reel",
  description:
    "Contextual onboarding for Console Connect: Product Fruits announcements styled as the Nimbus Modal, from the legacy Welcome page to publishing without a deployment.",
}

export default function ProductFruitsReelPage() {
  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 py-10 lg:px-8 lg:py-14">
      <div className="mb-8 max-w-[64ch]">
        <p className="brand-kicker">Case study reel</p>
        <CursorTitle className="mt-4 font-heading text-[2.4rem] leading-[1.06] font-semibold tracking-[-0.025em] text-foreground sm:text-[2.9rem]">
          Contextual onboarding
        </CursorTitle>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">
          How Product Fruits announcements were brought into Console Connect and styled to match the Nimbus Modal — from
          the legacy Welcome page to Product and Marketing publishing without an engineering deployment.
        </p>
        <Link href="/showcase" className="group mt-4 inline-flex items-center gap-2 font-semibold text-[var(--color-primary-300)]">
          Nimbus design system reel <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <ProductFruitsReel />
    </main>
  )
}
