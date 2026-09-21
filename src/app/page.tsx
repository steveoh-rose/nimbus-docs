import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import { ArrowRight } from "@nimbus/assets/icons/app"

import { Button } from "@/components/ui/button"
import { HeroDemo } from "@/components/nimbus/hero-demo"
import { documentedComponents } from "@/lib/nimbus-nav"
import { siteConfig } from "@/lib/nav-config"

function syncInfo() {
  try {
    const meta = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "nimbus", "SOURCE.json"), "utf8"))
    return meta.sources as Record<string, { version: string }>
  } catch {
    return null
  }
}

export default function Home() {
  const componentCount = documentedComponents().length
  const sources = syncInfo()

  const index = [
    {
      title: "Foundations",
      description: "How we write: the tone of voice for everything a customer reads.",
      href: "/docs/foundations/tone-of-voice",
    },
    {
      title: "Tokens",
      description: "Color, typography, icons, shadows, radius, spacing, breakpoints and the layout grid.",
      href: "/docs/tokens/overview",
    },
    {
      title: "Components",
      description: `${componentCount} core React components, each with live examples, source and props.`,
      href: "/docs/components/button",
    },
    {
      title: "Patterns",
      description: "How components combine to solve recurring problems, starting with form validation.",
      href: "/docs/patterns/overview",
    },
  ]

  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto grid w-full max-w-[1400px] items-center gap-12 px-4 py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:px-8 lg:py-24">
        <div>
          <h1 className="max-w-[16ch] font-heading text-[2.5rem] leading-[1.15] font-semibold tracking-tight sm:text-[3.25rem]">
            The design system for Console Connect
          </h1>
          <p className="mt-5 max-w-[46ch] text-[1.07rem] leading-relaxed text-muted-foreground">
            Nimbus is the shared language behind our products: the tokens, React components and patterns
            that keep them consistent, documented from the same source the code is built from.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/docs/introduction">
                Read the introduction
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/docs/components/button">Browse components</Link>
            </Button>
          </div>
        </div>
        <HeroDemo />
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-20 lg:px-8">
        <ul className="divide-y border-y">
          {index.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group grid items-baseline gap-1 py-5 sm:grid-cols-[220px_minmax(0,1fr)_auto] sm:gap-8"
              >
                <span className="font-heading text-[1.29rem] font-semibold group-hover:text-primary">
                  {item.title}
                </span>
                <span className="text-muted-foreground">{item.description}</span>
                <ArrowRight className="hidden size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mx-auto w-full max-w-[1400px] px-4 pb-10 text-xs text-muted-foreground lg:px-8">
        {sources ? (
          <p>
            Generated from{" "}
            <a className="underline underline-offset-4" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              nimbus-ui
            </a>{" "}
            v{sources["nimbus-ui"].version}, cc-design-tokens v{sources["cc-design-tokens"].version} and
            nimbus-assets v{sources["nimbus-assets"].version}.
          </p>
        ) : null}
      </footer>
    </div>
  )
}
