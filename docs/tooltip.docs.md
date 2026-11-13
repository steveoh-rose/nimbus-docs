---
component_name: Tooltip
purpose: Display a brief, floating contextual explanation or description when a user hovers over or keyboard-focuses an interactive element.
primary_user_action: Hover over a trigger with a pointer or move keyboard focus to it to reveal supplementary context
key_inputs: Mouse hover, keyboard focus, touch tap/long-press
recommended_when: Users need supplementary, non-essential clarification on an icon button, truncated text, definition, or acronym
recommended_not_when: Displaying critical instructions, gathering user input (use Modal or Form), or presenting multi-control interactive settings (use Popover)
---

# Tooltip

## Overview

A Tooltip is a small floating label that displays brief contextual information when a user hovers over or focuses an interactive trigger. It provides supplementary guidance without cluttering the interface or interrupting the user's flow.

## Preview

A Tooltip consists of an activating trigger control (such as an icon button, truncated text string, or helper icon) and a floating bubble surface that appears adjacent to the trigger, optionally with an arrow pointer pointing back to the anchor.

## Usage Guidance

### Tips

- Typically use the **dark variation** for short, single-line labels or brief hints, and the **light variation** for longer descriptions or content containing links.
- Ensure the tooltip has sufficient visual contrast and stands out cleanly against the underlying background.
- Tooltips should contain supplementary, non-essential information. A user must still be able to complete their primary task if they never see or open the tooltip.
- Avoid putting critical instructions or error messages in tooltips, as touch devices and screen magnification users may miss them.
- Tooltips appear on pointer hover and keyboard focus automatically, and dismiss when focus leaves, pointer exits, or the user presses `Escape`.

### When to use

- **Provide help about a specific element:** Clarifying the outcome of an unfamiliar action or setting.
- **Provide additional, non-essential info:** Giving helpful hints that assist the user in completing their task.
- **Provide a definition or explain an acronym:** Defining technical networking terminology (such as BGP, ASN, or MTU) or domain abbreviations.
- **Icon-only buttons:** Providing an accessible visible label for buttons without text (e.g., edit, delete, or download icons).
- **With or without a link / call to action:** In the light variation, tooltips can provide a contextual "Learn more" link pointing to documentation.

### When to use something else

- **Inline text / Helper text:** When information is critical to completing a form field (e.g., password rules or validation constraints).
- **InlineAlert or Banner:** When a message communicates urgent status changes or requires acknowledgment from the user.
- **Popover:** When you need to gather input from the user, present complex interactive settings, or render multiple actionable controls.
- **Helper section / Card:** When help or explanatory guidance applies to multiple elements or the entire page rather than a single targeted control.

## Usage

This section covers design best practices and accessibility considerations for implementing Tooltip.

- Never place interactive controls inside standard dark tooltips. If a tooltip includes a text link, use the light variation and ensure pointer users can hover across into the tooltip without it dismissing prematurely.
- Tooltips bound to an interactive control must associate with that element via `aria-describedby` or act as its accessible label (`aria-labelledby`).
- Ensure tooltips dismiss reliably when the user presses `Escape` without closing parent dialogs.

### Content

- Keep text concise, direct, and informative.
- Avoid repeating text that is already visible in the button or trigger label.
- Write sentences in sentence case, omitting unnecessary introductory filler (e.g., use "Download NetFlow CSV report", not "Click this button to download the report").

### Hierarchy and variants

- **Dark (default):** High-contrast dark background for short, punchy labels (e.g., naming icon buttons or quick definitions).
- **Light:** Clean light card styling with subtle border and shadow, recommended for multi-sentence descriptions or content that includes a link.
- **Placement:** Supports `top` (default), `bottom`, `left`, and `right`, automatically adjusting to stay within the viewport bounds.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Use the dark variation for short labels and the light variation for longer explanatory text.</li>
      <li>Ensure the tooltip stands out with strong contrast against the page background.</li>
      <li>Provide visible tooltips for icon-only buttons to reinforce their function.</li>
      <li>Support keyboard focus triggers and Escape-key dismissal.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't put critical or required form instructions in a tooltip.</li>
      <li>Don't place complex interactive forms or multiple buttons inside a tooltip (use Popover).</li>
      <li>Don't repeat the exact text that is already visible on the trigger element.</li>
      <li>Don't use tooltips for global page-level information; keep them specific to a single element.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Tooltip variations

#### Default (dark variant)

Standard dark tooltip for quick labels and icon-only actions.

```tsx
<TooltipTrigger>
  <Button variant="secondary" aria-label="Export metrics">
    <DownloadIcon size={18} />
  </Button>
  <Tooltip>Export telemetry to CSV</Tooltip>
</TooltipTrigger>
```

#### Light variant (longer content)

Use the light variant when displaying longer explanations or supplementary definitions.

```tsx
<TooltipTrigger>
  <button
    type="button"
    className="inline-flex items-center gap-1 text-sm font-medium border-b border-dashed border-muted-foreground"
  >
    Autonomous System Number (ASN)
  </button>
  <Tooltip variant="light" className="max-w-xs">
    A globally unique identifier used by BGP routing to exchange routing
    information with other networks.
  </Tooltip>
</TooltipTrigger>
```

#### With link or call to action

Light-variant tooltips can house a supporting contextual link to external documentation.

```tsx
<TooltipTrigger>
  <button
    type="button"
    aria-label="Learn about MACsec encryption"
    className="text-muted-foreground hover:text-foreground"
  >
    <InfoIcon size={16} />
  </button>
  <Tooltip variant="light" className="max-w-xs space-y-1.5">
    <p className="text-xs">
      Hardware-based point-to-point layer 2 encryption protecting data across
      direct fiber links.
    </p>
    <a
      href="/docs/security/macsec"
      className="text-xs text-primary font-medium underline inline-block"
    >
      Read MACsec guide →
    </a>
  </Tooltip>
</TooltipTrigger>
```

#### Placement options

Tooltips can be positioned on any edge relative to the trigger (`top`, `bottom`, `left`, `right`).

```tsx
<div className="flex gap-4">
  <TooltipTrigger>
    <Button variant="secondary">Top</Button>
    <Tooltip placement="top">Appears above trigger</Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button variant="secondary">Bottom</Button>
    <Tooltip placement="bottom">Appears below trigger</Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button variant="secondary">Right</Button>
    <Tooltip placement="right">Appears right of trigger</Tooltip>
  </TooltipTrigger>
</div>
```

#### Display delay

Configure the delay before the tooltip appears (useful for preventing flicker when scanning past controls).

```tsx
<TooltipTrigger delay={500}>
  <Button variant="secondary">Delayed tooltip</Button>
  <Tooltip>Appears after 500ms of sustained hover or focus</Tooltip>
</TooltipTrigger>
```

### Example usage scenarios

#### Form label with definition tooltip

Pair an acronym or technical label with an inline help icon trigger.

```tsx
<div className="space-y-1.5 max-w-sm">
  <div className="flex items-center gap-1.5">
    <Label htmlFor="vlan-id">VLAN tag (IEEE 802.1Q)</Label>
    <TooltipTrigger>
      <button
        type="button"
        aria-label="VLAN ID definition"
        className="text-muted-foreground hover:text-foreground"
      >
        <InfoIcon size={14} />
      </button>
      <Tooltip variant="light" className="max-w-xs">
        Allocates a dedicated virtual sub-interface on your physical port
        (allowed range: 2–4094).
      </Tooltip>
    </TooltipTrigger>
  </div>
  <TextInput id="vlan-id" placeholder="e.g. 100" />
</div>
```

#### Table action bar with icon-only tooltips

Provide clear visible names for compact row action triggers in data tables.

```tsx
<div className="flex items-center gap-1">
  <TooltipTrigger>
    <Button variant="tertiary" size="small" aria-label="Edit port settings">
      <EditIcon size={16} />
    </Button>
    <Tooltip>Edit settings</Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button variant="tertiary" size="small" aria-label="View flow telemetry">
      <ActivityIcon size={16} />
    </Button>
    <Tooltip>View telemetry</Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button variant="tertiary" size="small" aria-label="Delete port connection">
      <TrashIcon size={16} />
    </Button>
    <Tooltip>Delete connection</Tooltip>
  </TooltipTrigger>
</div>
```

## API reference

### TooltipTrigger

| Prop           | Type                        | Default | Description                                                       |
| :------------- | :-------------------------- | :------ | :---------------------------------------------------------------- |
| `children`     | `React.ReactNode`           | —       | The trigger element and Tooltip pair.                             |
| `delay`        | `number`                    | `300`   | Delay in milliseconds before the tooltip displays on hover/focus. |
| `closeDelay`   | `number`                    | `100`   | Delay in milliseconds before the tooltip hides when exiting.      |
| `isOpen`       | `boolean`                   | —       | Controlled open state.                                            |
| `onOpenChange` | `(isOpen: boolean) => void` | —       | Callback invoked when the open state changes.                     |

### Tooltip

| Prop        | Type                                     | Default  | Description                                                                               |
| :---------- | :--------------------------------------- | :------- | :---------------------------------------------------------------------------------------- |
| `variant`   | `'dark' \| 'light'`                      | `'dark'` | Visual theme style. Use `'dark'` for brief labels and `'light'` for longer copy or links. |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`  | Directional placement relative to the anchor trigger.                                     |
| `offset`    | `number`                                 | `8`      | Distance in pixels between the anchor element and the tooltip card.                       |
| `children`  | `React.ReactNode`                        | —        | Content or message displayed inside the tooltip bubble.                                   |
