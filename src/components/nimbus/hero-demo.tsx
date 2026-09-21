"use client"

import { Badge, Button, Callout, Switch, TextInput } from "@nimbus/core"
import { Add, Cloud } from "@nimbus/assets/icons/app"

/** A small live sample built from the real Nimbus core components. */
export function HeroDemo() {
  return (
    <div
      data-nimbus-canvas
      className="mx-auto grid w-full max-w-3xl gap-6 rounded-xl border bg-white p-8 text-left shadow-sm sm:grid-cols-2"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">
            <Add /> Create
          </Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="outline">Outline</Button>
        </div>
        <TextInput label="Connection name" placeholder="my-cloud-router" />
        <Switch>Enable notifications</Switch>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>
            <Cloud /> Cloud Router
          </Badge>
        </div>
        <Callout>
          <Callout.Content>
            <Callout.Title>Built on the real components</Callout.Title>
            <Callout.Description>
              This preview renders the Nimbus core library with Nimbus tokens.
            </Callout.Description>
          </Callout.Content>
        </Callout>
      </div>
    </div>
  )
}
