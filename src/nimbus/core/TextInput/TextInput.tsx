// @ts-nocheck
import React, { forwardRef } from 'react';
import cx from 'classnames';
import { defaults } from 'lodash-es';
import { useObjectRef } from '@react-aria/utils';
import { useHover, useFocusRing, useTextField, mergeProps, AriaTextFieldProps } from 'react-aria';
import { Spinner } from '@nimbus/core';
import { NimbusDataAttributeProps, useDataAttributes } from '@nimbus/utils';
import styles from './TextInput.module.scss';

type CustomProps = {
  classes?: {
    root?: string;
    label?: string;
    input?: string;
    hint?: string;
    error?: string;
  };
  /**
   * Whether the input is full width
   */
  fullWidth?: boolean;
  /**
   * Whether the input is invalid
   */
  invalid?: boolean;
  /**
   * Whether the input is disabled.
   */
  disabled?: AriaTextFieldProps['isDisabled'];
  /**
   * Whether the input can be selected but not changed by the user.
   */
  readonly?: AriaTextFieldProps['isReadOnly'];
  /**
   * Whether user input is required on the input before form submission.
   * Often paired with the `necessityIndicator` prop to add a visual indicator to the input.
   */
  required?: AriaTextFieldProps['isRequired'];
  /**
   * A description for the field. Provides a hint such as specific requirements for what to choose.
   * @extends jsdoc from AriaTextFieldProps[description]
   */
  hint?: AriaTextFieldProps['description'] | string;
  /**
   * Use React.useState to control this prop. Needs to be used with an event handler such as `onChange`.
   * @extends jsdoc from AriaTextFieldProps[value]
   */
  value?: AriaTextFieldProps['value'];
  /**
   * @extends jsdoc from AriaTextFieldProps[autoFocus]
   */
  autoFocus?: AriaTextFieldProps['autoFocus'];
  /**
   * Data attribute for E2E testing purposes
   */
  'data-testid'?: string;
  /**
   * Indicate loading state
   */
  loading?: boolean;
  /**
   * HTML attributes to pass to the underlying input element
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * HTML attributes to pass to the underlying label element
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * The component or element to be placed inside the start of the input.
   */
  startAddon?: React.ReactNode;
  /**
   * The component or element to be placed inside the end of the input.
   * __Note:__ loading spinner will always appear before this element.
   */
  endAddon?: React.ReactNode;
};

export type TextInputProps = CustomProps &
  Omit<
    AriaTextFieldProps,
    'description' | 'errorMessage' | 'isDisabled' | 'isRequired' | 'isReadOnly' | 'validationState'
  >;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      'data-testid': testid,
      labelProps: labelPropsExternal,
      inputProps: inputPropsExternal,
      startAddon: leftAddon,
      endAddon: rightAddon,
      ...props
    }: TextInputProps,
    forwardedRef
  ) => {
    const { classes, label, hint, invalid, disabled, readonly, loading, required, fullWidth } =
      props;
    const ref = useObjectRef(forwardedRef);

    const {
      descriptionProps,
      errorMessageProps,
      labelProps: defaultLabelProps,
      inputProps: defaultInputProps,
    } = useTextField(
      {
        isInvalid: invalid,
        isDisabled: disabled,
        isReadOnly: readonly,
        isRequired: required,
        ...(props as AriaTextFieldProps<unknown>), // Remove type cast once types are fixed in React Aria
      },
      ref
    );

    const inputProps = defaults({ ...inputPropsExternal }, defaultInputProps);
    const labelProps = defaults({ ...labelPropsExternal }, defaultLabelProps);

    const { isHovered, hoverProps } = useHover({ isDisabled: disabled ?? readonly, ...props });
    const { isFocusVisible, focusProps } = useFocusRing({ isTextInput: true, ...props });

    /**
     * Set up data shared nimbus-ui data attributes
     */
    const dataAttributeProps = useDataAttributes(props as NimbusDataAttributeProps);

    return (
      <div
        className={cx(styles.root, classes?.root)}
        data-hovered={isHovered ? true : undefined}
        data-focused={isFocusVisible ? true : undefined}
        data-invalid={invalid ? true : undefined}
        data-disabled={disabled ? true : undefined}
        data-readonly={readonly ? true : undefined}
        data-required={required}
        data-testid={testid}
        data-full-width={fullWidth}
        {...dataAttributeProps}
      >
        {label && (
          <label
            className={cx(styles.label, classes?.label)}
            htmlFor={labelProps.id}
            {...mergeProps(labelProps)}
          >
            {label}
            {required && <span className={cx(styles.required)}>*</span>}
          </label>
        )}
        <div className={cx(styles.inputContainer, classes?.input)}>
          {leftAddon && <div className={styles.addon}>{leftAddon}</div>}
          <input
            ref={ref}
            className={styles.input}
            {...mergeProps(inputProps, hoverProps, focusProps)}
          />
          {loading && (
            <div className={styles.addon}>
              <Spinner size="lg" aria-label="Loading" />
            </div>
          )}
          {rightAddon && <div className={styles.addon}>{rightAddon}</div>}
        </div>
        {hint ? (
          <div
            className={cx(styles.hint, invalid && styles.error, classes?.hint)}
            {...mergeProps(descriptionProps, errorMessageProps)}
          >
            {hint}
          </div>
        ) : null}
      </div>
    );
  }
);

TextInput.defaultProps = {
  invalid: false,
  disabled: false,
  required: false,
  readonly: false,
  autoFocus: false,
};

TextInput.displayName = 'TextInput';
