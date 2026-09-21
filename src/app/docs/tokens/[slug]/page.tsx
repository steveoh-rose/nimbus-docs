import { notFound } from "next/navigation"

import { DocShell } from "@/components/doc-shell"
import {
  ColorTokens,
  ShadowTokens,
  SpacingTokens,
  TypographyTokens,
  colorHeadings,
  typographyHeadings,
} from "@/components/nimbus/token-views"

export const dynamicParams = false

const PAGES = {
  colors: {
    title: "Colors",
    description: "Brand, semantic and palette colors. Each token is available as a CSS custom property and a Sass variable.",
    body: () => <ColorTokens />,
    headings: colorHeadings,
  },
  typography: {
    title: "Typography",
    description: "Font families, weights and the heading / body / article type scales.",
    body: () => <TypographyTokens />,
    headings: typographyHeadings,
  },
  spacing: {
    title: "Spacing",
    description: "The spacer scale used for padding, margin and gaps.",
    body: () => <SpacingTokens />,
    headings: () => [],
  },
  shadows: {
    title: "Shadows",
    description: "Elevation shadows for navigation, containers and overlays.",
    body: () => <ShadowTokens />,
    headings: () => [],
  },
} as const

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const page = PAGES[slug as keyof typeof PAGES]
  return page ? { title: page.title } : {}
}

export default async function TokenPage({ params }: PageProps) {
  const { slug } = await params
  const page = PAGES[slug as keyof typeof PAGES]
  if (!page) notFound()

  return (
    <DocShell title={page.title} description={page.description} headings={page.headings()}>
      {page.body()}
    </DocShell>
  )
}
