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
    "The Nimbus design system: foundations, design tokens, icons, core React components and patterns for Console Connect products.",
  githubUrl: "https://github.com/ConsoleConnect/nimbus-ui",
}

export const mainNav: NavItem[] = [
  { title: "Foundations", href: "/docs/foundations/grid-system" },
  { title: "Tokens", href: "/docs/tokens/colors" },
  { title: "Icons", href: "/docs/icons/app" },
  { title: "Components", href: "/docs/components/button" },
  { title: "Patterns", href: "/docs/patterns/form-validation" },
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
    items: [
      { title: "Grid system", href: "/docs/foundations/grid-system" },
      { title: "Tone of voice", href: "/docs/foundations/tone-of-voice" },
    ],
  },
  {
    section: "Tokens",
    items: [
      { title: "Colors", href: "/docs/tokens/colors" },
      { title: "Typography", href: "/docs/tokens/typography" },
      { title: "Spacing", href: "/docs/tokens/spacing" },
      { title: "Shadows", href: "/docs/tokens/shadows" },
    ],
  },
  {
    section: "Icons",
    items: [
      { title: "App icons", href: "/docs/icons/app" },
      { title: "Brand icons", href: "/docs/icons/brand" },
    ],
  },
  ...componentGroups().map((g) => ({
    section: "Components",
    title: g.title,
    items: g.names.map((name) => ({ title: name, href: `/docs/components/${componentSlug(name)}` })),
  })),
  {
    section: "Patterns",
    items: [{ title: "Form validation", href: "/docs/patterns/form-validation" }],
  },
]
