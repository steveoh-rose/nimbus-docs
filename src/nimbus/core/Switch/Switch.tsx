// @ts-nocheck
import type { AriaSwitchProps } from 'react-aria';

import React, { useRef } from 'react';
import { useToggleState } from 'react-stately';
import { VisuallyHidden, useFocusRing, useSwitch, useId, mergeProps, useHover } from 'react-aria';

import cx from 'classnames';
import { NimbusDataAttributeProps, useDataAttributes } from '@nimbus/utils';
import styles from './Switch.module.scss';

type CustomProps = {
  /**
   * Override or extend the styles applied to the component.
   * */
  classes?: {
    container?: string;
    track?: string;
    label?: string;
    thumb?: string;
  };
  /**
   * Predefined size value
   * */
  size?: 'sm' | 'lg';
  /**
   * Whether the Switch should be selected (controlled).
   */
  selected?: AriaSwitchProps['isSelected'];
  /**
   * Whether the input is disabled.
   */
  disabled?: AriaSwitchProps['isDisabled'];
  /**
   * Whether the input can be selected but not changed by the user.
   */
  readonly?: AriaSwitchProps['isReadOnly'];
  /**
   * id for E2E testing purposes
   */
  'data-testid'?: string;
};

export type SwitchProps = CustomProps &
  Omit<AriaSwitchProps, 'isSelected' | 'isDisabled' | 'isReadOnly'>;

export const Switch = (props: SwitchProps) => {
  const {
    id,
    classes,
    size,
    selected,
    disabled,
    readonly,
    children,
    'data-testid': testId,
  } = props;

  const uuid = useId(id);
  const ref = useRef<HTMLInputElement>(null);

  const { isFocusVisible, focusProps } = useFocusRing(props);
  const { isHovered, hoverProps } = useHover({ isDisabled: disabled });

  const { isSelected, setSelected, toggle } = useToggleState({
    isSelected: selected,
    isDisabled: disabled,
    isReadOnly: readonly,
    ...props,
  });

  const { inputProps } = useSwitch(
    { isDisabled: disabled, isReadOnly: readonly, ...props },
    { isSelected, setSelected, toggle },
    ref
  );

  /**
   * Set up data shared nimbus-ui data attributes
   */
  const dataAttributeProps = useDataAttributes(props as NimbusDataAttributeProps);

  return (
    <label
      htmlFor={uuid}
      className={cx(styles.switch, classes?.container)}
      data-size={size}
      data-disabled={disabled}
      data-readonly={readonly}
      data-selected={isSelected || undefined}
      data-hovered={isHovered || undefined}
      data-focused={isFocusVisible || undefined}
      data-testid={testId ? `${testId}-label` : undefined}
      {...dataAttributeProps}
    >
      <div className={cx(styles.track, classes?.track)} {...hoverProps}>
        <VisuallyHidden>
          <input id={uuid} {...mergeProps(inputProps, hoverProps, focusProps)} ref={ref} />
        </VisuallyHidden>
        <svg className={cx(styles.thumb, classes?.thumb)} aria-hidden="true">
          <circle cx="50%" cy="50%" />
        </svg>
      </div>
      {children && <span className={cx(styles.label, classes?.label)}>{children}</span>}
    </label>
  );
};

Switch.defaultProps = {
  size: 'sm',
};
