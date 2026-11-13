---
component_name: Drawer
purpose: Display a sliding overlay panel anchored to the edge of the viewport for secondary tasks, detail inspections, or complex sub-flows without navigating away from the current page.
primary_user_action: Open panel via trigger, interact with content or form fields, and dismiss via close button, backdrop click, or Escape key
key_inputs: Mouse, touch, keyboard (Space/Enter to activate trigger, Escape to dismiss, Tab to cycle focus within trap)
recommended_when: Users need to view rich supplementary metadata, complete multi-field configuration forms, or filter data tables while preserving underlying page context
recommended_not_when: Displaying critical alerts requiring immediate confirmation (use AlertDialog / Modal), lightweight contextual options (use Menu or Popover), or navigating to an independent full-page journey
---

# Drawer

## Overview

A Drawer (also known as a Sheet or Slideout Panel) is an overlay surface anchored to the edge of the screen that slides into view. Use a drawer when you want to keep the user anchored on their current page while providing extra functionality—such as completing an auxiliary task, managing sub-configurations, or inspecting deep information—without losing context or triggering a disruptive full-page navigation. Built on React Aria dialog and modal primitives, it traps focus while active, prevents background scrolling, and preserves context by keeping the underlying page visible beneath a translucent backdrop.

## Preview

A Drawer consists of a backdrop overlay, a sliding surface container anchored to a viewport edge (typically the right side), a persistent header with a title and close button, a scrollable content body, and an optional pinned footer containing primary and secondary actions.

## Usage Guidance

### Tips

- Use drawers to preserve user momentum: keep users on their current page when offering extra capabilities or side-flows so they don't lose their place or ongoing form progress.
- Always include an explicit close action (such as an "x" button in the top corner or a "Cancel" button in the footer) in addition to supporting backdrop click and Escape key dismissal.
- Use a right-aligned drawer for details panels, configuration editors, and faceted filter forms. Reserve bottom drawers for mobile sheets or compact viewports.
- If the drawer contains an unsaved form with modified data, intercept close attempts with a confirmation prompt or disable dismiss-on-outside-click (`isDismissable={false}`) to prevent accidental data loss.
- Pin the header and footer when the drawer body has long scrollable content so that action buttons and titles remain accessible at all times.
- `DrawerHeader` and `DrawerFooter` are optional composite components. You can omit them for custom edge-to-edge layouts, floating elements, or simple navigation canvases, provided an accessible `aria-label` and close mechanism are retained.
- Avoid nesting a drawer inside another drawer; if a secondary drill-down is required, transition the content within the existing panel or replace it with a modal dialog.

### When to use

- When you need to provide extra functionality, auxiliary tools, or sub-flows without navigating away from the active screen (e.g., adding an inline dependency or modifying secondary settings while mid-flow).
- Slideout shopping carts or order summaries, letting users review selected items, costs, and terms while continuing to browse products or services.
- Inspecting detailed metadata or telemetry stats for an item selected in a data table (e.g., port diagnostic metrics or BGP peering status).
- Multi-field configuration forms or edit steps that benefit from having the parent list visible in the background.
- Advanced data filtering panels (faceted search) with multiple input controls.
- Step-by-step provisioning or onboarding wizards that do not require a dedicated full-page route.

### When to use something else

- **Modal / AlertDialog:** For high-impact, interruptive decisions (e.g., confirming service deletion) or short single-step forms (e.g., renaming a connection).
- **Popover:** For compact, non-modal contextual overlays anchored directly to a trigger element (e.g., info tooltips, date pickers, or column pickers).
- **Dedicated Page Route:** When a workflow requires extensive screen width, deep multi-level navigation, or its own unique URL for bookmarking and sharing.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing Drawer.

- The drawer must be rendered with an accessible `aria-labelledby` pointing to its header title, or provide an explicit `aria-label`.
- Focus is automatically moved to the first focusable element when the drawer opens and restored to the activating trigger when closed.
- Ensure keyboard focus is trapped within the panel so users cannot tab into background content behind the backdrop.
- Preserve scroll position on the underlying page while the drawer is open by using body scroll lock.

### Content

- Write concise, sentence-case headings that describe the task or item being inspected (e.g., "Edit port settings", "Connection metrics").
- Keep action button labels in the footer explicit and action-oriented (e.g., "Save changes", "Apply filters").
- Use helper copy or badges in the header to provide quick orientation (e.g., displaying an active status badge next to a resource title).

### Hierarchy

- **Placement:** Right (default) for desktop inspector and form panels; Left for site-level navigation menus; Bottom for mobile-optimized sheets.
- **Sizes:** Small (`400px`) for filters and simple details; Medium (`560px`, default) for standard forms; Large (`720px`) for complex data grids and multi-column forms; Full width for mobile screens.
- **Dismissibility:** Dismissible by default via backdrop click and `Escape`. Non-dismissible (`isDismissable={false}`) when accidental closure risks losing unsaved form input.

### Customisation and composition

While `DrawerHeader`, `DrawerBody`, and `DrawerFooter` provide standard layout structure and pinned scrolling behavior, they are not mandatory:

- **Omitting the Header:** Suitable for edge-to-edge media, custom headers, or custom floating close triggers. When omitting `DrawerHeader` and `DrawerTitle`, you must pass an explicit `aria-label` or `aria-labelledby` to `<Drawer>` so assistive technologies can identify the panel.
- **Omitting the Footer:** Suitable when the drawer contains purely informational content, self-submitting controls, or inline actions where sticky bottom action buttons are unnecessary.
- **Custom Dismiss Actions:** If omitting `DrawerCloseButton` or `DrawerFooter`, ensure an accessible close control with `slot="close"` or an explicit dismissal handler remains present within the content.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Use drawers to offer extra functionality or deeper context while keeping users on their primary page.</li>
      <li>Always provide a visible, accessible close button in the header.</li>
      <li>Pin the header and footer so actions remain visible when drawer content scrolls.</li>
      <li>Provide an <code>aria-label</code> on the Drawer if omitting DrawerHeader and DrawerTitle.</li>
      <li>Trap keyboard focus within the drawer while open and return focus to the trigger upon closing.</li>
      <li>Warn users before dismissing a drawer that contains unsaved form modifications.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't open a drawer on top of another drawer; keep overlays to a single tier.</li>
      <li>Don't use a drawer for brief binary confirmations; use an AlertDialog instead.</li>
      <li>Don't allow page scrolling behind the drawer backdrop while the panel is active.</li>
      <li>Don't hide primary commit actions at the very bottom of long unpinned scroll areas.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Drawer variations

#### Default

Standard right-anchored drawer activated by an uncontrolled trigger button.

```tsx
<DrawerTrigger>
  <Button variant="secondary">View connection details</Button>
  <Drawer>
    <DrawerHeader>
      <DrawerTitle>Port connection details</DrawerTitle>
      <DrawerCloseButton />
    </DrawerHeader>
    <DrawerBody>
      <div className="space-y-4 text-sm">
        <div>
          <span className="text-muted-foreground block">Connection ID</span>
          <span className="font-mono">cc-conn-8921-sg</span>
        </div>
        <div>
          <span className="text-muted-foreground block">Facility</span>
          <span>Equinix SG1, Singapore</span>
        </div>
        <div>
          <span className="text-muted-foreground block">Bandwidth</span>
          <span>10 Gbps (Dedicated)</span>
        </div>
      </div>
    </DrawerBody>
    <DrawerFooter>
      <Button variant="secondary" slot="close">
        Close
      </Button>
    </DrawerFooter>
  </Drawer>
</DrawerTrigger>
```

#### Shopping cart / order summary drawer

Allow users to review ordered services and pricing without leaving the product catalog.

```tsx
<DrawerTrigger>
  <Button variant="secondary" startIcon={<CartIcon />}>
    View order cart (3)
  </Button>
  <Drawer>
    <DrawerHeader>
      <DrawerTitle>Order summary</DrawerTitle>
      <DrawerCloseButton />
    </DrawerHeader>
    <DrawerBody>
      <div className="space-y-4 divide-y divide-border">
        <div className="pt-3 first:pt-0 flex justify-between items-start">
          <div>
            <span className="font-medium text-sm block">
              10 Gbps Dedicated Port
            </span>
            <span className="text-xs text-muted-foreground">
              Equinix SG1, Singapore
            </span>
          </div>
          <span className="text-sm font-semibold">$1,200/mo</span>
        </div>
        <div className="pt-3 flex justify-between items-start">
          <div>
            <span className="font-medium text-sm block">
              AWS Direct Connect Virtual Circuit
            </span>
            <span className="text-xs text-muted-foreground">
              1 Gbps Hosted Connection
            </span>
          </div>
          <span className="text-sm font-semibold">$450/mo</span>
        </div>
        <div className="pt-3 flex justify-between items-start">
          <div>
            <span className="font-medium text-sm block">
              DDoS Protection Add-on
            </span>
            <span className="text-xs text-muted-foreground">
              Automated layer 3/4 scrubbing
            </span>
          </div>
          <span className="text-sm font-semibold">$200/mo</span>
        </div>
      </div>
    </DrawerBody>
    <DrawerFooter>
      <div className="w-full space-y-3">
        <div className="flex justify-between text-sm font-medium">
          <span>Estimated subtotal</span>
          <span className="font-semibold">$1,850/mo</span>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" slot="close" fullWidth>
            Continue browsing
          </Button>
          <Button variant="primary" slot="close" fullWidth>
            Proceed to checkout
          </Button>
        </div>
      </div>
    </DrawerFooter>
  </Drawer>
</DrawerTrigger>
```

````

#### Controlled state
Manage drawer visibility programmatically using `isOpen` and `onOpenChange`.

```tsx
<Drawer
  isOpen={isDrawerOpen}
  onOpenChange={setIsDrawerOpen}
>
  <DrawerHeader>
    <DrawerTitle>Edit BGP routing</DrawerTitle>
    <DrawerCloseButton />
  </DrawerHeader>
  <DrawerBody>
    <div className="space-y-4">
      <TextInput label="Customer ASN" defaultValue="64512" isRequired />
      <TextInput label="Peer IP address" defaultValue="192.168.10.2/30" isRequired />
      <TextInput label="MD5 authentication key" type="password" />
    </div>
  </DrawerBody>
  <DrawerFooter>
    <Button variant="secondary" onPress={() => setIsDrawerOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary" onPress={handleSave}>
      Save changes
    </Button>
  </DrawerFooter>
</Drawer>
````

#### Sizes

Drawers support standard width tiers: small (`400px`), medium (`560px`), and large (`720px`).

```tsx
<DrawerTrigger>
  <Button variant="secondary">Open audit logs</Button>
  <Drawer size="large">
    <DrawerHeader>
      <DrawerTitle>System audit history</DrawerTitle>
      <DrawerCloseButton />
    </DrawerHeader>
    <DrawerBody>
      <p className="text-sm text-muted-foreground">
        Large drawers provide ample horizontal room for data tables and logs.
      </p>
    </DrawerBody>
    <DrawerFooter>
      <Button variant="secondary" slot="close">
        Done
      </Button>
    </DrawerFooter>
  </Drawer>
</DrawerTrigger>
```

#### Preventing outside dismissal

Disable dismissal on backdrop click when editing critical data to avoid accidental loss of work.

```tsx
<Drawer isDismissable={false} isKeyboardDismissDisabled>
  <DrawerHeader>
    <DrawerTitle>Configure cross-connect</DrawerTitle>
    <DrawerCloseButton />
  </DrawerHeader>
  <DrawerBody>
    <p className="text-sm text-muted-foreground">
      Clicking outside or pressing Escape is disabled to protect unsaved form
      inputs.
    </p>
  </DrawerBody>
  <DrawerFooter>
    <Button variant="secondary" slot="close">
      Cancel
    </Button>
    <Button variant="primary" slot="close">
      Confirm order
    </Button>
  </DrawerFooter>
</Drawer>
```

### Example usage scenarios

#### Faceted filter drawer for telemetry data

Allow users to configure multiple filtering parameters without obscuring the underlying table.

```tsx
<DrawerTrigger>
  <Button variant="secondary" startIcon={<FilterIcon />}>
    Filter logs
  </Button>
  <Drawer size="small">
    <DrawerHeader>
      <DrawerTitle>Filter connections</DrawerTitle>
      <DrawerCloseButton />
    </DrawerHeader>
    <DrawerBody>
      <div className="space-y-6">
        <CheckboxGroup
          label="Connection status"
          defaultValue={["active", "degraded"]}
        >
          <Checkbox value="active">Active (Normal)</Checkbox>
          <Checkbox value="degraded">Degraded throughput</Checkbox>
          <Checkbox value="down">Offline / Down</Checkbox>
        </CheckboxGroup>
        <Select label="Cloud on-ramp" placeholder="All providers">
          <SelectItem id="aws">AWS Direct Connect</SelectItem>
          <SelectItem id="azure">Azure ExpressRoute</SelectItem>
          <SelectItem id="gcp">Google Cloud Interconnect</SelectItem>
        </Select>
        <DateRangePicker label="Log interval" />
      </div>
    </DrawerBody>
    <DrawerFooter>
      <Button variant="secondary" slot="close">
        Reset
      </Button>
      <Button variant="primary" slot="close">
        Apply filters
      </Button>
    </DrawerFooter>
  </Drawer>
</DrawerTrigger>
```
