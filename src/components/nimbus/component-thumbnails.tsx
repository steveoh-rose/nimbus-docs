import { Calendar, ChevronDown, Check, Cloud, CloudUpload, Info, MoreVertical } from "@nimbus/assets/icons/app"

/**
 * One small illustrative preview per documented component, for the components overview grid.
 *
 * These are static markup, not live Nimbus/React Aria components. The cards that host them are
 * `inert` (see docs/components/page.tsx) so none of this is ever actually operable — rendering
 * real Button/Checkbox/Menu/Popover instances here paid for react-aria's hooks, effects and (for
 * Menu/Popover) portal + positioning setup on 22 cards for a purely decorative preview. This file
 * has no "use client" and no @nimbus/core import, so it ships zero extra client JS.
 */
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

export const COMPONENT_THUMBNAILS: Record<string, React.ReactNode> = {
  Button: (
    <span className="inline-flex h-9 items-center rounded-[5px] bg-primary px-4 text-sm font-medium text-primary-foreground">
      Button
    </span>
  ),
  Badge: (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary-100)] px-2.5 py-1 text-xs font-medium text-[var(--color-primary-500)]">
      <Info className="size-3.5" />
      Badge
    </span>
  ),
  Callout: (
    <div className="flex w-full max-w-52 items-start gap-2 rounded-md bg-[var(--color-primary-100)] p-3 text-left">
      <Info className="mt-0.5 size-4 shrink-0 text-[var(--color-primary-500)]" />
      <div className="text-xs font-medium text-[var(--color-primary-500)]">Heads up</div>
    </div>
  ),
  Checkbox: (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="flex size-4 items-center justify-center rounded-[4px] bg-primary text-primary-foreground">
        <Check className="size-3" />
      </span>
      Remember me
    </label>
  ),
  Radio: (
    <span className="inline-flex items-center gap-1.5 text-sm">
      <span className="flex size-4 items-center justify-center rounded-full border-2 border-primary">
        <span className="size-1.5 rounded-full bg-primary" />
      </span>
      Pro
    </span>
  ),
  Switch: (
    <span className="inline-flex items-center gap-2 text-sm">
      <span className="relative h-5 w-9 rounded-full bg-primary">
        <span className="absolute top-0.5 right-0.5 size-4 rounded-full bg-white" />
      </span>
      Auto-renew
    </span>
  ),
  TextInput: (
    <div className="w-full max-w-52 text-left">
      <div className="mb-1 text-xs font-medium">Label</div>
      <div className="rounded-md border bg-white px-2.5 py-1.5 text-xs text-muted-foreground">Placeholder</div>
    </div>
  ),
  TextArea: (
    <div className="w-full max-w-52 rounded-md border bg-white p-2.5 text-left text-xs text-muted-foreground">
      Write a message…
    </div>
  ),
  Disclosure: (
    <div className="flex w-full max-w-52 items-center justify-between rounded-md border bg-white px-3 py-2 text-left text-sm font-medium">
      What is Nimbus?
      <ChevronDown className="size-4 text-muted-foreground" />
    </div>
  ),
  Spinner: <div className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />,
  Label: (
    <div className="text-left">
      <span className="text-sm font-medium">Field label</span>
      <span className="ml-1 text-[var(--color-error-400)]">*</span>
    </div>
  ),
  Menu: (
    <div className="flex flex-col items-center gap-2">
      <span className="flex size-8 items-center justify-center rounded-md border bg-white">
        <MoreVertical className="size-4 text-muted-foreground" />
      </span>
      <div className="w-24 rounded-md border bg-white p-1 text-left text-[11px] shadow-sm">
        <div className="rounded px-2 py-1">Rename</div>
        <div className="rounded px-2 py-1">Delete</div>
      </div>
    </div>
  ),
  Popover: (
    <div className="flex flex-col items-center gap-2">
      <span className="inline-flex items-center gap-1 rounded-md border bg-white px-3 py-1.5 text-xs">
        Filter <ChevronDown className="size-3.5 text-muted-foreground" />
      </span>
      <div className="w-32 rounded-md border bg-white p-2 text-left text-[11px] shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="flex size-3 items-center justify-center rounded-[3px] bg-primary text-white">
            <Check className="size-2" />
          </span>
          Active
        </div>
      </div>
    </div>
  ),
  Tooltip: (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="rounded-md bg-[var(--color-accent-dark)] px-2.5 py-1 text-xs text-white">Tooltip text</span>
      <span className="size-2 -translate-y-px rotate-45 bg-[var(--color-accent-dark)]" />
    </div>
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
