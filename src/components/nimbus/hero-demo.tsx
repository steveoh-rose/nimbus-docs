"use client"

import {
  Badge,
  Button,
  Callout,
  Checkbox,
  ComboBox,
  Disclosure,
  Menu,
  MenuTrigger,
  Popover,
  PopoverTrigger,
  Pressable,
  Radio,
  Spinner,
  Switch,
  TextInput,
} from "@nimbus/core"
import { ChevronDown, Cloud, Copy, MoreVertical } from "@nimbus/assets/icons/app"

const INTENTS = ["neutral", "info", "success", "warning", "danger", "special"] as const

/**
 * A single dense panel showing one example of most Nimbus core component types, the way
 * heroui.com's own hero mockup does — laid out for breadth and density, not a real screen.
 */
export function Showcase() {
  return (
    <div
      data-nimbus-canvas
      className="grid gap-x-10 gap-y-6 rounded-[10px] border bg-white p-6 text-left sm:grid-cols-2 sm:p-8"
    >
      {/* Left column: form controls */}
      <div className="flex flex-col gap-5">
        <TextInput
          label="Connection name"
          required
          placeholder="my-cloud-router"
          hint="Visible to your whole team."
          fullWidth
        />

        <div className="grid gap-1.5">
          <span className="text-sm font-medium">Region</span>
          <ComboBox aria-label="Region" placeholder="Singapore">
            <ComboBox.Item>Singapore</ComboBox.Item>
            <ComboBox.Item>Frankfurt</ComboBox.Item>
            <ComboBox.Item>Sydney</ComboBox.Item>
          </ComboBox>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Checkbox defaultSelected>Remember me</Checkbox>
          <Switch defaultSelected>Auto-renew</Switch>
          <Spinner size="sm" />
        </div>

        <Radio.Group aria-label="Billing period" defaultValue="monthly" orientation="horizontal">
          <Radio value="monthly">Monthly</Radio>
          <Radio value="annual">Annual</Radio>
        </Radio.Group>

        <Disclosure>
          <Disclosure.Header>
            What is a Cloud Router?
            <Disclosure.Indicator />
          </Disclosure.Header>
          <Disclosure.Panel>
            <p className="text-sm text-muted-foreground">
              A virtual router that connects your infrastructure directly to our network fabric.
            </p>
          </Disclosure.Panel>
        </Disclosure>
      </div>

      {/* Right column: actions, status and overlays */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="primary">
            <Cloud /> Create
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="negative">Negative</Button>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {INTENTS.map((intent) => (
            <Badge key={intent} intent={intent}>
              <Badge.Icon />
              <Badge.Label>{intent[0].toUpperCase() + intent.slice(1)}</Badge.Label>
            </Badge>
          ))}
        </div>

        <Callout intent="info">
          <Callout.Icon />
          <Callout.Content>
            <Callout.Title>New port available</Callout.Title>
            <Callout.Description>Your 10G port in London is ready to connect.</Callout.Description>
          </Callout.Content>
        </Callout>

        <div className="flex flex-wrap items-center gap-3">
          <PopoverTrigger>
            <Button variant="outline">
              Filter <ChevronDown />
            </Button>
            <Popover>
              <Popover.Content>
                <Popover.Header>
                  <Popover.Title>Status</Popover.Title>
                </Popover.Header>
                <Popover.Body>
                  <Checkbox defaultSelected>Active</Checkbox>
                  <Checkbox>Provisioning</Checkbox>
                  <Checkbox>Degraded</Checkbox>
                </Popover.Body>
              </Popover.Content>
            </Popover>
          </PopoverTrigger>

          <MenuTrigger>
            <Pressable>
              <Button variant="ghost" size="sm">
                <MoreVertical />
              </Button>
            </Pressable>
            <Menu>
              <Menu.Item>
                <Copy /> Duplicate
              </Menu.Item>
              <Menu.Item>Rename</Menu.Item>
              <Menu.Item>Delete</Menu.Item>
            </Menu>
          </MenuTrigger>
        </div>
      </div>
    </div>
  )
}
