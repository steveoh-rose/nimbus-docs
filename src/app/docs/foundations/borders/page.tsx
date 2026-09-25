import { DocShell } from "@/components/doc-shell"
import { Note } from "@/components/content/guidance"
import { RadiusScale } from "@/components/content/token-tables"

export const metadata = { title: "Borders" }

const HEADINGS = [
  { depth: 2 as const, text: "Radius", slug: "radius" },
  { depth: 2 as const, text: "Width & style", slug: "width-style" },
]

export default function BordersPage() {
  return (
    <DocShell
      title="Borders"
      description="Border radius, width and style conventions used across Nimbus components."
      headings={HEADINGS}
    >
      <div className="space-y-10">
        <section id="radius" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Radius</h2>
          <p className="mb-4 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
            There&apos;s no dedicated radius token set — components take their radius from the spacer
            scale, and it converges on 5px.
          </p>
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
        </section>

        <section id="width-style" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Width &amp; style</h2>
          <p className="mb-4 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
            Nimbus has no border-width or border-style tokens. Across the component SCSS, borders are
            hardcoded to a single convention: <code className="font-mono text-[13px]">1px solid</code>.
          </p>
          <Note title="Convention, not a token">
            Confirmed directly in component styles — <code>Callout.module.scss</code>,{" "}
            <code>DatePicker.module.scss</code>, <code>TextArea.module.scss</code> and{" "}
            <code>TextInput.module.scss</code> all set <code>border: 1px solid</code> (or an equivalent
            <code>border-width: 1px</code>) against a semantic color token. There&apos;s nothing to swap
            in — if a component needs a different width or style, that&apos;s a deliberate exception, not
            a token lookup.
          </Note>
          <div className="not-prose mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border p-4">
              <div
                className="mb-4 h-16 rounded-[5px] bg-[var(--color-bg-default)]"
                style={{ border: "1px solid var(--color-system-300)" }}
              />
              <div className="font-mono text-[12px] font-medium">border: 1px solid</div>
              <div className="text-xs text-muted-foreground">Default — inputs, callouts, cards, popovers</div>
            </div>
            <div className="rounded-md border p-4">
              <div
                className="mb-4 h-16 rounded-[5px] bg-[var(--color-bg-default)]"
                style={{ border: "1px dashed var(--color-system-300)" }}
              />
              <div className="font-mono text-[12px] font-medium">border: 1px dashed</div>
              <div className="text-xs text-muted-foreground">
                Seen only in a Flex story placeholder — not a real component convention
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocShell>
  )
}
