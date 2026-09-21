import type { ReactNode } from "react"

/** A Storybook CSF module (v2 function stories and v3 object stories). */
export type StoryModule = {
  default: {
    title?: string
    component?: any
    args?: Record<string, any>
    argTypes?: Record<string, any>
    decorators?: Array<(Story: any, ctx: any) => ReactNode>
    parameters?: Record<string, any>
    render?: (args: any, ctx?: any) => ReactNode
  }
  [exportName: string]: any
}

export type ControlDef = {
  name: string
  kind: "boolean" | "text" | "number" | "select" | "radio"
  options?: string[]
}

export function storyExports(mod: StoryModule): string[] {
  return Object.keys(mod).filter((k) => k !== "default" && !k.startsWith("__"))
}

export function resolveStory(mod: StoryModule, exportName: string) {
  const meta = mod.default ?? {}
  const raw = mod[exportName]
  const story: any = typeof raw === "function" ? { render: raw, args: raw.args, ...raw } : raw ?? {}
  const argTypes: Record<string, any> = { ...meta.argTypes, ...story.argTypes }
  const args: Record<string, any> = { ...meta.args, ...story.args }
  const render: (a: any, ctx: any) => ReactNode =
    story.render ??
    meta.render ??
    ((a) => {
      const C = meta.component
      return C ? <C {...a} /> : null
    })
  const decorators: Array<(Story: any, ctx: any) => ReactNode> = [...(story.decorators ?? []), ...(meta.decorators ?? [])]
  const parameters: Record<string, any> = { ...meta.parameters, ...story.parameters }
  return { meta, story, argTypes, args, render, decorators, parameters }
}

/** Storybook "Controls" -> a small set of form controls we can render. */
export function controlsFor(
  argTypes: Record<string, any>,
  args: Record<string, any>,
  include?: string[]
): ControlDef[] {
  const out: ControlDef[] = []
  const names = include ?? Object.keys(argTypes)
  for (const name of names) {
    const def = argTypes[name]
    if (!def || def.table?.disable || def.control === false) continue
    const type = typeof def.control === "string" ? def.control : def.control?.type
    const options: string[] | undefined = def.options
    const current = args[name]
    if (options?.length && (type === "select" || type === "radio" || type === "inline-radio" || !type)) {
      out.push({ name, kind: type === "radio" || type === "inline-radio" ? "radio" : "select", options: options.map(String) })
    } else if (type === "boolean" || typeof current === "boolean") {
      out.push({ name, kind: "boolean" })
    } else if (type === "number" || typeof current === "number") {
      out.push({ name, kind: "number" })
    } else if (type === "text" || typeof current === "string") {
      out.push({ name, kind: "text" })
    }
  }
  return out
}

export function humanize(name: string) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/^./, (c) => c.toUpperCase())
}
