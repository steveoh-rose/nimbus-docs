"use client"

import * as React from "react"

import { storyLoaders } from "@/generated/nimbus-stories"
import { controlsFor, resolveStory, type StoryModule } from "@/lib/story-runtime"
import { StoryArgsContext } from "@/shims/storybook-addons"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const modules = new Map<string, Promise<StoryModule>>()
export function loadModule(key: string) {
  let p = modules.get(key)
  if (!p) {
    const loader = storyLoaders[key]
    if (!loader) throw new Error(`Unknown story file: ${key}`)
    p = loader()
    modules.set(key, p)
  }
  return p
}

const ArgsContext = React.createContext<Record<string, any>>({})

class StoryErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <p className="text-sm text-destructive">
          This example failed to render: {this.state.error.message}
        </p>
      )
    }
    return this.props.children
  }
}

function Canvas({ children }: { children: React.ReactNode }) {
  // Nimbus is a light-only design system: previews always sit on a white surface.
  return (
    <div
      data-nimbus-canvas
      className="min-h-[140px] overflow-x-auto rounded-lg border bg-white p-8 text-left"
    >
      <StoryErrorBoundary>{children}</StoryErrorBoundary>
    </div>
  )
}

function StoryInner({
  storyKey,
  exportName,
  controls,
  codeSlot,
}: {
  storyKey: string
  exportName: string
  controls: boolean
  codeSlot?: React.ReactNode
}) {
  const mod = React.use(loadModule(storyKey))
  const resolved = React.useMemo(() => resolveStory(mod, exportName), [mod, exportName])
  const [args, setArgs] = React.useState<Record<string, any>>(resolved.args)

  const Chain = React.useMemo(() => {
    const { render, decorators, argTypes, parameters } = resolved
    const ctxFor = (a: Record<string, any>) => ({ args: a, argTypes, parameters, id: exportName })
    const Inner: React.ComponentType = () => {
      const a = React.useContext(ArgsContext)
      return <>{render(a, ctxFor(a))}</>
    }
    let Current: React.ComponentType = Inner
    for (const decorate of decorators) {
      const Prev = Current
      Current = function Decorated() {
        const a = React.useContext(ArgsContext)
        return <>{decorate(Prev, ctxFor(a))}</>
      }
    }
    return Current
  }, [resolved, exportName])

  const defs = controls
    ? controlsFor(resolved.argTypes, resolved.args, resolved.parameters?.controls?.include)
    : []
  const update = React.useCallback((next: Record<string, any>) => setArgs((p) => ({ ...p, ...next })), [])

  const preview = (
    <ArgsContext.Provider value={args}>
      <StoryArgsContext.Provider value={{ args, updateArgs: update }}>
        <Canvas>
          <Chain />
        </Canvas>
      </StoryArgsContext.Provider>
    </ArgsContext.Provider>
  )

  const controlsPanel = defs.length ? (
    <div className="mt-3 grid gap-4 rounded-lg border bg-muted/30 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {defs.map((def) => {
        const id = `${storyKey}-${exportName}-${def.name}`
        const value = args[def.name]
        return (
          <div key={def.name} className="grid gap-1.5">
            <Label htmlFor={id} className="font-mono text-xs">
              {def.name}
            </Label>
            {def.kind === "boolean" ? (
              <Switch id={id} checked={!!value} onCheckedChange={(v) => update({ [def.name]: v })} />
            ) : def.kind === "number" ? (
              <Input
                id={id}
                type="number"
                value={value ?? ""}
                onChange={(e) => update({ [def.name]: e.target.value === "" ? undefined : Number(e.target.value) })}
              />
            ) : def.kind === "text" ? (
              <Input
                id={id}
                value={typeof value === "string" ? value : ""}
                onChange={(e) => update({ [def.name]: e.target.value })}
              />
            ) : (
              <Select
                value={value === undefined ? "__unset" : String(value)}
                onValueChange={(v) => update({ [def.name]: v === "__unset" ? undefined : v })}
              >
                <SelectTrigger id={id} className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__unset">(default)</SelectItem>
                  {def.options!.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        )
      })}
    </div>
  ) : null

  if (!codeSlot) return <>{preview}{controlsPanel}</>

  return (
    <Tabs defaultValue="preview" className="gap-3">
      <TabsList className="w-fit">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        {preview}
        {controlsPanel}
      </TabsContent>
      <TabsContent value="code">{codeSlot}</TabsContent>
    </Tabs>
  )
}

const subscribe = () => () => {}
/** false during SSR/hydration, true afterwards: Nimbus stories are client-only (some touch `window` on import). */
export function useIsClient() {
  return React.useSyncExternalStore(subscribe, () => true, () => false)
}

export function StoryCanvas(props: {
  storyKey: string
  exportName: string
  controls?: boolean
  codeSlot?: React.ReactNode
}) {
  const isClient = useIsClient()
  if (!isClient) return <Skeleton className="h-40 w-full" />
  return (
    <React.Suspense fallback={<Skeleton className="h-40 w-full" />}>
      <StoryInner {...props} controls={props.controls ?? false} />
    </React.Suspense>
  )
}
