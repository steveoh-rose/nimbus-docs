import { DocShell } from "@/components/doc-shell"
import { ColumnLayouts, ColumnRuler, GridAnatomy, GridExample } from "@/components/content/grid-visuals"

export const metadata = { title: "Layout" }

const HEADINGS = [
  { depth: 2 as const, text: "Breakpoints & screen sizes", slug: "breakpoints" },
  { depth: 2 as const, text: "Layout anatomy", slug: "layout-anatomy" },
]

function Rule({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">{children}</p>
}

export default function LayoutPage() {
  return (
    <DocShell
      title="Layout"
      description="Breakpoints, the responsive grid and how containers, rows and columns compose a page."
      headings={HEADINGS}
    >
      <div className="space-y-10">
        <section id="breakpoints" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Breakpoints &amp; screen sizes</h2>
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
        </section>

        <section id="layout-anatomy" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Layout anatomy</h2>
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
        </section>
      </div>
    </DocShell>
  )
}
