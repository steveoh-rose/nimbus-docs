---
component_name: TagsInput
purpose: Allow users to enter, view, and manage multiple discrete text values or keywords as interactive tags within a single input field.
primary_user_action: Type text and press Enter or comma to create tags, and click or press Backspace to remove them
key_inputs: Keyboard (Enter/comma to commit, Backspace/Delete to remove, Arrow keys to navigate tags, Tab to move focus), Mouse, Touch
recommended_when: Users need to input an open-ended collection of keywords, labels, email recipients, IP ranges, or metadata tags in a single field
recommended_not_when: Options are selected exclusively from a fixed predefined set (use CheckboxGroup or multi-select Select), or when only a single text value is needed (use TextInput)
---

# TagsInput

## Overview

A TagsInput (also known as a TokenField or TagInput) combines an inline text input with an interactive list of removable tags. It enables users to type values, convert them into compact visual tokens with delimiter keys (such as `Enter` or `,`), and edit or delete them seamlessly.

## Preview

A TagsInput consists of a persistent field label, an input container that dynamically wraps dismissible tag chips alongside an active text input cursor, an optional "Clear all" action, and supporting helper or validation error messages beneath the field.

## Usage Guidance

### Tips

- Always provide a visible label that clearly communicates what category of tags is expected (e.g., "Resource tags", "Notification recipients").
- Inform users of the creation mechanism using helper text (e.g., "Press Enter or comma to add a tag").
- By default, pressing `Backspace` when the input field is empty should highlight or immediately remove the preceding tag, allowing fast keyboard-driven editing.
- Automatically trim leading and trailing whitespace from entered text, and prevent duplicate tags by default unless explicitly permitted.
- Clicking anywhere within the border container should immediately focus the inline text input field.
- If the maximum number of tags is capped (e.g., maximum 10 tags per connection), indicate this constraint upfront and disable entry when the limit is reached.

### When to use

- Assigning arbitrary metadata tags, key-value labels, or operational categories to network resources (e.g., `env:production`, `billing:core`).
- Adding multiple email addresses or alert notification endpoints.
- Specifying multiple CIDR prefixes, IP addresses, or VLAN ranges within a single configuration field.
- Building search query chips or faceted keyword filters.

### When to use something else

- **CheckboxGroup:** When users must choose from a small, bounded list of predefined options without custom entry.
- **Select or ComboBox:** When selecting options from a known catalog where arbitrary custom tags are not allowed.
- **TextInput:** When capturing continuous single-string text (such as names, titles, or descriptions).
- **TextArea:** When capturing multi-line paragraphs or free-form notes.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing TagsInput.

- Position labels above the tags input container to ensure scannability and layout consistency across forms.
- Ensure each tag chip includes an accessible dismiss button with a meaningful label (e.g., `aria-label="Remove tag production"`).
- Allow full keyboard navigation: users should be able to navigate between existing tags with `ArrowLeft` / `ArrowRight` and delete them using `Backspace` or `Delete`.
- When the field is invalid (e.g., duplicate tag or invalid format), announce the error message and highlight the container with an error border.

### Content

- Write concise, sentence-case labels (e.g., "Resource tags", "Allowed CIDR blocks").
- Use placeholder text to prompt entry when the field has zero tags (e.g., "Add tag...").
- Keep helper descriptions focused on delimiter instructions or syntax constraints (e.g., "Separate tags with Enter or comma").

### Hierarchy

- **Size:** Regular (default) for standard form flows and modal dialogs. Small for compact data tables, inspector side panels, or dense filter toolbars.
- **State:** Supports default, focused, disabled, read-only, and invalid states.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Provide helper text that explains how to add and remove tags using keyboard shortcuts.</li>
      <li>Include an accessible remove button ("x") on every individual tag.</li>
      <li>Prevent duplicate tags by default and display an inline error or warning when attempted.</li>
      <li>Wrap tags onto multiple lines gracefully when they exceed the width of the input field.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use TagsInput for single-value inputs; use standard TextInput instead.</li>
      <li>Don't rely solely on keyboard shortcuts without visible dismiss buttons for pointer users.</li>
      <li>Don't allow unbounded tag growth without a clear maximum limit when backend APIs have length caps.</li>
      <li>Don't silently drop invalid or duplicate tags without user-facing feedback.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Tags input variations

#### Default

Standard tags input with a visible label and placeholder prompt.

```tsx
<TagsInput
  label="Resource tags"
  placeholder="Add tag and press Enter..."
  description="Press Enter or comma to create a new tag."
/>
```

#### With default values

Pre-populating tags for editing existing resource configurations.

```tsx
<TagsInput
  label="Environment labels"
  defaultValue={["production", "us-east-1", "pci-compliant"]}
  description="Applied to all telemetry alarms and billing records."
/>
```

#### With description (helper text)

Provides guidance on formatting rules and delimiters beneath the field.

```tsx
<TagsInput
  label="Allowed IP ranges"
  placeholder="e.g. 192.168.1.0/24"
  description="Enter IPv4 or IPv6 CIDR blocks separated by Enter."
/>
```

#### With validation error

Surfaces an invalid state and error message when a constraint or format requirement fails.

```tsx
<TagsInput
  label="Notification recipients"
  defaultValue={["ops@example.com", "invalid-email"]}
  errorMessage="One or more entries are not valid email addresses."
  isInvalid
  isRequired
/>
```

#### Max tags constraint

Limits the maximum number of tags that can be added to the field.

```tsx
<TagsInput
  label="Routing tags"
  placeholder="Add tag..."
  maxTags={5}
  defaultValue={["bgp", "primary", "vlan-100"]}
  description="You can add up to 5 tags (3 of 5 used)."
/>
```

#### Disabled and read-only

Use disabled when the field is unavailable, or read-only when tags are reviewable but immutable.

```tsx
<div className="flex flex-col gap-4">
  <TagsInput
    label="Provisioned BGP communities"
    defaultValue={["64512:100", "64512:200"]}
    isReadOnly
  />
  <TagsInput
    label="Locked system tags"
    defaultValue={["system:managed", "tier:core"]}
    isDisabled
  />
</div>
```

#### Small size

Use the small size variant when embedding inputs into compact filter toolbars or data table rows.

```tsx
<TagsInput
  size="small"
  label="Filter by tags"
  placeholder="Filter tags..."
  defaultValue={["status:active"]}
/>
```

### Example usage scenarios

#### Interconnect metadata provisioning step

Combine TagsInput with required form inputs and action controls in a service provisioning flow.

```tsx
<form onSubmit={handleSave} className="space-y-4 max-w-md">
  <TextInput
    label="Connection name"
    defaultValue="Primary AWS Direct Connect"
    isRequired
  />
  <TagsInput
    label="Resource tags"
    placeholder="e.g. env:prod, dept:network"
    description="Tags help organize and filter resources across your organization."
    value={tags}
    onChange={setTags}
    maxTags={10}
    errorMessage={tagError}
    isInvalid={Boolean(tagError)}
  />
  <TagsInput
    label="Alert email distribution"
    placeholder="ops@example.com"
    defaultValue={["noc@example.com"]}
    isRequired
  />
  <div className="flex justify-end gap-3 pt-2">
    <Button variant="secondary" type="button" onPress={handleCancel}>
      Cancel
    </Button>
    <Button variant="primary" type="submit">
      Save metadata
    </Button>
  </div>
</form>
```
