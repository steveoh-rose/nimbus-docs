// @ts-nocheck
import type { ElementType, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type {
  AriaButtonProps,
  FocusProps,
  HoverProps,
  PressEvent as ReactAriaPressEvent,
} from 'react-aria';
import type { DesignTokenColor } from '@nimbus/utils/design-token-helpers';
import type { NimbusDataAttributeProps } from '@nimbus/utils';

import React, { useRef, forwardRef, Children, useCallback } from 'react';
import { useButton, useFocusRing, useHover } from 'react-aria';
import { mergeRefs, mergeProps } from '@react-aria/utils';
import { Spinner } from '@nimbus/core';
import { useDataAttributes } from '@nimbus/utils';

import { omit } from 'lodash-es';
import cx from 'classnames';
import { ButtonContext, useContextProps } from 'react-aria-components';
import styles from './Button.module.scss';

export type PressEvent = { stopPropagation: () => void } & ReactAriaPressEvent;

/**
 * Required to Omit the ButtonLinkProps on the AriaButtonProps to make it play nice with the "as" prop.
 * We removed "elementType" as well because the as prop now lets us do this automatically.
 */
type CustomProps = {
  classes?: {
    root?: string;
    text?: string;
  };
  /**
   * Predefined size value
   * @default "lg"
   * */
  size?: 'lg' | 'sm';
  /**
   * Set the radius of the button to a rounded variation.
   * @default false
   */
  rounded?: boolean;
  /**
   * Sets button width to 100% of parent element
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Whether the button is disabled.
   * @extends jsdoc from AriaTextFieldProps[value]
   */
  disabled?: AriaButtonProps['isDisabled'];
  /**
   * Indicate loading state
   */
  loading?: boolean;
  /**
   * Label used to control text of loading button.
   */
  loadingText?: string;
  /**
   * Data attribute for E2E testing purposes.
   */
  'data-testid'?: string;
  /** Handler that is called when the press is released over the target. */
  onPress?: (event: PressEvent) => void;
} & Omit<
  AriaButtonProps,
  'elementType' | 'isDisabled' | 'href' | 'target' | 'rel' | 'onClick' | 'onPress'
>;

export type VariantProps =
  | {
      /**
       * The variant to use.
       * @default 'primary'
       */
      variant?: 'primary' | 'secondary' | 'subtle' | 'outline' | 'ghost' | 'negative';
    }
  | {
      variant?: 'brand';
      /**
       * A colour token that is acceptable by the brand.
       * This colour will become the background color for the button.
       * @default 'accent-bright-2'
       * @type DesignTokenColor
       */
      brandBgColor?: DesignTokenColor;
      /**
       * A colour token that is acceptable by the brand.
       * This colour will become the text color for the button.
       * Console usually provides light colours
       * @default 'text-100'
       * @type DesignTokenColor
       */
      brandTextColor?: DesignTokenColor;
    };

type PolomorphicProps<E extends ElementType = 'button'> = {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   * @default 'button'
   */
  as?: E;
};

export type ButtonProps<E extends ElementType> = Omit<
  React.ComponentProps<E>,
  keyof CustomProps & VariantProps
> &
  CustomProps &
  VariantProps &
  HoverProps &
  FocusProps &
  PolomorphicProps<E>;

function isTextNode(node) {
  return typeof node === 'string' || typeof node === 'number';
}

function isLink(as: unknown, href?: string, to?: string) {
  return as === 'a' || !!href || !!to;
}

export function PolymorphicButton<E extends ElementType = 'button'>(
  initialProps: ButtonProps<E>,
  initialForwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
  /**
   * Hook into context to make our custom button compatible with React Aria Components
   */
  const [props, forwardedRef] = useContextProps(initialProps, initialForwardedRef, ButtonContext);

  const {
    className,
    classes,
    children,
    variant = 'primary',
    size = 'lg',
    rounded = 'false',
    loading,
    loadingText,
    disabled,
    fullWidth,
    brandBgColor = 'accent-bright-1-300',
    brandTextColor = 'text-100',
    as = 'button',
    onPress,
    isDisabled,
    ...rest
  } = props;

  const ref = useRef<HTMLButtonElement>(null);
  const Element = as;
  /**
   * Restore "standard" click event propagation behaviour
   *
   * React Aria disables propagation by default. This was overriden in Nimbus as it interferes with tracking.
   * However, because React Aria `PressEvent` does not expose a `stopPropagation` method, it became impossible to stop
   * propagation of press events once it had been continued inside this component. This enables event propagation by
   * default, and monkey patches a `stopPropagation` method onto the press event, so we can have full control over
   * propagation in our event handler.
   */
  const handlePress = useCallback(
    (e: ReactAriaPressEvent) => {
      const event = e as PressEvent;
      let isStopped = false;

      event.stopPropagation = () => {
        isStopped = true;
      };

      onPress?.(event);

      if (!isStopped) {
        event.continuePropagation();
      }
    },
    [onPress]
  );

  /**
   * Sets up the main interactions
   */
  const { buttonProps, isPressed } = useButton(
    {
      elementType: as,
      isDisabled: loading || disabled || isDisabled,
      ...props,
      onPress: handlePress,
    },
    ref
  );

  const linkOrButtonProps = isLink(as, props.href, props.to)
    ? omit(buttonProps, ['role', 'tabIndex'])
    : buttonProps;

  /**
   * Controls the hover events.
   */
  const { hoverProps, isHovered } = useHover({
    isDisabled: loading ?? disabled ?? isDisabled,
    ...props,
  });

  /**
   * Allows us to use focus rings when native focus is used.
   */
  const { focusProps, isFocusVisible } = useFocusRing(props);

  /**
   * Set up data shared nimbus-ui data attributes.
   */
  const dataAttributeProps = useDataAttributes(props as NimbusDataAttributeProps);

  /**
   * Detect if there is a text node so we can style the button as an icon button.
   */
  const buttonChildren = Children.toArray(children);
  const hasTextNode = buttonChildren.some(isTextNode);

  return (
    <Element
      className={cx(styles.button, classes?.root, className)}
      ref={mergeRefs(forwardedRef, ref) as React.RefObject<HTMLButtonElement>}
      data-pressed={(!loading && isPressed) || undefined}
      data-hover={(!loading && isHovered) || undefined}
      data-focus-visible={isFocusVisible || undefined}
      data-disabled={disabled || isDisabled || undefined}
      data-loading={loading || undefined}
      data-variant={variant}
      data-brand-color={variant.includes('brand') ? brandBgColor : undefined}
      data-brand-text-color={variant.includes('brand') ? brandTextColor : undefined}
      data-size={size}
      data-rounded={rounded}
      data-full-width={fullWidth}
      data-text-node={loading && !loadingText ? false : hasTextNode}
      {...mergeProps(rest, linkOrButtonProps, hoverProps, focusProps)}
      {...dataAttributeProps}
    >
      {loading ? (
        <>
          <Spinner
            aria-label={loadingText ?? 'loading...'}
            size="sm"
            onDark={variant.includes('primary') || variant.includes('brand')}
            classes={{ circleStroke: 'button-stroke-color' }}
          />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Element>
  );
}

/**
 * ForwardRef has enables us to pass a custom Ref to the button.
 * Allowing the user to take advatange of focus capabilities and
 * side effects.
 */

const _Button = forwardRef(PolymorphicButton) as <E extends ElementType = 'button'>(
  props: PropsWithoutRef<Omit<ButtonProps<E>, 'onClick'>> &
    VariantProps &
    RefAttributes<HTMLButtonElement> & { ref?: React.RefObject<HTMLElement> } & PolomorphicProps<E>
) => React.ReactElement<
  ForwardRefExoticComponent<ButtonProps<E> & React.RefAttributes<HTMLButtonElement>>
>;

export { _Button as Button };
