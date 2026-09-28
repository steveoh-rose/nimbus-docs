import Link from "next/link"
import { ArrowRight } from "@nimbus/assets/icons/app"

import { BrandBackdrop, CursorTitle, Floating } from "@/components/brand/brand-backdrop"
import { Shape, Trail } from "@/components/brand/brand-art"

export const metadata = { title: "Page not found" }

export default function NotFound() {
  return (
    <section className="relative isolate flex flex-1 items-center overflow-hidden border-b">
      <BrandBackdrop />
      <Floating className="top-10 -left-16 hidden md:block" rotate={-14}>
        <Shape name="triangle" size={220} gradient="blue-hour" />
      </Floating>
      <Floating className="-right-10 bottom-8 hidden md:block" duration={10} delay={-3}>
        <Trail name="chevron" width={260} progress={1} />
      </Floating>
      <div className="relative mx-auto w-full max-w-[720px] px-4 py-28 text-center">
        <p className="brand-kicker">Error 404</p>
        <CursorTitle className="mt-5 font-heading text-[2.6rem] leading-[1.06] font-semibold tracking-[-0.03em] text-foreground sm:text-[3.4rem]">
          This page drifted off
        </CursorTitle>
        <p className="mx-auto mt-5 max-w-[46ch] text-[1.08rem] leading-relaxed text-muted-foreground">
          The link may be old — the docs were reorganised into Getting started, Foundations, Components and Patterns.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-brand-navy)] px-6 font-semibold text-white shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
          >
            Back home <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/docs/foundations/tokens"
            className="inline-flex h-12 items-center rounded-full border bg-background px-6 font-semibold transition-transform hover:-translate-y-0.5"
          >
            Search tokens
          </Link>
        </div>
      </div>
    </section>
  )
}
