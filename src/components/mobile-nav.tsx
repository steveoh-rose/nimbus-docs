"use client"

import * as React from "react"
import Link from "next/link"
import { Menu as MenuIcon } from "@nimbus/assets/icons/app"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DocsNavList } from "@/components/docs-sidebar"
import { siteConfig } from "@/lib/nav-config"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8 lg:hidden">
          <MenuIcon className="size-5" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b px-4 py-3">
          <SheetTitle asChild>
            <Link href="/" onClick={() => setOpen(false)} className="font-semibold">
              {siteConfig.name}
            </Link>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-3.5rem)] px-4 pb-8">
          <DocsNavList onNavigate={() => setOpen(false)} className="pt-4" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
