---
component_name: Select
purpose: Display a collapsed list of options in a popover dropdown, allowing users to make a single choice from a set.
primary_user_action: Open dropdown menu and select a single option from a list
key_inputs: Mouse, touch, keyboard (Space/Enter or Up/Down arrows to open, Arrow keys to navigate, Enter/Space to select, Escape to dismiss)
recommended_when: Users must choose exactly one option from a bounded list of three or more choices, and vertical layout space is constrained
recommended_not_when: Options are only two (use RadioGroup, Switch, or Checkbox), options exceed 12–15 or require keyword search (use ComboBox), or multiple selections are allowed (use CheckboxGroup or multi-select Menu)
---

# Select

## Overview

A Select displays a collapsed trigger button that expands into an overlay menu of options. It allows users to make a single selection from a predetermined set while conserving vertical page space.

## Preview

A Select consists of a persistent label, a trigger button showing the currently chosen value (or placeholder prompt) with a trailing chevron indicator, and a popover menu containing interactive option items.

## Usage Guidance

### Tips

- A Select component allows users to make a single choice from a set of options.
- It should present three or more options. Avoid using Select for binary choices.
- Always provide a visible label that clearly communicates what value is expected.
- Use a placeholder (e.g., "Select an option...") when there is no natural default choice, prompting the user to take action.
- If options exceed 12–15 items or users need to search by typing, consider using ComboBox instead.
- Keep option labels brief and distinct so users can scan them quickly when the dropdown opens.

### When to use

- When users need to select a single choice from a predefined list of 3 to 15 items.
- In form layouts where vertical space is constrained and rendering radio buttons would push content too far down the page.
- In filter bars, table pagination size selectors, and inspector panels where a compact footprint is required.

### When to use something else

- **RadioGroup:** For two to four options where seeing all choices simultaneously helps users compare options at a glance.
- **Switch or standalone Checkbox:** For binary yes/no choices or settings that activate immediately.
- **ComboBox:** When the list of options is large (more than 15 items), dynamically loaded, or benefits from keyword filtering.
- **CheckboxGroup:** When users can select zero, one, or multiple options from a list.
- **Menu (with `selectionMode="multiple"`):** For contextual actions or toolbar dropdowns where users can toggle multiple filter flags.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing Select.

- Position labels above the trigger button to optimize scannability, reading flow, and localization layout flexibility.
- Avoid clearing or resetting user selections unexpectedly; preserve state until explicitly changed or cancelled.
- Order options logically—by frequency of use, sequence, or ascending value (e.g., bandwidth speeds or commitment tiers).

### Content

- Write concise, sentence-case labels (e.g., "Port capacity", "Contract term").
- Use placeholder text as an instruction (e.g., "Select port speed..."), never as a replacement for the visible label.
- Ensure option labels start with distinguishing keywords rather than repetitive prefixes for faster scanning.

### Hierarchy

- **Size:** Regular (default) for standard form flows and modal dialogs. Small for compact data tables, inspector panels, or dense filter toolbars.
- **Sections / Grouping:** Group related options under section headers when choices span multiple logical categories.
- **Item Descriptions:** Include secondary supporting text beneath option labels when extra context (such as throughput or SLA guarantees) helps users decide.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Use Select for a single choice among three or more options when vertical space is limited.</li>
      <li>Always provide a visible, persistent label associated with the Select component.</li>
      <li>Use sentence case for both the field label and option items.</li>
      <li>Provide a sensible default value or a clear placeholder prompt.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use Select for binary choices (use Switch, Checkbox, or RadioGroup).</li>
      <li>Don't use Select when users need to pick multiple items (use CheckboxGroup).</li>
      <li>Don't use Select for very large option lists that require typing or filtering (use ComboBox).</li>
      <li>Don't truncate option text inside the dropdown; ensure menu width comfortably accommodates labels.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Select variations

#### Default

Standard select dropdown with a visible label and placeholder prompt.

```tsx
<Select label="Contract duration" placeholder="Select duration...">
  <SelectItem id="12m">12 months (Standard)</SelectItem>
  <SelectItem id="24m">24 months (10% discount)</SelectItem>
  <SelectItem id="36m">36 months (20% discount)</SelectItem>
  <SelectItem id="payg">Pay-as-you-go (Monthly)</SelectItem>
</Select>
```

#### With default selected value

Pre-selects an option for common default workflows or editing existing configurations.

```tsx
<Select label="Allocated bandwidth" defaultSelectedKey="10g">
  <SelectItem id="1g">1 Gbps</SelectItem>
  <SelectItem id="10g">10 Gbps</SelectItem>
  <SelectItem id="40g">40 Gbps</SelectItem>
  <SelectItem id="100g">100 Gbps</SelectItem>
</Select>
```

#### With description (helper text)

Provides supplementary guidance or business rules beneath the control.

```tsx
<Select
  label="Redundancy mode"
  placeholder="Select redundancy level..."
  description="Redundant ports are deployed in physically separated meet-me rooms."
>
  <SelectItem id="active-standby">
    Active / Standby (Automated failover)
  </SelectItem>
  <SelectItem id="active-active">
    Active / Active (Dual throughput with LACP)
  </SelectItem>
  <SelectItem id="standalone">Standalone (Single cross-connect)</SelectItem>
</Select>
```

#### With validation error

Surfaces an invalid state and error message when a required selection is missing.

```tsx
<Select
  label="Invoicing currency"
  placeholder="Choose currency..."
  errorMessage="Please select an invoicing currency to continue."
  isInvalid
  isRequired
>
  <SelectItem id="usd">USD — United States Dollar</SelectItem>
  <SelectItem id="eur">EUR — Euro</SelectItem>
  <SelectItem id="gbp">GBP — British Pound</SelectItem>
  <SelectItem id="sgd">SGD — Singapore Dollar</SelectItem>
</Select>
```

#### Grouped options with sections

Organizes option lists into titled sections for faster categorization and scanning.

```tsx
<Select label="Routing protocol" placeholder="Select protocol...">
  <SelectSection title="Dynamic Routing">
    <SelectItem id="bgp-v4">BGP IPv4 (EBGP Peering)</SelectItem>
    <SelectItem id="bgp-v6">BGP IPv6 (Dual Stack)</SelectItem>
  </SelectSection>
  <SelectSection title="Static Routing">
    <SelectItem id="static-single">Static Default Route</SelectItem>
    <SelectItem id="static-redundant">Static with Floating Backup</SelectItem>
  </SelectSection>
</Select>
```

#### Disabled and read-only

Use disabled when the control is unavailable, or read-only when reviewable but immutable.

```tsx
<div className="flex flex-col gap-4">
  <Select label="Port type" defaultSelectedKey="dedicated" isDisabled>
    <SelectItem id="dedicated">Dedicated Interconnect</SelectItem>
  </Select>
  <Select label="Interface encapsulation" defaultSelectedKey="dot1q" isReadOnly>
    <SelectItem id="dot1q">IEEE 802.1Q (VLAN Tagged)</SelectItem>
  </Select>
</div>
```

#### Small size

Use the small size variant when embedding within data table toolbars, filters, or compact drawers.

```tsx
<Select size="small" label="Rows per page" defaultSelectedKey="25">
  <SelectItem id="10">10</SelectItem>
  <SelectItem id="25">25</SelectItem>
  <SelectItem id="50">50</SelectItem>
  <SelectItem id="100">100</SelectItem>
</Select>
```

### Example usage scenarios

#### Service tier selection form

Combine Select with form commit buttons and explicit validation.

```tsx
<form onSubmit={handleUpgrade} className="space-y-4 max-w-md">
  <Select
    label="Target cloud tier"
    placeholder="Select SLA package..."
    description="Higher SLA tiers include 24/7 dedicated Network Operations Center phone support."
    isRequired
    selectedKey={selectedTier}
    onSelectionChange={setSelectedTier}
    errorMessage={validationError}
    isInvalid={Boolean(validationError)}
  >
    <SelectItem id="standard">Standard SLA (99.9% uptime)</SelectItem>
    <SelectItem id="enterprise">Enterprise SLA (99.99% uptime)</SelectItem>
    <SelectItem id="mission-critical">
      Mission Critical (99.999% uptime, dual homed)
    </SelectItem>
  </Select>

  <div className="flex justify-end gap-3 pt-2">
    <Button variant="secondary" type="button" onPress={handleBack}>
      Back
    </Button>
    <Button variant="primary" type="submit">
      Confirm tier
    </Button>
  </div>
</form>
```
