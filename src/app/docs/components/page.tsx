import Link from "next/link"

import { DocShell } from "@/components/doc-shell"
import { ComponentThumbnail } from "@/components/nimbus/component-thumbnails"
import { componentSlug, componentTiers } from "@/lib/nimbus-nav"
import { cn } from "@/lib/utils"

export const metadata = { title: "Components" }

const DESCRIPTIONS: Record<string, string> = {
  Button: "Clickable action with six variants and three sizes.",
  Badge: "Compact status or count, driven by semantic intents.",
  Callout: "Inline banner for a hint, warning or error.",
  Checkbox: "Binary selection with an indeterminate state.",
  Disclosure: "Collapsible section with four visual variants.",
  Label: "Accessible field label, paired with any input.",
  Radio: "Single choice from a small set of options.",
  Spinner: "Indeterminate loading indicator.",
  Switch: "Binary on/off toggle for settings.",
  TextArea: "Multi-line text entry with a resizable box.",
  TextInput: "Single-line text entry with label and hint.",
  ComboBox: "Searchable dropdown with typeahead filtering.",
  DatePicker: "Calendar-backed date entry.",
  Dialog: "Focus-trapped content for a single decision.",
  FileTrigger: "Native file picker, styled as a drop zone.",
  Flex: "Layout primitive for rows, columns and gaps.",
  Menu: "Contextual list of actions from a trigger.",
  Modal: "Centered overlay that blocks the page below it.",
  Pagination: "Navigation through large sets of records.",
  Popover: "Anchored overlay for filters and details.",
  Table: "Rows and columns for structured data.",
  Toast: "Transient confirmation or status message.",
  Tooltip: "Short hint revealed on hover or focus.",
}

function ComponentCard({ name, dense }: { name: string; dense?: boolean }) {
  return (
    <Link
      href={`/docs/components/${componentSlug(name)}`}
      className={cn(
        "group flex flex-col overflow-hidden border bg-card transition-colors hover:border-foreground/20 hover:shadow-sm",
        dense ? "rounded-none" : "rounded-lg"
      )}
    >
      {/*
        Several thumbnails (Button, Checkbox, Switch, Menu, Popover, ...) render real,
        interactive Nimbus components nested inside this <Link>. `inert` makes that subtree
        unfocusable, unclickable and hidden from assistive tech in one attribute, so the card
        behaves as a single link instead of a button-inside-a-button / input-inside-a-link mess.
      */}
      <div
        data-nimbus-canvas
        inert
        className="flex h-28 items-center justify-center bg-[var(--color-bg-100)] p-4"
      >
        <ComponentThumbnail name={name} />
      </div>
      <div className="border-t px-4 py-3.5">
        <div className="font-heading text-[0.95rem] font-semibold">{name}</div>
        <p className="mt-1 text-[13px] leading-snug text-muted-foreground">{DESCRIPTIONS[name] ?? "Documented from live Storybook stories."}</p>
      </div>
    </Link>
  )
}

export default function ComponentsOverviewPage() {
  const { core, complex } = componentTiers()

  return (
    <DocShell
      title="Components"
      description="Every Nimbus component, grouped by how many moving parts it has. Each one is documented from the same Storybook stories the code ships with."
    >
      <div className="space-y-12">
        <section>
          <h2 className="mb-1 font-heading text-xl font-semibold tracking-tight">Core components</h2>
          <p className="mb-5 text-muted-foreground">Single-purpose primitives — the building blocks for everything else.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {core.map((name) => (
              <ComponentCard key={name} name={name} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-1 font-heading text-xl font-semibold tracking-tight">Complex components</h2>
          <p className="mb-5 text-muted-foreground">Composite, overlay-driven or data-heavy components, built from the core set.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {complex.map((name) => (
              <ComponentCard key={name} name={name} dense />
            ))}
          </div>
        </section>
      </div>
    </DocShell>
  )
}
