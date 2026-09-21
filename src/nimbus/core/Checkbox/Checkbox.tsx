// @ts-nocheck
import type { AriaCheckboxProps } from 'react-aria';

import React, { ReactNode, useRef } from 'react';
import { useToggleState } from 'react-stately';
import {
  useCheckbox,
  useFocusRing,
  useHover,
  mergeProps,
  VisuallyHidden,
  usePress,
} from 'react-aria';
import { Check, Subtract } from '@nimbus/icons';
import cx from 'classnames';
import { NimbusDataAttributeProps, useDataAttributes } from '@nimbus/utils';
import styles from './Checkbox.module.scss';

type CustomProps = {
  classes?: {
    root?: string;
    indicator?: string;
    labelContainer?: string;
    label?: string;
    hint?: string;
  };
  /**
   * Indeterminism is presentational only.
   * The indeterminate visual representation remains regardless of user interaction.
   * @selector [data-indeterminate]
   */
  indeterminate?: AriaCheckboxProps['isIndeterminate'];
  /**
   * Whether the checkbox is disabled.
   * @selector [data-disabled]
   */
  disabled?: AriaCheckboxProps['isDisabled'];
  /**
   * Whether the checkbox can be selected but not changed by the user.
   * @selector [data-readonly]
   */
  readonly?: AriaCheckboxProps['isReadOnly'];
  /**
   * Whether the checkbox is in an invalid state
   * @selector [data-invalid]
   */
  invalid?: AriaCheckboxProps['isInvalid'];
  /*
   * A text description for single checkbox.
   */
  hint?: ReactNode;
  /**
   * id for E2E testing purposes
   */
  'data-testid'?: string;
};

export type CheckboxProps = CustomProps &
  Omit<
    AriaCheckboxProps,
    'isDisabled' | 'isReadOnly' | 'isInvalid' | 'isRequired' | 'isIndeterminate' | 'validationState'
  >;

export function Checkbox(props: CheckboxProps) {
  const { disabled, readonly, invalid, indeterminate, hint, classes, children } = props;

  const ref = useRef<HTMLInputElement>(null);

  const { isFocusVisible, focusProps } = useFocusRing(props);
  const { isHovered, hoverProps } = useHover({ isDisabled: disabled });
  const { isPressed, pressProps } = usePress({ isDisabled: disabled });

  const {
    isSelected: selected,
    setSelected,
    toggle,
  } = useToggleState({
    isDisabled: disabled,
    isReadOnly: readonly,
    ...props,
  });

  const { inputProps, isSelected } = useCheckbox(
    {
      isDisabled: disabled,
      isReadOnly: readonly,
      isIndeterminate: indeterminate,
      isInvalid: invalid,
      ...props,
    },
    { isSelected: indeterminate || selected, setSelected, toggle },
    ref
  );

  /**
   * Set up data shared nimbus-ui data attributes
   */
  const dataAttributeProps = useDataAttributes(props as NimbusDataAttributeProps);

  const Icon = indeterminate ? Subtract : Check;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={cx(styles.root, classes?.root)}
      data-disabled={disabled}
      data-readonly={readonly}
      data-indeterminate={indeterminate || undefined}
      data-invalid={invalid || undefined}
      data-selected={isSelected || undefined}
      data-hovered={isHovered || undefined}
      data-pressed={isPressed || undefined}
      data-focused={isFocusVisible || undefined}
      {...mergeProps(hoverProps, pressProps, focusProps)}
      {...dataAttributeProps}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, hoverProps, pressProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <span className={cx(styles.indicator, classes?.indicator)}>
        {isSelected ? <Icon color={invalid ? 'error-400' : 'success-100'} /> : null}
      </span>
      <span className={cx(styles.labelContainer, classes?.labelContainer)}>
        {children && <span className={cx(styles.label, classes?.label)}>{children}</span>}
        {children && hint && <span className={cx(styles.hint, classes?.hint)}>{hint}</span>}
      </span>
    </label>
  );
}
