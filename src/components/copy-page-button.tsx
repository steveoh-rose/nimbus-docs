"use client"

import * as React from "react"
import { Check, Copy } from "@nimbus/assets/icons/app"

/** Copies the page's text (title and body), like "Copy Markdown" on heroui.com. */
export function CopyPageButton() {
  const [copied, setCopied] = React.useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        const article = document.querySelector("article")
        if (!article) return
        await navigator.clipboard.writeText(article.innerText)
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      }}
      className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full border bg-background px-3.5 text-sm font-semibold transition-colors hover:border-[var(--color-primary-200)] hover:bg-[var(--color-primary-100)]"
    >
      {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
      {copied ? "Copied" : "Copy page"}
    </button>
  )
}
