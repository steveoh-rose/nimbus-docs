"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search as SearchIcon } from "@nimbus/assets/icons/app"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { sidebarNav } from "@/lib/nav-config"

const sections = Object.entries(
  sidebarNav.reduce<Record<string, { title: string; href: string }[]>>((acc, g) => {
    ;(acc[g.section] ??= []).push(...g.items)
    return acc
  }, {})
)

/** Sections inside pages that people search for by name. */
const JUMP_TO = [
  { title: "Brand colors", href: "/docs/foundations/colors#color-brand", keywords: "navy pink purple" },
  { title: "Brand gradients", href: "/docs/foundations/colors#brand-gradients", keywords: "purple-rain luscious-green blue-hour the-way-of-water" },
  { title: "Palette colors", href: "/docs/foundations/colors#color-palette", keywords: "sky lavender ocean emerald gold amber ruby graphite stone slate" },
  { title: "Semantic colors", href: "/docs/foundations/colors#color-semantic", keywords: "text bg system status" },
  { title: "All tokens (searchable)", href: "/docs/foundations/tokens#all-tokens", keywords: "css scss variables" },
  { title: "App icons", href: "/docs/foundations/icons#app", keywords: "currentColor" },
  { title: "Brand icons", href: "/docs/foundations/icons#brand", keywords: "gradient contrastMode illustration" },
  { title: "Border radius", href: "/docs/foundations/borders#radius", keywords: "rounded corners" },
  { title: "Proposed 4pt sizing scale", href: "/docs/foundations/size#proposed-4pt-scale", keywords: "size scale" },
  { title: "Breakpoints & screen sizes", href: "/docs/foundations/layout#breakpoints", keywords: "responsive grid" },
  { title: "Layout anatomy", href: "/docs/foundations/layout#layout-anatomy", keywords: "columns gutter grid" },
  { title: "Showcase reel", href: "/showcase", keywords: "video motion animation" },
  { title: "Case study reel: Product Fruits", href: "/showcase/product-fruits", keywords: "onboarding announcement modal" },
]

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  function onSelect(href: string) {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-full border bg-muted pr-2 pl-4 text-sm text-muted-foreground transition-colors hover:border-[var(--color-primary-200)] hover:bg-background sm:max-w-[17rem] sm:flex-none sm:basis-[17rem]"
      >
        <SearchIcon className="size-4 shrink-0" />
        <span className="flex-1 truncate text-left">Search the docs</span>
        <kbd className="pointer-events-none hidden select-none items-center gap-1 text-[11px] font-semibold sm:flex">
          <span className="rounded-full border bg-background px-2 py-0.5">Ctrl</span>
          <span className="rounded-full border bg-background px-2 py-0.5">K</span>
        </kbd>
        <span className="sr-only">Search docs</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search foundations, components, patterns…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Jump to">
            {JUMP_TO.map((item) => (
              <CommandItem key={item.href} value={`${item.title} ${item.keywords}`} onSelect={() => onSelect(item.href)}>
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
          {sections.map(([section, items]) => (
            <CommandGroup key={section} heading={section}>
              {items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${section} ${item.title}`}
                  onSelect={() => onSelect(item.href)}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
