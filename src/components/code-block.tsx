import { codeToHtml } from "shiki"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"

export async function CodeBlock({
  code,
  lang = "tsx",
  className,
}: {
  code: string
  lang?: string
  className?: string
}) {
  const trimmed = code.trim()
  const html = await codeToHtml(trimmed, {
    lang,
    themes: {
      light: "github-light-default",
      dark: "github-dark-default",
    },
    defaultColor: false,
  })

  return (
    <div className={cn("group relative my-4", className)}>
      <div
        className="max-h-[560px] overflow-auto rounded-lg border bg-muted/40 p-4 text-sm leading-relaxed [&_pre]:bg-transparent! [&_pre]:p-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <CopyButton
        text={trimmed}
        className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100"
      />
    </div>
  )
}
