// @ts-nocheck
import type { PropsWithChildren } from 'react';
import type { Placement } from '@floating-ui/react';
import type { HoverEvents, PressEvents, PressHookProps } from 'react-aria';

import React, { Children } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  FloatingPortal,
  useTransitionStatus,
} from '@floating-ui/react';
import {
  mergeProps,
  usePress as useReactAriaPress,
  useHover as useReactAriaHover,
} from 'react-aria';
import cx from 'classnames';
import styles from './Tooltip.module.scss';

/**
 * ------------------------------------------------------------------------------------------------
 * Tooltip – Types
 * ------------------------------------------------------------------------------------------------
 */

export type TooltipProps = {
  /**
   * The variant of the Tooltip.
   * @default dark
   * @selector [data-variant]
   */
  variant?: 'dark' | 'light' | 'accent';
  /**
   * The default open state of the Tooltip.
   * Use this prop when you want the state to be open in an uncontrolled component.
   * @default false
   * @selector [data-state="open"]
   */
  defaultOpen?: boolean;
  /**
   * Controls the placement of the tooltip in relation to the trigger.
   * @default top
   * @selector [data-placement="top"]
   */
  placement?: Placement;
  /**
   * The controlled open state of the Tooltip.
   * Use this prop to control whether the tooltip is open or closed using your own state hook.
   */
  open?: boolean;
  /**
   * Callback function invoked when the open state changes.
   * Must use this prop to allow escape and blur events.
   * @param open
   * @returns boolean
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The delay in milliseconds before the Tooltip opens.
   * @default 750ms
   */
  delay?:
    | number
    | Partial<{
        open: number;
        close: number;
      }>;
  /**
   * The offset in pixels for positioning the Tooltip.
   * @default 10px
   */
  offset?: number;
  /**
   * Custom class names to add to underlying DOM elements for styling.
   * @selector `trigger` controls Tooltip.Trigger element
   * @selector `tooltip` controls Tooltip.Content element;
   */
  classes?: {
    trigger?: string;
    tooltip?: string;
  };
  /**
   * If true dismisses the tooltip on 'press'.
   * This doesn't work with keyboard press.
   */
  allowDismiss?: boolean;
};

export type TooltipTriggerProps = {
  /**
   * Change the default rendered `span` for the element passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
} & HoverEvents &
  PressEvents;

type ContextType = ReturnType<typeof useTooltip> | null;

type PropsWithRef = {
  propRef?: React.ForwardedRef<HTMLDivElement>;
} & React.HTMLProps<HTMLDivElement>;

type ReactElementWithRef = React.ReactElement & { ref?: React.Ref<unknown> };

/**
 * ------------------------------------------------------------------------------------------------
 * Tooltip – Context
 * ------------------------------------------------------------------------------------------------
 */

/**
 * Custom hook for managing Tooltip behavior.
 * This hook provides a set of interactions and configuration options for Tooltip components.
 */
const useTooltip = (props: TooltipProps = {}) => {
  const {
    variant = 'dark',
    defaultOpen = false,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    delay = { open: 750, close: 100 },
    placement = 'top',
    offset: offsetAmount = 10,
    classes,
    allowDismiss = false,
  } = props;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const config = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(offsetAmount), flip({ padding: 5 })],
    whileElementsMounted: autoUpdate, // anchors floating element when button is moved
    placement,
  });
  const status = useTransitionStatus(config.context);

  const hover = useHover(config.context, {
    move: false,
    enabled: controlledOpen == null,
    delay,
  });
  const focus = useFocus(config.context, { enabled: controlledOpen == null });
  const dismiss = useDismiss(config.context, {
    referencePress: allowDismiss,
  });
  const role = useRole(config.context, { role: 'tooltip' });
  const interactions = useInteractions([hover, focus, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...config,
      ...status,
      variant,
      classes,
    }),
    [open, setOpen, config, interactions, status, variant, classes]
  );
};

/**
 * Context for Tooltip state and interactions.
 * @type {React.Context<ContextType>} TooltipContext
 */
const TooltipContext = React.createContext<ContextType>(null);

/**
 * Hook for accessing the Tooltip context.
 *
 * The Tooltip context is set up by the Tooltip component. This hook allows
 * components to access the context and retrieve Tooltip-related data and functions.
 *
 * @returns {ContextType} The Tooltip context.
 * @throws Will throw an error if used outside the context of a Tooltip component.
 */
const useTooltipContext = () => {
  const context = React.useContext(TooltipContext);

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }

  return context;
};

/**
 * ------------------------------------------------------------------------------------------------
 * Tooltip – Components
 * ------------------------------------------------------------------------------------------------
 */

/**
 * Tooltip container component for displaying additional information on hover or focus.
 * @component
 */
export const Tooltip = (props: PropsWithChildren<TooltipProps>) => {
  const { children, ...options } = props;
  const tooltip = useTooltip(options);

  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>;
};

/**
 * Forwarded ref component for the trigger of the Tooltip.
 * @component
 */
const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & TooltipTriggerProps
>(function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
  const childrenRef = (children as ReactElementWithRef)?.ref;
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setReference, childrenRef, propRef]);
  const { isHovered, hoverProps } = useReactAriaHover(props);
  const { isPressed, pressProps } = useReactAriaPress(props as PressHookProps);

  /**
   * `asChild` allows the user to pass any element as the anchor.
   *  This can be any custom element as long as it has a forwardRef.
   */
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...mergeProps(hoverProps, pressProps, children.props, props),
        'data-state': context.open ? 'open' : 'closed',
        'data-hover': isHovered,
        'data-pressed': isPressed,
      })
    );
  }

  return (
    <span
      ref={ref}
      data-hover={isHovered}
      data-state={context.open ? 'open' : 'closed'}
      className={cx(styles.trigger, context?.classes?.trigger)}
      {...mergeProps(hoverProps, pressProps, context.getReferenceProps(props))}
    >
      {children}
    </span>
  );
});

/**
 * Forwarded ref component for the content of the Tooltip.
 * @component
 */
const TooltipContent = React.forwardRef<HTMLDivElement, PropsWithRef>(function TooltipContent(
  { className, ...props },
  propRef
) {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  /**
   * Stops the tooltip from rendering if there is no tooltip
   * Allows the animation out to happen.
   */
  if ((!context.open && !context.isMounted) || Children.count(props?.children) <= 0) {
    return null;
  }

  return context.isMounted ? (
    <FloatingPortal>
      <div
        className={className}
        ref={ref}
        style={{
          ...context.floatingStyles,
        }}
      >
        <div
          className={cx(styles.tooltip, context?.classes?.tooltip)}
          data-variant={context.variant}
          data-placement={context.placement}
          data-status={context.status}
          {...context.getFloatingProps(props)}
        />
      </div>
    </FloatingPortal>
  ) : null;
});

Tooltip.Content = TooltipContent;
Tooltip.Trigger = TooltipTrigger;

Tooltip.displayName = 'Tooltip';
TooltipContent.displayName = 'Tooltip.Content';
TooltipTrigger.displayName = 'Tooltip.Trigger';
