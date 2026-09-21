// @ts-nocheck
import { DateValue } from 'react-aria';
import { DatePickerRenderProps } from 'react-aria-components';
import { DatePickerProps } from './types';

/**
 * DatePicker has custom and built-in validation. When a validation error is shown, we replace the description with the error message.
 * This function determines the visibility of the description, based on the custom & built-in validation.
 */
export function shouldRenderDescription<T extends DateValue>(
  isInvalid: DatePickerProps<T>['isInvalid'],
  errorMessage: DatePickerProps<T>['errorMessage'],
  description: DatePickerProps<T>['description'],
  renderProps: DatePickerRenderProps
) {
  if (!description) {
    return false;
  }

  const hasCustomError = isInvalid && errorMessage;
  const hasBuiltInError =
    renderProps.isInvalid && renderProps.state.displayValidation.validationErrors.length > 0;
  return !(hasCustomError || hasBuiltInError);
}
