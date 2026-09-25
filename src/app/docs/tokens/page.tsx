import { DocShell } from "@/components/doc-shell"
import { CodeBlock } from "@/components/code-block"
import { Note } from "@/components/content/guidance"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ColumnLayouts, ColumnRuler, GridAnatomy, GridExample } from "@/components/content/grid-visuals"
import { RadiusScale, SemanticTokens } from "@/components/content/token-tables"
import { ColorTokens, ShadowTokens, SpacingTokens, TypographyTokens } from "@/components/nimbus/token-views"

export const metadata = { title: "Tokens" }

const HEADINGS = [
  { depth: 2 as const, text: "Design tokens", slug: "design-tokens" },
  { depth: 2 as const, text: "Color", slug: "color" },
  { depth: 3 as const, text: "Brand colors", slug: "color-brand" },
  { depth: 3 as const, text: "Palette colors", slug: "color-palette" },
  { depth: 3 as const, text: "Semantic colors", slug: "color-semantic" },
  { depth: 2 as const, text: "Typography", slug: "typography" },
  { depth: 2 as const, text: "Spacing", slug: "spacing" },
  { depth: 2 as const, text: "Border radius", slug: "border-radius" },
  { depth: 2 as const, text: "Shadows & blurs", slug: "shadows" },
  { depth: 2 as const, text: "Breakpoints & screen sizes", slug: "breakpoints" },
  { depth: 2 as const, text: "Layout anatomy", slug: "layout-anatomy" },
]

function Rule({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">{children}</p>
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t pt-10 first:border-t-0 first:pt-0">
      <h2 className="mb-3 font-heading text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

export default function TokensOverviewPage() {
  return (
    <DocShell
      title="Tokens"
      description="Every color, size and type style a Nimbus component uses is a named token, defined once in cc-design-tokens. Change a token here and every component that uses it follows."
      headings={HEADINGS}
    >
      <div className="space-y-10">
        <Section id="design-tokens" title="Design tokens">
          <Rule>
            Every token is published as a CSS custom property, a Sass variable and a JS constant from the
            same name — <code className="font-mono text-[13px]">--color-primary-300</code>,{" "}
            <code className="font-mono text-[13px]">$color-primary-300</code> and{" "}
            <code className="font-mono text-[13px]">colorPrimary300</code>. Names read general to specific:
            category, group, step — steps run 100 (lightest) to 500 (darkest).
          </Rule>
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
            place. Legacy names still work; deprecated tokens are flagged below.
          </Note>
          <SemanticTokens />
        </Section>

        <Section id="color" title="Color">
          <Rule>
            Brand, semantic and palette colors. Reference semantic tokens in product code — they move with
            you when the palette shifts.
          </Rule>
          <ColorTokens />
        </Section>

        <Section id="typography" title="Typography">
          <Rule>Font families, weights and the heading / body / article type scales.</Rule>
          <TypographyTokens />
        </Section>

        <Section id="spacing" title="Spacing">
          <Rule>The spacer scale used for padding, margin and gaps.</Rule>
          <SpacingTokens />
        </Section>

        <Section id="border-radius" title="Border radius">
          <Rule>
            There&apos;s no dedicated radius token set — components take their radius from the spacer
            scale, and it converges on 5px.
          </Rule>
          <RadiusScale />
          <ul className="list-disc space-y-1.5 pl-5 text-[15px] text-muted-foreground">
            <li>Use 5px for controls, panels and anything that contains content.</li>
            <li>
              Use square corners only where a component sits flush against another, such as the subtle
              Callout variant.
            </li>
            <li>
              Reserve the 30px pill for the Button <code>rounded</code> prop — not inputs or containers.
            </li>
            <li>Don&apos;t invent intermediate radii. If a component needs a different value, add a component token.</li>
          </ul>
        </Section>

        <Section id="shadows" title="Shadows & blurs">
          <Rule>Elevation shadows for navigation, containers and overlays.</Rule>
          <ShadowTokens />
        </Section>

        <Section id="breakpoints" title="Breakpoints & screen sizes">
          <Rule>Three breakpoints create four grid sizes, from large desktops to small mobiles.</Rule>
          <div className="not-prose overflow-x-auto rounded-md border">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 text-left text-xs text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-medium" />
                  <th className="px-3 py-2 font-medium">Large desktop</th>
                  <th className="px-3 py-2 font-medium">Small desktop</th>
                  <th className="px-3 py-2 font-medium">Large device</th>
                  <th className="px-3 py-2 font-medium">Small device</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-3 py-2 font-medium text-muted-foreground">Display width</td>
                  <td className="px-3 py-2 font-mono text-[12.5px]">&gt; 1440</td>
                  <td className="px-3 py-2 font-mono text-[12.5px]">1439 – 1000</td>
                  <td className="px-3 py-2 font-mono text-[12.5px]">999 – 450</td>
                  <td className="px-3 py-2 font-mono text-[12.5px]">&lt; 449</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-muted-foreground">Grid width</td>
                  <td className="px-3 py-2">1370px</td>
                  <td className="px-3 py-2">910px</td>
                  <td className="px-3 py-2">450px</td>
                  <td className="px-3 py-2">100%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-muted-foreground">Columns</td>
                  <td className="px-3 py-2">12</td>
                  <td className="px-3 py-2">12</td>
                  <td className="px-3 py-2">1</td>
                  <td className="px-3 py-2">1</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-muted-foreground">Global nav</td>
                  <td className="px-3 py-2">Default, top</td>
                  <td className="px-3 py-2">Default, top</td>
                  <td className="px-3 py-2">Tablet, top</td>
                  <td className="px-3 py-2">Mobile, top</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-muted-foreground">Contextual nav</td>
                  <td className="px-3 py-2">Default, left</td>
                  <td className="px-3 py-2">Default, left</td>
                  <td className="px-3 py-2">Mobile, top</td>
                  <td className="px-3 py-2">Mobile, top</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="layout-anatomy" title="Layout anatomy">
          <Rule>
            Containers, rows and columns lay out and align content. Main navigation sits outside the
            container and grid; the responsive grid is centered inside it, and its width follows the
            breakpoint above.
          </Rule>
          <GridAnatomy />
          <Rule>
            12 columns, always separated by a 10px gutter (<code>--size-spacer-sm</code>).
          </Rule>
          <ColumnRuler />
          <Rule>Any combination of columns can share a row, so long as they total 12.</Rule>
          <ColumnLayouts />
          <Rule>
            A header split into two columns, and three tiles below, at each grid size. When a column
            can&apos;t fit, it wraps below and the row grows.
          </Rule>
          <GridExample />
        </Section>
      </div>
    </DocShell>
  )
}
