"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { sidebarNav } from "@/lib/nav-config"

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
      <Button
        variant="outline"
        size="icon"
        className="size-8 text-muted-foreground sm:hidden"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-4" />
        <span className="sr-only">Search docs</span>
      </Button>
      <Button
        variant="outline"
        className="hidden h-8 w-56 justify-start gap-2 text-sm text-muted-foreground sm:flex"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-4" />
        <span className="flex-1 text-left">Search docs...</span>
        <kbd className="pointer-events-none hidden select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search Tokens, Components, Patterns..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${group.title} ${item.title}`}
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
