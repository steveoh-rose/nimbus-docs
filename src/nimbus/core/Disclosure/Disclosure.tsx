// @ts-nocheck
import React, { useContext } from 'react';
import {
  DisclosureGroup as ReactAriaDisclosureGroup,
  Disclosure as ReactAriaDisclosure,
  DisclosurePanel as ReactAriaDisclosurePanel,
  Button,
  DisclosureGroupProps as ReactAriaDisclosureGroupProps,
  DisclosureProps as ReactAriaDisclosureProps,
  DisclosurePanelProps as ReactAriaDisclosurePanelProps,
  DisclosureStateContext,
} from 'react-aria-components';
import { ChevronDown } from '@nimbus/assets/icons/app';
import cx from 'classnames';
import styles from './Disclosure.module.scss';

/* ************************************************* *
 * Props                                             *
 * ************************************************* */
export type DisclosureVariant = 'outline' | 'enclosed' | 'subtle' | 'plain';

export type DisclosureProps = ReactAriaDisclosureProps & {
  children?: React.ReactNode;
  variant?: DisclosureVariant;
  'data-testid'?: string;
  'data-rac-id'?: string;
};

export type DisclosureIndicatorProps = {
  children?: React.ReactNode | ((state: { isExpanded: boolean }) => React.ReactNode);
  className?: string;
};

/* ************************************************* *
 * <Disclosure/>                                     *
 * ************************************************* */
export function Disclosure({
  variant = 'outline',
  children,
  className,
  ...props
}: DisclosureProps) {
  return (
    <ReactAriaDisclosure
      {...props}
      data-variant={variant}
      className={
        typeof className === 'function'
          ? (values) => cx(styles.Disclosure, className(values))
          : cx(styles.Disclosure, className)
      }
    >
      {children}
    </ReactAriaDisclosure>
  );
}

/* ************************************************* *
 * <DisclosureGroup/>                                *
 * ************************************************* */
export function DisclosureGroup({
  variant = 'enclosed',
  children,
  className,
  ...props
}: ReactAriaDisclosureGroupProps & {
  variant?: DisclosureVariant;
  'data-testid'?: string;
}) {
  return (
    <ReactAriaDisclosureGroup
      {...props}
      data-variant={variant}
      className={
        typeof className === 'function'
          ? (values) => cx(styles.DisclosureGroup, className(values))
          : cx(styles.DisclosureGroup, className)
      }
    >
      {children}
    </ReactAriaDisclosureGroup>
  );
}

/* ************************************************* *
 * <Disclosure.Header/>                              *
 * ************************************************* */
Disclosure.Header = function Trigger({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button slot="trigger" {...props} className={cx(styles.DisclosureHeader, className)}>
      {children}
    </Button>
  );
};

/* ************************************************* *
 * <Disclosure.Indicator/>                           *
 * ************************************************* */
Disclosure.Indicator = function Indicator({ children, className }: DisclosureIndicatorProps) {
  const context = useContext(DisclosureStateContext);

  if (!context) {
    return null;
  }

  const { isExpanded } = context;

  let result: React.ReactNode;

  if (typeof children === 'function') {
    result = children({ isExpanded });
  } else if (children) {
    result = children;
  } else {
    result = (
      <ChevronDown
        data-slot="icon"
        width={20}
        height={20}
        className={className}
        style={{
          transition: 'transform 0.2s',
          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      />
    );
  }

  // Casting the final result to ReactElement satisfies the "JSX Component"
  // requirement without needing useless fragments or wrapper divs.
  return result as React.ReactElement;
};
/* ************************************************* *
 * <Disclosure.Panel/>                               *
 * ************************************************* */
Disclosure.Panel = function Panel({
  children,
  className,
  ...props
}: ReactAriaDisclosurePanelProps) {
  return (
    <ReactAriaDisclosurePanel
      {...props}
      className={
        typeof className === 'function'
          ? (values) => cx(styles.DisclosurePanel, className(values))
          : cx(styles.DisclosurePanel, className)
      }
    >
      <div className={styles.container}>{children}</div>
    </ReactAriaDisclosurePanel>
  );
};
