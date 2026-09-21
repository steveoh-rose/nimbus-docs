"use client"

import * as React from "react"
import { Check as CheckIcon, Copy as CopyIcon } from "@nimbus/assets/icons/app"

import { Button } from "@/components/ui/button"

const LANG_LABEL: Record<string, string> = {
  tsx: "TSX",
  ts: "TypeScript",
  typescript: "TypeScript",
  jsx: "JSX",
  js: "JavaScript",
  javascript: "JavaScript",
  css: "CSS",
  scss: "SCSS",
  bash: "Shell",
  sh: "Shell",
  json: "JSON",
  html: "HTML",
  md: "Markdown",
}

export function MdxPre({ children, style, ...props }: React.ComponentProps<"pre">) {
  const preRef = React.useRef<HTMLPreElement>(null)
  const [copied, setCopied] = React.useState(false)
  const lang = (props as Record<string, unknown>)["data-language"] as string | undefined

  return (
    <div
      className="not-prose relative my-5 overflow-hidden rounded-md border border-white/10"
      style={{ backgroundColor: style?.backgroundColor ?? "#011627" }}
    >
      <div className="flex items-center justify-between border-b border-white/10 py-1.5 pr-1.5 pl-4">
        <span className="font-mono text-[11px] tracking-wider text-white/50 uppercase">
          {lang ? (LANG_LABEL[lang] ?? lang) : "Code"}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-7 text-white/60 hover:bg-white/10 hover:text-white"
          onClick={async () => {
            await navigator.clipboard.writeText(preRef.current?.textContent ?? "")
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }}
        >
          {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <pre
        ref={preRef}
        {...props}
        style={{ ...style, backgroundColor: "transparent" }}
        className="m-0 max-h-[720px] overflow-auto p-4 font-mono text-[13px] leading-[1.7]"
      >
        {children}
      </pre>
    </div>
  )
}
