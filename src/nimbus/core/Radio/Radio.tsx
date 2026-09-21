// @ts-nocheck
import type { AriaRadioProps } from 'react-aria';
import type { RadioGroupState } from 'react-stately';
import React from 'react';
import { VisuallyHidden, mergeProps, useFocusRing, useHover, usePress, useRadio } from 'react-aria';
import cx from 'classnames';
import styles from './Radio.module.scss';
import { RadioGroup } from './RadioGroup';
import { RadioContext } from './RadioGroupStateProvider';
import { RadioGroupProvider } from './GroupProvider';

interface RadioProps extends Omit<AriaRadioProps, 'isDisabled'> {
  /** Whether the input is disabled. */
  disabled?: boolean;
  /**
   * Custom class names to add to underlying DOM elements for styling.
   * @selector `radio` controls Radio Root element
   * @selector `indicator` controls circle indicator element;
   * @selector `label` controls label element;
   * @selector `hint` controls hint `<span>` element;
   * @selector `labelContainer` controls label container `<div>` element;
   */
  classes?: {
    radio?: string;
    indicator?: string;
    label?: string;
    hint?: string;
    labelContainer?: string;
  };
  /** Data attribute for E2E testing purposes. */
  'data-testid'?: string;
  /* A text description for single Radio. */
  hint?: string;
}

/**
 * Radio component representing a single radio button.
 */
export function Radio(props: Readonly<RadioProps>) {
  const { children, disabled, classes, autoFocus, hint } = props;
  const ref = React.useRef(null);
  const state = React.useContext(RadioContext) as RadioGroupState;

  if (!state) {
    throw new Error('Radio must be wrapped by Radio.Group or Radio.GroupProvider');
  }

  const { isDisabled, isSelected, inputProps } = useRadio(
    { ...props, isDisabled: disabled },
    state,
    ref
  );

  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { pressProps, isPressed } = usePress({ isDisabled, ref });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

  return (
    /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
    <label
      {...mergeProps(pressProps, hoverProps, focusProps)}
      className={cx(styles.radio, classes?.radio)}
      data-selected={isSelected}
      data-disabled={isDisabled}
      data-invalid={state.isInvalid}
      data-required={state.isRequired}
      data-hovered={isHovered}
      data-focused={isFocusVisible}
      data-pressed={isPressed}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, hoverProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <svg
        className={cx(styles.indicator, classes?.indicator)}
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <g>{isSelected ? <circle cx="50%" cy="50%" /> : null}</g>
      </svg>
      <div className={cx(styles.labelContainer, classes?.labelContainer)}>
        {children && <div className={cx(styles.label, classes?.label)}>{children}</div>}
        {hint && <span className={cx(styles.hint, classes?.hint)}>{hint}</span>}
      </div>
    </label>
  );
}

Radio.GroupProvider = RadioGroupProvider;
Radio.Group = RadioGroup;
Radio.displayName = 'Radio';
