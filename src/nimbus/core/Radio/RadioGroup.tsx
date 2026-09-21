// @ts-nocheck
import type { LabelAriaProps, Orientation } from 'react-aria';
import type { PropsWithChildren } from 'react';
import type { RadioGroupState } from 'react-stately';
import React from 'react';
import { useRadioGroup } from 'react-aria';
import cx from 'classnames';
import { Label } from '@nimbus/core/Label/Label';
import styles from './Radio.module.scss';
import {
  RadioContext,
  RadioGroupStateProvider,
  RadioGroupStateProps,
} from './RadioGroupStateProvider';

type RenderLabel = ({
  labelProps,
  required,
}: {
  labelProps: LabelAriaProps;
  required?: boolean;
}) => React.ReactNode;

interface RadioGroupProps extends RadioGroupStateProps {
  /**
   * The axis the Radio Button(s) should align with.
   * @default 'vertical'
   */
  orientation?: Orientation;
  /* A description for the field. Provides a hint such as specific requirements for what to choose. */
  hint?: React.ReactNode;
  /**
   * The content to display as the label.
   *
   * Optional prop for customizing labels. Can be a React node or a function
   * that receives `labelProps` and an optional `required` boolean to dynamically generate label content.
   */
  label?: React.ReactNode | RenderLabel;
  /** Data attribute for E2E testing purposes. */
  'data-testid'?: string;
  /**
   * Custom class names to add to underlying DOM elements for styling.
   * @selector `root` controls `Radio.Group` root element
   * @selector `group` controls `div` surrounding the radios element
   * @selector `label` controls label element;
   * @selector `hint` controls hint `<span>` element;
   */
  classes?: {
    root?: string;
    group?: string;
    label?: string;
    hint?: string;
  };
}

const RadioGroupContent = (props: PropsWithChildren<RadioGroupProps>) => {
  const { children, label: labelRenderer, hint, required, invalid, classes } = props;
  const state = React.useContext(RadioContext) as RadioGroupState;
  const { radioGroupProps, labelProps, descriptionProps } = useRadioGroup(props, state);
  const enhancedLabelProps = { labelProps, required };

  return (
    <div className={cx(styles.root, classes?.root)}>
      {labelRenderer && (
        <span className={cx(styles.groupLabel, classes?.label)}>
          {typeof labelRenderer === 'function' ? (
            labelRenderer(enhancedLabelProps)
          ) : (
            <Label {...labelProps} required={required}>
              {labelRenderer}
            </Label>
          )}
        </span>
      )}
      <div {...radioGroupProps} className={cx(styles.group, classes?.group)}>
        {children}
      </div>

      {hint && (
        <span
          {...descriptionProps}
          className={cx(styles.hint, invalid && styles?.error, classes?.hint)}
        >
          {hint}
        </span>
      )}
    </div>
  );
};

export function RadioGroup(props: PropsWithChildren<RadioGroupProps>) {
  const { children } = props;
  return (
    <RadioGroupStateProvider {...props}>
      <RadioGroupContent {...props}>{children}</RadioGroupContent>
    </RadioGroupStateProvider>
  );
}

RadioGroup.displayName = 'Radio.Group';
