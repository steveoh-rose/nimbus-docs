import { nimbusComponents } from "@/generated/nimbus-manifest"

/** Client-safe helpers (no fs): used by the sidebar, search and route params. */
export const componentSlug = (name: string) => name.toLowerCase()

export function documentedComponents() {
  return Object.entries(nimbusComponents)
    .filter(([, v]) => v.stories.length > 0)
    .map(([name, v]) => ({ name, ...v }))
}

export function componentBySlug(slug: string) {
  return documentedComponents().find((c) => componentSlug(c.name) === slug) ?? null
}

/** Sidebar groups. Newly added components fall into "More" so nothing is silently dropped. */
const CATEGORIES: Record<string, string[]> = {
  Inputs: ["Button", "TextInput", "TextArea", "Checkbox", "Radio", "Switch", "ComboBox", "DatePicker", "FileTrigger"],
  Overlays: ["Dialog", "Modal", "Popover", "Menu", "Tooltip", "Toast"],
  Display: ["Badge", "Callout", "Spinner", "Table", "Pagination", "Disclosure"],
  Layout: ["Flex"],
}

export function componentGroups() {
  const all = documentedComponents().map((c) => c.name)
  const used = new Set<string>()
  const groups = Object.entries(CATEGORIES)
    .map(([title, names]) => ({ title, names: names.filter((n) => all.includes(n)) }))
    .filter((g) => g.names.length)
  groups.forEach((g) => g.names.forEach((n) => used.add(n)))
  const rest = all.filter((n) => !used.has(n))
  if (rest.length) groups.push({ title: "More", names: rest })
  return groups
}

export const storyAnchor = (exportName: string) =>
  exportName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()

/** Single-purpose primitives vs. composite/overlay-driven components, for the components overview page. */
const CORE_COMPONENTS = [
  "Button",
  "Badge",
  "Callout",
  "Checkbox",
  "Disclosure",
  "Label",
  "Radio",
  "Spinner",
  "Switch",
  "TextArea",
  "TextInput",
]

export function componentTiers() {
  const all = documentedComponents().map((c) => c.name)
  const core = CORE_COMPONENTS.filter((n) => all.includes(n))
  const complex = all.filter((n) => !core.includes(n))
  return { core, complex }
}
