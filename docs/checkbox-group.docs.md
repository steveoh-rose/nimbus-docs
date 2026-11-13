---
component_name: CheckboxGroup
purpose: Group related checkboxes together with a shared label, description, validation, and multi-selection state.
primary_user_action: Select or deselect one or more options in a grouped set
key_inputs: Mouse, touch, keyboard (Tab to navigate, Space to toggle)
recommended_when: Users must choose zero, one, or multiple items from a bounded list of related options
recommended_not_when: Options are mutually exclusive (use RadioGroup), or an action triggers an immediate system state change (use Switch)
---

# CheckboxGroup

## Overview

A CheckboxGroup manages a list of related checkboxes under a single label. It coordinates selection state across its children, providing unified validation messages, helper descriptions, and accessibility attributes.

## Preview

A CheckboxGroup consists of a group-level label (rendered semantically as a fieldset legend), optional description and error text, and a series of checkbox items arranged vertically or horizontally.

## Usage Guidance

### Tips

- Always provide a group-level label that clearly describes the category of choices.
- Use a CheckboxGroup whenever multiple checkboxes represent choices within the same multi-select category or shared question.
- Order options logically—by frequency of use, alphabetical order, or natural sequence.
- Prefer vertical orientation over horizontal; stacked lists are significantly easier to scan and read.
- If you have more than 10–12 choices, consider whether a multi-select combobox or listbox would better conserve page real estate.

### When to use

- When users need to select any number of options (zero, one, or multiple) from a predefined set.
- In multi-attribute filtering (faceted search) where toggling criteria narrows or widens results.
- In form workflows where multiple permissions, notification channels, or optional add-ons can be selected together.

### When to use something else

- **RadioGroup:** When users may only pick one option from a mutually exclusive set.
- **Checkbox (standalone):** For an isolated binary agreement (e.g., "I accept the Terms and Conditions") or single conditional field disclosure.
- **Select or Multi-select Combobox:** When options exceed 10–15 items or options need to be searched dynamically.
- **Switch:** For independent binary settings that take effect immediately (such as activating or deactivating a service).

## Usage (NEW TAB)

This section covers design best practices and React Aria accessibility requirements for implementing CheckboxGroup.

- Use clear, distinct labels for both the group heading and each individual checkbox.
- Group-level error messages should appear beneath the options or directly below the helper text, explaining the group constraint (e.g., "Select at least one delivery method").
- Avoid pre-selecting options unless there is a strong, user-centric default recommendation.

### Content

- Write group labels in sentence case that clearly frame the choices (e.g., "Add-on services", "Notification channels").
- Ensure item labels are concise and use positive phrasing.
- Use the `description` slot for supplementary instructions rather than cluttering the group label.

### Hierarchy

- **Orientation:** Vertical (default) is recommended for forms. Horizontal orientation should be restricted to compact toolbars, filters, or groups with 2–3 short items.
- **Size:** Regular (default) for standard desktop and mobile layouts. Small size for dense layouts, data table filters, or modal sidebars.
- **Tile variant:** Use grouped CheckboxTiles when items contain rich metadata, icons, or pricing cards.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Provide a group label even if visually hidden (using <code>aria-label</code> or accessible visually-hidden text).</li>
      <li>Use sentence case for the group label and all child items.</li>
      <li>Display group validation errors at the group container level.</li>
      <li>Position batch actions (e.g., &quot;Select all&quot; or &quot;Clear all&quot;) outside the option list with distinct visual separation.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Use CheckboxGroup for mutually exclusive single-choice options.</li>
      <li>Place batch action controls directly inline with choice options where they could be mistaken for selectable items.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Checkbox group variations

#### Vertical group (default)

The standard vertical configuration. Recommended for most forms and settings views.

```tsx
<CheckboxGroup label="Notification channels" defaultValue={["email", "in_app"]}>
  <Checkbox value="email">Email digest</Checkbox>
  <Checkbox value="sms">SMS alerts</Checkbox>
  <Checkbox value="in_app">In-app notifications</Checkbox>
  <Checkbox value="webhook">Webhook event stream</Checkbox>
</CheckboxGroup>
```

#### Horizontal group

Suitable for compact filters and toolbars where horizontal room is ample and labels are short.

```tsx
<CheckboxGroup
  label="Filter by environment"
  orientation="horizontal"
  defaultValue={["production", "staging"]}
>
  <Checkbox value="production">Production</Checkbox>
  <Checkbox value="staging">Staging</Checkbox>
  <Checkbox value="development">Development</Checkbox>
</CheckboxGroup>
```

#### With description and validation error

React Aria associates description and error message IDs to the group container via `aria-describedby`.

```tsx
<CheckboxGroup
  label="Billing recipients"
  description="Select at least one department to receive monthly invoices."
  errorMessage="Please select at least one recipient."
  isInvalid
  isRequired
>
  <Checkbox value="finance">Finance</Checkbox>
  <Checkbox value="operations">Operations</Checkbox>
  <Checkbox value="procurement">Procurement</Checkbox>
</CheckboxGroup>
```

#### Disabled group vs disabled item

Disabling the group disables all children. Alternatively, individual items can be disabled independently while the rest remain interactive.

```tsx
<div className="flex flex-col gap-6">
  <CheckboxGroup label="Group disabled" isDisabled defaultValue={["read"]}>
    <Checkbox value="read">Read access</Checkbox>
    <Checkbox value="write">Write access</Checkbox>
  </CheckboxGroup>

  <CheckboxGroup label="Individual item disabled" defaultValue={["standard"]}>
    <Checkbox value="standard" isDisabled>
      Standard metrics (Mandatory)
    </Checkbox>
    <Checkbox value="extended">Extended retention (30 days)</Checkbox>
    <Checkbox value="realtime">Real-time telemetry stream</Checkbox>
  </CheckboxGroup>
</div>
```

#### Small size

Use the small size variant when vertical height is constrained or when embedding within side panels and dense data tables.

```tsx
<CheckboxGroup
  label="Table columns"
  size="small"
  defaultValue={["id", "status"]}
>
  <Checkbox value="id">Connection ID</Checkbox>
  <Checkbox value="name">Port name</Checkbox>
  <Checkbox value="status">Status</Checkbox>
  <Checkbox value="bandwidth">Allocated bandwidth</Checkbox>
</CheckboxGroup>
```

#### Checkbox tiles group

Provides card-based styling for rich metadata, descriptions, or visual illustrations.

```tsx
<CheckboxGroup label="Select security packages" defaultValue={["ddos"]}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <CheckboxTile
      value="ddos"
      title="DDoS Protection"
      description="Automated traffic scrubbing up to 100 Gbps."
    />
    <CheckboxTile
      value="waf"
      title="Cloud WAF"
      description="Layer 7 inspection against OWASP Top 10 vulnerabilities."
    />
    <CheckboxTile
      value="flow"
      title="Flow Telemetry"
      description="Real-time NetFlow v9 and IPFIX export."
    />
    <CheckboxTile
      value="macsec"
      title="MACsec Encryption"
      description="Hardware-based point-to-point layer 2 encryption."
    />
  </div>
</CheckboxGroup>
```

### Example usage scenarios

#### Multi-select form step with validation

Combine CheckboxGroup with form submit controls and explicit validation feedback.

```tsx
<form onSubmit={handleSubmit} className="space-y-4">
  <CheckboxGroup
    label="Provisioning regions"
    description="Select all cloud zones where your redundant gateway should deploy."
    isRequired
    value={selectedRegions}
    onChange={setSelectedRegions}
    errorMessage={validationError}
    isInvalid={Boolean(validationError)}
  >
    <Checkbox value="ap-southeast-1">Asia Pacific (Singapore)</Checkbox>
    <Checkbox value="ap-east-1">Asia Pacific (Hong Kong)</Checkbox>
    <Checkbox value="eu-west-1">Europe (Ireland)</Checkbox>
    <Checkbox value="us-west-2">US West (Oregon)</Checkbox>
  </CheckboxGroup>

  <div className="flex gap-3 pt-2">
    <Button variant="secondary" type="button" onPress={handleReset}>
      Reset
    </Button>
    <Button variant="primary" type="submit">
      Apply configuration
    </Button>
  </div>
</form>
```
