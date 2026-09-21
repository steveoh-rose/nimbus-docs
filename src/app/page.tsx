import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import * as appIcons from "@nimbus/assets/icons/app"
import { ArrowRight, Categories, Grid, Sparkles, Star, Workspaces } from "@nimbus/assets/icons/app"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  const iconCount = Object.keys(appIcons).length
  const sources = syncInfo()

  const sections = [
    {
      title: "Foundations",
      description: "The responsive grid system and the tone of voice for everything we write.",
      href: "/docs/foundations/grid-system",
      icon: Categories,
    },
    {
      title: "Tokens",
      description: "Colors, typography, spacing and shadows as CSS and Sass variables.",
      href: "/docs/tokens/colors",
      icon: Sparkles,
    },
    {
      title: "Icons",
      description: `${iconCount} app icons plus brand illustrations. Search and copy imports.`,
      href: "/docs/icons/app",
      icon: Star,
    },
    {
      title: "Components",
      description: `${componentCount} core React components with live previews, source and prop tables.`,
      href: "/docs/components/button",
      icon: Grid,
    },
    {
      title: "Patterns",
      description: "Guidance for solving common problems, starting with form validation.",
      href: "/docs/patterns/form-validation",
      icon: Workspaces,
    },
  ]

  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-6 px-4 py-20 text-center lg:px-8">
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          {sources ? `nimbus-ui v${sources["nimbus-ui"].version}` : "Nimbus"}
        </Badge>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          The Nimbus design system
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Foundations, tokens, icons, components and patterns for building consistent Console Connect products.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/docs/introduction">
              Get Started
              <ArrowRight />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs/components/button">Browse Components</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 lg:px-8">
        <HeroDemo />
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-20 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sections.map((section) => (
            <Link key={section.title} href={section.href} className="group">
              <Card className="h-full transition-colors group-hover:border-primary">
                <CardHeader>
                  <section.icon className="size-6 text-primary" />
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-2">
                  <h3 className="font-semibold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mx-auto w-full max-w-[1400px] border-t px-4 py-6 text-xs text-muted-foreground lg:px-8">
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
