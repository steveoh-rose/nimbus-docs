---
component_name: DatePicker
purpose: Allow users to enter or select a specific date, or date and time, via segmented text input or an interactive calendar popover.
primary_user_action: Type date segments using a keyboard or select a day from a calendar popover
key_inputs: Mouse, touch, keyboard (Arrow keys to adjust segment values or navigate calendar grid, Tab to cycle segments, Enter/Space to select)
recommended_when: Users need to schedule or assign a specific calendar date or timestamp with visual calendar confirmation
recommended_not_when: Users need to select a continuous date range (use DateRangePicker), choose relative timeframes (use Select or RadioGroup), or enter well-known historical dates like birthdates without needing a calendar
---

# DatePicker

## Overview

A DatePicker combines a segmented editable date input with an expandable calendar popover, allowing users to enter a date by direct keyboard input or by selecting a date from a calendar grid.

## Preview

A DatePicker includes a persistent label, a grouped date field with localized editable segments (month, day, year), an embedded calendar trigger button, and an expandable popover displaying an interactive monthly calendar view.

## Usage Guidance

### Tips

- Always provide a clear, visible label indicating what event or timestamp the date represents (e.g., "Deployment date", "Billing effective date").
- Support both input methods equally: typing directly into the segmented fields is significantly faster for power users, while the calendar popover helps users correlate dates with days of the week.
- Set minimum and maximum date boundaries whenever past or future dates are invalid (e.g., preventing past dates when scheduling a future service migration).
- When specific dates are unavailable (such as maintenance blackout periods or non-business days), disable those dates visually within the calendar and enforce inline validation if manually typed.
- For memorable historical dates (such as Date of Birth) or dates far in the past/future, typing directly or using select dropdowns is often more convenient than navigating back through decades in a calendar popover.

### When to use

- Scheduling a future task or event (e.g., service provisioning date, maintenance window).
- Specifying a target milestone, invoice due date, or certificate expiration deadline.
- Selecting a specific date and time combination when configured with time granularity.

### When to use something else

- **DateRangePicker:** When selecting an interval with both start and end dates (e.g., billing cycles, telemetry reporting periods).
- **TextInput / Segmented Inputs:** For well-known historical dates (e.g., Date of Birth or credit card expiry) where visual calendar browsing adds unnecessary cognitive overhead.
- **Select or RadioGroup:** For predefined or relative timeframes (e.g., "Today", "Last 7 days", "Next billing period").
- **TimeField:** When users only need to specify a time of day without an associated calendar date.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing DatePicker.

- Position labels above the date field to maximize readability, scannability, and localization flexibility.
- Date segments automatically adapt their display order and separator characters to the user's locale (e.g., `MM/DD/YYYY` in the US vs. `DD/MM/YYYY` in the UK).
- Ensure helper text or validation messages clearly convey date constraints or formatting requirements.

### Content

- Write concise, sentence-case labels (e.g., "Effective start date", "Scheduled maintenance").
- Use helper descriptions for business constraints (e.g., "Must be scheduled at least 48 hours in advance") rather than explaining date formats, as the segmented input already guides format entry.
- Provide actionable error messages when selected dates fall outside allowable ranges or land on blacked-out periods.

### Hierarchy

- **Granularity:** Day (default) for standard calendar dates; minute or second when pairing calendar selection with specific time-of-day scheduling.
- **Size:** Regular (default) for standard forms and modal dialogs. Small for compact filter toolbars, data tables, or inspector sidebars.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Always provide a visible, persistent label describing what the date represents.</li>
      <li>Set minimum and maximum date boundaries when past or future dates are invalid.</li>
      <li>Allow users to type into segments directly as an alternative to clicking the calendar popover.</li>
      <li>Display clear validation error messages when typed dates fall on unavailable days.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use a calendar popover for familiar dates like Date of Birth where calendar navigation is tedious.</li>
      <li>Don't use DatePicker when users need to select a continuous date range (use DateRangePicker).</li>
      <li>Don't hardcode date format assumptions; let localized date segments adapt to the user's locale.</li>
      <li>Don't hide scheduling lead-time requirements until after the user submits the form.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Date picker variations

#### Default

Standard date picker with label and calendar popover trigger.

```tsx
<DatePicker label="Deployment date" />
```

#### With default value

Pre-populating a date picker using an ISO date representation.

```tsx
<DatePicker label="Effective date" defaultValue={parseDate("2024-04-15")} />
```

#### With description (helper text)

Provides guidance on scheduling requirements beneath the field.

```tsx
<DatePicker
  label="Maintenance start date"
  description="Changes take effect at 02:00 UTC on the selected day."
/>
```

#### With validation error

Surfaces an invalid state and error message when a selected date fails business validation rules.

```tsx
<DatePicker
  label="Connection activation date"
  defaultValue={parseDate("2024-01-10")}
  errorMessage="Selected date is in the past. Please choose a future date."
  isInvalid
  isRequired
/>
```

#### Minimum and maximum date constraints

Restricts selectable and typeable dates to a specific calendar window.

```tsx
<DatePicker
  label="Service migration date"
  minValue={parseDate("2024-05-01")}
  maxValue={parseDate("2024-08-31")}
  description="Migration window is limited to Q2 and Q3 2024."
/>
```

#### Date and time (granularity)

Includes time segment fields alongside the date segments for precise scheduling.

```tsx
<DatePicker
  label="Scheduled backup window"
  granularity="minute"
  defaultValue={parseDateTime("2024-06-01T22:30:00")}
/>
```

#### Disabled and read-only

Use disabled when the input is unavailable, or read-only when reviewable but immutable.

```tsx
<div className="flex flex-col gap-4">
  <DatePicker
    label="Contract signing date"
    defaultValue={parseDate("2023-11-20")}
    isReadOnly
  />
  <DatePicker
    label="Renewal date"
    defaultValue={parseDate("2024-11-20")}
    isDisabled
  />
</div>
```

#### Small size

Use the small size variant when embedding within compact filter toolbars or dense data tables.

```tsx
<DatePicker size="small" label="Filter by creation date" />
```

### Example usage scenarios

#### Scheduling a port migration window

Combine DatePicker with form action controls and explicit constraint validation.

```tsx
<form onSubmit={handleSchedule} className="space-y-4 max-w-md">
  <DatePicker
    label="Scheduled cutover date"
    description="Cutover requires at least 48 hours notice for carrier cross-connect verification."
    isRequired
    minValue={today}
    value={cutoverDate}
    onChange={setCutoverDate}
    errorMessage={validationError}
    isInvalid={Boolean(validationError)}
  />
  <TextInput
    label="On-call technical lead"
    placeholder="e.g. ops-lead@example.com"
    isRequired
  />
  <div className="flex justify-end gap-3 pt-2">
    <Button variant="secondary" type="button" onPress={handleCancel}>
      Cancel
    </Button>
    <Button variant="primary" type="submit">
      Confirm schedule
    </Button>
  </div>
</form>
```
