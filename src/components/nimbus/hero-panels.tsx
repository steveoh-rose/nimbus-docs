"use client"

import {
  Badge,
  Button,
  Callout,
  Checkbox,
  ComboBox,
  Menu,
  MenuTrigger,
  Popover,
  PopoverTrigger,
  Switch,
  TextInput,
} from "@nimbus/core"
import { ChevronDown, MoreVertical } from "@nimbus/assets/icons/app"

function Cell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      data-nimbus-canvas
      className={
        "flex flex-col justify-center overflow-hidden rounded-3xl border bg-white p-6 text-left shadow-[var(--shadow-soft)] " +
        (className ?? "")
      }
    >
      {children}
    </div>
  )
}

/**
 * A bento grid of small, real Nimbus examples — shadcn.com's homepage pattern, one static
 * grid instead of a tabbed switcher. Everything here is genuinely interactive (unlike the
 * decorative /docs/components thumbnails), so it stays a client component.
 */
export function HeroPanels() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:[grid-auto-rows:1fr]">
      <Cell className="col-span-2 row-span-2 gap-3">
        <TextInput label="Connection name" placeholder="my-cloud-router" fullWidth />
        <div className="grid gap-1.5">
          <span className="text-sm font-medium">Region</span>
          <ComboBox aria-label="Region" placeholder="Singapore">
            <ComboBox.Item>Singapore</ComboBox.Item>
            <ComboBox.Item>Frankfurt</ComboBox.Item>
            <ComboBox.Item>Sydney</ComboBox.Item>
          </ComboBox>
        </div>
        <Checkbox defaultSelected>Remember this connection</Checkbox>
        <Button variant="primary" fullWidth>
          Create
        </Button>
      </Cell>

      <Cell className="col-span-2 items-center">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="primary">Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </Cell>

      <Cell className="items-center">
        <div className="flex flex-wrap gap-1.5">
          <Badge intent="info">
            <Badge.Icon />
            <Badge.Label>Info</Badge.Label>
          </Badge>
          <Badge intent="success">
            <Badge.Icon />
            <Badge.Label>Success</Badge.Label>
          </Badge>
        </div>
      </Cell>

      <Cell className="items-center gap-2.5">
        <Switch defaultSelected>Auto-renew</Switch>
        <Checkbox>Notify team</Checkbox>
      </Cell>

      <Cell className="row-span-2 items-center justify-center gap-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
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
                </Popover.Body>
              </Popover.Content>
            </Popover>
          </PopoverTrigger>
          <MenuTrigger>
            <Button variant="ghost" size="sm">
              <MoreVertical />
            </Button>
            <Menu>
              <Menu.Item>Rename</Menu.Item>
              <Menu.Item>Duplicate</Menu.Item>
              <Menu.Item>Delete</Menu.Item>
            </Menu>
          </MenuTrigger>
        </div>
        <p className="text-sm text-muted-foreground">Positioned and dismissed by React Aria.</p>
      </Cell>

      <Cell className="col-span-2 lg:col-span-1">
        <Callout intent="info">
          <Callout.Icon />
          <Callout.Content>
            <Callout.Title>New port available</Callout.Title>
            <Callout.Description>Your 10G port in London is ready.</Callout.Description>
          </Callout.Content>
        </Callout>
      </Cell>
    </div>
  )
}
