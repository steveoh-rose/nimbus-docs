"use client"

import {
  Badge,
  Button,
  Checkbox,
  Disclosure,
  Menu,
  MenuTrigger,
  Radio,
  Switch,
  TextInput,
} from "@nimbus/core"
import { ChevronDown } from "@nimbus/assets/icons/app"

function Frame({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-foreground/20 hover:shadow-sm">
      <div data-nimbus-canvas className="flex h-32 items-center justify-center bg-[var(--color-bg-100)] p-5">
        {children}
      </div>
      <div className="border-t px-5 py-4">
        <div className="font-heading text-[1.05rem] font-semibold">{title}</div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export function ComponentGallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Frame title="Buttons" description="Six variants, three sizes, loading and disabled states.">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </Frame>

      <Frame title="Inputs" description="Labels, hints and validation states built in.">
        <TextInput label="Connection name" placeholder="my-cloud-router" fullWidth />
      </Frame>

      <Frame title="Selection" description="Checkbox, switch and radio, all keyboard accessible.">
        <div className="flex flex-col items-start gap-2.5">
          <Checkbox defaultSelected>Remember me</Checkbox>
          <Switch defaultSelected>Auto-renew</Switch>
          <Radio.Group aria-label="Plan" defaultValue="pro" orientation="horizontal">
            <Radio value="pro">Pro</Radio>
          </Radio.Group>
        </div>
      </Frame>

      <Frame title="Badges" description="Six semantic intents, driven by the same color tokens.">
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          <Badge intent="info"><Badge.Icon /><Badge.Label>Info</Badge.Label></Badge>
          <Badge intent="success"><Badge.Icon /><Badge.Label>Success</Badge.Label></Badge>
          <Badge intent="warning"><Badge.Icon /><Badge.Label>Warning</Badge.Label></Badge>
        </div>
      </Frame>

      <Frame title="Overlays" description="Popover and Menu, positioned and dismissed by React Aria.">
        <MenuTrigger>
          <Button variant="outline">
            Options <ChevronDown />
          </Button>
          <Menu>
            <Menu.Item>Rename</Menu.Item>
            <Menu.Item>Duplicate</Menu.Item>
            <Menu.Item>Delete</Menu.Item>
          </Menu>
        </MenuTrigger>
      </Frame>

      <Frame title="Disclosure" description="Collapsible content sections with four visual variants.">
        <Disclosure className="w-full">
          <Disclosure.Header>
            What is a Cloud Router?
            <Disclosure.Indicator />
          </Disclosure.Header>
          <Disclosure.Panel>
            <p className="text-sm text-muted-foreground">Connects your infrastructure to our fabric.</p>
          </Disclosure.Panel>
        </Disclosure>
      </Frame>
    </div>
  )
}
