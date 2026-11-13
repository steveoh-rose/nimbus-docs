---
component_name: Popover
purpose: Display floating, contextual overlay content anchored relative to a specific trigger or reference element.
primary_user_action: Click or press Enter/Space to open the popover, interact with contained controls, and dismiss via click outside or Escape
key_inputs: Mouse, touch, keyboard (Space/Enter to activate trigger, Escape to dismiss, Tab to navigate focusable contents)
recommended_when: Users need access to lightweight contextual settings, inline pickers, or secondary tools directly next to the triggering control
recommended_not_when: Displaying critical alerts requiring full-screen interruption (use AlertDialog / Modal), complex multi-step forms with high vertical height (use Drawer), or simple hover tooltips (use Tooltip)
---

# Popover

## Overview

A Popover is an overlay surface positioned dynamically relative to a target anchor element. Built on React Aria positioning and dialog primitives, it handles boundary collision detection, smart flipping, auto-placement, focus trapping, and outside-click dismissal.

## Preview

A Popover includes an activating trigger element (wrapped in `DialogTrigger` or linked via `triggerRef`), a floating surface card with drop-shadow and border styling, and an optional directional arrow pointing back to the anchor point.

## Usage Guidance

### Tips

- Always associate the popover with a recognizable interactive control, such as a Button or icon trigger.
- Popovers are modal by default, managing focus within their content and dismissing when clicking outside or pressing `Escape`.
- Use `OverlayArrow` (or `showArrow`) when you need to visually anchor the floating panel to a specific icon or compact button among a cluster of controls.
- Keep popover content concise. If the panel requires extensive scrolling, multi-column inputs, or deep workflows, consider using a `Drawer` or `Modal` instead.
- Avoid rendering popovers on hover; hover-triggered overlays must be reserved for non-interactive `Tooltip` components.

### When to use

- Contextual settings panels (e.g., sound/network toggles, table density toggles, or column visibility selectors).
- Compact interactive pickers (e.g., inline color pickers, emoji selectors, or custom calendar overlays).
- Detail popups that provide rich supplementary information and small actions without navigating away from the current view.

### When to use something else

- **Tooltip:** For lightweight, non-interactive text labels that appear purely on hover or keyboard focus.
- **Menu:** For simple vertical lists of action items, commands, or navigation links (use `MenuTrigger` and `Menu`).
- **Drawer:** For rich side-workflows, large forms, or shopping cart summaries that need to pin to the edge of the viewport.
- **Modal / AlertDialog:** For high-stakes decisions, deletion confirmations, or standalone dialogs that require full-page focus.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing Popover.

- When using `DialogTrigger`, accessibility relationships between the trigger and the popover (`aria-haspopup`, `aria-expanded`, and `aria-controls`) are managed automatically.
- Ensure the popover has an accessible name, either via an explicit `aria-label` or by pairing it with an internal heading via `aria-labelledby`.
- By default, focus moves into the popover upon opening and returns to the triggering element upon dismissal.
- Use `shouldFlip` (enabled by default) so the popover flips to the opposite placement edge if there is insufficient viewport space.

### Content

- Keep layout compact and scannable, grouping related controls with consistent vertical rhythm.
- If the popover contains complex controls or multiple interactive rows, provide a clear section header or close button.
- Keep text labels concise to prevent unnecessary horizontal overflow.

### Placement and hierarchy

- **Placement:** Supports `bottom` (default), `top`, `left`, and `right`, along with start/end alignments (e.g., `bottom start`, `top end`).
- **Offset:** Main-axis offset defaults to `8px` (or `12px` when an arrow is displayed). Adjust using the `offset` prop.
- **Arrow:** Use `OverlayArrow` for floating cards that need clear visual attribution to their activating control.

### Custom triggers and anchors

- **Pressable Trigger:** To use a non-React Aria element or custom component as the trigger inside `DialogTrigger`, wrap it in `<Pressable>`. Ensure the element has an interactive ARIA role (such as `role="button"`) and forwards `ref`.
- **Custom Anchor:** To position a popover relative to a different element than its trigger button, manage state with `isOpen` / `onOpenChange` and pass a DOM reference to `triggerRef`.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Use popovers for lightweight, interactive tasks anchored directly to a trigger.</li>
      <li>Provide an arrow indicator when the trigger is part of a dense toolbar.</li>
      <li>Support keyboard dismissal via the Escape key and restore focus to the trigger.</li>
      <li>Ensure popovers remain within viewport boundaries using auto-flipping.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use popovers for non-interactive text; use Tooltip instead.</li>
      <li>Don't trigger popovers on mouse hover; use explicit click or keyboard activation.</li>
      <li>Don't overload popovers with large, multi-step forms (use Drawer or Modal).</li>
      <li>Don't disable Escape key dismissal unless alternative in-popover close controls are provided.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Popover variations

#### Default

Standard popover triggered by a button using `DialogTrigger`.

```tsx
<DialogTrigger>
  <Button variant="secondary" aria-label="Quick settings">
    <SettingsIcon size={18} />
  </Button>
  <Popover className="p-4 w-64">
    <div className="flex flex-col gap-3">
      <span className="font-semibold text-sm">Interface settings</span>
      <Switch defaultSelected>Auto-negotiate speed</Switch>
      <Switch defaultSelected>Flow telemetry</Switch>
      <Switch>MACsec encryption</Switch>
    </div>
  </Popover>
</DialogTrigger>
```

#### With overlay arrow

Visual arrow indicator that rotates and aligns dynamically based on placement.

```tsx
<DialogTrigger>
  <Button variant="secondary" startIcon={<FilterIcon />}>
    Filter columns
  </Button>
  <Popover showArrow className="p-4 w-56">
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase text-muted-foreground">
        Visible columns
      </span>
      <Checkbox value="status" defaultSelected>
        Status
      </Checkbox>
      <Checkbox value="bandwidth" defaultSelected>
        Bandwidth
      </Checkbox>
      <Checkbox value="metro">Metro location</Checkbox>
      <Checkbox value="asn">Peer ASN</Checkbox>
    </div>
  </Popover>
</DialogTrigger>
```

#### Placement options

Position the popover on any edge relative to the trigger (`top`, `bottom`, `left`, `right`).

```tsx
<div className="flex gap-4">
  <DialogTrigger>
    <Button variant="secondary">Top placement</Button>
    <Popover placement="top" showArrow className="p-3 text-sm">
      Aligned to the top of the trigger
    </Popover>
  </DialogTrigger>
  <DialogTrigger>
    <Button variant="secondary">Right placement</Button>
    <Popover placement="right" showArrow className="p-3 text-sm">
      Aligned to the right of the trigger
    </Popover>
  </DialogTrigger>
</div>
```

#### Custom trigger with Pressable

Wrap non-React Aria components or standard DOM elements with `<Pressable>` to act as valid triggers.

```tsx
<DialogTrigger>
  <Pressable>
    <span
      role="button"
      tabIndex={0}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium border rounded cursor-pointer hover:bg-muted"
    >
      <InfoIcon size={14} /> View status info
    </span>
  </Pressable>
  <Popover className="p-4 w-60 text-sm">
    <p className="text-muted-foreground">
      Port telemetry is updated every 30 seconds via streaming NetFlow
      telemetry.
    </p>
  </Popover>
</DialogTrigger>
```

#### Custom anchor with triggerRef

Anchor the popover relative to a different DOM element than the activating button.

```tsx
function CustomAnchorExample() {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div className="flex items-center gap-4">
      <Button variant="secondary" onPress={() => setIsOpen(true)}>
        Inspect target
      </Button>
      <span
        ref={anchorRef}
        className="p-2 border border-dashed rounded font-mono text-xs bg-muted"
      >
        eth0/1 (Target Anchor)
      </span>
      <Popover
        triggerRef={anchorRef}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        showArrow
        className="p-3 text-sm w-48"
      >
        <span>Anchored directly to interface tag</span>
      </Popover>
    </div>
  );
}
```

### Example usage scenarios

#### Quick connection profile switcher

Provide an inline profile picker directly from a navigation toolbar.

```tsx
<DialogTrigger>
  <Button variant="secondary" endIcon={<ChevronDownIcon size={14} />}>
    Singapore DC (SG1)
  </Button>
  <Popover className="p-3 w-64" placement="bottom start">
    <div className="space-y-2">
      <span className="text-xs font-semibold uppercase text-muted-foreground block">
        Switch data center
      </span>
      <div className="flex flex-col gap-1">
        <button className="flex flex-col text-left px-2 py-1.5 rounded hover:bg-muted text-sm font-medium">
          <span>Singapore (Equinix SG1)</span>
          <span className="text-xs text-muted-foreground">
            Active • 10 Gbps
          </span>
        </button>
        <button className="flex flex-col text-left px-2 py-1.5 rounded hover:bg-muted text-sm font-medium">
          <span>Hong Kong (Mega-i)</span>
          <span className="text-xs text-muted-foreground">
            Standby • 10 Gbps
          </span>
        </button>
        <button className="flex flex-col text-left px-2 py-1.5 rounded hover:bg-muted text-sm font-medium">
          <span>London (Telehouse North)</span>
          <span className="text-xs text-muted-foreground">Provisioning</span>
        </button>
      </div>
    </div>
  </Popover>
</DialogTrigger>
```

## API reference

### DialogTrigger

| Prop           | Type                        | Default | Description                                            |
| :------------- | :-------------------------- | :------ | :----------------------------------------------------- |
| `children`     | `React.ReactNode`           | —       | The trigger element and Popover pair.                  |
| `isOpen`       | `boolean`                   | —       | Whether the popover is open by default (controlled).   |
| `defaultOpen`  | `boolean`                   | —       | Whether the popover is open by default (uncontrolled). |
| `onOpenChange` | `(isOpen: boolean) => void` | —       | Handler called when the open state changes.            |

### Popover

| Prop                        | Type                 | Default    | Description                                                                                                   |
| :-------------------------- | :------------------- | :--------- | :------------------------------------------------------------------------------------------------------------ |
| `placement`                 | `Placement`          | `'bottom'` | The placement of the popover relative to its anchor element (`'top'`, `'bottom'`, `'left'`, `'right'`, etc.). |
| `showArrow`                 | `boolean`            | `false`    | Whether to display a directional arrow pointing back to the trigger.                                          |
| `offset`                    | `number`             | `8`        | Distance in pixels along the main axis between anchor and popover (`12` when arrow is shown).                 |
| `crossOffset`               | `number`             | `0`        | Additional offset applied along the cross axis.                                                               |
| `shouldFlip`                | `boolean`            | `true`     | Whether the popover should automatically flip orientation when reaching viewport boundaries.                  |
| `triggerRef`                | `RefObject<Element>` | —          | Explicit anchor reference element (used when positioning relative to an element other than the trigger).      |
| `isNonModal`                | `boolean`            | `false`    | When true, elements outside the popover remain accessible to pointer and assistive devices.                   |
| `isKeyboardDismissDisabled` | `boolean`            | `false`    | Whether pressing the Escape key to close the popover is disabled.                                             |

### OverlayArrow

| Prop        | Type                                              | Default     | Description                                           |
| :---------- | :------------------------------------------------ | :---------- | :---------------------------------------------------- |
| `children`  | `React.ReactNode \| ((props) => React.ReactNode)` | `<svg.../>` | SVG arrow geometry or custom arrow graphic.           |
| `className` | `string`                                          | —           | CSS class name for styling the arrow wrapper element. |
