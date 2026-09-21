// @ts-nocheck
import React from 'react';
import {
  UNSTABLE_ToastRegion as ToastRegion,
  UNSTABLE_Toast as ReactAriaToast,
  UNSTABLE_ToastContent as ReactAriaToastContent,
  type ToastProps,
  Text,
} from 'react-aria-components';
import { Button, Spinner } from '@nimbus/core';
import {
  CheckCircleOutline,
  InfoOutline,
  ReportOutline,
  WarningOutline,
  Cancel,
} from '@nimbus/assets/icons/app';
import { getGlobalQueue, queue } from './toastQueueManager';
import styles from './Toast.module.scss';

/* ************************************************* *
 * Types                                             *
 * ************************************************* */

export type ToastVariant = 'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading';
export type ToastPlacement = 'top-right' | 'bottom-right' | 'top-middle' | 'bottom-middle';

export type ToastPayload = {
  title: string;
  description?: string;
  variant?: ToastVariant;
  action?: {
    label: string;
    onPress: () => void | Promise<void>;
  };
};

export type ToasterProps = {
  placement?: ToastPlacement;
};

type ToastIconProps = {
  variant?: ToastVariant;
};

/* ************************************************* *
 * Constants & Helpers                               *
 * ************************************************* */

const ICON_MAP: Record<
  Exclude<ToastVariant, 'loading' | 'neutral'>,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  info: InfoOutline,
  success: CheckCircleOutline,
  warning: WarningOutline,
  error: ReportOutline,
};

const getSafeTransitionName = (key: React.Key): string => {
  const id = String(key);
  return typeof CSS === 'undefined' ? id.replace(/\W/g, '-') : CSS.escape(id);
};

/* ************************************************* *
 * Internals                                         *
 * ************************************************* */

const IconSlot = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.IconSlot} aria-hidden="true">
    {children}
  </div>
);

function ToastIcon({ variant = 'neutral' }: Readonly<ToastIconProps>) {
  if (variant === 'neutral') {
    return null;
  }

  if (variant === 'loading') {
    return (
      <IconSlot>
        <Spinner size="lg" />
      </IconSlot>
    );
  }

  const Icon = ICON_MAP[variant];

  if (!Icon) {
    return null;
  }

  return (
    <IconSlot>
      <Icon width={20} height={20} />
    </IconSlot>
  );
}

function Toast(props: Readonly<ToastProps<ToastPayload>>) {
  const { toast } = props;
  const { title, description, variant = 'neutral', action } = toast.content;
  const isPending = variant === 'loading';

  const handleActionPress = async () => {
    if (!action) {
      return;
    }

    try {
      await action.onPress();
    } finally {
      queue.close(toast.key);
    }
  };

  return (
    <ReactAriaToast
      {...props}
      className={styles.Toast}
      data-variant={variant}
      style={{ viewTransitionName: `toast-${getSafeTransitionName(toast.key)}` }}
    >
      <ToastIcon variant={variant} />

      <ReactAriaToastContent className={styles.ToastContent}>
        <Text slot="title">{title}</Text>
        {description && <Text slot="description">{description}</Text>}

        {action && !isPending && (
          <Button
            variant="secondary"
            size="sm"
            className={styles.action}
            onPress={handleActionPress}
          >
            {action.label}
          </Button>
        )}
      </ReactAriaToastContent>

      {!isPending && (
        <Button
          variant="subtle"
          size="sm"
          data-slot="close"
          aria-label="Close"
          classes={{ root: styles.close }}
          onPress={() => queue.close(toast.key)}
        >
          <Cancel width={14} height={14} aria-hidden />
        </Button>
      )}
    </ReactAriaToast>
  );
}

/* ************************************************* *
 * <Toaster />                                       *
 * ************************************************* */

export function Toaster({ placement = 'bottom-right' }: Readonly<ToasterProps>) {
  const activeQueue = getGlobalQueue();

  if (!activeQueue) {
    return null;
  }

  return (
    <ToastRegion queue={activeQueue} className={styles.Region} data-placement={placement}>
      {({ toast }) => <Toast toast={toast} />}
    </ToastRegion>
  );
}

export { queue };
