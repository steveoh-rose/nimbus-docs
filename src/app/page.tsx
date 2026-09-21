import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import { ArrowRight } from "@nimbus/assets/icons/app"

import { Showcase } from "@/components/nimbus/hero-demo"
import { GitHubMarkIcon } from "@/components/icons"
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
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 pt-14 pb-12 text-center lg:px-8 lg:pt-20">
        {sources ? (
          <Link
            href="/docs/introduction"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary-200)] bg-[var(--color-primary-100)] px-3 py-1 text-xs text-[var(--color-primary-500)] transition-colors hover:bg-[var(--color-primary-200)]"
          >
            nimbus-ui v{sources["nimbus-ui"].version} · tokens v{sources["cc-design-tokens"].version}
          </Link>
        ) : null}
        <h1 className="font-heading text-[2.5rem] leading-[1.1] font-bold tracking-tight sm:text-[3.5rem]">
          Consistent by default.
          <br />
          <span className="text-[var(--color-system-200)]">Themed by tokens.</span>
        </h1>
        <p className="mt-5 max-w-[52ch] text-[1.14rem] leading-relaxed text-muted-foreground">
          Nimbus is the design system behind Console Connect: the tokens, React components and patterns
          that keep our products consistent, documented from the same source the code is built from.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/introduction"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-[var(--color-primary-400)]"
          >
            Get started
          </Link>
          <Link
            href="/docs/components/button"
            className="inline-flex h-11 items-center gap-2 rounded-full border bg-white px-6 text-sm font-medium transition-colors hover:bg-[var(--color-bg-200)]"
          >
            View components
          </Link>
        </div>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <GitHubMarkIcon className="size-3.5" />
          Source on GitHub
        </a>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-4 pb-16 lg:px-8">
        <Showcase />
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-4 pb-20 lg:px-8">
        <ul className="divide-y rounded-[10px] border bg-white">
          {index.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group grid items-baseline gap-1 px-5 py-4 transition-colors first:rounded-t-[10px] last:rounded-b-[10px] hover:bg-[var(--color-bg-100)] sm:grid-cols-[200px_minmax(0,1fr)_auto] sm:gap-8"
              >
                <span className="font-heading text-[1.15rem] font-semibold">{item.title}</span>
                <span className="text-muted-foreground">{item.description}</span>
                <ArrowRight className="hidden size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mx-auto w-full max-w-[1100px] px-4 pb-10 text-center text-xs text-muted-foreground lg:px-8">
        {sources ? (
          <p>
            Generated from nimbus-ui v{sources["nimbus-ui"].version}, cc-design-tokens v
            {sources["cc-design-tokens"].version} and nimbus-assets v{sources["nimbus-assets"].version}.
          </p>
        ) : null}
      </footer>
    </div>
  )
}
