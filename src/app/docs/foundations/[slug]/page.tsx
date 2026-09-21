import { ContentPage } from "@/components/content/content-page"
import { listContent, readContent } from "@/lib/content"

export const dynamicParams = false

export function generateStaticParams() {
  return listContent("foundations").map((slug) => ({ slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const page = readContent("foundations", slug)
  return page ? { title: page.title, description: page.description } : {}
}

export default async function FoundationPage({ params }: PageProps) {
  const { slug } = await params
  return <ContentPage section="foundations" slug={slug} />
}
