"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MdxPre({ className, children, ...props }: React.ComponentProps<"pre">) {
  const preRef = React.useRef<HTMLPreElement>(null)
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="group relative my-4">
      <pre
        ref={preRef}
        className={cn(
          "overflow-x-auto rounded-lg border bg-muted/40 p-4 text-sm leading-relaxed",
          className
        )}
        {...props}
      >
        {children}
      </pre>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 size-7 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground"
        onClick={async () => {
          const text = preRef.current?.textContent ?? ""
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        }}
      >
        {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  )
}
