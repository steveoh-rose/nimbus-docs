import Link from "next/link"
import {
  ArrowRightIcon,
  BlocksIcon,
  BookOpenIcon,
  PaletteIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/code-block"
import { siteConfig } from "@/lib/nav-config"

const sections = [
  {
    title: "Tokens",
    description:
      "Color, typography, spacing, radius, shadows, and motion — the raw design decisions everything else is built from.",
    href: "/docs/tokens/color",
    icon: PaletteIcon,
  },
  {
    title: "Components",
    description:
      "Accessible, themeable primitives — buttons, inputs, overlays, navigation, data display, and feedback.",
    href: "/docs/components/button",
    icon: BlocksIcon,
  },
  {
    title: "Patterns",
    description:
      "Composed examples and recipes built from primitives — data tables, command menus, auth cards, empty states, validation, confirmation flows.",
    href: "/docs/patterns/empty-states",
    icon: BookOpenIcon,
  },
]

const installSnippet = `import { Button } from "@nimbus/ui"

export function Example() {
  return <Button variant="secondary">Get started</Button>
}`

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-6 px-4 py-24 text-center lg:px-8">
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          Now documenting Nimbus UI in one place
        </Badge>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          The Nimbus design system,
          <br className="hidden sm:block" /> fully documented.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Tokens, components, and patterns for building consistent
          ConsoleConnect products — beyond what Storybook shows.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/docs/introduction">
              Get Started
              <ArrowRightIcon />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs/components/button">Browse Components</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Component library lives in{" "}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            ConsoleConnect/nimbus-ui
          </a>{" "}
          · full API reference still on{" "}
          <a
            href={siteConfig.storybookUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Storybook
          </a>
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-24 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {sections.map((section) => (
            <Link key={section.title} href={section.href} className="group">
              <Card className="h-full transition-colors group-hover:border-foreground/30">
                <CardHeader>
                  <section.icon className="size-5 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-2">
                  <h3 className="font-semibold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-24 lg:px-8">
        <div className="grid gap-8 rounded-xl border p-8 lg:grid-cols-2 lg:p-12">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Drop-in components, real code you own.
            </h2>
            <p className="text-muted-foreground">
              Every page on this site shows a live preview next to the exact
              source that renders it, so you can copy it straight into your
              app — the same way you&apos;d browse shadcn/ui or Intent UI.
            </p>
            <div>
              <Button variant="outline" asChild>
                <Link href="/docs/installation">
                  Installation guide
                  <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </div>
          <CodeBlock code={installSnippet} lang="tsx" className="my-0" />
        </div>
      </section>
    </div>
  )
}
