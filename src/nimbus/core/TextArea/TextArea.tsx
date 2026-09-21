// @ts-nocheck
import { AriaTextFieldProps, mergeProps, useHover, useFocusRing, useTextField } from 'react-aria';
import React, { forwardRef } from 'react';
import cx from 'classnames';
import { defaults } from 'lodash-es';
import { useObjectRef } from '@react-aria/utils';
import { NimbusDataAttributeProps, useDataAttributes } from '@nimbus/utils';
import styles from './TextArea.module.scss';

type CustomProps = {
  classes?: {
    root?: string;
    label?: string;
    textarea?: string;
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
   * HTML attributes to pass to the underlying input element
   */
  inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
  /**
   * HTML attributes to pass to the underlying label element
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * Resize mode for the Text Area
   */
  resize?: 'horizontal' | 'vertical' | 'both' | 'none';
};

export type TextAreaProps = CustomProps &
  Omit<
    AriaTextFieldProps,
    | 'description'
    | 'errorMessage'
    | 'isDisabled'
    | 'isRequired'
    | 'isReadOnly'
    | 'isInvalid'
    | 'validationState'
    | 'type'
  >;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      'data-testid': testid,
      labelProps: labelPropsExternal,
      inputProps: inputPropsExternal,
      ...props
    }: TextAreaProps,
    forwardedRef
  ) => {
    const { classes, label, hint, invalid, disabled, readonly, required, fullWidth, resize } =
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
        inputElementType: 'textarea',
        ...(props as AriaTextFieldProps<unknown>), // Remove type cast once types are fixed in React Aria
      },
      ref
    );

    // Use external input/label props if these have been supplied
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
        data-resize={resize}
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
        <textarea
          ref={ref}
          className={cx(styles.textarea, classes?.textarea)}
          aria-invalid={!!invalid}
          aria-required={!!required}
          {...mergeProps(inputProps, hoverProps, focusProps)}
        />
        {hint ? (
          <div
            className={cx(
              styles.hint, // styles for hint only
              classes?.hint,
              invalid && styles.error, // styles for error only
              invalid && classes?.error
            )}
            {...mergeProps(descriptionProps, errorMessageProps)}
          >
            {hint}
          </div>
        ) : null}
      </div>
    );
  }
);

TextArea.defaultProps = {
  invalid: false,
  disabled: false,
  required: false,
  readonly: false,
  autoFocus: false,
  resize: 'vertical',
};

TextArea.displayName = 'TextArea';
