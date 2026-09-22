// @ts-nocheck
import React from 'react';
import type {
  DialogTriggerProps,
  PopoverProps as ReactAriaPopoverProps,
} from 'react-aria-components';
import {
  DialogTrigger as ReactAriaDialogTrigger,
  OverlayArrow,
  Popover as ReactAriaPopover,
  Pressable,
} from 'react-aria-components';
import cx from 'classnames';
import {
  ButtonProps,
  Dialog,
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogProps,
  DialogTitle,
} from '@nimbus/core';
import styles from './Popover.module.scss';

/* ************************************************* *
 * Types                                             *
 * ************************************************* */
export type PopoverProps = ReactAriaPopoverProps & {
  /**
   * Show the popover arrow.
   */
  showArrow?: boolean;
  /**
   * Data attribute for E2E testing purposes.
   */
  'data-testid'?: string;
  /**
   * Data attribute for GTM purposes. Pass this property to add a custom id to the root element for GTM tracking.
   */
  'data-rac-id'?: string;
};

/* ************************************************* *
 * PopoverTrigger                                    *
 * ************************************************* */

export const PopoverTrigger = (props: DialogTriggerProps) => {
  const [trigger, ...rest] = React.Children.toArray(props.children);
  return (
    <ReactAriaDialogTrigger {...props}>
      <Pressable>{trigger}</Pressable>
      {rest}
    </ReactAriaDialogTrigger>
  );
};

/* ************************************************* *
 * Subcomponents                                     *
 * ************************************************* */

const PopoverHeader: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <DialogHeader {...props} className={cx(styles.header, className)}>
    {children}
  </DialogHeader>
);

const PopoverTitle: React.FC<React.HTMLProps<HTMLHeadElement>> = ({
  children,
  className,
  ...props
}) => (
  <DialogTitle slot="title" {...props} className={cx(styles.title, className)}>
    {children}
  </DialogTitle>
);

const PopoverDescription: React.FC<React.HTMLProps<HTMLHeadElement>> = ({
  children,
  className,
  ...props
}) => (
  <DialogDescription {...props} className={className}>
    {children}
  </DialogDescription>
);

const PopoverContent: React.FC<DialogProps> = ({ children, className }) => (
  <Dialog role="dialog" className={className}>
    {children}
  </Dialog>
);

const PopoverBody: React.FC<React.HTMLProps<HTMLElement>> = ({ children, className, ...props }) => (
  <DialogBody {...props} className={cx(styles.body, className)}>
    {children}
  </DialogBody>
);

const PopoverFooter: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <DialogFooter {...props} className={className}>
    {children}
  </DialogFooter>
);

const PopoverClose: React.FC<ButtonProps<'button'>> = ({ slot, ...props }) => (
  <DialogClose {...props} slot={slot} />
);

/* ************************************************* *
 * Popover                                           *
 * ************************************************* */

function Popover(props: PopoverProps) {
  const { children, showArrow = false, isNonModal = false, offset } = props;
  const popoverOffset = offset ?? (showArrow ? 10 : 8);

  return (
    <ReactAriaPopover
      {...props}
      className={styles.popover}
      offset={popoverOffset}
      isNonModal={isNonModal}
    >
      {(values) => (
        <>
          {showArrow && (
            <OverlayArrow>
              <svg
                className={styles.arrow}
                data-slot="arrow"
                width={12}
                height={12}
                viewBox="0 0 12 12"
              >
                <path d="M0 0 L6 6 L12 0" />
              </svg>
            </OverlayArrow>
          )}
          {typeof children === 'function' ? children(values) : children}
        </>
      )}
    </ReactAriaPopover>
  );
}

/* ************************************************* *
 * Attach subcomponents                              *
 * ************************************************* */

Popover.Content = PopoverContent;
Popover.Header = PopoverHeader;
Popover.Title = PopoverTitle;
Popover.Description = PopoverDescription;
Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;
Popover.Close = PopoverClose;

export { Popover };
