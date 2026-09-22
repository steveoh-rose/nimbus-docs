"use client"

import * as React from "react"
import {
  Badge,
  Button,
  Callout,
  Checkbox,
  Disclosure,
  Menu,
  MenuTrigger,
  Popover,
  PopoverTrigger,
  Radio,
  Spinner,
  Switch,
  TextInput,
} from "@nimbus/core"
import { Calendar, ChevronDown, Cloud, CloudUpload, Info, MoreVertical } from "@nimbus/assets/icons/app"

function Mock({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-center gap-1.5 text-center">{children}</div>
}
function Chip({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "primary" }) {
  return (
    <span
      className={
        "rounded-full border px-2.5 py-1 text-[11px] font-medium " +
        (tone === "primary" ? "border-transparent bg-primary text-primary-foreground" : "bg-[var(--color-bg-100)]")
      }
    >
      {children}
    </span>
  )
}

/** One small illustrative preview per documented component, for the components overview grid. */
export const COMPONENT_THUMBNAILS: Record<string, React.ReactNode> = {
  Button: (
    <div className="flex items-center gap-2">
      <Button variant="primary">Button</Button>
    </div>
  ),
  Badge: (
    <Badge intent="info">
      <Badge.Icon />
      <Badge.Label>Badge</Badge.Label>
    </Badge>
  ),
  Callout: (
    <Callout intent="info" className="w-full max-w-52">
      <Callout.Icon />
      <Callout.Content>
        <Callout.Title>Heads up</Callout.Title>
      </Callout.Content>
    </Callout>
  ),
  Checkbox: (
    <div className="flex flex-col items-start gap-2">
      <Checkbox defaultSelected>Remember me</Checkbox>
    </div>
  ),
  Radio: (
    <Radio.Group aria-label="Plan" defaultValue="pro">
      <Radio value="pro">Pro</Radio>
    </Radio.Group>
  ),
  Switch: <Switch defaultSelected>Auto-renew</Switch>,
  TextInput: <TextInput label="Label" placeholder="Placeholder" />,
  TextArea: (
    <div className="w-full max-w-52 rounded-md border bg-white p-2.5 text-left text-xs text-muted-foreground">
      Write a message…
    </div>
  ),
  Disclosure: (
    <Disclosure className="w-full max-w-52">
      <Disclosure.Header>
        What is Nimbus?
        <Disclosure.Indicator />
      </Disclosure.Header>
    </Disclosure>
  ),
  Spinner: <Spinner size="lg" />,
  Label: (
    <div className="text-left">
      <span className="text-sm font-medium">Field label</span>
      <span className="ml-1 text-[var(--color-error-400)]">*</span>
    </div>
  ),
  Menu: (
    <MenuTrigger>
      <Button variant="outline" size="sm">
        <MoreVertical />
      </Button>
      <Menu>
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu>
    </MenuTrigger>
  ),
  Popover: (
    <PopoverTrigger>
      <Button variant="outline">
        Filter <ChevronDown />
      </Button>
      <Popover>
        <Popover.Content>
          <Popover.Body>
            <Checkbox defaultSelected>Active</Checkbox>
          </Popover.Body>
        </Popover.Content>
      </Popover>
    </PopoverTrigger>
  ),
  Tooltip: (
    <Mock>
      <span className="rounded-md bg-[var(--color-accent-dark)] px-2.5 py-1 text-xs text-white">Tooltip text</span>
      <span className="size-2 -translate-y-px rotate-45 bg-[var(--color-accent-dark)]" />
    </Mock>
  ),
  Dialog: (
    <div className="w-full max-w-52 rounded-md border bg-white p-3 text-left shadow-md">
      <div className="text-sm font-semibold">Confirm action</div>
      <div className="mt-2 flex justify-end gap-1.5">
        <Chip>Cancel</Chip>
        <Chip tone="primary">Confirm</Chip>
      </div>
    </div>
  ),
  Modal: (
    <div className="relative flex h-full w-full items-center justify-center">
      <span className="absolute inset-0 rounded-md bg-black/20" />
      <div className="relative w-40 rounded-md border bg-white p-3 shadow-lg">
        <div className="text-sm font-semibold">Modal title</div>
        <div className="mt-1 text-[11px] text-muted-foreground">Centered, focus-trapped.</div>
      </div>
    </div>
  ),
  Toast: (
    <div className="flex w-full max-w-52 items-center gap-2 rounded-md border bg-white p-2.5 text-left shadow-md">
      <Info className="size-4 shrink-0 text-primary" />
      <span className="text-xs">Saved successfully</span>
    </div>
  ),
  ComboBox: (
    <div className="w-full max-w-52 text-left">
      <div className="flex items-center justify-between rounded-md border bg-white px-2.5 py-1.5 text-xs">
        Singapore <ChevronDown className="size-3.5 text-muted-foreground" />
      </div>
      <div className="mt-1 rounded-md border bg-white px-2.5 py-1.5 text-xs text-muted-foreground shadow-sm">
        Frankfurt
      </div>
    </div>
  ),
  DatePicker: (
    <div className="flex items-center gap-2 rounded-md border bg-white px-2.5 py-1.5 text-xs">
      <Calendar className="size-3.5 text-muted-foreground" />
      12 / 04 / 2026
    </div>
  ),
  FileTrigger: (
    <div className="flex flex-col items-center gap-1 rounded-md border border-dashed px-4 py-3 text-center">
      <CloudUpload className="size-5 text-muted-foreground" />
      <span className="text-[11px] text-muted-foreground">Drop files</span>
    </div>
  ),
  Table: (
    <div className="w-full max-w-52 overflow-hidden rounded-md border bg-white text-left text-[11px]">
      <div className="grid grid-cols-2 gap-2 border-b bg-[var(--color-bg-100)] px-2.5 py-1.5 font-medium">
        <span>Name</span>
        <span>Status</span>
      </div>
      <div className="grid grid-cols-2 gap-2 px-2.5 py-1.5 text-muted-foreground">
        <span>router-01</span>
        <span>Active</span>
      </div>
    </div>
  ),
  Pagination: (
    <div className="flex items-center gap-1 text-xs">
      {["1", "2", "3"].map((n) => (
        <span
          key={n}
          className={
            "flex size-6 items-center justify-center rounded-md " +
            (n === "1" ? "bg-primary text-primary-foreground" : "border text-muted-foreground")
          }
        >
          {n}
        </span>
      ))}
    </div>
  ),
  Flex: (
    <div className="flex w-full max-w-52 gap-1.5">
      <span className="h-8 flex-1 rounded-sm bg-[var(--color-primary-200)]" />
      <span className="h-8 flex-1 rounded-sm bg-[var(--color-primary-300)]" />
      <span className="h-8 flex-1 rounded-sm bg-[var(--color-primary-400)]" />
    </div>
  ),
}

export function ComponentThumbnail({ name }: { name: string }) {
  return COMPONENT_THUMBNAILS[name] ?? <Cloud className="size-6 text-muted-foreground" />
}
