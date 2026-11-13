---
component_name: ComboBox
purpose: Allow users to search, filter, and select a value from a list of options, or optionally enter a custom value.
primary_user_action: Type keywords to filter options, navigate matching items, or input custom text
key_inputs: Mouse, touch, keyboard (Arrow keys to navigate options, Enter to select, Escape to dismiss menu)
recommended_when: Selecting from large (10+ items) or dynamic lists of options where keyword filtering speeds up discovery, or when custom input is permitted
recommended_not_when: Options are fewer than 5–7 and static (use RadioGroup or Select), or for general global site search (use SearchField)
---

# ComboBox

## Overview

A ComboBox combines a single-line text input with a filterable popover list. It enables users to quickly narrow down large or dynamically loaded sets of options by typing keywords, while optionally allowing free-form custom value entry.

## Preview

A ComboBox consists of a persistent label, a text field with an embedded dropdown chevron button, and a filterable popover menu showing matching suggestions with keyboard and pointer support.

## Usage Guidance

### Tips

- Always provide a visible, descriptive label that clearly communicates what value is expected.
- ComboBox is designed for filtering and selecting from a bounded or remote set of options—do not use it for unconstrained global or site-wide search (use `SearchField` or `TextInput` instead).
- Cap the visible popover menu to no more than 10 options displayed at a time, allowing users to scroll through remaining matches without consuming the full viewport height.
- Built-in loading states should be used when option queries fetch results asynchronously over the network.
- Enable custom values (`allowsCustomValue`) when an option list provides recommended defaults but users are also permitted to specify arbitrary values.

### When to use

- When selecting from large lists of options (such as countries, currencies, timezones, or data center locations).
- When the list of options is dynamic and changes over time (such as user accounts, API tags, or provisioned port connections).
- When users need recommendations or suggestions but must be allowed to submit a custom value.

### When to use something else

- **RadioGroup:** When there are 2 to 6 options that users should compare simultaneously at a glance.
- **Select:** When the option list is short, static (fewer than 10–12 items), and does not require typing or filtering.
- **CheckboxGroup:** When users need to select multiple values from a bounded list without text filtering.
- **SearchField / TextInput:** For global search queries, free-form text input, or queries that navigate to a search results page rather than picking a discrete field value.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing ComboBox.

- Position labels above the combobox input to optimize scannability, reading flow, and localization layout flexibility.
- Avoid clearing user input abruptly; allow users to backspace or clear the query to see the unfiltered list again.
- Display clear empty-state messaging inside the menu popover when no options match the filter query (e.g., "No matching regions found").

### Content

- Write concise, sentence-case labels (e.g., "Origin data center", "Target cloud account").
- Use placeholder text to demonstrate an example value (e.g., "Search or enter region..."), never as a replacement for the visible label.
- Ensure option labels are concise and put distinguishing keywords at the beginning of each item for rapid scanning.

### Hierarchy

- **Size:** Regular (default) for standard form flows and modal dialogs. Small for compact data tables, inspector panels, or dense filter toolbars.
- **Selection mode:** Standard selection (constrained to available items) versus custom values permitted (`allowsCustomValue`).
- **Async Loading:** Integrated loading indicator built into the trailing adornment slot while remote suggestions are fetched.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Always provide a visible, persistent label associated with the ComboBox.</li>
      <li>Use ComboBox when filtering through large (10+) or dynamic lists of options.</li>
      <li>Limit the visible popover dropdown height to roughly 8–10 items before scrolling.</li>
      <li>Use built-in loading indicators when fetching option lists asynchronously.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use ComboBox as a substitute for global site or page search.</li>
      <li>Don't use ComboBox for small lists with fewer than 5–7 options (use RadioGroup or Select).</li>
      <li>Don't use placeholder text as a replacement for a visible label.</li>
      <li>Don't leave the popover blank when no matches are found; provide an informative empty state.</li>
    </ul>
  </Dont>
</Box>

## Examples

### ComboBox variations

#### Default

Standard combobox with a filterable list of options.

```tsx
<ComboBox label="Data center location" placeholder="Select location...">
  <ComboBoxItem id="sin-01">Singapore (Equinix SG1)</ComboBoxItem>
  <ComboBoxItem id="hkg-01">Hong Kong (Mega-i)</ComboBoxItem>
  <ComboBoxItem id="lon-01">London (Telehouse North)</ComboBoxItem>
  <ComboBoxItem id="tyo-01">Tokyo (Equinix TY2)</ComboBoxItem>
  <ComboBoxItem id="syd-01">Sydney (Global Switch)</ComboBoxItem>
  <ComboBoxItem id="fra-01">Frankfurt (Interxion FRA1)</ComboBoxItem>
</ComboBox>
```

#### Allowing custom values

Allows users to either select an existing suggested value or submit a custom value.

```tsx
<ComboBox
  label="Autonomous System Number (ASN)"
  placeholder="Select or enter ASN..."
  description="Choose from your verified ASNs or type a private ASN (64512–65534)."
  allowsCustomValue
>
  <ComboBoxItem id="asn-64512">AS64512 (Production VPC)</ComboBoxItem>
  <ComboBoxItem id="asn-64513">AS64513 (Staging Gateway)</ComboBoxItem>
  <ComboBoxItem id="asn-64514">AS64514 (DR Hot Standby)</ComboBoxItem>
</ComboBox>
```

#### With description (helper text)

Provides additional context and selection rules beneath the field.

```tsx
<ComboBox
  label="Destination Cloud On-Ramp"
  placeholder="Search cloud provider..."
  description="Traffic will be routed over private layer 2 interconnects."
>
  <ComboBoxItem id="aws-direct">AWS Direct Connect</ComboBoxItem>
  <ComboBoxItem id="azure-express">Microsoft Azure ExpressRoute</ComboBoxItem>
  <ComboBoxItem id="gcp-interconnect">Google Cloud Interconnect</ComboBoxItem>
  <ComboBoxItem id="oracle-fast">Oracle FastConnect</ComboBoxItem>
  <ComboBoxItem id="ibm-cloud">IBM Cloud Direct Link</ComboBoxItem>
</ComboBox>
```

#### With validation error

Surfaces an invalid state and error message when a required selection is missing or invalid.

```tsx
<ComboBox
  label="Billing currency"
  placeholder="Select currency..."
  errorMessage="Please select an invoicing currency."
  isInvalid
  isRequired
>
  <ComboBoxItem id="usd">USD — United States Dollar</ComboBoxItem>
  <ComboBoxItem id="eur">EUR — Euro</ComboBoxItem>
  <ComboBoxItem id="gbp">GBP — British Pound</ComboBoxItem>
  <ComboBoxItem id="sgd">SGD — Singapore Dollar</ComboBoxItem>
</ComboBox>
```

#### Async loading state

Shows a built-in loading indicator while searching or querying remote endpoints.

```tsx
<ComboBox
  label="Peer BGP Router"
  placeholder="Searching peering devices..."
  isLoading
>
  <ComboBoxItem id="rtr-01">sg-edge-rtr-01.consoleconnect.com</ComboBoxItem>
</ComboBox>
```

#### Disabled and read-only

Use disabled when the input is unavailable, or read-only when reviewable but immutable.

```tsx
<div className="flex flex-col gap-4">
  <ComboBox label="Provisioned metro area" defaultSelectedKey="sin" isDisabled>
    <ComboBoxItem id="sin">Singapore (SIN)</ComboBoxItem>
  </ComboBox>
  <ComboBox label="Primary carrier" defaultSelectedKey="pccw" isReadOnly>
    <ComboBoxItem id="pccw">PCCW Global</ComboBoxItem>
  </ComboBox>
</div>
```

### Example usage scenarios

#### Interconnect destination configuration step

Combine ComboBox with required validation and form submit actions.

```tsx
<form onSubmit={handleContinue} className="space-y-4 max-w-md">
  <ComboBox
    label="Target metro zone"
    placeholder="Search by city, airport code, or country..."
    description="Interconnect availability depends on the selected metro facility."
    isRequired
    selectedKey={selectedMetro}
    onSelectionChange={setSelectedMetro}
    errorMessage={validationError}
    isInvalid={Boolean(validationError)}
  >
    <ComboBoxItem id="sin">Singapore, Singapore (SIN)</ComboBoxItem>
    <ComboBoxItem id="hkg">Hong Kong, SAR China (HKG)</ComboBoxItem>
    <ComboBoxItem id="tyo">Tokyo, Japan (NRT / HND)</ComboBoxItem>
    <ComboBoxItem id="syd">Sydney, Australia (SYD)</ComboBoxItem>
    <ComboBoxItem id="lon">London, United Kingdom (LHR)</ComboBoxItem>
    <ComboBoxItem id="fra">Frankfurt, Germany (FRA)</ComboBoxItem>
    <ComboBoxItem id="lax">Los Angeles, United States (LAX)</ComboBoxItem>
  </ComboBox>

  <div className="flex justify-end gap-3 pt-2">
    <Button variant="secondary" type="button" onPress={handleBack}>
      Back
    </Button>
    <Button variant="primary" type="submit">
      Continue
    </Button>
  </div>
</form>
```
