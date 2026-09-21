import { componentGroups, componentSlug } from "@/lib/nimbus-nav"

export interface NavItem {
  title: string
  href: string
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export const siteConfig = {
  name: "Nimbus",
  description:
    "The Nimbus design system: design tokens, core React components and icons for Console Connect products.",
  githubUrl: "https://github.com/ConsoleConnect/nimbus-ui",
}

export const mainNav: NavItem[] = [
  { title: "Docs", href: "/docs/introduction" },
  { title: "Tokens", href: "/docs/tokens/colors" },
  { title: "Components", href: "/docs/components/button" },
  { title: "Icons", href: "/docs/icons/app" },
]

export const sidebarNav: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Contributing", href: "/docs/contributing" },
      { title: "Testing Guide", href: "/docs/testing-guide" },
    ],
  },
  {
    title: "Tokens",
    items: [
      { title: "Colors", href: "/docs/tokens/colors" },
      { title: "Typography", href: "/docs/tokens/typography" },
      { title: "Spacing", href: "/docs/tokens/spacing" },
      { title: "Shadows", href: "/docs/tokens/shadows" },
    ],
  },
  ...componentGroups().map((g) => ({
    title: g.title,
    items: g.names.map((name) => ({ title: name, href: `/docs/components/${componentSlug(name)}` })),
  })),
  {
    title: "Assets",
    items: [
      { title: "App icons", href: "/docs/icons/app" },
      { title: "Brand icons", href: "/docs/icons/brand" },
    ],
  },
]
