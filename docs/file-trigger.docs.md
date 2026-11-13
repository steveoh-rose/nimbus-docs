---
component_name: FileTrigger
purpose: Provide a call to action that allows users to upload one or more files from their device using the system file browser or camera.
primary_user_action: Click or press Enter/Space to open the system file picker dialog and select files
key_inputs: Mouse, touch, keyboard (Space, Enter to activate trigger)
recommended_when: Users need to select and upload documents, certificates, spreadsheets, or attachments from their local file system
recommended_not_when: Uploading a dedicated single profile avatar or company logo (use ImageUploader / AvatarUploader), or when full drag-and-drop dropzones are required (use DropZone paired with FileTrigger)
---

# FileTrigger

## Overview

A FileTrigger wraps a button or pressable element to open the native system file dialog. It serves as the upload call to action, passing selected files to an application handler.

## Preview

A FileTrigger consists of an interactive trigger control (commonly a Button or Link) paired with supporting text specifying accepted file formats and maximum file sizes. Once selected, uploaded items are rendered and managed by a companion FileAttachment component.

## Usage Guidance

### Tips

- Always accompany the file uploader with additional text that informs the user of allowable file formats, size limits, and context of use (e.g., "PDF, PNG, or JPG up to 10 MB").
- The FileTrigger component itself does not have an uploaded state; it is strictly a trigger action. An uploaded file is represented separately by a file attachment component or list.
- If an error occurs during upload (e.g., file size exceeded or unsupported format), do not render the file attachment; display an inline error message explaining the issue.
- When multiple files are allowed, indicate whether files can be uploaded simultaneously or added iteratively.
- For destructive replacements (e.g., replacing an existing TLS certificate), warn users before overwriting previous uploads.

### When to use

- When you want to provide a call to action for users to upload one or more files, such as LOA (Letter of Authorization) documents, BGP peering certificates, or network configuration exports.
- Providing an accessible button-driven fallback alongside drag-and-drop file upload regions.
- Triggering camera capture on mobile and tablet devices for identity verification documents.

### When to use something else

- **DropZone:** When you want to provide a large dashed drop target for dragging files directly from the desktop (pair with FileTrigger as the clickable action).
- **TextInput:** When file paths, URLs, or remote cloud storage links (e.g., S3 or Google Drive URLs) are accepted instead of local files.

## Usage

This section covers design best practices and React Aria accessibility requirements for implementing FileTrigger.

- Keep the trigger label action-oriented and explicit about what is being uploaded (e.g., "Upload LOA document" instead of just "Upload").
- Associate helper and constraint copy directly with the trigger via visual proximity and accessible descriptions.
- Provide immediate visual feedback (e.g., progress bar or spinner on the attachment item) as soon as file selection completes and the upload begins.

### Content

- Write concise, sentence-case trigger labels starting with an imperative verb (e.g., "Upload document", "Select files").
- List allowable file extensions in uppercase or standard notation (e.g., "PDF, DOCX, PNG").
- Specify file size caps clearly with standard binary units (e.g., "Maximum file size: 25 MB").

### Hierarchy

- **Variants:** Primary button for the main step in a dedicated upload workflow; secondary or tertiary button when uploading supporting attachments alongside a primary form.
- **Multi-file vs Single:** Configure whether the file browser allows multi-selection (`allowsMultiple`).
- **Capture Mode:** Direct mobile devices to open camera or microphone when explicit media capture is required (`defaultCamera="user"` or `"environment"`).

### Design do / don't

<Box>
  <Do>
    <ul>
      <li>Accompany the trigger with clear file size limits and supported format extensions.</li>
      <li>Display uploaded files using a companion file attachment component with clear remove/delete actions.</li>
      <li>Show an explicit error message when a file fails validation or upload fails.</li>
      <li>Provide an accessible name and keyboard activation for the underlying trigger element.</li>
    </ul>
  </Do>
  <Dont>
    <ul>
      <li>Don't use FileTrigger for single profile avatar uploads (use an image uploader with cropping).</li>
      <li>Don't assume the user knows file limits; never hide size caps until after upload failure.</li>
      <li>Don't attempt to render upload progress inside the FileTrigger button itself; display it on the attachment list item.</li>
      <li>Don't lock the UI without cancel controls during large file upload transfers.</li>
    </ul>
  </Dont>
</Box>

## Examples

### File trigger variations

#### Default

Standard file trigger wrapping a secondary button with format helper guidance.

```tsx
<div className="flex flex-col gap-2 items-start">
  <FileTrigger onSelect={(e) => console.log(e)}>
    <Button variant="secondary" startIcon={<UploadIcon />}>
      Upload document
    </Button>
  </FileTrigger>
  <span className="text-sm text-muted-foreground">
    PDF, DOCX, or PNG up to 10 MB.
  </span>
</div>
```

#### Allowing multiple files

Allows users to select and stage multiple files simultaneously in the system file picker.

```tsx
<div className="flex flex-col gap-2 items-start">
  <FileTrigger allowsMultiple onSelect={(files) => console.log(files)}>
    <Button variant="secondary" startIcon={<UploadIcon />}>
      Select files
    </Button>
  </FileTrigger>
  <span className="text-sm text-muted-foreground">
    Upload up to 5 attachments (maximum 15 MB each).
  </span>
</div>
```

#### Restricting file types

Restricts the file dialog to specific MIME types or extensions, such as TLS/SSL certificates and keys.

```tsx
<div className="flex flex-col gap-2 items-start">
  <FileTrigger
    acceptedFileTypes={[".crt", ".pem", ".key", ".cer"]}
    onSelect={(files) => console.log(files)}
  >
    <Button variant="secondary" startIcon={<LockIcon />}>
      Upload certificate
    </Button>
  </FileTrigger>
  <span className="text-sm text-muted-foreground">
    Accepts .crt, .pem, or .key files only.
  </span>
</div>
```

#### Mobile camera capture

Prompts mobile device browsers to activate camera capture directly for document scanning.

```tsx
<FileTrigger
  defaultCamera="environment"
  acceptedFileTypes={["image/*"]}
  onSelect={(files) => console.log(files)}
>
  <Button variant="secondary" startIcon={<CameraIcon />}>
    Take photo of document
  </Button>
</FileTrigger>
```

#### Custom trigger with Pressable

When using a non-React Aria component or plain DOM element as the trigger, wrap it with `<Pressable>`. Ensure the element has an interactive ARIA role and forwards keyboard activation.

```tsx
<FileTrigger onSelect={(files) => console.log(files)}>
  <Pressable>
    <span
      role="button"
      tabIndex={0}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium border rounded cursor-pointer hover:bg-muted"
    >
      Custom upload element
    </span>
  </Pressable>
</FileTrigger>
```

#### Disabled trigger

Disables the trigger when permissions are restricted or prerequisites are pending.

```tsx
<FileTrigger isDisabled>
  <Button variant="secondary" isDisabled startIcon={<UploadIcon />}>
    Upload letter of authorization
  </Button>
</FileTrigger>
```

### Example usage scenarios

#### Letter of Authorization (LOA) upload flow

Pair FileTrigger with supporting copy, validation error messaging, and companion FileAttachment cards.

```tsx
<div className="space-y-4 max-w-md">
  <div>
    <Label>Letter of Authorization (LOA)</Label>
    <p className="text-sm text-muted-foreground mt-1">
      Upload the signed LOA from your facility carrier to verify cross-connect
      provisioning.
    </p>
  </div>

  <div className="flex flex-col gap-3">
    <FileTrigger acceptedFileTypes={[".pdf"]} onSelect={handleFileSelect}>
      <Button variant="secondary" startIcon={<UploadIcon />}>
        Upload LOA (PDF)
      </Button>
    </FileTrigger>
    <span className="text-xs text-muted-foreground">
      PDF format only, maximum 10 MB.
    </span>
  </div>

  {uploadError && (
    <div className="p-3 text-sm text-destructive bg-destructive/10 rounded border border-destructive/20">
      {uploadError}
    </div>
  )}

  {uploadedFile && (
    <FileAttachment
      fileName={uploadedFile.name}
      fileSize={uploadedFile.size}
      status={uploadStatus}
      onRemove={handleRemoveFile}
    />
  )}

  <div className="flex justify-end gap-3 pt-4 border-t border-border">
    <Button
      variant="primary"
      isDisabled={!uploadedFile || uploadStatus === "uploading"}
    >
      Submit verification
    </Button>
  </div>
</div>
```
