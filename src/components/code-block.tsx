import { codeToHtml } from "shiki"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"

export const CODE_THEME = "night-owl"

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
}

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
  const html = await codeToHtml(trimmed, { lang, theme: CODE_THEME })

  return (
    <div
      className={cn(
        "not-prose relative my-5 overflow-hidden rounded-2xl bg-[var(--color-brand-navy)] shadow-[var(--shadow-soft)]",
        className
      )}
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "var(--gradient-the-way-of-water)" }} />
      <div className="flex items-center justify-between border-b border-white/10 py-1.5 pr-1.5 pl-4">
        <span className="text-[11px] font-semibold tracking-[0.12em] text-white/55 uppercase">
          {LANG_LABEL[lang] ?? lang}
        </span>
        <CopyButton text={trimmed} className="text-white/60 hover:bg-white/10 hover:text-white" />
      </div>
      <div
        className="max-h-[720px] overflow-auto [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
