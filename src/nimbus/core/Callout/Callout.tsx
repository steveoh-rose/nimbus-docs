// @ts-nocheck
import React, { createContext, ReactNode, ComponentProps } from 'react';
import { Provider, Heading, useSlottedContext, ContextValue } from 'react-aria-components';
import { Button } from '@nimbus/core';
import cx from 'classnames';
import {
  CheckCircleOutline,
  InfoOutline,
  ReportOutline,
  SparklesOutline,
  WarningOutline,
} from '@nimbus/assets/icons/app';
import styles from './Callout.module.scss';

/* ************************************************* *
 * Types                                             *
 * ************************************************* */
export type CalloutIntent = 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'special';
export type CalloutVariant = 'enclosed' | 'subtle';

/**
 * Strictly restricted variants allowed inside a Callout.
 */
export type CalloutButtonVariant = 'primary' | 'outline' | 'ghost';

export type CalloutProps = {
  children: ReactNode;
  intent?: CalloutIntent;
  variant?: CalloutVariant;
  className?: string;
  'data-testid'?: string;
  'data-rac-id'?: string;
};

const CalloutContext = createContext<ContextValue<{ intent: CalloutIntent }, HTMLDivElement>>({
  intent: 'neutral',
});

/* ************************************************* *
 * Callout.Icon                                      *
 * ************************************************* */
function CalloutIcon(props: Readonly<{ children?: ReactNode; className?: string }>) {
  const { children, className } = props;
  const context = useSlottedContext(CalloutContext);
  const intent = context?.intent || 'neutral';

  const DefaultIcon = {
    neutral: InfoOutline,
    info: InfoOutline,
    success: CheckCircleOutline,
    warning: WarningOutline,
    danger: ReportOutline,
    special: SparklesOutline,
  }[intent];

  return (
    <div className={cx(styles.CalloutIcon, className)} aria-hidden="true">
      {children || <DefaultIcon />}
    </div>
  );
}

/* ************************************************* *
 * Callout.Content                                   *
 * ************************************************* */
function CalloutContent(props: Readonly<{ children: ReactNode; className?: string }>) {
  const { children, className } = props;
  return <div className={cx(styles.CalloutContent, className)}>{children}</div>;
}

/* ************************************************* *
 * Callout.Title                                     *
 * ************************************************* */
function CalloutTitle(props: Readonly<{ children: ReactNode; className?: string }>) {
  const { children, className } = props;
  return (
    <Heading level={4} className={cx(styles.CalloutTitle, className)}>
      {children}
    </Heading>
  );
}

/* ************************************************* *
 * Callout.Description                               *
 * ************************************************* */
function CalloutDescription(props: Readonly<{ children: ReactNode; className?: string }>) {
  const { children, className } = props;
  return <div className={cx(styles.CalloutDescription, className)}>{children}</div>;
}

/* ************************************************* *
 * Callout.Button (New Wrapper)                      *
 * ************************************************* */
type BaseButtonProps = Omit<ComponentProps<typeof Button>, 'variant'>;

interface CalloutButtonProps extends BaseButtonProps {
  /**
   * Only allows specific visual variants that are compliant with Callout intents.
   * @default 'primary'
   */
  variant?: CalloutButtonVariant;
}

function CalloutButton({ variant = 'primary', className, ...props }: Readonly<CalloutButtonProps>) {
  return <Button variant={variant} className={cx(styles.CalloutButton, className)} {...props} />;
}

/* ************************************************* *
 * Callout                                           *
 * ************************************************* */
function Callout(props: Readonly<CalloutProps>) {
  const {
    children,
    intent = 'neutral',
    variant = 'enclosed',
    className,
    'data-testid': dataTestId,
    'data-rac-id': dataRac,
    ...rest
  } = props;

  return (
    <Provider values={[[CalloutContext, { intent }]]}>
      <section
        className={cx(styles.Callout, className)}
        data-intent={intent}
        data-variant={variant}
        data-rac-id={dataRac}
        data-testid={dataTestId}
        {...rest}
      >
        {children}
      </section>
    </Provider>
  );
}

Callout.Icon = CalloutIcon;
Callout.Content = CalloutContent;
Callout.Title = CalloutTitle;
Callout.Description = CalloutDescription;
Callout.Button = CalloutButton;

export { Callout };
