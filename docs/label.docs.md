---
component_name: Label
purpose: Provide a clear, accessible text label associated with a form control or interactive element.
primary_user_action: Read to identify the purpose of a control, or click to transfer focus to the associated input
key_inputs: Mouse, touch (click or tap shifts focus to associated input)
recommended_when: Labeling standalone form controls, custom form inputs, or group containers that require accessible visible naming
recommended_not_when: Displaying standalone headings, body paragraphs, or non-interactive text (use Typography or Text instead)
---

# Label

## Overview

The Label component provides an accessible text descriptor for a form control. It ensures that assistive technologies can identify the control and expands the clickable target area so that clicking the label moves focus directly to the associated input.

## Preview

Labels render as concise, prominent text positioned directly above or alongside a form field, optionally including visual indicators for required or optional fields, or supporting contextual help triggers.

## Usage Guidance

### Tips

- Every form input must have an accessible label. While higher-level Nimbus components (such as `TextInput` or `CheckboxGroup`) include built-in labels, use the standalone `Label` component when composing custom form fields.
- Always link the label to its target control using matching `htmlFor` and input `id` attributes, or by wrapping the control.
- Indicate required fields clearly. If most fields in a form are required, consider marking the optional fields instead to reduce visual noise.
- Keep labels brief and action-oriented; put detailed instructions or format constraints in helper/description text rather than in the label itself.

### When to use

- Building custom form controls or compound inputs not covered by pre-composed components.
- Associating visible names with inputs, select dropdowns, text areas, or file uploaders.
- Marking fields as required or optional with standardized visual indicators.

### When to use something else

- **Built-in component labels:** When using pre-composed Nimbus components like `TextInput`, `CheckboxGroup`, or `RadioGroup`, use their built-in `label` prop instead of manually composing a separate `Label`.
- **Heading:** For section titles, page titles, or card headings that do not directly name an interactive form control.
- **Text / Description:** For supplementary instructional copy, format rules, or field hints.

## Usage

This section covers design best practices and accessibility requirements for implementing Label.

- Position labels above vertical input fields to optimize scannability, reading flow, and localization layout flexibility.
- Maintain consistent required/optional indicator patterns across all forms in the application.
- Ensure clicking or tapping the label transfers focus to the associated form control.

### Content

- Write clear, sentence-case labels (e.g., "Account name", "Routing policy").
- State what data is required without conversational filler (e.g., use "Email address", not "Please enter your email address here").
- Avoid relying solely on asterisks (`*`) if the visual indicator is not programmatically announced to screen readers.

### Hierarchy

- **Size:** Regular (default) for standard desktop and mobile form flows. Small for compact data tables, inspector panels, or dense filter toolbars.
- **Emphasis:** Labels use medium/semibold typography to distinguish them from standard body copy and placeholder text.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Always connect the label to its input using matching <code>htmlFor</code> and <code>id</code> attributes.</li>
      <li>Use sentence case for all label text.</li>
      <li>Place labels above the input field for standard forms.</li>
      <li>Clearly indicate required or optional status where appropriate.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use placeholder text as a replacement for a visible label.</li>
      <li>Don't include lengthy instructions or format rules inside the label text.</li>
      <li>Don't end labels with trailing colons (e.g., avoid "Username:").</li>
      <li>Don't use Label components for standalone headings or non-form text.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Label variations

#### Default

Standard label linked to a custom input using `htmlFor`.

```tsx
<div className="flex flex-col gap-1.5">
  <Label htmlFor="service-name">Service name</Label>
  <input
    id="service-name"
    type="text"
    className="px-3 py-2 border rounded border-border"
    placeholder="e.g. Production Interconnect"
  />
</div>
```

#### Required field

Displays a required indicator (asterisk) and sets appropriate accessibility attributes.

```tsx
<div className="flex flex-col gap-1.5">
  <Label htmlFor="contact-email" isRequired>
    Primary contact email
  </Label>
  <input
    id="contact-email"
    type="email"
    required
    className="px-3 py-2 border rounded border-border"
    placeholder="ops@example.com"
  />
</div>
```

#### Optional field indicator

Explicitly marks a field as optional, recommended when most surrounding fields are required.

```tsx
<div className="flex flex-col gap-1.5">
  <Label htmlFor="backup-asn" necessityIndicator="label">
    Secondary ASN (optional)
  </Label>
  <input
    id="backup-asn"
    type="text"
    className="px-3 py-2 border rounded border-border"
    placeholder="e.g. 64513"
  />
</div>
```

#### Disabled association

Applies muted styling when the associated input is disabled.

```tsx
<div className="flex flex-col gap-1.5">
  <Label htmlFor="allocated-vlan" isDisabled>
    Assigned VLAN tag
  </Label>
  <input
    id="allocated-vlan"
    type="text"
    disabled
    value="4094"
    className="px-3 py-2 border rounded border-border bg-muted text-muted-foreground"
  />
</div>
```

#### Small size

Use the small size variant when composing compact form rows or table filters.

```tsx
<div className="flex flex-col gap-1">
  <Label htmlFor="quick-filter" size="small">
    Filter by ID
  </Label>
  <input
    id="quick-filter"
    type="search"
    className="px-2 py-1 text-sm border rounded border-border"
    placeholder="Search..."
  />
</div>
```

### Example usage scenarios

#### Composing with helper info tooltip

Combine a label with an info icon trigger to offer supplementary guidance without cluttering the form layout.

```tsx
<div className="flex items-center gap-1.5 mb-1.5">
  <Label htmlFor="bgp-auth-key" isRequired>
    BGP MD5 password
  </Label>
  <TooltipTrigger>
    <button
      type="button"
      aria-label="More information about BGP MD5 authentication"
      className="text-muted-foreground hover:text-foreground"
    >
      <InfoIcon size={14} />
    </button>
    <Tooltip>
      Must be between 1 and 80 alphanumeric characters shared with your peer
      router.
    </Tooltip>
  </TooltipTrigger>
</div>
```
