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
        className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-full border bg-white px-3.5 text-sm text-muted-foreground transition-colors hover:bg-[var(--color-bg-200)] sm:max-w-[22rem] sm:flex-none sm:basis-[22rem]"
      >
        <SearchIcon className="size-4 shrink-0" />
        <span className="flex-1 truncate text-left">Search</span>
        <kbd className="pointer-events-none hidden select-none items-center gap-1 font-mono text-[11px] sm:flex">
          <span className="rounded bg-[var(--color-bg-200)] px-1.5 py-0.5">Ctrl</span>
          <span className="rounded bg-[var(--color-bg-200)] px-1.5 py-0.5">K</span>
        </kbd>
        <span className="sr-only">Search docs</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search Tokens, Components, Patterns..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
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
