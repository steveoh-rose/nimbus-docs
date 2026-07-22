import fs from "fs"
import path from "path"
import matter from "gray-matter"
import GithubSlugger from "github-slugger"

const CONTENT_DIR = path.join(process.cwd(), "content", "docs")

export interface DocMeta {
  title: string
  description?: string
  order?: number
}

export interface Doc {
  slug: string[]
  meta: DocMeta
  content: string
  filePath: string
}

export interface Heading {
  depth: 2 | 3
  text: string
  slug: string
}

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const res = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(res) : [res]
  })
}

export function getAllDocSlugs(): string[][] {
  return walk(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) =>
      path
        .relative(CONTENT_DIR, f)
        .replace(/\.mdx$/, "")
        .split(path.sep)
    )
}

export function getDocBySlug(slug: string[]): Doc | null {
  const filePath = path.join(CONTENT_DIR, ...slug) + ".mdx"
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  return {
    slug,
    meta: data as DocMeta,
    content,
    filePath,
  }
}

export function getAllDocsFlat(): Doc[] {
  return getAllDocSlugs()
    .map((slug) => getDocBySlug(slug))
    .filter((d): d is Doc => d !== null)
}

/** Extract H2/H3 headings from raw markdown for the "On this page" TOC.
 * Uses the same slugger algorithm as rehype-slug (github-slugger) so anchors match. */
export function getHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger()
  const headings: Heading[] = []
  const lines = markdown.split("\n")
  let inCodeFence = false
  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeFence = !inCodeFence
      continue
    }
    if (inCodeFence) continue
    const match = /^(#{2,3})\s+(.*)$/.exec(line.trim())
    if (match) {
      const depth = match[1].length as 2 | 3
      const text = match[2].trim()
      headings.push({ depth, text, slug: slugger.slug(text) })
    }
  }
  return headings
}
