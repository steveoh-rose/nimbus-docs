import { CodeBlock } from "@/components/code-block"
import { StoryCanvas } from "@/components/nimbus/story-canvas"
import { ArgTypesTable } from "@/components/nimbus/argtypes-table"
import { storyAnchor } from "@/lib/nimbus-nav"
import { formatDescription, readStories } from "@/lib/story-source"
import type { ShareLinks } from "@/lib/nimbus"
import { GitHubMarkIcon } from "@/components/icons"
import propsData from "@/generated/props.json"

function Description({ text }: { text: string }) {
  if (!text) return null
  return (
    <p className="text-sm text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em]">
      {formatDescription(text).map((part, i) =>
        part.code ? <code key={i}>{part.text}</code> : <span key={i}>{part.text}</span>
      )}
    </p>
  )
}

export function StoryBlock({
  storyKey,
  name,
  controls,
  heading,
  dense,
}: {
  storyKey: string
  name?: string
  controls?: boolean
  heading?: boolean
  /** Sharp, radius-free corners — the Carbon-influenced treatment for "complex" components. */
  dense?: boolean
}) {
  const infos = readStories(storyKey)
  const info = name ? infos.find((i) => i.exportName === name) : infos[0]
  if (!info) {
    return <p className="text-sm text-destructive">Story {name ?? "(primary)"} not found in {storyKey}.</p>
  }
  return (
    <section id={storyAnchor(info.exportName)} className="not-prose my-8 scroll-mt-32 space-y-3">
      {heading ? <h3 className="text-lg font-semibold tracking-tight">{info.name}</h3> : null}
      <Description text={info.description} />
      <StoryCanvas
        storyKey={storyKey}
        exportName={info.exportName}
        controls={controls}
        collapsible={info.code.split("\n").length > 8}
        dense={dense}
        codeSlot={
          info.code ? <CodeBlock code={info.code} lang="tsx" className="my-0 rounded-none border-0 shadow-none" /> : undefined
        }
      />
    </section>
  )
}

export function StoriesList({
  storyKey,
  includePrimary,
  dense,
}: {
  storyKey: string
  includePrimary?: boolean
  dense?: boolean
}) {
  const infos = readStories(storyKey)
  return (
    <>
      {infos.slice(includePrimary ? 0 : 1).map((i) => (
        <StoryBlock key={i.exportName} storyKey={storyKey} name={i.exportName} heading dense={dense} />
      ))}
    </>
  )
}

type PropRow = { name: string; type: string; required: boolean; defaultValue: string | null; description: string }
type Section = { name: string; description: string; props: PropRow[] }

export function ApiTable({ component, storyKey }: { component: string; storyKey: string }) {
  const sections = ((propsData as Record<string, Section[]>)[component] ?? []).filter((s) => s.props.length)
  if (!sections.length) return <ArgTypesTable storyKey={storyKey} />
  return (
    <div className="not-prose space-y-8">
      {sections.map((section) => (
        <div key={section.name}>
          {sections.length > 1 ? <h3 className="mb-2 font-mono text-sm font-semibold">{section.name}</h3> : null}
          {section.description ? <p className="mb-2 text-sm text-muted-foreground">{section.description}</p> : null}
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-medium">Prop</th>
                  <th className="px-3 py-2 font-medium">Type</th>
                  <th className="px-3 py-2 font-medium">Default</th>
                  <th className="px-3 py-2 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {section.props.map((p) => (
                  <tr key={p.name} className="align-top">
                    <td className="px-3 py-2 font-mono text-[13px] font-medium">
                      {p.name}
                      {p.required ? <span className="text-destructive">*</span> : null}
                    </td>
                    <td className="max-w-[320px] px-3 py-2 font-mono text-xs text-muted-foreground">{p.type}</td>
                    <td className="px-3 py-2 font-mono text-xs">{p.defaultValue ?? "—"}</td>
                    <td className="px-3 py-2 text-muted-foreground">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ShareLinksBar({ links }: { links: ShareLinks }) {
  const items: Array<{ label: string; href: string | undefined; icon: React.ReactNode }> = [
    { label: "React Aria", href: links.adobe, icon: <img src="/logos/adobe-logo.png" alt="" className="size-3.5" /> },
    { label: "Source", href: links.github, icon: <GitHubMarkIcon className="size-3.5" /> },
    { label: "Figma", href: links.figma, icon: <img src="/logos/figma-logo.png" alt="" className="size-3.5" /> },
  ]
  const present = items.filter((i) => i.href)
  if (!present.length) return null
  return (
    <div className="not-prose flex flex-wrap gap-2">
      {present.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-full border bg-background px-3.5 text-sm font-semibold transition-colors hover:border-[var(--color-primary-200)] hover:bg-[var(--color-primary-100)]"
        >
          {item.icon}
          {item.label}
        </a>
      ))}
    </div>
  )
}
