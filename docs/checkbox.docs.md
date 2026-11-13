---
component_name: Checkbox
purpose: Allow users to select one or more options from a list, or toggle an independent binary choice.
primary_user_action: Click, tap, or keyboard toggle
key_inputs: Mouse, touch, keyboard (Space)
recommended_when: Users can choose zero, one, or multiple options independently, or confirm a standalone agreement
recommended_not_when: Options are mutually exclusive, or instant activation occurs outside of a form
---

# Checkbox

## Overview

Checkboxes allow users to select one or more items from many choices, or toggle a single independent setting such as an agreement or opt-in.

## Preview

Checkboxes consist of a square selection control paired with a descriptive text label. Users can interact via pointer clicks, taps, or by pressing the Space key when focused.

## Usage Guidance

### Tips

- A checkbox is always paired with a descriptive label.
- When used in a Checkbox group, toggling the state of a checkbox item does not affect other checkboxes in the group.
- Use positive wording for labels so that checking the box enables an option rather than disabling one.
- Avoid triggering immediate page changes or irreversible actions on checkbox toggle; preserve state commits for explicit form actions.

### When to use

- When users need to select one or more options from a list.
- To collect responses for binary yes/no choices (such as accepting terms and conditions).
- To toggle showing or hiding additional conditional fields within a form.
- When choices can be combined in any quantity without mutual exclusion.

### When to use something else

- For mutually exclusive choices where users can select only one option, use [Radio buttons](https://nimbus.consoleconnect.com/368d2f116/p/radio) instead.
- To toggle between immediate active/inactive states outside of a form flow, consider using a [Switch](https://nimbus.consoleconnect.com/368d2f116/p/switch).
- To show or hide standalone informational sections outside of form data entry, consider using an [Accordion](https://nimbus.consoleconnect.com/368d2f116/p/accordion).

### When to use checkbox tiles

Checkbox tiles wrap the checkbox control within a selectable card container. Use checkbox tiles when:

- Options require richer supporting information, such as metadata, pricing, badges, or descriptive helper copy.
- Selections benefit from iconography or visual illustrations for fast scanning.
- The interface needs larger touch target areas (e.g., plan configurations or service provisioning flows).
- Users are choosing between 2 to 6 prominent options rather than a dense vertical list.

## Usage

This section explains how to use the checkbox component in product designs and implementation work.

### General design usage

- Present options in a vertical list whenever possible for rapid vertical scanning.
- Keep options logically ordered (e.g., alphabetical, chronological, or by popularity).
- Keep the entire label clickable as part of the interactive target area.
- When using grouped checkboxes, place group validation and error messages beneath the entire group.

### Content and labeling

- Write concise, sentence-case labels.
- State what will happen when checked, not what happens when left unchecked.
- If supplementary explanation is required, use secondary helper text beneath the primary label rather than overloading the main label.

### Hierarchy and variants

- **Regular (default):** Standard size used in most forms and desktop layouts.
- **Small:** Use when vertical space is constrained or to reduce visual noise in long lists (e.g., groups with more than ten items or compact data tables).
- **Tile:** Use when options deserve card-level prominence and rich auxiliary content.

### Layout guidance

- Stack checkboxes vertically with consistent spacing between rows.
- Avoid horizontal grouping of checkboxes unless horizontal space is plentiful and option labels are consistently short.
- When nesting child checkboxes under a parent checkbox, indent child items by one spacing tier (`16px` / `1rem`) and relate them programmatically.

### Accessibility guidance

- Every checkbox must have an accessible name derived from visible text or an explicit `aria-label`.
- Keyboard users navigate to individual checkboxes using `Tab` and toggle selection using `Space`.
- Indeterminate checkboxes must reflect `aria-checked="mixed"` until a user explicitly checks or unchecks them.
- Grouped checkboxes should be enclosed in a `fieldset` with a descriptive `legend` or equivalent ARIA grouping attributes.

### Design do / don't

- Do keep labels clickable so users have a comfortable hit target.
- Do use sentence case and positive phrasing for labels.
- Do use indeterminate state to communicate partial child selections.
- Don't use checkboxes for single-choice selections where options are mutually exclusive.
- Don't invert logic (e.g., avoid "Do not send me notifications").
- Don't trigger unexpected route changes or modal launches immediately upon selection.

## Examples

### Checkbox variations

#### Regular (default)

The regular checkbox is the default control suitable for general form flows and settings pages.

```tsx
<Checkbox value="auto_renew" defaultSelected>
  Enable automatic renewal
</Checkbox>
```

#### Small

Use the small size when vertical real estate is limited or when rendering dense option lists with more than ten items.

```tsx
<Checkbox size="small" value="sub_interface_1">
  VLAN 100 (Primary gateway)
</Checkbox>
```

#### Indeterminate

Communicates a mixed state where some, but not all, sub-options within a nested collection are currently selected.

```tsx
<Checkbox isIndeterminate value="all_ports">
  Select all ports (2 of 5 selected)
</Checkbox>
```

#### Disabled states

Disabled checkboxes communicate that an option exists in the system but cannot be changed due to permissions or missing prerequisites.

```tsx
<div className="flex flex-col gap-2">
  <Checkbox isDisabled value="tier_unselected">
    Enterprise add-on (Requires upgrade)
  </Checkbox>
  <Checkbox isDisabled defaultSelected value="tier_selected">
    Standard telemetry (Included with plan)
  </Checkbox>
</div>
```

#### Checkbox tiles

Checkbox tiles offer high visual emphasis, supporting secondary descriptions, icons, and badges.

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <CheckboxTile
    value="ddos_protection"
    title="DDoS Mitigation"
    description="Real-time multi-layered traffic scrubbing up to 100 Gbps."
    defaultSelected
  />
  <CheckboxTile
    value="redundancy"
    title="Dual Port Redundancy"
    description="Automated failover with secondary redundant cross-connect."
  />
</div>
```

#### Checkbox group

Checkbox groups manage multiple independent options with unified labeling and validation.

```tsx
<CheckboxGroup
  label="Notification preferences"
  defaultValue={["security", "maintenance"]}
>
  <Checkbox value="security">Security advisories</Checkbox>
  <Checkbox value="maintenance">Scheduled maintenance</Checkbox>
  <Checkbox value="billing">Invoices and payment updates</Checkbox>
</CheckboxGroup>
```

### Example usage scenarios

#### Single agreement: Terms and conditions

Collect mandatory binary consent at checkout or registration steps.

```tsx
<Checkbox isRequired value="terms_agreed">
  I agree to the Console Connect{" "}
  <a href="/terms" className="underline">
    Service Agreement
  </a>{" "}
  and Acceptable Use Policy
</Checkbox>
```

#### Parent-child selection with indeterminate state

A parent checkbox toggles all child items, reflecting indeterminate status when children are partially checked.

```tsx
<div className="space-y-2">
  <Checkbox
    isIndeterminate={isPartiallySelected}
    isSelected={isAllSelected}
    onChange={handleToggleAll}
  >
    Select all cloud interconnects
  </Checkbox>
  <div className="pl-6 flex flex-col gap-2">
    <Checkbox
      isSelected={selectedPorts.includes("aws")}
      onChange={() => handleTogglePort("aws")}
    >
      AWS Direct Connect
    </Checkbox>
    <Checkbox
      isSelected={selectedPorts.includes("azure")}
      onChange={() => handleTogglePort("azure")}
    >
      Microsoft Azure ExpressRoute
    </Checkbox>
    <Checkbox
      isSelected={selectedPorts.includes("gcp")}
      onChange={() => handleTogglePort("gcp")}
    >
      Google Cloud Interconnect
    </Checkbox>
  </div>
</div>
```

#### Conditional disclosure in a form

Use a standalone checkbox to reveal supplementary fields without navigating away from the current step.

```tsx
<div className="space-y-4">
  <Checkbox isSelected={hasCustomRouting} onChange={setHasCustomRouting}>
    Configure advanced BGP routing
  </Checkbox>
  {hasCustomRouting && (
    <div className="pl-6 pt-2 border-l-2 border-border space-y-3">
      <input
        type="text"
        placeholder="Customer ASN (e.g. 64512)"
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="text"
        placeholder="Peer IP / Subnet"
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  )}
</div>
```

## Implementation notes

- Prefer using `CheckboxGroup` whenever three or more checkboxes belong to the same logical dataset.
- Do not bind `onChange` handlers to synchronous network requests or route changes; state should be stored and committed with form submission.
- Ensure custom layouts maintain programmatic grouping via `<fieldset>` or `role="group"` with an associated label.
- Always ensure indeterminate checkboxes sync with the current selection count of their respective child items.
