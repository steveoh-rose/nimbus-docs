import { DocShell } from "@/components/doc-shell"
import { CodeBlock } from "@/components/code-block"
import { Note } from "@/components/content/guidance"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SemanticTokens } from "@/components/content/token-tables"
import { allTokens, shadowTokens } from "@/lib/tokens"
import { TokenSearch, type SearchableToken } from "@/components/nimbus/token-search"

export const metadata = { title: "Tokens" }

const HEADINGS = [
  { depth: 2 as const, text: "Design tokens", slug: "design-tokens" },
  { depth: 2 as const, text: "All tokens", slug: "all-tokens" },
]

function categoryOf(name: string): string | null {
  if (name.startsWith("--color-")) return "Color"
  if (name.startsWith("--font-")) return "Typography"
  if (name.startsWith("--size-spacer-")) return "Spacing"
  return null
}

function buildSearchIndex(): SearchableToken[] {
  const out: SearchableToken[] = []
  for (const t of allTokens()) {
    if (t.deprecatedNote) continue
    const category = categoryOf(t.name)
    if (!category) continue
    out.push({ name: t.name, value: t.value, scss: t.scss, category })
  }
  for (const s of shadowTokens()) {
    out.push({ name: `shadow-${s.name}`, value: s.css, scss: `$shadow-${s.name}`, category: "Shadow" })
  }
  return out
}

export default function TokensIndexPage() {
  const tokens = buildSearchIndex()
  return (
    <DocShell
      title="Tokens"
      description="Every color, size and type style a Nimbus component uses is a named token, defined once in cc-design-tokens. Change a token here and every component that uses it follows."
      headings={HEADINGS}
    >
      <div className="space-y-10">
        <section id="design-tokens" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Design tokens</h2>
          <p className="mb-4 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
            Every token is published as a CSS custom property, a Sass variable and a JS constant from the
            same name — <code className="font-mono text-[13px]">--color-primary-300</code>,{" "}
            <code className="font-mono text-[13px]">$color-primary-300</code> and{" "}
            <code className="font-mono text-[13px]">colorPrimary300</code>. Names read general to specific:
            category, group, step — steps run 100 (lightest) to 500 (darkest).
          </p>
          <Tabs defaultValue="css" className="not-prose mb-6 gap-3">
            <TabsList>
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="scss">Sass</TabsTrigger>
              <TabsTrigger value="js">JavaScript</TabsTrigger>
            </TabsList>
            <TabsContent value="css">
              <CodeBlock
                lang="css"
                className="my-0"
                code={`.panel {\n  background: var(--color-bg-100);\n  border: 1px solid var(--color-system-100);\n  padding: var(--size-spacer-md);\n}`}
              />
            </TabsContent>
            <TabsContent value="scss">
              <CodeBlock
                lang="scss"
                className="my-0"
                code={`@import '@console/cc-design-tokens/build/scss/variables';\n\n.panel {\n  background: $color-bg-100;\n  padding: $size-spacer-md;\n}`}
              />
            </TabsContent>
            <TabsContent value="js">
              <CodeBlock
                lang="ts"
                className="my-0"
                code={`import { colorPrimary300, sizeSpacerMd } from '@console/cc-design-tokens';`}
              />
            </TabsContent>
          </Tabs>
          <Note title="Palette, semantic, component">
            Palette tokens hold raw values (<code>$color-palette-stone-100</code>). Semantic tokens give a
            palette value a job (<code>$color-bg-200</code>) — use these in product code. Component tokens
            live next to a component and point at semantic tokens, so a component can be restyled in one
            place. Legacy names still work; deprecated tokens have been dropped from this list.
          </Note>
          <SemanticTokens />
        </section>

        <section id="all-tokens" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">All tokens</h2>
          <p className="mb-4 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
            Every color, typography, spacing and shadow token, searchable by name or value. See{" "}
            <a href="/docs/foundations/colors" className="underline underline-offset-4">
              Colors
            </a>
            ,{" "}
            <a href="/docs/foundations/typography" className="underline underline-offset-4">
              Typography
            </a>{" "}
            and{" "}
            <a href="/docs/foundations/spacing" className="underline underline-offset-4">
              Spacing
            </a>{" "}
            for the full presentation of each category.
          </p>
          <TokenSearch tokens={tokens} />
        </section>
      </div>
    </DocShell>
  )
}
