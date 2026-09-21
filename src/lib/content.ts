import "server-only"
import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

/**
 * Hand-written design guidance (foundations, patterns) lives in /content/<section>/<slug>.mdx.
 * Unlike the component/token/icon pages, these are not synced from another repo.
 */
const ROOT = path.join(process.cwd(), "content")

export type ContentPage = {
  slug: string
  title: string
  description?: string
  body: string
}

export function listContent(section: string): string[] {
  const dir = path.join(ROOT, section)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

export function readContent(section: string, slug: string): ContentPage | null {
  const file = path.join(ROOT, section, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const { data, content } = matter(fs.readFileSync(file, "utf8"))
  return { slug, title: data.title ?? slug, description: data.description, body: content }
}
