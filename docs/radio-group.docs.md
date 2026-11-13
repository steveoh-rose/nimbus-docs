---
component_name: RadioGroup
purpose: Allow users to select one item from a group of mutually exclusive choices.
primary_user_action: Select a single option from a predefined list of mutually exclusive choices
key_inputs: Mouse, touch, keyboard (Arrow keys to change selection, Tab to navigate between form controls)
recommended_when: Users must choose exactly one option from two to six mutually exclusive choices visible at a glance
recommended_not_when: Users can select multiple items (use CheckboxGroup), options exceed six to seven items (use Select), or an action triggers an immediate system toggle (use Switch)
---

# RadioGroup

## Overview

RadioGroup manages a list of mutually exclusive options under a shared label. Selecting any option automatically unselects whichever option was previously chosen.

## Preview

A RadioGroup includes a group-level label (rendered semantically as a fieldset legend), optional description and validation messages, and a collection of circular radio controls paired with text labels arranged vertically or horizontally.

## Usage Guidance

### Tips

- Typically used in groups of two to six options where a user can select only one item from a set of mutually exclusive choices.
- A radio input can never exist on its own; always present radio inputs within a `RadioGroup` containing two or more options.
- If the label wraps over more than one line, the radio button remains aligned to the top/first line of the label, and the text wraps within the label area, never beneath the radio button.
- Keep the entire label clickable as part of the hit target area.
- Because users cannot unselect a radio button once selected (they can only switch to another option), ensure there is either a safe default selection or an explicit neutral choice (such as "None" or "Not applicable").

### When to use

- When a user has two or more choices and can only select one item from the range of options.
- It is acceptable to use radio buttons for as few as two options (e.g. "Monthly billing" vs. "Annual billing") where seeing both choices side-by-side aids decision making.
- When comparing options directly without opening a dropdown menu.

### When to use something else

- **Checkbox or CheckboxGroup:** When users can select zero, one, or multiple items, or when confirming a single standalone agreement.
- **Select or Combobox:** When there are more than six or seven choices, or when vertical page space is constrained.
- **Switch:** When toggling an independent binary setting that applies immediately without requiring form submission.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing RadioGroup.

- Present options in a vertical stack by default for rapid scanning and clear label alignment.
- Display group validation errors beneath the option list, explaining the required choice clearly.
- Order choices logically—by frequency of use, sequence, or ascending value (e.g. speeds or tiers).

### Content

- Write concise, sentence-case labels for both the group heading and each individual radio item.
- Keep choices positive and parallel in grammatical structure (e.g. all starting with nouns or all starting with verbs).
- Use the `description` prop for helper instructions rather than overloading the group label.

### Hierarchy

- **Orientation:** Vertical (default) is preferred for forms. Horizontal orientation should be reserved for groups with two or three brief options in compact layouts.
- **Size:** Regular (default) for standard forms and dialogs. Small for compact data tables, inspector sidebars, and dense toolbars.
- **Tile variant:** Use `RadioTile` within `RadioGroup` when options include rich supporting details, descriptions, pricing, or badges.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Use RadioGroup when users must select exactly one option from a mutually exclusive set.</li>
      <li>Align the radio indicator to the first line of text when labels wrap across multiple lines.</li>
      <li>Use sentence case for the group label and all child item labels.</li>
      <li>Provide a descriptive group label even if visually hidden, ensuring screen reader accessibility.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use a single radio button on its own; use a Checkbox or Switch instead.</li>
      <li>Don't use RadioGroup when users need to select multiple items (use CheckboxGroup).</li>
      <li>Don't wrap text underneath the radio circle; keep wrapped lines indented under the label text.</li>
      <li>Don't use RadioGroup for long lists exceeding six or seven items (use Select).</li>
    </ul>
  </Dont>
</Box>

## Examples

### Radio group variations

#### Vertical group (default)

Standard vertical layout recommended for most forms and modal dialogs.

```tsx
<RadioGroup label="Connection redundancy" defaultValue="high_availability">
  <Radio value="high_availability">
    High availability (Dual redundant ports)
  </Radio>
  <Radio value="standard">
    Standard (Single port with automated rerouting)
  </Radio>
  <Radio value="none">Non-redundant (Single port)</Radio>
</RadioGroup>
```

#### Horizontal group

Best suited for two or three short options within compact filters or toolbars.

```tsx
<RadioGroup
  label="Billing cycle"
  orientation="horizontal"
  defaultValue="annual"
>
  <Radio value="monthly">Monthly</Radio>
  <Radio value="quarterly">Quarterly</Radio>
  <Radio value="annual">Annual (Save 15%)</Radio>
</RadioGroup>
```

#### With description and validation error

Helper text and error messages are programmatically linked to the group via `aria-describedby`.

```tsx
<RadioGroup
  label="Routing protocol"
  description="Choose how traffic routes across your private network connection."
  errorMessage="Please select a routing protocol to proceed."
  isInvalid
  isRequired
>
  <Radio value="bgp">Border Gateway Protocol (BGP)</Radio>
  <Radio value="static">Static routing</Radio>
</RadioGroup>
```

#### Disabled group vs disabled item

Disabling the group disables all children. Alternatively, individual items can be disabled while others remain interactive.

```tsx
<div className="flex flex-col gap-6">
  <RadioGroup label="Group disabled" isDisabled defaultValue="standard">
    <Radio value="basic">Basic (1 Gbps)</Radio>
    <Radio value="standard">Standard (10 Gbps)</Radio>
  </RadioGroup>

  <RadioGroup label="Individual option disabled" defaultValue="cloud_router">
    <Radio value="cloud_router">Cloud Router</Radio>
    <Radio value="direct_connect">Direct Interconnect</Radio>
    <Radio value="macsec" isDisabled>
      MACsec Encrypted Port (Requires enterprise license)
    </Radio>
  </RadioGroup>
</div>
```

#### Small size

Use the small size variant when embedding selections in compact side panels or table filter drawers.

```tsx
<RadioGroup label="Display density" size="small" defaultValue="compact">
  <Radio value="comfortable">Comfortable</Radio>
  <Radio value="standard">Standard</Radio>
  <Radio value="compact">Compact</Radio>
</RadioGroup>
```

#### Radio tiles group

Provides selectable card containers with rich descriptions, pricing, or metadata badges.

```tsx
<RadioGroup label="Select port throughput" defaultValue="10g">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <RadioTile
      value="1g"
      title="1 Gbps Port"
      description="Suitable for development and staging environments."
    />
    <RadioTile
      value="10g"
      title="10 Gbps Port"
      description="Standard high-speed interconnect for production workloads."
    />
    <RadioTile
      value="100g"
      title="100 Gbps Port"
      description="Ultra-high bandwidth for large-scale data replication."
    />
  </div>
</RadioGroup>
```

### Example usage scenarios

#### Payment method selection step

Single-selection workflow with clear validation feedback and form commit buttons.

```tsx
<form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
  <RadioGroup
    label="Payment frequency"
    description="Selected term applies to all provisioned interconnects on this order."
    defaultValue="annual"
    isRequired
  >
    <Radio value="monthly">Monthly invoicing (Pay as you go)</Radio>
    <Radio value="annual">Annual commit (15% discount applied)</Radio>
    <Radio value="multi_year">3-Year enterprise commit (25% discount)</Radio>
  </RadioGroup>
  <div className="flex justify-end gap-3 pt-2">
    <Button variant="secondary" type="button" onPress={handleBack}>
      Back
    </Button>
    <Button variant="primary" type="submit">
      Continue to checkout
    </Button>
  </div>
</form>
```
