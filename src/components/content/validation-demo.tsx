"use client"

import * as React from "react"
import { Button, Callout, TextInput } from "@nimbus/core"

type Errors = { name?: string; vlan?: string }

function validateName(value: string) {
  return value.trim() ? undefined : "Enter a name for the connection."
}

function validateVlan(value: string) {
  if (!value.trim()) return "Enter a VLAN ID."
  if (!/^\d+$/.test(value)) return "VLAN ID must be a number."
  const n = Number(value)
  return n >= 1 && n <= 4094 ? undefined : "VLAN ID must be between 1 and 4094."
}

/**
 * Interactive version of the guidance on this page: quiet while completing the form the first
 * time, validating inline once the user is revising, and strict-boundary input validated as they type.
 */
export function ValidationDemo() {
  const [name, setName] = React.useState("")
  const [vlan, setVlan] = React.useState("")
  const [errors, setErrors] = React.useState<Errors>({})
  const [attempted, setAttempted] = React.useState(false)
  const [done, setDone] = React.useState(false)

  const errorCount = Object.values(errors).filter(Boolean).length

  function submit() {
    const next: Errors = { name: validateName(name), vlan: validateVlan(vlan) }
    setErrors(next)
    setAttempted(true)
    setDone(!next.name && !next.vlan)
  }

  function reset() {
    setName("")
    setVlan("")
    setErrors({})
    setAttempted(false)
    setDone(false)
  }

  const banner =
    errorCount > 0 ? (
      <Callout intent="danger" variant="enclosed">
        <Callout.Icon />
        <Callout.Content>
          <Callout.Title>Fix the highlighted fields</Callout.Title>
          <Callout.Description>
            {errorCount === 1 ? "1 field needs" : `${errorCount} fields need`} your attention before you can continue.
          </Callout.Description>
        </Callout.Content>
      </Callout>
    ) : null

  return (
    <div data-nimbus-canvas className="not-prose my-4 max-w-md space-y-4 rounded-lg border bg-white p-6">
      {banner}
      {done ? (
        <Callout intent="success" variant="enclosed">
          <Callout.Icon />
          <Callout.Content>
            <Callout.Title>Looks good</Callout.Title>
            <Callout.Description>Everything validated on submit.</Callout.Description>
          </Callout.Content>
        </Callout>
      ) : null}

      <TextInput
        label="Connection name"
        value={name}
        invalid={!!errors.name}
        hint={errors.name ?? "Validated on blur, but only once you have tried to submit."}
        onChange={(v: string) => {
          setName(v)
          setDone(false)
          if (attempted) setErrors((e) => ({ ...e, name: validateName(v) }))
        }}
        onBlur={() => {
          // completion mode: stay quiet. revision mode: help the user fix it.
          if (attempted) setErrors((e) => ({ ...e, name: validateName(name) }))
        }}
      />

      <TextInput
        label="VLAN ID"
        value={vlan}
        invalid={!!errors.vlan}
        hint={errors.vlan ?? "Strict boundary (1 to 4094), so it is validated as you type."}
        onChange={(v: string) => {
          setVlan(v)
          setDone(false)
          // strict boundary: validate while typing, but don't flag an empty field
          setErrors((e) => ({ ...e, vlan: v ? validateVlan(v) : attempted ? validateVlan(v) : undefined }))
        }}
      />

      <div className="flex items-center gap-3">
        {/* the submit button is always enabled */}
        <Button variant="primary" onPress={submit}>
          Submit
        </Button>
        <Button variant="ghost" onPress={reset}>
          Reset
        </Button>
      </div>

      {banner}
    </div>
  )
}
