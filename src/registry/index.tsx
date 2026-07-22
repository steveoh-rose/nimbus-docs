import type { ComponentType } from "react"

import ButtonDemo from "@/registry/demos/button"
import InputDemo from "@/registry/demos/input"
import SelectDemo from "@/registry/demos/select"
import DialogDemo from "@/registry/demos/dialog"
import TooltipDemo from "@/registry/demos/tooltip"
import TabsDemo from "@/registry/demos/tabs"
import CardDemo from "@/registry/demos/card"
import AlertDemo from "@/registry/demos/alert"
import DataTableDemo from "@/registry/demos/data-table"
import CommandMenuDemo from "@/registry/demos/command-menu"
import AuthCardDemo from "@/registry/demos/auth-card"
import ColorSwatchesDemo from "@/registry/demos/color-swatches"
import TypeScaleDemo from "@/registry/demos/type-scale"
import SpacingScaleDemo from "@/registry/demos/spacing-scale"
import RadiusScaleDemo from "@/registry/demos/radius-scale"
import ShadowScaleDemo from "@/registry/demos/shadow-scale"
import MotionScaleDemo from "@/registry/demos/motion-scale"
import EmptyStateDemo from "@/registry/demos/empty-state"

/**
 * Name -> demo component. `ComponentPreview` also reads the matching file in
 * `src/registry/demos/<name>.tsx` as raw source for the "Code" tab, so the
 * keys here must match the file name (without extension).
 *
 * Swapping placeholder demos for real Nimbus UI components later only means
 * changing imports inside `src/registry/demos/*` — nothing else in the docs
 * pipeline needs to change.
 */
export const demoComponents: Record<string, ComponentType> = {
  button: ButtonDemo,
  input: InputDemo,
  select: SelectDemo,
  dialog: DialogDemo,
  tooltip: TooltipDemo,
  tabs: TabsDemo,
  card: CardDemo,
  alert: AlertDemo,
  "data-table": DataTableDemo,
  "command-menu": CommandMenuDemo,
  "auth-card": AuthCardDemo,
  "color-swatches": ColorSwatchesDemo,
  "type-scale": TypeScaleDemo,
  "spacing-scale": SpacingScaleDemo,
  "radius-scale": RadiusScaleDemo,
  "shadow-scale": ShadowScaleDemo,
  "motion-scale": MotionScaleDemo,
  "empty-state": EmptyStateDemo,
}
