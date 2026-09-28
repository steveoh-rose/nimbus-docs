import { CodeBlock } from "@/components/code-block"
import { GRADIENT_HEX, type GradientName } from "@/components/brand/brand-constants"
import { BrandIconStrip } from "@/components/brand/brand-icon-strip"

// Stops as defined in nimbus-assets src/constants/brand.colors.js; each one is a brand color token.
const GRADIENTS: Array<{ name: GradientName; from: string; to: string; icons: string[] }> = [
  { name: "purple-rain", from: "brand-purple", to: "brand-pink", icons: ["Heart", "Idea", "Chat"] },
  { name: "luscious-green", from: "brand-blue", to: "brand-green", icons: ["Cloud", "Network", "Globe"] },
  { name: "blue-hour", from: "brand-purple", to: "brand-green", icons: ["Api", "Integration", "Iot"] },
  { name: "the-way-of-water", from: "brand-purple", to: "brand-aqua", icons: ["Firewall", "Key", "Location"] },
]

export function BrandGradients() {
  return (
    <section id="brand-gradients" className="scroll-mt-24">
      <h2 className="mb-2 text-xl font-semibold tracking-tight">Brand gradients</h2>
      <p className="mb-5 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
        Four two-stop gradients, each built from brand color tokens. They&apos;re the gradients brand icons and brand
        illustrations use — pass one to any brand icon with the <code className="font-mono text-[13px]">gradient</code>{" "}
        prop. <code className="font-mono text-[13px]">purple-rain</code> is the default.
      </p>
      <div className="not-prose grid gap-5 sm:grid-cols-2">
        {GRADIENTS.map((g) => {
          const [a, b] = GRADIENT_HEX[g.name]
          return (
            <div key={g.name} className="overflow-hidden rounded-2xl border">
              <div className="h-24" style={{ background: `var(--gradient-${g.name})` }} />
              <div className="flex flex-col gap-4 p-5">
                <div>
                  <div className="font-heading text-base font-semibold">{g.name}</div>
                  <dl className="mt-2 space-y-1 font-mono text-xs whitespace-nowrap text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="size-3 rounded-sm" style={{ background: `var(--color-${g.from})` }} />
                      <dt>${`color-${g.from}`}</dt>
                      <dd>{a}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-3 rounded-sm" style={{ background: `var(--color-${g.to})` }} />
                      <dt>${`color-${g.to}`}</dt>
                      <dd>{b}</dd>
                    </div>
                  </dl>
                </div>
                <BrandIconStrip size={38} className="gap-3" items={g.icons.map((name) => ({ name, gradient: g.name }))} />
              </div>
            </div>
          )
        })}
      </div>
      <CodeBlock
        lang="tsx"
        code={`import { Cloud } from '@console/nimbus-assets/icons/brand';\n\n<Cloud gradient="luscious-green" contrastMode="light" />`}
      />
    </section>
  )
}
