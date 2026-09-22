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
  { title: "Docs", href: "/docs/introduction" },
  { title: "Tokens", href: "/docs/tokens" },
  { title: "Icons", href: "/docs/icons" },
  { title: "Components", href: "/docs/components" },
]

const TOKEN_CATEGORIES: NavItem[] = [
  { title: "Design tokens", href: "/docs/tokens#design-tokens" },
  { title: "Color", href: "/docs/tokens#color" },
  { title: "Typography", href: "/docs/tokens#typography" },
  { title: "Spacing", href: "/docs/tokens#spacing" },
  { title: "Border radius", href: "/docs/tokens#border-radius" },
  { title: "Shadows & blurs", href: "/docs/tokens#shadows" },
  { title: "Breakpoints & screen sizes", href: "/docs/tokens#breakpoints" },
  { title: "Layout anatomy", href: "/docs/tokens#layout-anatomy" },
]

const ICON_CATEGORIES: NavItem[] = [
  { title: "App icons", href: "/docs/icons#app" },
  { title: "Brand icons", href: "/docs/icons#brand" },
]

export const sidebarNav: NavGroup[] = [
  {
    section: "Docs",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Contributing", href: "/docs/contributing" },
      { title: "Testing Guide", href: "/docs/testing-guide" },
    ],
  },
  {
    section: "Docs",
    title: "Foundations",
    items: [{ title: "Tone of voice", href: "/docs/foundations/tone-of-voice" }],
  },
  {
    section: "Docs",
    title: "Patterns",
    items: [
      { title: "Overview", href: "/docs/patterns/overview" },
      { title: "Form validation", href: "/docs/patterns/form-validation" },
    ],
  },
  {
    section: "Tokens",
    items: TOKEN_CATEGORIES,
  },
  {
    section: "Icons",
    items: ICON_CATEGORIES,
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
]

/** Top-level sections (header tabs) — each links to its section's landing page, not a sidebar anchor. */
export const sectionTabs = mainNav

/** Which section a pathname belongs to (for the active tab and the per-section sidebar). */
export function sectionOf(pathname: string): string | null {
  const exact = sidebarNav.find((g) => g.items.some((i) => i.href === pathname))
  if (exact) return exact.section
  const prefixes: Array<[string, string]> = [
    ["/docs/components", "Components"],
    ["/docs/icons", "Icons"],
    ["/docs/tokens", "Tokens"],
    ["/docs", "Docs"],
  ]
  return prefixes.find(([p]) => pathname.startsWith(p))?.[1] ?? null
}
