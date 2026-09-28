import Link from "next/link"
import { ArrowRight } from "@nimbus/assets/icons/app"

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
        "gradient-ring group flex flex-col border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
        dense ? "rounded-none" : "rounded-3xl"
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
        className={cn(
          "relative flex h-36 items-center justify-center overflow-hidden bg-[var(--color-bg-100)] p-4",
          dense ? "rounded-none" : "rounded-t-3xl"
        )}
      >
        <div aria-hidden className="dot-rings absolute inset-0 opacity-60" />
        <div className="relative transition-transform duration-300 group-hover:scale-105">
          <ComponentThumbnail name={name} />
        </div>
      </div>
      <div className="border-t px-5 py-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-heading text-[1.05rem] font-semibold">{name}</span>
          <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
        <p className="mt-1 text-[0.85rem] leading-snug text-muted-foreground">{DESCRIPTIONS[name] ?? "Documented from live Storybook stories."}</p>
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
          <p className="brand-kicker">{core.length} primitives</p>
          <h2 className="mt-3 mb-1 font-heading text-2xl font-semibold tracking-tight">Core components</h2>
          <p className="mb-6 text-muted-foreground">Single-purpose primitives — the building blocks for everything else.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {core.map((name) => (
              <ComponentCard key={name} name={name} />
            ))}
          </div>
        </section>

        <section>
          <p className="brand-kicker">{complex.length} composites</p>
          <h2 className="mt-3 mb-1 font-heading text-2xl font-semibold tracking-tight">Complex components</h2>
          <p className="mb-6 text-muted-foreground">Composite, overlay-driven or data-heavy components, built from the core set.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {complex.map((name) => (
              <ComponentCard key={name} name={name} dense />
            ))}
          </div>
        </section>
      </div>
    </DocShell>
  )
}
