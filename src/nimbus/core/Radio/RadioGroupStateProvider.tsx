// @ts-nocheck
import type { PropsWithChildren } from 'react';
import type { RadioGroupProps as AriaRadioGroupProps, RadioGroupState } from 'react-stately';
import React from 'react';
import { useRadioGroupState } from 'react-stately';

/**
 * Context for the Radio components. It provides state information to child components.
 */
export const RadioContext = React.createContext<RadioGroupState | null>(null);

type OmittedGroupProviderProps =
  | 'isDisabled'
  | 'isInvalid'
  | 'isRequired'
  | 'isReadOnly'
  | 'description'
  | 'errorMessage'
  | 'orientation'
  | 'hint';

export interface RadioGroupStateProps extends Omit<AriaRadioGroupProps, OmittedGroupProviderProps> {
  /** Whether the input is disabled. */
  disabled?: boolean;
  /** Whether the input value is invalid. */
  invalid?: boolean;
  /** Whether user input is required on the input before form submission. */
  required?: boolean;
  /** Whether the input can be selected but not changed by the user. */
  readonly?: boolean;
}

/**
 * Provides state to Radio components.
 */
export function RadioGroupStateProvider(props: PropsWithChildren<RadioGroupStateProps>) {
  const { children, required, disabled, readonly, invalid, ...restProps } = props;
  const state = useRadioGroupState({
    isInvalid: invalid,
    isDisabled: disabled,
    isReadOnly: readonly,
    isRequired: required,
    ...restProps,
  });
  return <RadioContext.Provider value={state}>{children}</RadioContext.Provider>;
}

RadioGroupStateProvider.displayName = 'Radio.GroupStateProvider';
