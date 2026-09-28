import { componentGroups, componentSlug } from "@/lib/nimbus-nav"

export interface NavItem {
  title: string
  href: string
}

export interface NavGroup {
  /** Top-level section label (Docs, Tokens, Components). */
  section: string
  /** Optional sub-heading, used to split a section into categories. */
  title?: string
  items: NavItem[]
}

export const siteConfig = {
  name: "Nimbus",
  description:
    "The Nimbus design system: foundations, design tokens, core React components and patterns for Console Connect products.",
  githubUrl: "https://github.com/ConsoleConnect/nimbus-ui",
}

export const mainNav: NavItem[] = [
  { title: "Getting started", href: "/docs/introduction" },
  { title: "Foundations", href: "/docs/foundations/tokens" },
  { title: "Components", href: "/docs/components" },
  { title: "Patterns", href: "/docs/patterns/overview" },
]

const FOUNDATIONS_TOKENS: NavItem[] = [
  { title: "Tokens", href: "/docs/foundations/tokens" },
  { title: "Colors", href: "/docs/foundations/colors" },
  { title: "Typography", href: "/docs/foundations/typography" },
  { title: "Spacing", href: "/docs/foundations/spacing" },
  { title: "Size", href: "/docs/foundations/size" },
  { title: "Borders", href: "/docs/foundations/borders" },
  { title: "Layout", href: "/docs/foundations/layout" },
  { title: "Icons", href: "/docs/foundations/icons" },
]

export const sidebarNav: NavGroup[] = [
  {
    section: "Getting started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Contributing", href: "/docs/contributing" },
      { title: "Testing Guide", href: "/docs/testing-guide" },
    ],
  },
  {
    section: "Foundations",
    items: [
      { title: "Tone of voice", href: "/docs/foundations/tone-of-voice" },
      { title: "Color system", href: "/docs/foundations/color-system" },
    ],
  },
  {
    section: "Foundations",
    title: "Design tokens",
    items: FOUNDATIONS_TOKENS,
  },
  {
    section: "Components",
    items: [{ title: "Overview", href: "/docs/components" }],
  },
  ...componentGroups().map((g) => ({
    section: "Components",
    title: g.title,
    items: g.names.map((name) => ({ title: name, href: `/docs/components/${componentSlug(name)}` })),
  })),
  {
    section: "Patterns",
    items: [
      { title: "Overview", href: "/docs/patterns/overview" },
      { title: "Form validation", href: "/docs/patterns/form-validation" },
    ],
  },
]

/** Top-level sections (header tabs) — each links to its section's landing page, not a sidebar anchor. */
export const sectionTabs = mainNav

/** Which section a pathname belongs to (for the active tab and the per-section sidebar). */
export function sectionOf(pathname: string): string | null {
  const exact = sidebarNav.find((g) => g.items.some((i) => i.href === pathname))
  if (exact) return exact.section
  const prefixes: Array<[string, string]> = [
    ["/docs/components", "Components"],
    ["/docs/patterns", "Patterns"],
    ["/docs/foundations", "Foundations"],
  ]
  return prefixes.find(([p]) => pathname.startsWith(p))?.[1] ?? null
}
