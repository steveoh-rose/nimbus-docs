---
component_name: TextInput
purpose: Collect single-line text, numeric, or alphanumeric input from users within forms and dialogs.
primary_user_action: Type or edit single-line text using a keyboard or paste text
key_inputs: Keyboard, touch, mouse/pointer focus
recommended_when: Users need to enter short, unconstrained single-line text or numbers (such as names, emails, URLs, or identifiers)
recommended_not_when: Input requires multiple lines of text (use TextArea), predefined option selection (use Select, RadioGroup, or Checkbox), or search suggestions with custom entry (use ComboBox)
---

# TextInput

## Overview

The Text Input component is a complete form control that includes an accessible label, input field, and optional supporting elements such as helper descriptions and validation error messages.

## Preview

Text inputs consist of a visible input container paired with a persistent label above the field, optional inline placeholder copy, helper text underneath, and interactive focus and validation states.

## Usage Guidance

### Tips

- A text input must always be accompanied by a descriptive label that communicates the purpose of the field.
- Use placeholder text sparingly to provide an example or hint of the expected format (e.g. `user@example.com`), never as a replacement for a visible label.
- Provide helper text when users need guidance on formatting rules, constraints, or where to find required information (e.g., "Between 1 and 4094").
- Keep input width proportional to the expected content length to give users a visual cue of what to enter.
- Surface validation errors inline as soon as appropriate, explaining how to correct the issue.

### When to use

- Collecting free-form, single-line text such as names, titles, email addresses, or phone numbers.
- Collecting alphanumeric or numerical values such as VLAN IDs, IP addresses, port speeds, or ASNs.
- Providing search or filtering query inputs within toolbars and data tables.

### When to use something else

- **TextArea:** When users need to enter long-form copy, descriptions, or multiple lines of text that exceed a single line.
- **Select or RadioGroup:** When users must select one value from a predetermined list of options.
- **Checkbox or CheckboxGroup:** When users can select one or multiple options from a predetermined list.
- **ComboBox:** When you want to allow users to select from a suggested list of options or enter a custom value.
- **Switch:** For binary settings that take effect immediately without requiring form submission.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing TextInput.

- Position labels above the input field to maximize readability, scannability, and localization flexibility.
- Display specific, actionable error messages beneath the input field when validation fails.
- Avoid pre-filling text inputs unless editing an existing entity or providing a safe, expected default.

### Content

- Write clear, sentence-case labels stating what data is requested (e.g., "Connection name", "Primary contact email").
- Keep helper descriptions concise and informative, focusing on constraints or format rules.
- Avoid relying on placeholder text for critical instructions, as placeholders disappear once typing begins and often suffer from low visual contrast.

### Hierarchy

- **Size:** Regular (default) for standard forms, onboarding workflows, and modal dialogs. Small for compact data tables, inspector side panels, or dense toolbars.
- **Input Types:** Standard text, password (with visibility toggle), email, number, search, and URL.
- **Affixes & Adornments:** Use leading icons for search or protocol prefixes (`https://`), and trailing actions for clear buttons, units (`Gbps`), or password visibility toggles.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Always provide a visible, persistent label associated with the input.</li>
      <li>Use sentence case for labels, placeholders, and helper descriptions.</li>
      <li>Use placeholder text strictly as formatting examples, not instructions or labels.</li>
      <li>Display specific, actionable error messages beneath the input when invalid.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use placeholder text as a substitute for a visible label.</li>
      <li>Don't use a single-line text input when users are expected to enter multi-line paragraphs.</li>
      <li>Don't truncate labels; ensure adequate space for localized text.</li>
      <li>Don't hide formatting requirements until after the user submits an invalid form.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Text input variations

#### Default

Standard text input with a visible label and placeholder example.

```tsx
<TextInput label="Connection name" placeholder="e.g. Primary AWS Gateway" />
```

#### With description (helper text)

Provides additional context or formatting constraints beneath the input field.

```tsx
<TextInput
  label="Customer ASN"
  placeholder="e.g. 64512"
  description="Enter a 2-byte or 4-byte private or public Autonomous System Number."
/>
```

#### With validation error

Surfaces an invalid state and error message when format requirements are not satisfied.

```tsx
<TextInput
  label="Billing email"
  defaultValue="finance@invalid-domain"
  errorMessage="Please enter a valid email address."
  isInvalid
  isRequired
/>
```

#### Required field

Marks mandatory inputs clearly for form validation.

```tsx
<TextInput label="Account owner" placeholder="e.g. Jane Doe" isRequired />
```

#### Disabled and read-only

Use disabled to indicate an unavailable field, or read-only when values are reviewable but immutable.

```tsx
<div className="flex flex-col gap-4">
  <TextInput label="Provisioned bandwidth" defaultValue="10 Gbps" isDisabled />
  <TextInput label="Connection ID" defaultValue="cc-conn-98241-sg" isReadOnly />
</div>
```

#### Password input with toggle

Masks sensitive input characters while supporting a trailing visibility toggle action.

```tsx
<TextInput
  type="password"
  label="API Secret Key"
  placeholder="Enter your private secret"
/>
```

#### With adornments and affixes

Supports leading and trailing embellishments such as search icons, protocol prefixes, or unit indicators.

```tsx
<div className="flex flex-col gap-4">
  <TextInput
    label="Search ports"
    placeholder="Filter by port name, location, or speed..."
    startIcon={<SearchIcon />}
  />
  <TextInput
    label="Webhook URL"
    placeholder="api.example.com/webhooks"
    prefix="https://"
  />
  <TextInput label="Allocated throughput" placeholder="500" suffix="Mbps" />
</div>
```

#### Small size

Use the small size variant when embedding inputs into data tables, filter bars, or compact panels.

```tsx
<TextInput size="small" label="VLAN ID" placeholder="100" />
```

### Example usage scenarios

#### Profile details form

Pair required and optional text inputs with secondary and primary form actions.

```tsx
<form onSubmit={handleSave} className="space-y-4 max-w-md">
  <TextInput
    label="Company name"
    defaultValue="Acme Networks Ltd."
    isRequired
  />
  <TextInput
    label="Technical contact email"
    placeholder="tech@acme.com"
    description="We will send automated maintenance and outage advisories to this address."
    isRequired
  />
  <TextInput label="Department code" placeholder="e.g. NET-OPS-01" />
  <div className="flex justify-end gap-3 pt-2">
    <Button variant="secondary" type="button" onPress={handleCancel}>
      Cancel
    </Button>
    <Button variant="primary" type="submit">
      Save changes
    </Button>
  </div>
</form>
```
