"use client"

import * as React from "react"
import { Button as NimbusButton, Callout, TextInput } from "@nimbus/core"

import { Button } from "@/components/ui/button"
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

type Mode = "completion" | "revision"
type Trigger = "blur" | "change" | "submit"
type Field = "name" | "vlan"
type Errors = Partial<Record<Field, string>>

const TAKEN_VLAN = 200
const CHECK_DELAY = 800

const checkName = (v: string) => (v.trim() ? undefined : "Enter a name for the connection.")

function checkVlan(v: string) {
  if (!v.trim()) return "Enter a VLAN ID."
  if (!/^\d+$/.test(v)) return "VLAN ID must be a number."
  const n = Number(v)
  return n >= 1 && n <= 4094 ? undefined : "VLAN ID must be between 1 and 4094."
}

const rules: Record<Field, (v: string) => string | undefined> = { name: checkName, vlan: checkVlan }
const labels: Record<Field, string> = { name: "Connection name", vlan: "VLAN ID" }

function Control({
  label,
  description,
  children,
  inline,
}: {
  label: string
  description: string
  children: React.ReactNode
  inline?: boolean
}) {
  return (
    <div className={inline ? "flex items-start justify-between gap-4" : "grid gap-2"}>
      <div className="grid gap-0.5">
        <Label className="text-[13px]">{label}</Label>
        <p className="text-xs leading-snug text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  )
}

export function ValidationDemoClient({ codeSlot }: { codeSlot: React.ReactNode }) {
  // behaviour knobs
  const [mode, setMode] = React.useState<Mode>("completion")
  const [trigger, setTrigger] = React.useState<Trigger>("blur")
  const [vlanLive, setVlanLive] = React.useState(true)
  const [serverCheck, setServerCheck] = React.useState(false)
  const [banner, setBanner] = React.useState(true)

  // form state
  const [values, setValues] = React.useState<Record<Field, string>>({ name: "", vlan: "" })
  const [errors, setErrors] = React.useState<Errors>({})
  const [checking, setChecking] = React.useState(false)
  const [done, setDone] = React.useState(false)

  // event log
  const [log, setLog] = React.useState<Array<{ id: number; text: string }>>([])
  const seq = React.useRef(0)
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const push = React.useCallback((text: string) => {
    const id = ++seq.current // outside the updater: StrictMode runs updaters twice
    setLog((l) => [{ id, text }, ...l].slice(0, 30))
  }, [])

  React.useEffect(() => () => void (timer.current && clearTimeout(timer.current)), [])

  const setError = (field: Field, message: string | undefined) =>
    setErrors((e) => ({ ...e, [field]: message }))

  function runServerCheck(value: string) {
    if (timer.current) clearTimeout(timer.current)
    setChecking(true)
    push(`server · checking VLAN ${value}`)
    timer.current = setTimeout(() => {
      setChecking(false)
      const taken = Number(value) === TAKEN_VLAN
      setError("vlan", taken ? `VLAN ${value} is already in use.` : undefined)
      push(`server · VLAN ${value} ${taken ? "is taken" : "is available"}`)
    }, CHECK_DELAY)
  }

  /** Decides whether an inline event should validate, following the pattern rules. */
  function inline(field: Field, value: string, event: "blur" | "change") {
    const strict = field === "vlan" && vlanLive
    const shouldValidate = strict
      ? event === "change" || (mode === "revision" && trigger === event)
      : mode === "revision" && trigger === event

    if (!shouldValidate) {
      if (event === "blur") {
        push(`blur · ${labels[field]}: skipped (${mode === "completion" ? "completion mode" : `trigger is "${trigger}"`})`)
      }
      return
    }
    // strict input: don't flag an empty field the user hasn't touched yet
    if (strict && event === "change" && !value && mode === "completion") {
      setError(field, undefined)
      return
    }
    const message = rules[field](value)
    setError(field, message)
    push(`${event} · ${labels[field]}: ${message ? `invalid, "${message}"` : "valid"}`)
    if (!message && field === "vlan" && serverCheck && value) runServerCheck(value)
  }

  function change(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
    setDone(false)
    if (timer.current && field === "vlan") {
      clearTimeout(timer.current)
      setChecking(false)
    }
    inline(field, value, "change")
  }

  function submit() {
    const next: Errors = { name: checkName(values.name), vlan: checkVlan(values.vlan) }
    if (!next.vlan && serverCheck && Number(values.vlan) === TAKEN_VLAN) {
      next.vlan = `VLAN ${values.vlan} is already in use.`
    }
    setErrors(next)
    setMode("revision")
    const count = Object.values(next).filter(Boolean).length
    setDone(count === 0)
    push(count ? `submit · ${count} field${count > 1 ? "s" : ""} in error, now in revision mode` : "submit · all fields valid")
  }

  function changeMode(next: Mode) {
    setMode(next)
    if (next === "completion") {
      setErrors({})
      setDone(false)
      push("mode · completion: inline errors cleared")
    } else {
      push("mode · revision: inline validation is on")
    }
  }

  function reset() {
    if (timer.current) clearTimeout(timer.current)
    setValues({ name: "", vlan: "" })
    setErrors({})
    setChecking(false)
    setDone(false)
    setMode("completion")
    setLog([])
  }

  const errorCount = Object.values(errors).filter(Boolean).length
  const errorBanner =
    banner && errorCount > 0 ? (
      <Callout intent="danger" variant="enclosed">
        <Callout.Icon />
        <Callout.Content>
          <Callout.Title>Fix the highlighted fields</Callout.Title>
          <Callout.Description>
            {errorCount === 1 ? "1 field needs" : `${errorCount} fields need`} attention before you can continue.
          </Callout.Description>
        </Callout.Content>
      </Callout>
    ) : null

  return (
    <Tabs defaultValue="preview" className="not-prose my-6 gap-3">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <Button variant="ghost" size="sm" onClick={reset}>
          Reset
        </Button>
      </div>

      <TabsContent value="preview" className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="grid content-start gap-4">
          <div data-nimbus-canvas className="min-h-[360px] space-y-4 rounded-md border bg-white p-6">
            {errorBanner}
            {done ? (
              <Callout intent="success" variant="enclosed">
                <Callout.Icon />
                <Callout.Content>
                  <Callout.Title>Looks good</Callout.Title>
                  <Callout.Description>Every field validated on submit.</Callout.Description>
                </Callout.Content>
              </Callout>
            ) : null}

            <TextInput
              label="Connection name"
              value={values.name}
              invalid={!!errors.name}
              hint={errors.name ?? "A simple, obvious field."}
              onChange={(v: string) => change("name", v)}
              onBlur={() => inline("name", values.name, "blur")}
            />
            <TextInput
              label="VLAN ID"
              value={values.vlan}
              invalid={!!errors.vlan}
              loading={checking}
              readonly={checking}
              hint={
                checking
                  ? "Checking availability…"
                  : errors.vlan ?? `A number from 1 to 4094.${serverCheck ? ` ${TAKEN_VLAN} is already in use.` : ""}`
              }
              onChange={(v: string) => change("vlan", v)}
              onBlur={() => inline("vlan", values.vlan, "blur")}
            />

            <div className="flex items-center gap-3 pt-1">
              {/* Never disabled, except while an inline server check is running */}
              <NimbusButton variant="primary" onPress={submit} disabled={checking}>
                Submit
              </NimbusButton>
              <span className="text-xs text-[var(--color-system-400)]">
                {checking ? "Submit is unavailable while the server check runs." : "Submit is always available."}
              </span>
            </div>
            {errorBanner}
          </div>

          <div className="rounded-md border">
            <div className="flex items-center justify-between border-b px-3 py-2">
              <span className="text-[13px] font-medium">Validation log</span>
              <Button variant="ghost" size="xs" onClick={() => setLog([])} disabled={!log.length}>
                Clear
              </Button>
            </div>
            <ol
              className="max-h-40 min-h-16 space-y-1 overflow-auto px-3 py-2 font-mono text-xs"
              aria-live="polite"
              aria-label="Validation log"
            >
              {log.length === 0 ? (
                <li className="font-sans text-muted-foreground">Interact with the form to see what gets validated, and when.</li>
              ) : (
                log.map((l) => (
                  <li key={l.id} className="flex gap-2">
                    <span className="w-6 shrink-0 text-right text-muted-foreground tabular-nums">{l.id}</span>
                    <span>{l.text}</span>
                  </li>
                ))
              )}
            </ol>
          </div>
        </div>

        <div className="grid content-start gap-5 rounded-md border p-4">
          <Control label="Mental mode" description="Completion stays quiet. Revision helps fix errors.">
            <ToggleGroup
              type="single"
              variant="outline"
              size="sm"
              value={mode}
              onValueChange={(v) => v && changeMode(v as Mode)}
              className="w-full"
            >
              <ToggleGroupItem value="completion" className="flex-1">
                Completion
              </ToggleGroupItem>
              <ToggleGroupItem value="revision" className="flex-1">
                Revision
              </ToggleGroupItem>
            </ToggleGroup>
          </Control>

          <Control label="Inline validation" description="When fields validate while in revision mode.">
            <Select value={trigger} onValueChange={(v) => setTrigger(v as Trigger)}>
              <SelectTrigger className="w-full" aria-label="Inline validation trigger">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blur">On blur</SelectItem>
                <SelectItem value="change">On keypress</SelectItem>
                <SelectItem value="submit">On submit only</SelectItem>
              </SelectContent>
            </Select>
          </Control>

          <Control inline label="Strict boundary" description="Validate VLAN ID as the user types.">
            <Switch checked={vlanLive} onCheckedChange={setVlanLive} aria-label="Validate VLAN ID as the user types" />
          </Control>

          <Control inline label="Server check" description={`Async availability check. Try VLAN ${TAKEN_VLAN}.`}>
            <Switch checked={serverCheck} onCheckedChange={setServerCheck} aria-label="Check VLAN availability on the server" />
          </Control>

          <Control inline label="Form-level message" description="Show the error banner at the top and bottom.">
            <Switch checked={banner} onCheckedChange={setBanner} aria-label="Show the form-level error banner" />
          </Control>
        </div>
      </TabsContent>

      <TabsContent value="code">{codeSlot}</TabsContent>
    </Tabs>
  )
}
