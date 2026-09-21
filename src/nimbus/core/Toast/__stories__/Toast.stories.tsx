// @ts-nocheck
import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@nimbus/core';
import { ToastPayload, ToastPlacement, Toaster, ToasterProps, queue } from '../Toast';
import { ToastArgTypes } from './ToastArgTypes';

export type CombinedToastDocs = ToasterProps & ToastPayload;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ToastDocs = (props: CombinedToastDocs) => null;

/* ********************************************************** *
 * Storybook-Only Guard                                       *
 * ********************************************************** */

/**
 * Storybook renders all stories simultaneously on the "Docs" page.
 * This wrapper ensures only ONE <Toaster /> mounts to prevent the
 * CSS View Transitions API from crashing due to duplicate names.
 * This keeps the actual Toaster.tsx production component 100% clean.
 */
const StorybookToasterGuard = ({
  placement,
  viewMode,
}: {
  placement: ToastPlacement;
  viewMode: string;
}) => {
  const [isPrimary] = useState(() => {
    // If we are in isolated 'story' view, always mount it.
    if (viewMode === 'story') return true;

    // In 'docs' view, use a temporary Storybook window lock
    const win = window as any;
    if (!win.__STORYBOOK_TOASTER_LOCK__) {
      win.__STORYBOOK_TOASTER_LOCK__ = true;
      return true;
    }
    return false;
  });

  useEffect(() => {
    return () => {
      if (isPrimary) {
        const win = window as any;
        win.__STORYBOOK_TOASTER_LOCK__ = false;
      }
    };
  }, [isPrimary]);

  if (!isPrimary) return null;

  return <Toaster placement={placement} />;
};

/* ********************************************************** *
 * Meta                                                       *
 * ********************************************************** */

const meta: Meta<CombinedToastDocs> = {
  title: 'nimbus-core/Toast',
  excludeStories: ['ToastDocs'],
  component: ToastDocs,
  decorators: [
    (Story, context) => (
      <React.Fragment key={context.id}>
        <StorybookToasterGuard
          placement={context.args.placement || 'bottom-right'}
          viewMode={context.viewMode}
        />
        <Story />
      </React.Fragment>
    ),
  ],
  argTypes: {
    ...ToastArgTypes,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        transform: (code: string) => {
          // If explicit <SOURCE> tags exist, extract exactly what is between them
          const sourceTagMatch = code.match(
            /\/\*\*\s*<SOURCE>\s*\*\/\s*([\s\S]*?)\s*\/\*\*\s*<\/SOURCE>\s*\*\//
          );

          if (sourceTagMatch && sourceTagMatch[1]) {
            return sourceTagMatch[1].trim();
          }
          let cleanedCode = code.replace(
            /^{\s*render:\s*(?:\([^)]*\)\s*=>|function\s*\w*\([^)]*\)\s*\{)\s*/,
            ''
          );

          cleanedCode = cleanedCode.replace(/}\s*$/, '');

          return cleanedCode.trim();
        },
      },
    },
  },
};

export default meta;

Button.displayName = 'Button';

/* ********************************************************** *
 * Stories                                                    *
 * ********************************************************** */

type Story = StoryObj;

/**
 * The standard method for triggering a toast notification.
 * By default, toasts will automatically dismiss after 5000ms.
 */
export const Primary: StoryObj = {
  render: () => (
    <Button
      variant="secondary"
      onPress={() =>
        queue.add({ title: 'Hello, World!', description: 'This is a toast notification.' })
      }
    >
      Trigger Toast
    </Button>
  ),
};

/**
 * Toasts come in distinct semantic variants. Use these to communicate the exact
 * nature of the notification to the user without relying solely on text.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button
        variant="secondary"
        onPress={() =>
          queue.add({
            title: 'Success notification',
            description: 'Data saved successfully.',
            variant: 'success',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="secondary"
        onPress={() =>
          queue.add({
            title: 'Error notification',
            description: 'Connection failed.',
            variant: 'error',
          })
        }
      >
        Error
      </Button>
      <Button
        variant="secondary"
        onPress={() =>
          queue.add({
            title: 'Info notification',
            description: 'System update scheduled.',
            variant: 'info',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="secondary"
        onPress={() =>
          queue.add({
            title: 'Warning notification',
            description: 'Storage quota low.',
            variant: 'warning',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="secondary"
        onPress={() =>
          queue.add({
            title: 'Neutral notification',
            description: 'General informational text.',
            variant: 'neutral',
          })
        }
      >
        Neutral
      </Button>
    </div>
  ),
};

/**
 * You can provide an interactive `action` block to a toast. This is ideal for
 * "Undo" functionality or quick inline resolutions. Pressing the action button
 * will automatically close the toast after executing your callback.
 */
export const WithAction: Story = {
  render: () => (
    <Button
      variant="secondary"
      onPress={() =>
        queue.add(
          {
            title: 'Item deleted',
            description: 'The document has been removed permanently.',
            variant: 'info',
            action: {
              label: 'Undo',
              onPress: () => action('clicked')(),
            },
          },
          { timeout: 8000 }
        )
      }
    >
      Trigger Action Toast
    </Button>
  ),
};

/**
 * Calling `queue.add()` returns a unique string key for that specific toast.
 * You can use this key to update or close the toast programmatically when a
 * background task completes or fails.
 */
export const Async: Story = {
  render: () => {
    const handleAsyncAction = async () => {
      const key = queue.add({
        title: 'Uploading...',
        description: 'Please wait while we sync.',
        variant: 'loading',
      });

      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });

        queue.close(key);
        queue.add({ title: 'Uploaded successfully!', variant: 'success' });
      } catch (error) {
        queue.close(key);
        queue.add({ title: 'Upload failed', variant: 'error' });
      }
    };

    return (
      <Button variant="primary" onPress={handleAsyncAction}>
        Start Async Upload
      </Button>
    );
  },
};

/**
 * Use the `placement` prop on the root `<Toaster/>` component to control the
 * screen quadrant where notifications spawn.
 */
export const DynamicPlacements: StoryObj<{ placement: ToastPlacement }> = {
  argTypes: {
    placement: {
      control: 'select',
      options: ['top-right', 'bottom-right', 'top-middle', 'bottom-middle'],
      description: 'Changes where the Toaster mounts on the screen',
    },
  },
  args: {
    placement: 'bottom-right',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button
        variant="secondary"
        onPress={() => queue.add({ title: `Spawned at ${args.placement}` })}
      >
        Add Toast
      </Button>
    </div>
  ),
};

/**
 * Pass a `timeout` value (in milliseconds) via the second argument configuration object
 * to override the default 5000ms duration.
 */
export const CustomDelay: Story = {
  render: () => (
    <Button
      variant="secondary"
      onPress={() =>
        queue.add(
          {
            title: 'Brief notification',
            description: 'This will disappear in 2 seconds.',
            variant: 'neutral',
          },
          { timeout: 2000 }
        )
      }
    >
      Spawn 2-Second Toast
    </Button>
  ),
};

/**
 * Setting the variant to `'loading'` natively disables the auto-dismiss timeout,
 * making the toast persistent until you explicitly close it using `queue.close(key)`.
 * Only use this for loading states.
 */
export const Loading: Story = {
  render: function RenderLoading() {
    /** <SOURCE> */
    const [toastKey, setToastKey] = useState<string | null>(null);

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button
          variant="primary"
          isDisabled={!!toastKey}
          onPress={() => {
            const key = queue.add({
              title: 'Generating report...',
              description: 'This will persist until explicitly closed.',
              variant: 'loading',
            });
            setToastKey(key);
          }}
        >
          Spawn Persistent Toast
        </Button>

        <Button
          variant="secondary"
          isDisabled={!toastKey}
          onPress={() => {
            if (toastKey) {
              queue.close(toastKey);
              setToastKey(null);
            }
          }}
        >
          Dismiss Persistent Toast
        </Button>
      </div>
      /** </SOURCE> */
    );
  },
};

/**
 * Setting the timeout to `'infinity'` natively disables the auto-dismiss timeout,
 * making the toast persistent until you explicitly close it using `queue.close(key)`.
 * Use this for critical background tasks that require user blocking or waiting.
 */
export const Persistent: Story = {
  render: function RenderLoading() {
    /** <SOURCE> */
    const [toastKey, setToastKey] = useState<string | null>(null);

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button
          variant="primary"
          isDisabled={!!toastKey}
          onPress={() => {
            const key = queue.add(
              {
                title: 'Persistent toast',
                description: 'This toast will persist until explicitly closed.',
                variant: 'neutral',
              },
              { timeout: 'infinity' }
            );
            setToastKey(key);
          }}
        >
          Spawn Persistent Toast
        </Button>

        <Button
          variant="secondary"
          isDisabled={!toastKey}
          onPress={() => {
            if (toastKey) {
              queue.close(toastKey);
              setToastKey(null);
            }
          }}
        >
          Dismiss Persistent Toast
        </Button>
      </div>
      /** </SOURCE> */
    );
  },
};

export const CloseAll: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        onPress={() => {
          const newToasts = [
            { title: 'System sync started...', variant: 'loading' as const },
            { title: 'New message received', variant: 'info' as const },
            { title: 'Task completed', variant: 'success' as const },
          ];

          newToasts.forEach((toast, index) => {
            setTimeout(() => {
              queue.add(toast);
            }, index * 150);
          });
        }}
      >
        Spawn Multiple Toasts
      </Button>

      <Button variant="secondary" onPress={() => queue.clear()}>
        Dismiss all notifications
      </Button>
    </div>
  ),
};
