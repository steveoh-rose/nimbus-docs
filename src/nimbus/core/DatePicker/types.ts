// @ts-nocheck
import React from 'react';
import { AriaLabelingProps, ValidationError } from '@react-types/shared';
import { DateValue } from 'react-aria';
import { ValidationResult } from 'react-aria-components';
import { CalendarDate, CalendarDateTime, ZonedDateTime } from '@internationalized/date';

type Granularity = 'day' | 'hour' | 'minute' | 'second';

type MappedDateValue<T> = T extends ZonedDateTime
  ? ZonedDateTime
  : T extends CalendarDateTime
  ? CalendarDateTime
  : T extends CalendarDate
  ? CalendarDate
  : never;

interface DatePickerOwnProps {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export interface DatePickerProps<T extends DateValue>
  extends DatePickerOwnProps,
    AriaLabelingProps {
  className?: string;
  id?: string;
  defaultOpen?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  maxValue?: DateValue;
  minValue?: DateValue;
  isRequired?: boolean;
  autoFocus?: boolean;
  granularity?: Granularity;
  hideTimeZone?: boolean;
  isDateUnavailable?: (date: DateValue) => boolean;
  isOpen?: boolean;
  isReadOnly?: boolean;
  name?: string;
  onOpenChange?: (isOpen: boolean) => void;
  defaultValue?: T | null;
  onChange?: (value: MappedDateValue<T> | null) => void;
  placeholderValue?: T | null;
  validate?: (value: MappedDateValue<T>) => true | ValidationError | null | undefined;
  value?: T | null;
}
