// @ts-nocheck
import React, { PropsWithChildren } from 'react';
import { RadioGroupState } from 'react-stately';
import { useRadioGroup } from 'react-aria';
import {
  RadioContext,
  RadioGroupStateProvider,
  RadioGroupStateProps,
} from './RadioGroupStateProvider';

function RadioGroupContainer(props: PropsWithChildren<RadioGroupStateProps>) {
  const { children } = props;
  const state = React.useContext(RadioContext) as RadioGroupState;
  const { radioGroupProps } = useRadioGroup(props, state);

  return <div {...radioGroupProps}>{children}</div>;
}

export function RadioGroupProvider(props: PropsWithChildren<RadioGroupStateProps>) {
  const { children } = props;
  return (
    <RadioGroupStateProvider {...props}>
      <RadioGroupContainer {...props}>{children}</RadioGroupContainer>
    </RadioGroupStateProvider>
  );
}
