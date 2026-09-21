"use client"

import * as React from "react"

export type ArgsState = {
  args: Record<string, any>
  updateArgs: (next: Record<string, any>) => void
}

/** Provided by the docs <Story> runtime so stories using useArgs stay interactive. */
export const StoryArgsContext = React.createContext<ArgsState | null>(null)

export function useArgs(): [Record<string, any>, (next: Record<string, any>) => void] {
  const ctx = React.useContext(StoryArgsContext)
  const [local, setLocal] = React.useState<Record<string, any>>({})
  if (ctx) return [ctx.args, ctx.updateArgs]
  return [local, (next) => setLocal((prev) => ({ ...prev, ...next }))]
}
