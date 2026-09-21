// @ts-nocheck
import React from 'react';
import cx from 'classnames';
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker as ReactAriaDatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  Text,
  FieldError,
} from 'react-aria-components';
import { DateValue } from 'react-aria';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from '@nimbus/icons';
import { useDisclosure } from '@nimbus/utils';
import { Button } from '../Button';
import styles from './DatePicker.module.scss';
import { DatePickerProps } from './types';
import { shouldRenderDescription } from './utils';

function DatePickerInner<T extends DateValue>(
  {
    description,
    isInvalid,
    errorMessage,
    className,
    label,
    isRequired,
    isDisabled,
    autoFocus,
    defaultOpen,
    defaultValue,
    granularity,
    hideTimeZone,
    id,
    isDateUnavailable,
    isReadOnly,
    isOpen,
    maxValue,
    minValue,
    name,
    onChange,
    onOpenChange,
    placeholderValue,
    validate,
    value,
    'aria-describedby': ariaDescribedby,
    'aria-details': ariaDetails,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
  }: Readonly<DatePickerProps<T>>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { isOpen: isTriggerFocused, toggle: onTriggerFocusChange } = useDisclosure();
  return (
    <ReactAriaDatePicker
      className={cx(styles.root, className)}
      {...{
        autoFocus,
        defaultOpen,
        defaultValue,
        granularity,
        hideTimeZone,
        id,
        isDateUnavailable,
        isDisabled,
        isInvalid,
        isReadOnly,
        isOpen,
        isRequired,
        maxValue,
        minValue,
        name,
        onChange,
        onOpenChange,
        placeholderValue,
        validate,
        value,
        ref,
        ariaDescribedby,
        ariaDetails,
        ariaLabel,
        ariaLabelledby,
      }}
    >
      {(renderProps) => {
        const renderDescription = shouldRenderDescription<T>(
          isInvalid,
          errorMessage,
          description,
          renderProps
        );

        return (
          <>
            {Boolean(label) && (
              <Label className={styles.label}>
                {label}
                {isRequired && (
                  <>
                    &nbsp;<span className={styles.requiredAsterisk}>*</span>
                  </>
                )}
              </Label>
            )}
            <Group className={styles.inputGroup} data-trigger-focused={isTriggerFocused}>
              <div className={styles.dateInputContainer}>
                <DateInput className={styles.dateInput}>
                  {(segment) => <DateSegment className={styles.dateSegment} segment={segment} />}
                </DateInput>
                <Button
                  variant={renderProps.isInvalid && !isDisabled ? 'negative' : 'subtle'}
                  size="sm"
                  classes={{ root: styles.popoverTrigger }}
                  onFocusChange={onTriggerFocusChange}
                >
                  <CalendarIcon />
                </Button>
              </div>
            </Group>
            <Popover className={styles.popover}>
              <Dialog className={styles.dialog}>
                <Calendar className={styles.calendar}>
                  <header className={styles.header}>
                    <Button
                      variant="subtle"
                      size="lg"
                      slot="previous"
                      classes={{ root: styles.chevronButton }}
                    >
                      <ChevronLeft />
                    </Button>
                    <Heading className={styles.heading} />
                    <Button
                      variant="subtle"
                      size="lg"
                      slot="next"
                      classes={{ root: styles.chevronButton }}
                    >
                      <ChevronRight />
                    </Button>
                  </header>
                  <CalendarGrid weekdayStyle="narrow" className={styles.calendarGrid}>
                    <CalendarGridHeader>
                      {(day) => (
                        <CalendarHeaderCell className={styles.calendarGridHeaderCell}>
                          {day}
                        </CalendarHeaderCell>
                      )}
                    </CalendarGridHeader>
                    <CalendarGridBody>
                      {(date) => <CalendarCell className={styles.calendarCell} date={date} />}
                    </CalendarGridBody>
                  </CalendarGrid>
                </Calendar>
              </Dialog>
            </Popover>
            {renderDescription && (
              <Text slot="description" className={styles.description}>
                {description}
              </Text>
            )}
            <FieldError className={styles.errorMessage}>{errorMessage}</FieldError>
          </>
        );
      }}
    </ReactAriaDatePicker>
  );
}

export const DatePicker = React.forwardRef(DatePickerInner) as <T extends DateValue>(
  props: DatePickerProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof DatePickerInner>;
