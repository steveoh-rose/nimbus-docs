---
component_name: Button
purpose: Trigger an action or event, such as submitting a form or opening a dialog.
primary_user_action: Click or keyboard activation
key_inputs: Mouse, touch, keyboard (Space, Enter)
recommended_when: Users need to complete a clear action in the interface
recommended_not_when: Navigation to another page without an action should use a link instead
---

# Button

## Overview

Buttons are elements used to trigger an action or an event such as submitting a form or opening a dialog.

## Preview

Buttons consist of a clickable area usually containing a textual label or an icon that users can click to perform an action. In addition, keyboard users may activate buttons using the Space or Enter keys.

## Usage Guidance

### Tips

- The button label should be short and indicate an action (for example: Log in).
- Use sentence case for button labels.
- When there are many actions that users can take on a page, utilise the variety of button types to provide hierarchy and visual harmony.
- Ensure the action is clear and specific before the user clicks.
- Keep buttons visually consistent with surrounding controls and layout patterns.

### When to use

- Use buttons for primary actions that change state, submit data, confirm decisions, or trigger a task.
- Use buttons when the action is immediate and the user is intentionally initiating it.
- Use button variants to communicate priority, such as primary, secondary, destructive, or subtle actions.
- Use buttons as part of flows where the user is expected to perform an action, not just navigate.

### When to use something else

- When designing navigation to another page that does not require users to perform actions, use [links](https://nimbus.consoleconnect.com/368d2f116/p/194560) instead.
- For non-actionable informational text or static labels, do not use buttons.
- For grouped option selection, use controls such as radio buttons, checkboxes, or toggles instead of buttons.

## Usage

This section explains how to use the button component in product designs and product implementation work.

### General design usage

- Place the main call-to-action in a prominent position that matches the user journey or page hierarchy.
- Keep the action label action-oriented and concise.
- Use a single primary action per context when possible; secondary actions should support rather than compete with it.
- Align button groupings with layout patterns so the next action is obvious and consistent.

### Content and labeling

- Write labels in sentence case.
- Start with a verb where possible, such as Save, Submit, Continue, Update, or Delete.
- Avoid vague labels such as Done, OK, or Click here.
- Use consistent terminology across the product to reduce cognitive load.

### Hierarchy and variants

- Use the primary button for the most important action in the current view or flow.
- Use secondary buttons for related but less critical actions.
- Reserve destructive or warning states for actions that are irreversible or high impact.
- Use subtle or tertiary button styles only when they are clearly lower emphasis and still accessible.

### Layout guidance

- Group related buttons together and keep spacing consistent.
- Place action buttons near the relevant form or content they affect.
- In forms, align the primary action with the flow direction and reduce decision fatigue.
- Avoid mixing too many equal-weight actions in a single area.

### Accessibility guidance

- Ensure the button has a clear accessible name.
- Do not rely only on colour to communicate meaning or importance.
- Maintain sufficient contrast for text and interactive states.
- Support keyboard users with standard focus states and activation via Space or Enter.
- Use disabled states only when the action is intentionally unavailable and the reason is clear.

### Design do / don't

- Do use buttons for explicit user actions.
- Do keep labels short and action-based.
- Do maintain clear hierarchy across primary and secondary actions.
- Do ensure keyboard and focus states are visible.
- Don't use buttons for navigation-only destinations.
- Don't use long or ambiguous labels.
- Don't create multiple competing primary actions in the same area.

## Examples

### Button variations

#### Primary button

Primary buttons represent the principal call-to-action on a view. Aim for one primary button per visual context to maintain clear hierarchy.

```tsx
<Button variant="primary" onPress={() => console.log("Saved")}>
  Save changes
</Button>
```

#### Secondary button

Secondary buttons provide medium visual emphasis for alternative or supporting actions, such as dismissing or cancelling.

```tsx
import { Button } from "@consoleconnect/nimbus-ui/core";

export function SecondaryButtonExample() {
  return (
    <Button variant="secondary" onPress={() => console.log("Cancelled")}>
      Cancel
    </Button>
  );
}
```

#### Tertiary / subtle button

Tertiary buttons carry low emphasis and have minimal chrome, making them ideal for repetitive actions, toolbar items, or quiet secondary options.

```tsx
import { Button } from "@consoleconnect/nimbus-ui/core";

export function TertiaryButtonExample() {
  return (
    <Button variant="tertiary" onPress={() => console.log("Dismissed")}>
      Dismiss
    </Button>
  );
}
```

#### Destructive button

Destructive buttons highlight critical, permanent, or high-risk actions such as deleting connections or revoking credentials.

```tsx
import { Button } from "@consoleconnect/nimbus-ui/core";

export function DestructiveButtonExample() {
  return (
    <Button variant="destructive" onPress={() => console.log("Deleted")}>
      Delete connection
    </Button>
  );
}
```

#### Button with icon

Icons can precede (leading) or follow (trailing) the text label to reinforce the meaning of the action.

```tsx
import { Button } from "@consoleconnect/nimbus-ui/core";
import { DownloadIcon, ArrowRightIcon } from "@consoleconnect/nimbus-assets";

export function IconButtonExamples() {
  return (
    <div className="flex gap-3">
      <Button variant="secondary" startIcon={<DownloadIcon />}>
        Export CSV
      </Button>
      <Button variant="primary" endIcon={<ArrowRightIcon />}>
        Next step
      </Button>
    </div>
  );
}
```

#### Disabled button

Disabled buttons prevent user interaction when prerequisites have not been met. Whenever possible, pair disabled states with informative inline guidance or a tooltip.

```tsx
import { Button } from "@consoleconnect/nimbus-ui/core";

export function DisabledButtonExample() {
  return (
    <Button variant="primary" isDisabled>
      Submit application
    </Button>
  );
}
```

#### Loading button

Loading states communicate that an asynchronous task is in progress, replacing or supplementing the label with a spinner and disabling further input.

```tsx
import { Button } from "@consoleconnect/nimbus-ui/core";

export function LoadingButtonExample() {
  return (
    <Button variant="primary" isLoading loadingText="Connecting...">
      Connect port
    </Button>
  );
}
```

#### Full-width action button

Full-width buttons expand across the parent container width, suitable for compact layouts, mobile viewports, or bottom sheets.

```tsx
import { Button } from "@consoleconnect/nimbus-ui/core";

export function FullWidthButtonExample() {
  return (
    <Button
      variant="primary"
      fullWidth
      onPress={() => console.log("Confirmed")}
    >
      Confirm order
    </Button>
  );
}
```

### Example usage scenarios

#### Form submission: Save changes

Position secondary actions to the left of the primary action, ensuring that keyboard tab order flows predictably into the commit action.

```tsx
<form onSubmit={handleSave} className="space-y-4">
  <div className="flex justify-end gap-3 pt-4 border-t border-border">
    <Button variant="secondary" type="button" onPress={handleCancel}>
      Cancel
    </Button>
    <Button variant="primary" type="submit" isLoading={isSubmitting}>
      Save changes
    </Button>
  </div>
</form>
```

#### Confirmation flow: Continue

Guide users through sequential multi-step wizards by pairing a subtle or secondary back action with a prominent next action.

```tsx
<div className="flex items-center justify-between">
  <Button variant="tertiary" onPress={goToPreviousStep}>
    Back
  </Button>
  <Button variant="primary" onPress={goToNextStep}>
    Continue
  </Button>
</div>
```

#### Destructive action: Delete item

Place destructive buttons next to a neutral cancel button within confirmation dialogues to prevent accidental deletions.

```tsx
<div className="flex justify-end gap-3">
  <Button variant="secondary" onPress={closeDialog}>
    Keep item
  </Button>
  <Button variant="destructive" onPress={confirmDelete}>
    Yes, delete item
  </Button>
</div>
```

#### Dialog action: Open dialog

Triggers that launch modal dialogs or drawers should use clear verbs describing the destination.

```tsx
<Button variant="secondary" onPress={() => setIsDialogOpen(true)}>
  Manage port settings
</Button>
```

#### Supporting action: Cancel or Learn more

Use tertiary variants for non-committal actions that guide users to context without taking immediate effect.

```tsx
<div className="flex items-center gap-2">
  <Button variant="primary" onPress={deployService}>
    Deploy service
  </Button>
  <Button variant="tertiary" onPress={openDocumentation}>
    Learn more
  </Button>
</div>
```

## Implementation notes

- Treat the button as a trigger control, not a navigation element.
- Pair the label with the action outcome the user expects.
- Preserve consistent spacing, interaction states, and focus treatment across surfaces.
- Ensure the component can be used in both product UI and design system contexts without changing user intent.
