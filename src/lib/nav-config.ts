export interface NavItem {
  title: string
  href: string
  description?: string
  badge?: "New" | "Soon"
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export const siteConfig = {
  name: "Nimbus UI",
  description:
    "The Nimbus design system — tokens, components, compound components, and patterns for building ConsoleConnect products.",
  githubUrl: "https://github.com/ConsoleConnect/nimbus-ui",
  storybookUrl: "https://consoleconnect.github.io/nimbus-ui/",
}

export const mainNav: NavItem[] = [
  { title: "Docs", href: "/docs/introduction" },
  { title: "Tokens", href: "/docs/tokens/color" },
  { title: "Components", href: "/docs/components/button" },
  { title: "Compound Components", href: "/docs/compound/data-table" },
  { title: "Patterns", href: "/docs/patterns/empty-states" },
]

export const sidebarNav: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
      { title: "Dark Mode", href: "/docs/dark-mode" },
    ],
  },
  {
    title: "Tokens",
    items: [
      { title: "Color", href: "/docs/tokens/color" },
      { title: "Typography", href: "/docs/tokens/typography" },
      { title: "Spacing", href: "/docs/tokens/spacing" },
      { title: "Radius", href: "/docs/tokens/radius" },
      { title: "Shadows", href: "/docs/tokens/shadows" },
      { title: "Motion", href: "/docs/tokens/motion" },
    ],
  },
  {
    title: "Inputs",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Slider", href: "/docs/components/slider" },
    ],
  },
  {
    title: "Overlays",
    items: [
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
      { title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { title: "Sheet", href: "/docs/components/sheet" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Separator", href: "/docs/components/separator" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Progress", href: "/docs/components/progress" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
    ],
  },
  {
    title: "Compound Components",
    items: [
      { title: "Data Table", href: "/docs/compound/data-table" },
      { title: "Command Menu", href: "/docs/compound/command-menu" },
      { title: "Auth Card", href: "/docs/compound/auth-card" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { title: "Empty States", href: "/docs/patterns/empty-states" },
      { title: "Form Validation", href: "/docs/patterns/form-validation" },
      { title: "Confirmation Flow", href: "/docs/patterns/confirmation-flow" },
    ],
  },
]

export function flattenNav(): NavItem[] {
  return sidebarNav.flatMap((group) =>
    group.items.map((item) => ({ ...item, title: `${group.title}: ${item.title}` }))
  )
}
