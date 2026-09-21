"use client"

import * as React from "react"

import { loadModule, useIsClient } from "@/components/nimbus/story-canvas"
import { Skeleton } from "@/components/ui/skeleton"
import { resolveStory, storyExports } from "@/lib/story-runtime"

/** Fallback API table built from the curated Storybook ArgTypes when docgen finds no props. */
function Inner({ storyKey }: { storyKey: string }) {
  const mod = React.use(loadModule(storyKey))
  const first = storyExports(mod)[0]
  const { argTypes, args } = resolveStory(mod, first)
  const rows = Object.entries(argTypes)
    .filter(([, d]) => !d?.table?.disable)
    .sort(([a], [b]) => a.localeCompare(b))
  return (
    <div className="not-prose overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-3 py-2 font-medium">Prop</th>
            <th className="px-3 py-2 font-medium">Options</th>
            <th className="px-3 py-2 font-medium">Default</th>
            <th className="px-3 py-2 font-medium">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.map(([name, d]) => (
            <tr key={name} className="align-top">
              <td className="px-3 py-2 font-mono text-[13px] font-medium">{name}</td>
              <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                {d.options?.length ? d.options.map(String).join(" | ") : (typeof d.control === "string" ? d.control : d.control?.type) ?? ""}
              </td>
              <td className="px-3 py-2 font-mono text-xs">
                {d.table?.defaultValue?.summary ?? (args[name] === undefined ? "—" : String(args[name]))}
              </td>
              <td className="px-3 py-2 text-muted-foreground">{d.description ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ArgTypesTable({ storyKey }: { storyKey: string }) {
  const isClient = useIsClient()
  if (!isClient) return <Skeleton className="h-32 w-full" />
  return (
    <React.Suspense fallback={<Skeleton className="h-32 w-full" />}>
      <Inner storyKey={storyKey} />
    </React.Suspense>
  )
}
