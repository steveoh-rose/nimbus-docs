// @ts-nocheck
import React, { createContext, ReactNode } from 'react';
import { useSlottedContext, ContextValue } from 'react-aria-components';
import cx from 'classnames';
import {
  CheckCircle,
  Info,
  Report,
  Warning,
  StatusDot,
  Sparkles,
} from '@nimbus/assets/icons/app';
import styles from './Badge.module.scss';

/**
 * Defines the semantic meaning and color scheme of the Badge.
 * - `neutral`: Standard badge for general information or statuses.
 * - `info`: Highlights neutral but notable system information.
 * - `success`: Indicates a completed action, active state, or positive status.
 * - `warning`: Alerts the user to a potential issue or pending state.
 * - `danger`: Communicates an error, failure, or offline status.
 * - `special`: Used for brand highlights, new features, or premium states.
 */
export type BadgeIntent = 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'special';

/**
 * Defines the structural appearance of the Badge.
 * - `solid`: Strong background color with white text. Ideal for high-contrast needs.
 * - `subtle`: Light, tinted background color with strong text. The default appearance.
 * - `plain`: Transparent background, relies solely on text color and defaults to a Dot icon.
 */
export type BadgeVariant = 'solid' | 'subtle' | 'plain';

export interface BadgeProps {
  /**
   * The content to render inside the Badge.
   * Typically composed of `<Badge.Icon>` and `<Badge.Label>`.
   */
  children: ReactNode;
  /**
   * The semantic intent of the badge, which dictates its colors and default icon.
   * - `neutral`
   * - `info`
   * - `success`
   * - `warning`
   * - `danger`
   * - `special`
   * @default 'neutral'
   */
  intent?: BadgeIntent;
  /**
   * The visual appearance style of the badge.
   * - `solid`
   * - `subtle`
   * - `plain`
   * @default 'subtle'
   */
  variant?: BadgeVariant;
  /**
   * Optional custom CSS class to apply to the root badge element.
   */
  className?: string;
  /**
   * A unique identifier for automated testing purposes.
   */
  'data-testid'?: string;
  /**
   * A unique identifier for tracking purposes.
   */
  'data-rac-id'?: string;
}

/* ************************************************* *
 * <Badge.Provider />                                *
 * ************************************************* */

const BadgeContext = createContext<
  ContextValue<{ intent: BadgeIntent; variant: BadgeVariant }, HTMLSpanElement>
>({
  intent: 'neutral',
  variant: 'subtle',
});

/* ************************************************* *
 * <Badge.Icon />                                    *
 * ************************************************* */

function BadgeIcon(props: Readonly<{ children?: ReactNode; className?: string }>) {
  const { children, className } = props;
  const context = useSlottedContext(BadgeContext);

  const intent = context?.intent || 'neutral';
  const variant = context?.variant || 'subtle';

  const SemanticIcon = {
    neutral: Info,
    info: Info,
    success: CheckCircle,
    warning: Warning,
    danger: Report,
    special: Sparkles,
  }[intent];

  // The 'plain' variant overrides the default semantic icon with a simple Dot
  const DefaultIcon = variant === 'plain' ? StatusDot : SemanticIcon;

  return (
    <span className={cx(styles.BadgeIcon, className)} aria-hidden="true">
      {children || <DefaultIcon />}
    </span>
  );
}

/* ************************************************* *
 * <Badge.Label />                                   *
 * ************************************************* */

function BadgeLabel(props: Readonly<{ children: ReactNode; className?: string }>) {
  const { children, className } = props;
  return <span className={cx(styles.BadgeLabel, className)}>{children}</span>;
}

/* ************************************************* *
 * <Badge />                                         *
 * ************************************************* */

function Badge(props: Readonly<BadgeProps>) {
  const {
    children,
    intent = 'neutral',
    variant = 'subtle',
    className,
    'data-testid': dataTestId,
    'data-rac-id': dataRacId,
  } = props;

  const contextValue = React.useMemo(() => ({ intent, variant }), [intent, variant]);

  return (
    <BadgeContext.Provider value={contextValue}>
      <div
        className={cx(styles.Badge, className)}
        data-intent={intent}
        data-variant={variant}
        data-testid={dataTestId}
        data-rac-id={dataRacId}
      >
        {children}
      </div>
    </BadgeContext.Provider>
  );
}

Badge.Icon = BadgeIcon;
Badge.Label = BadgeLabel;

export { Badge };
