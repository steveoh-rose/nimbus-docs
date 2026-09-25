"use client"

import * as React from "react"
import {
  Button,
  Checkbox,
  ComboBox,
  DialogTrigger,
  Menu,
  MenuTrigger,
  Modal,
  Popover,
  PopoverTrigger,
  TextInput,
} from "@nimbus/core"
import { ChevronDown, MoreVertical } from "@nimbus/assets/icons/app"

import { Showcase } from "@/components/nimbus/hero-demo"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

function FormsPanel() {
  return (
    <div
      data-nimbus-canvas
      className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-[10px] border bg-white p-8 text-left"
    >
      <TextInput label="Full name" placeholder="Ada Lovelace" fullWidth />
      <TextInput label="Work email" placeholder="ada@example.com" fullWidth />
      <div className="grid gap-1.5">
        <span className="text-sm font-medium">Region</span>
        <ComboBox aria-label="Region" placeholder="Singapore">
          <ComboBox.Item>Singapore</ComboBox.Item>
          <ComboBox.Item>Frankfurt</ComboBox.Item>
          <ComboBox.Item>Sydney</ComboBox.Item>
        </ComboBox>
      </div>
      <Checkbox defaultSelected>Send me product updates</Checkbox>
      <Button variant="primary" fullWidth>
        Create account
      </Button>
    </div>
  )
}

function OverlaysPanel() {
  return (
    <div
      data-nimbus-canvas
      className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-5 rounded-[10px] border bg-white p-12"
    >
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

        <DialogTrigger>
          <Button variant="secondary">Open modal</Button>
          <Modal aria-label="Confirm">
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Delete Cloud Router?</Modal.Title>
            </Modal.Header>
            <Modal.Body>This can&apos;t be undone. Connected sites will lose routing.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary">Cancel</Button>
              <Button variant="negative">Delete</Button>
            </Modal.Footer>
          </Modal>
        </DialogTrigger>
      </div>
      <p className="text-sm text-muted-foreground">Positioned, dismissed and focus-trapped by React Aria.</p>
    </div>
  )
}

type PanelKey = "components" | "forms" | "overlays"

// Deliberately not using Tabs' own Content sub-component: it mounts every panel up front, which
// means all three live Nimbus demos (including Popover/Menu's portal + positioning setup) would
// instantiate on page load instead of just the one the visitor is looking at. Rendering only the
// active panel here keeps that cost to a single panel at a time.
export function HeroPanels() {
  const [panel, setPanel] = React.useState<PanelKey>("components")

  return (
    <Tabs value={panel} onValueChange={(v) => setPanel(v as PanelKey)} className="w-full items-center gap-6">
      <TabsList className="h-10 rounded-full bg-[var(--color-bg-200)] p-1">
        <TabsTrigger value="components" className="rounded-full px-4 data-active:shadow-sm">
          Components
        </TabsTrigger>
        <TabsTrigger value="forms" className="rounded-full px-4 data-active:shadow-sm">
          Forms
        </TabsTrigger>
        <TabsTrigger value="overlays" className="rounded-full px-4 data-active:shadow-sm">
          Overlays
        </TabsTrigger>
      </TabsList>
      <div className="w-full">
        {panel === "components" ? <Showcase /> : panel === "forms" ? <FormsPanel /> : <OverlaysPanel />}
      </div>
    </Tabs>
  )
}
