// @ts-nocheck
import React, { useRef } from 'react';
import type {
  DialogProps as ReactAriaDialogProp,
  HeadingProps,
  TextProps,
} from 'react-aria-components';
import { Dialog as ReactAriaDialog, Heading, Text } from 'react-aria-components';
import { Button, ButtonProps } from '@nimbus/core';
import { Cancel } from '@nimbus/assets/icons/app';
import cx from 'classnames';
import styles from './Dialog.module.scss';

export type DialogProps = ReactAriaDialogProp & {
  className?: string;
};

function Dialog(props: DialogProps) {
  const { className, role = 'dialog' } = props;
  return <ReactAriaDialog {...props} role={role} className={cx(styles.dialog, className)} />;
}

function DialogBody(props: Readonly<React.HTMLProps<HTMLDivElement>>) {
  const { className, children, ref } = props;
  return (
    <div data-slot="body" ref={ref} {...props} className={cx(styles.body, className)}>
      {children}
    </div>
  );
}

function DialogTitle(props: Readonly<HeadingProps>) {
  const { className } = props;
  return <Heading slot="title" {...props} className={cx(styles.title, className)} />;
}

function DialogHeader(props: Readonly<React.HTMLProps<HTMLDivElement>>) {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const { children, className } = props;

  return (
    <header slot="header" {...props} ref={headerRef} className={cx(styles.header, className)}>
      {children}
    </header>
  );
}

function DialogDescription({ className, ...props }: Readonly<TextProps>) {
  return <Text slot="description" {...props} className={cx(styles.description, className)} />;
}

function DialogFooter(props: Readonly<React.HTMLProps<HTMLDivElement>>) {
  const { className } = props;
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <footer slot="footer" {...props} ref={footerRef} className={cx(styles.footer, className)} />
  );
}

function DialogClose({
  onPress,
  isDisabled,
  autoFocus,
  id,
  'data-testid': testId,
}: ButtonProps<'button'>) {
  return (
    <Button
      id={id}
      slot="close"
      size="sm"
      variant="subtle"
      disabled={isDisabled}
      autoFocus={autoFocus}
      onPress={onPress}
      data-testid={testId}
      aria-label="Close"
      classes={{ root: styles.close }}
    >
      <Cancel />
    </Button>
  );
}

Dialog.Body = DialogBody;
Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;

export {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
};
