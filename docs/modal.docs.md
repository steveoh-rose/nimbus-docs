---
component_name: Modal
purpose: Focus user attention on a self-contained task, form, or piece of content in a centered overlay layer above the page.
primary_user_action: Interact with modal content or form fields, then commit an action or dismiss via close button, backdrop click, or Escape key
key_inputs: Mouse, touch, keyboard (Tab to cycle focus within trap, Escape to dismiss, Space/Enter to activate actions)
recommended_when: Users need to complete a focused, short-to-medium task (such as renaming an entity, inviting a team member, or reviewing item details) without losing overall page context
recommended_not_when: Confirming irreversible destructive actions or critical system alerts (use AlertDialog), side-panel inspections (use Drawer), or simple contextual tools (use Popover)
---

# Modal

## Overview

Modals focus the user's attention on a specific task or piece of content in an overlay layer positioned above the page. When active, background interaction is disabled and focus is trapped within the dialog. Unlike an `AlertDialog`, a standard `Modal` is non-blocking and easily dismissible via a close button, clicking the backdrop, or pressing the `Escape` key.

## Preview

A Modal consists of a dimmed backdrop overlay, a centered surface container, a header with a title and close button (`ModalHeader`, `ModalTitle`, `ModalCloseButton`), a scrollable content body (`ModalBody`), and a pinned footer containing action buttons (`ModalFooter`).

## Usage Guidance

### Tips

- Modals should appear as a direct result of an intentional user action (such as clicking an "Edit", "Invite", or "Export" button); never trigger them unexpectedly or on page load.
- Standard Modals are dismissible: clicking outside on the backdrop or pressing `Escape` closes the modal without submitting changes.
- Always provide an explicit "Cancel" or "Close" button in addition to the top-corner close icon.
- Keep modal tasks focused and concise. Avoid multi-step wizards or long forms that require extensive scrolling; use a `Drawer` or a dedicated full-page route instead.
- Never stack a modal on top of another modal. If an auxiliary action is required, transition the view within the existing modal surface.

### When to use

- Short, self-contained forms (e.g., renaming a connection, creating an API key, inviting a user).
- Quick review or preview of structured content (e.g., inspecting an invoice summary or generated configuration snippet).
- Lightweight configuration settings where the parent page provides relevant visual grounding.

### When to use something else

- **AlertDialog:** When presenting urgent, critical warnings or asking for confirmation of irreversible destructive actions where accidental outside dismissal must be prevented.
- **Drawer:** For rich side-workflows, long configuration forms, faceted filters, or shopping cart summaries that benefit from keeping the underlying page visible and scrollable.
- **Popover:** For compact, non-modal contextual overlays anchored directly to a trigger element (e.g., column pickers, date selectors).
- **Dedicated Page Route:** For multi-step onboarding, deep complex workflows, or tasks that require their own shareable URL.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing Modal.

- Modals must be given an accessible title using `aria-labelledby` pointing to `ModalTitle`, or via an explicit `aria-label`.
- Keyboard focus is automatically trapped inside the modal while open, and restored to the activating trigger when closed.
- Ensure initial focus lands on the first focusable interactive element or primary input field.
- Body scroll locking is automatically enforced while the modal overlay is active.

### Content

- Write concise, sentence-case modal titles that describe the specific task (e.g., "Invite team member", "Edit port description").
- Action buttons should use specific verbs matching the task (e.g., "Send invitation", "Update settings") rather than ambiguous words like "OK".
- Position secondary/cancel actions to the left of the primary commit button in the footer.

### Hierarchy

- **Sizes:** Small (`400px`) for simple one-field inputs; Medium (`560px`, default) for standard forms; Large (`720px`) for richer reviews or preview layouts.
- **Dismissibility:** Dismissible by default via backdrop click (`isDismissable`) and the `Escape` key (`isKeyboardDismissDisabled={false}`).

### Customisation and composition

While `ModalHeader`, `ModalBody`, and `ModalFooter` provide standard layout structure and scrolling behavior, they are not strictly mandatory:

- **Omitting the Header:** When omitting `ModalHeader` and `ModalTitle` (e.g. for media previews or custom dialogs), provide an explicit `aria-label` to `<Modal>` so assistive technology can identify the dialog.
- **Omitting the Footer:** Suitable when the modal contains purely informational content, self-submitting controls, or inline actions.
- **Custom Dismiss Actions:** If omitting `ModalCloseButton` or `ModalFooter`, ensure an element with `slot="close"` or an explicit dismissal handler is present.

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Trigger modals only in response to explicit, intentional user actions.</li>
      <li>Provide clear cancel and dismiss mechanisms (close button, backdrop click, Escape key).</li>
      <li>Use action-oriented button labels in the footer (e.g., &quot;Save changes&quot;).</li>
      <li>Trap keyboard focus inside the modal and return focus to the trigger upon closing.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't automatically pop up modals unprompted or upon page load.</li>
      <li>Don't open a modal on top of an existing open modal.</li>
      <li>Don't use standard dismissible Modals for irreversible actions (use AlertDialog).</li>
      <li>Don't cram complex, multi-page workflows into a modal dialog.</li>
    </ul>
  </Dont>
</Box>

## Examples

### Modal variations

#### Default

Standard dismissible modal triggered by an action button using `ModalTrigger`.

```tsx
<ModalTrigger>
  <Button variant="secondary">Edit connection description</Button>
  <Modal>
    <ModalHeader>
      <ModalTitle>Edit connection description</ModalTitle>
      <ModalCloseButton />
    </ModalHeader>
    <ModalBody>
      <TextInput
        label="Description"
        defaultValue="Primary interconnect to AWS us-east-1"
        description="Visible to members of your organization with Network Admin access."
      />
    </ModalBody>
    <ModalFooter>
      <Button variant="secondary" slot="close">
        Cancel
      </Button>
      <Button variant="primary" slot="close">
        Save changes
      </Button>
    </ModalFooter>
  </Modal>
</ModalTrigger>
```

#### Controlled state

Manage modal open state programmatically using `isOpen` and `onOpenChange`.

```tsx
<Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
  <Dialog>
    <DialogHeader>
      <DialogTitle>Generate API token</DialogTitle>
      <DialogCloseButton />
    </DialogHeader>
    <DialogBody>
      <div className="space-y-4">
        <TextInput
          label="Token name"
          placeholder="e.g. CI/CD Deployment Bot"
          isRequired
        />
        <Select label="Expiration" defaultSelectedKey="90d">
          <SelectItem id="30d">30 days</SelectItem>
          <SelectItem id="90d">90 days</SelectItem>
          <SelectItem id="1y">1 year</SelectItem>
        </Select>
      </div>
    </DialogBody>
    <DialogFooter>
  </ModalBody>
  <ModalFooter>
      <Button variant="secondary" onPress={() => setIsModalOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" onPress={handleCreateToken}>
        Generate token
      </Button>
    </DialogFooter>
  </Dialog>
  </ModalFooter>
</Modal>
```

#### Sizes

Modals support `small` (`400px`), `medium` (`560px`, default), and `large` (`720px`) size tiers.

```tsx
<DialogTrigger>
  <Button variant="secondary">View certificate details</Button>
  <Modal size="large">
    <Dialog>
      <DialogHeader>
        <DialogTitle>TLS certificate inspection</DialogTitle>
        <DialogCloseButton />
      </DialogHeader>
      <DialogBody>
        <div className="space-y-3 font-mono text-xs bg-muted p-4 rounded border border-border">
          <div>
            <span className="text-muted-foreground">Subject:</span>{" "}
            CN=api.consoleconnect.com
          </div>
          <div>
            <span className="text-muted-foreground">Issuer:</span> DigiCert
            Global Root G2
          </div>
          <div>
            <span className="text-muted-foreground">Valid From:</span>{" "}
            2024-01-15 UTC
          </div>
          <div>
            <span className="text-muted-foreground">Expires:</span> 2025-01-15
            UTC
          </div>
          <div>
            <span className="text-muted-foreground">
              Fingerprint (SHA-256):
            </span>{" "}
            A1:B2:C3:D4:E5:F6:...
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="secondary" slot="close">
          Close
        </Button>
      </DialogFooter>
    </Dialog>
  </Modal>
</DialogTrigger>
```

### Example usage scenarios

#### Team member invite modal

Short form modal with field validation and clear submission actions.

```tsx
<DialogTrigger>
  <Button variant="primary" startIcon={<UserPlusIcon />}>
    Invite member
  </Button>
  <Modal>
    <Dialog>
      <DialogHeader>
        <DialogTitle>Invite team member</DialogTitle>
        <DialogCloseButton />
      </DialogHeader>
      <DialogBody>
        <form id="invite-form" onSubmit={handleInvite} className="space-y-4">
          <TextInput
            label="Email address"
            placeholder="colleague@company.com"
            type="email"
            isRequired
          />
          <RadioGroup label="Organization role" defaultValue="engineer">
            <Radio value="admin">
              Admin (Full billing and provisioning access)
            </Radio>
            <Radio value="engineer">
              Network Engineer (Configure ports and connections)
            </Radio>
            <Radio value="viewer">
              Viewer (Read-only access to metrics and topology)
            </Radio>
          </RadioGroup>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button variant="secondary" slot="close">
          Cancel
        </Button>
        <Button variant="primary" type="submit" form="invite-form">
          Send invitation
        </Button>
      </DialogFooter>
    </Dialog>
  </Modal>
</DialogTrigger>
```

## API reference

### DialogTrigger

| Prop           | Type                        | Default | Description                                          |
| :------------- | :-------------------------- | :------ | :--------------------------------------------------- |
| `children`     | `React.ReactNode`           | —       | The trigger button and Modal dialog pair.            |
| `isOpen`       | `boolean`                   | —       | Whether the modal is open by default (controlled).   |
| `defaultOpen`  | `boolean`                   | —       | Whether the modal is open by default (uncontrolled). |
| `onOpenChange` | `(isOpen: boolean) => void` | —       | Handler called when the open state changes.          |

### Modal

| Prop                        | Type                             | Default    | Description                                                     |
| :-------------------------- | :------------------------------- | :--------- | :-------------------------------------------------------------- |
| `size`                      | `'small' \| 'medium' \| 'large'` | `'medium'` | Width tier of the modal container.                              |
| `isDismissable`             | `boolean`                        | `true`     | Whether clicking outside on the backdrop dismisses the modal.   |
| `isKeyboardDismissDisabled` | `boolean`                        | `false`    | Whether pressing the Escape key to close the modal is disabled. |
| `isOpen`                    | `boolean`                        | —          | Controlled open state.                                          |
| `onOpenChange`              | `(isOpen: boolean) => void`      | —          | Callback invoked when modal open state changes.                 |
