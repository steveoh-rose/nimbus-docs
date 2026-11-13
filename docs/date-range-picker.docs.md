---
component_name: DateRangePicker
purpose: Allow users to select or enter a continuous range of dates with start and end boundaries via segmented inputs or an interactive range calendar popover.
primary_user_action: Enter start and end dates using segmented text inputs or select a date range from a calendar popover
key_inputs: Mouse, touch, keyboard (Arrow keys to adjust segment values or select range in calendar grid, Tab to cycle start/end segments, Enter/Space to select)
recommended_when: Users need to specify a bounded time span with distinct start and end dates (such as reporting intervals, billing periods, or booking durations)
recommended_not_when: Users only need to pick a single standalone date (use DatePicker), enter historical single dates like birthdates, or choose predefined relative intervals (use Select or RadioGroup)
---

# DateRangePicker

## Overview

A DateRangePicker combines two segmented editable date fields (start and end) with an expandable range calendar popover, enabling users to enter or adjust a continuous date interval.

## Preview

A DateRangePicker includes a persistent label, grouped start and end date inputs separated by a range dash, an embedded calendar trigger button, and an expandable popover displaying an interactive range calendar for click-and-drag or two-click date selection.

## Usage Guidance

### Tips

- Always provide a clear, visible label indicating what time span the range represents (e.g., "Telemetry reporting period", "Billing statement range").
- Ensure start and end inputs are visually distinct while clearly associated under the same group-level label.
- The end date must always be on or after the start date; prevent inverted ranges automatically or provide immediate inline validation.
- Support both input methods equally: keyboard-oriented users prefer typing directly into localized segments, while visual planners benefit from seeing highlighted multi-week spans in the calendar popover.
- If your application has common timeframes (e.g., "Last 7 days", "Last 30 days", "Month to date"), provide quick-select presets alongside or above the DateRangePicker.
- Define clear maximum span limits (e.g., "Maximum 90 days") when querying large datasets to prevent query timeouts and performance degradation.

### When to use

- Filtering telemetry metrics, NetFlow logs, or audit records over a specific historical timeframe.
- Generating invoices, billing summaries, or usage reports between two dates.
- Scheduling multi-day maintenance or scheduled network downtime windows.

### When to use something else

- **DatePicker:** When selecting a single point in time or milestone date (e.g., provisioning date, contract start date).
- **Select or RadioGroup:** When users only need to choose from fixed relative timeframes (e.g., "Today", "Last 7 days", "Previous month") without needing custom date bounds.
- **TimeField:** When selecting time intervals within a single day without date context.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing DateRangePicker.

- Position labels above the range input fields to optimize scannability, reading flow, and localization layout flexibility.
- Date segments automatically adapt their order and separator characters based on the user's locale (e.g., `MM/DD/YYYY` in the US vs. `DD/MM/YYYY` in the UK).
- Ensure helper text or validation messages clearly convey span limits, blackout dates, or notice requirements.

### Content

- Write concise, sentence-case labels (e.g., "Report timeframe", "Maintenance outage window").
- Use helper descriptions for business constraints (e.g., "Historical logs are available for up to 90 consecutive days").
- Provide actionable error messages when selected ranges exceed allowable spans or have inverted dates.

### Hierarchy

- **Granularity:** Day (default) for standard calendar ranges; minute or second when pairing calendar ranges with specific time-of-day bounds.
- **Size:** Regular (default) for standard form flows and modal dialogs. Small for compact data tables, inspector panels, or dense filter toolbars.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Always provide a visible, persistent label describing what the range represents.</li>
      <li>Enforce that the end date cannot precede the start date.</li>
      <li>Clearly indicate any minimum or maximum range constraints in helper text.</li>
      <li>Allow users to type into segments directly as an alternative to clicking the calendar popover.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use DateRangePicker when users only need to select a single date (use DatePicker).</li>
      <li>Don't hide maximum range duration rules until after form submission.</li>
      <li>Don't hardcode date format assumptions; let localized segments adapt to the user's locale.</li>
      <li>Don't leave start and end inputs without clear visual and accessible association.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Date range picker variations

#### Default

Standard date range picker with label and calendar popover trigger.

```tsx
<DateRangePicker label="Reporting period" />
```

#### With default value

Pre-populating a date range using structured start and end ISO dates.

```tsx
<DateRangePicker
  label="Audit log window"
  defaultValue={{
    start: parseDate("2024-04-01"),
    end: parseDate("2024-04-30"),
  }}
/>
```

#### With description (helper text)

Provides guidance on scheduling or reporting constraints beneath the field.

```tsx
<DateRangePicker
  label="Billing statement range"
  description="Export records for up to 90 consecutive days."
/>
```

#### With validation error

Surfaces an invalid state and error message when a selected range fails business validation rules.

```tsx
<DateRangePicker
  label="Telemetry analysis window"
  defaultValue={{
    start: parseDate("2024-05-01"),
    end: parseDate("2024-04-15"),
  }}
  errorMessage="The end date cannot be earlier than the start date."
  isInvalid
  isRequired
/>
```

#### Minimum and maximum date constraints

Restricts selectable start and end dates to a specific calendar window.

```tsx
<DateRangePicker
  label="Historical flow logs"
  minValue={parseDate("2024-01-01")}
  maxValue={parseDate("2024-06-30")}
  description="Flow logs are retained for a maximum of 180 days."
/>
```

#### Date and time range (granularity)

Includes time segment fields for precise start and end timestamp scheduling.

```tsx
<DateRangePicker
  label="Scheduled maintenance window"
  granularity="minute"
  defaultValue={{
    start: parseDateTime("2024-06-10T02:00:00"),
    end: parseDateTime("2024-06-10T06:00:00"),
  }}
/>
```

#### Disabled and read-only

Use disabled when the input is unavailable, or read-only when reviewable but immutable.

```tsx
<div className="flex flex-col gap-4">
  <DateRangePicker
    label="Contract term"
    defaultValue={{
      start: parseDate("2023-01-01"),
      end: parseDate("2024-01-01"),
    }}
    isReadOnly
  />
  <DateRangePicker
    label="Trial period"
    defaultValue={{
      start: parseDate("2024-02-01"),
      end: parseDate("2024-02-15"),
    }}
    isDisabled
  />
</div>
```

#### Small size

Use the small size variant when embedding within compact filter toolbars or dense data tables.

```tsx
<DateRangePicker size="small" label="Filter by date range" />
```

### Example usage scenarios

#### Telemetry export filter form

Combine DateRangePicker with format controls and form submit actions.

```tsx
<form onSubmit={handleExport} className="space-y-4 max-w-md">
  <DateRangePicker
    label="Export time range"
    description="Select a timeframe up to 30 days for NetFlow v9 telemetry export."
    isRequired
    value={dateRange}
    onChange={setDateRange}
    errorMessage={validationError}
    isInvalid={Boolean(validationError)}
  />
  <div className="flex justify-end gap-3 pt-2">
    <Button variant="secondary" type="button" onPress={handleReset}>
      Reset
    </Button>
    <Button variant="primary" type="submit">
      Generate export
    </Button>
  </div>
</form>
```
