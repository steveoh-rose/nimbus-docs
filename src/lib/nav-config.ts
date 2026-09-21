import { componentGroups, componentSlug } from "@/lib/nimbus-nav"

export interface NavItem {
  title: string
  href: string
}

export interface NavGroup {
  /** Top-level section label (Foundations, Tokens, Icons, Components, Patterns). */
  section: string
  /** Optional sub-heading, used to split Components into categories. */
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
  { title: "Foundations", href: "/docs/foundations/tone-of-voice" },
  { title: "Tokens", href: "/docs/tokens/overview" },
  { title: "Components", href: "/docs/components/button" },
  { title: "Patterns", href: "/docs/patterns/overview" },
]

export const sidebarNav: NavGroup[] = [
  {
    section: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Contributing", href: "/docs/contributing" },
      { title: "Testing Guide", href: "/docs/testing-guide" },
    ],
  },
  {
    section: "Foundations",
    items: [{ title: "Tone of voice", href: "/docs/foundations/tone-of-voice" }],
  },
  {
    section: "Tokens",
    items: [
      { title: "Overview", href: "/docs/tokens/overview" },
      { title: "Design tokens", href: "/docs/tokens/design-tokens" },
      { title: "Color", href: "/docs/tokens/colors" },
      { title: "Typography", href: "/docs/tokens/typography" },
      { title: "Icons", href: "/docs/tokens/icons" },
      { title: "Shadows", href: "/docs/tokens/shadows" },
      { title: "Border radius", href: "/docs/tokens/border-radius" },
      { title: "Spacing", href: "/docs/tokens/spacing" },
      { title: "Breakpoints and screen sizes", href: "/docs/tokens/breakpoints-and-screen-sizes" },
      { title: "Layout anatomy", href: "/docs/tokens/layout-anatomy" },
    ],
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
