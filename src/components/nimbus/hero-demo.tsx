"use client"

import { Badge, Button, Callout, Checkbox, Radio, Spinner, Switch, TextInput } from "@nimbus/core"

const INTENTS = ["neutral", "info", "success", "warning", "danger", "special"] as const

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div data-nimbus-canvas className={`rounded-[10px] border bg-white p-5 text-left ${className}`}>
      {children}
    </div>
  )
}

/** A showcase of the real Nimbus components, laid out like the heroui.com landing page. */
export function Showcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <Panel className="space-y-4">
          <TextInput label="Email" required placeholder="john@consoleconnect.com" hint="We won't share your email." fullWidth />
          <TextInput label="Connection name" placeholder="my-cloud-router" fullWidth />
          <Checkbox defaultSelected>Remember this device</Checkbox>
          <Button variant="primary" fullWidth>
            Sign in
          </Button>
        </Panel>

        <Panel className="space-y-5">
          <Radio.Group aria-label="Billing period" defaultValue="monthly">
            <Radio value="monthly">Monthly</Radio>
            <Radio value="annual">Annual</Radio>
          </Radio.Group>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Switch defaultSelected>Notifications</Switch>
            <Switch>Auto-renew</Switch>
            <span className="flex items-center gap-3">
              <Spinner size="sm" />
              <Spinner size="lg" />
            </span>
          </div>
        </Panel>
      </div>

      <div className="flex flex-col gap-4">
        <Panel className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="subtle">Subtle</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="negative">Negative</Button>
          </div>
        </Panel>

        <Panel className="flex flex-wrap gap-2">
          {INTENTS.map((intent) => (
            <Badge key={intent} intent={intent}>
              <Badge.Icon />
              <Badge.Label>{intent[0].toUpperCase() + intent.slice(1)}</Badge.Label>
            </Badge>
          ))}
        </Panel>

        <Panel className="space-y-3">
          <Callout intent="info">
            <Callout.Icon />
            <Callout.Content>
              <Callout.Title>New port available</Callout.Title>
              <Callout.Description>Your 10G port in London is ready to connect.</Callout.Description>
            </Callout.Content>
          </Callout>
          <Callout intent="success" variant="subtle">
            <Callout.Icon />
            <Callout.Content>
              <Callout.Title>Connection active</Callout.Title>
            </Callout.Content>
          </Callout>
        </Panel>
      </div>
    </div>
  )
}
