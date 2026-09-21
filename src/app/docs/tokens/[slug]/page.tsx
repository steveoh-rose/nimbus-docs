import { notFound } from "next/navigation"

import { ContentPage } from "@/components/content/content-page"
import { listContent, readContent } from "@/lib/content"
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
    title: "Color",
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
  return [...Object.keys(PAGES), ...listContent("tokens")].map((slug) => ({ slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const page = PAGES[slug as keyof typeof PAGES]
  if (page) return { title: page.title }
  const doc = readContent("tokens", slug)
  return doc ? { title: doc.title, description: doc.description } : {}
}

export default async function TokenPage({ params }: PageProps) {
  const { slug } = await params
  const page = PAGES[slug as keyof typeof PAGES]
  if (!page) {
    if (!readContent("tokens", slug)) notFound()
    return <ContentPage section="tokens" slug={slug} />
  }

  return (
    <DocShell title={page.title} description={page.description} headings={page.headings()}>
      {page.body()}
    </DocShell>
  )
}
