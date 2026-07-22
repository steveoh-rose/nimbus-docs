"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function CopyButton({
  text,
  className,
}: {
  text?: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn("size-7 text-muted-foreground hover:text-foreground", className)}
      onClick={async () => {
        const value = text ?? ""
        await navigator.clipboard.writeText(value)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
    >
      {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
      <span className="sr-only">Copy code</span>
    </Button>
  )
}
