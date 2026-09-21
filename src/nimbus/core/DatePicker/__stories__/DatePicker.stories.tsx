// @ts-nocheck
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  CalendarDate,
  ZonedDateTime,
  getLocalTimeZone,
  now,
  today,
  isWeekend,
} from '@internationalized/date';
import { DatePicker, DatePickerProps } from '../index';

export const Primary: StoryObj<DatePickerProps<CalendarDate>> = {
  parameters: {
    sort: 'alpha',
  },
  args: { label: 'Date' },
};

export const Granularity: StoryObj<DatePickerProps<CalendarDate>> = {
  parameters: {
    sort: 'alpha',
    controls: {
      include: 'granularity',
    },
  },
  argTypes: {
    granularity: {
      options: ['day', 'hour', 'minute', 'second'],
      control: { type: 'select' },
    },
  },
  args: { label: 'Date', granularity: 'second' },
};

const TimeZonesStory = () => {
  return <DatePicker label="Event date" defaultValue={now('Australia/Brisbane')} />;
};

export const TimeZones: StoryObj<DatePickerProps<ZonedDateTime>> = {
  render: () => <TimeZonesStory />,
  parameters: {
    sort: 'alpha',
  },
  args: { label: 'Date', granularity: 'second' },
};

export const MinimumAndMaximumValues: StoryObj<DatePickerProps<CalendarDate>> = {
  parameters: {
    sort: 'alpha',
  },
  args: {
    label: 'Date',
    minValue: today(getLocalTimeZone()),
    maxValue: today(getLocalTimeZone()).add({ months: 1 }),
    defaultValue: today(getLocalTimeZone()),
    description: 'Select a date within the next month',
  },
};

export const UnavailableDates: StoryObj<DatePickerProps<ZonedDateTime>> = {
  parameters: {
    sort: 'alpha',
  },
  args: {
    label: 'Date',
    isDateUnavailable: (date) => isWeekend(date, 'en-AU'),
    description: 'Select a weekday',
  },
};

export const Invalid: StoryObj<DatePickerProps<CalendarDate>> = {
  parameters: {
    sort: 'alpha',
  },
  args: {
    label: 'Date',
    isInvalid: true,
    errorMessage: 'Enter a valid date',
    defaultValue: today('Australia/Brisbane'),
  },
};

const meta: Meta<typeof DatePicker> = {
  title: 'nimbus-core/Date Picker',
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'alpha' },
  },
  component: DatePicker,
};

export default meta;
