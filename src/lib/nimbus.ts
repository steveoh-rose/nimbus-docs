import "server-only"
import fs from "node:fs"
import path from "node:path"
import GithubSlugger from "github-slugger"

import { nimbusComponents } from "@/generated/nimbus-manifest"
import { storyAnchor } from "@/lib/nimbus-nav"
import { readStories } from "@/lib/story-source"
import type { Heading } from "@/lib/mdx"

const CORE_DIR = path.join(process.cwd(), "src", "nimbus", "core")
const DOCS_DIR = path.join(process.cwd(), "src", "nimbus", "docs")

export type ShareLinks = { adobe?: string; github?: string; figma?: string }

export type ComponentDocSection = {
  title?: string
  body: string
  links: ShareLinks
}

const q = (s: string) => JSON.stringify(s)

/**
 * Converts a Storybook MDX docs page (doc blocks + Meta/Title/Canvas/Controls) into MDX our
 * site can render, mapping the blocks onto our own components.
 */
export function transformStorybookMdx(
  raw: string,
  mdxRel: string,
  dense = false
): { body: string; links: ShareLinks } {
  const d = dense ? " dense" : ""
  const dir = path.posix.dirname(mdxRel)
  const component = mdxRel.split("/")[0]
  const aliases: Record<string, string> = {}
  const links: ShareLinks = {}

  const resolveKey = (spec: string) => {
    const joined = path.posix.normalize(path.posix.join(dir, spec))
    return joined.endsWith(".tsx") ? joined : `${joined}.tsx`
  }

  for (const m of raw.matchAll(/import \* as (\w+) from '(\.[^']+)'/g)) {
    const key = resolveKey(m[2])
    if (nimbusComponents[component]?.stories.includes(key)) aliases[m[1]] = key
  }
  const metaAlias = /<Meta[^>]*\bof=\{(\w+)\}/.exec(raw)?.[1]
  const defaultKey =
    (metaAlias && aliases[metaAlias]) || nimbusComponents[component]?.stories[0] || ""

  const share = /<ShareButtons([\s\S]*?)\/>/.exec(raw)?.[1] ?? ""
  for (const [k, v] of share.matchAll(/(adobe|github|figma)Link="([^"]+)"/g).map((m) => [m[1], m[2]] as const)) {
    if (v && v !== "/") links[k as keyof ShareLinks] = v
  }

  let text = raw
    .replace(/<ShareButtons[\s\S]*?\/>/g, "")
    .replace(/<Meta[\s\S]*?\/>/g, "")
    .replace(/<Title\s*\/>/g, "")
    .replace(/<Source[\s\S]*?\/>/g, "")
    .replace(/<Controls[\s\S]*?\/>/g, "")
    .replace(/<ArgsTable[\s\S]*?\/>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    // Storybook-only CSS module used for the "no props" empty state
    .replace(
      /className=\{styles\.\w+\}/g,
      'className="not-prose my-4 flex flex-col items-center gap-1 rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground"'
    )

  // drop import lines outside code fences
  let fence = false
  text = text
    .split("\n")
    .filter((line) => {
      if (line.trim().startsWith("```")) fence = !fence
      return fence || !/^import\s/.test(line)
    })
    .join("\n")

  text = text
    .replace(/<Canvas\s+of=\{(\w+)\.(\w+)\}[^>]*\/>/g, (_m, a, name) =>
      `<StoryBlock storyKey=${q(aliases[a] ?? defaultKey)} name=${q(name)}${d} />`)
    .replace(/<Story\s+of=\{(\w+)\.(\w+)\}[^>]*\/>/g, (_m, a, name) =>
      `<StoryBlock storyKey=${q(aliases[a] ?? defaultKey)} name=${q(name)}${d} />`)
    .replace(/<Canvas[^>]*\/>/g, () => `<StoryBlock storyKey=${q(defaultKey)} controls${d} />`)
    .replace(/<Stories\s+of=\{(\w+)\}[^>]*\/>/g, (_m, a) => `<StoriesList storyKey=${q(aliases[a] ?? defaultKey)}${d} />`)
    .replace(/<Stories[^>]*\/>/g, () => `<StoriesList storyKey=${q(defaultKey)}${d} />`)
    .replace(/<ArgTypes[\s\S]*?\/>/g, () => `<ApiTable component=${q(component)} storyKey=${q(defaultKey)} />`)

  return { body: text.trim() + "\n", links }
}

export function getComponentSections(name: string, dense = false): ComponentDocSection[] {
  const entry = nimbusComponents[name]
  if (!entry) return []
  const sections: ComponentDocSection[] = []
  for (const rel of entry.docs) {
    const raw = fs.readFileSync(path.join(CORE_DIR, rel), "utf8")
    const { body, links } = transformStorybookMdx(raw, rel, dense)
    const base = path.posix.basename(rel, ".mdx")
    sections.push({ title: entry.docs.length > 1 ? base : undefined, body, links })
  }
  if (!sections.length) {
    // no hand-written page: synthesise Examples + API from stories
    const key = entry.stories[0]
    const d = dense ? " dense" : ""
    sections.push({
      body: `## Usage\n\n\`\`\`\nimport { ${name} } from '@console/nimbus-ui/core';\n\`\`\`\n\n## Examples\n\n${entry.stories
        .map((s) => `<StoriesList storyKey=${q(s)} includePrimary${d} />`)
        .join("\n\n")}\n\n## API\n\n<ApiTable component=${q(name)} storyKey=${q(key)} />\n`,
      links: {},
    })
  }
  return sections
}

export function componentHeadings(sections: ComponentDocSection[]): Heading[] {
  const slugger = new GithubSlugger()
  const out: Heading[] = []
  for (const s of sections) {
    if (s.title) out.push({ depth: 2, text: s.title, slug: slugger.slug(s.title) })
    let fence = false
    for (const line of s.body.split("\n")) {
      if (line.trim().startsWith("```")) fence = !fence
      if (fence) continue
      const h = /^(#{2,3})\s+(.*)$/.exec(line.trim())
      if (h) out.push({ depth: h[1].length as 2 | 3, text: h[2].trim(), slug: slugger.slug(h[2].trim()) })
      const list = /<StoriesList storyKey="([^"]+)"(?: includePrimary)?/.exec(line)
      if (list) {
        const infos = readStories(list[1])
        const skipPrimary = !line.includes("includePrimary")
        infos.slice(skipPrimary ? 1 : 0).forEach((i) =>
          out.push({ depth: 3, text: i.name, slug: storyAnchor(i.exportName) })
        )
      }
    }
  }
  return out
}

export function readDocFile(rel: string) {
  return fs.readFileSync(path.join(DOCS_DIR, rel), "utf8")
}
