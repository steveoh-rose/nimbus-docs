// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

const PROPS_LABEL = '⚛️ Props';
const EVENTS_LABEL = 'Events';
const FORMS_LABEL = 'HTML Forms';
const ACCESSIBILITY_LABEL = 'Accessibility';
const TESTING_LABEL = 'Testing';
const STYLING_API_LABEL = 'Styling';

const CheckboxArgTypes: ArgTypes = {
  invalid: {
    control: 'boolean',
    table: {
      category: PROPS_LABEL,
    },
  },
  disabled: {
    control: 'boolean',
    table: {
      category: PROPS_LABEL,
    },
  },
  readonly: {
    control: 'boolean',
    table: {
      category: PROPS_LABEL,
    },
  },
  isSelected: {
    control: 'boolean',
    table: {
      category: PROPS_LABEL,
    },
  },
  indeterminate: {
    control: 'boolean',
    table: {
      category: PROPS_LABEL,
    },
  },
  hint: {
    control: { type: 'text' },
    table: {
      category: PROPS_LABEL,
    },
  },
  autoFocus: {
    table: {
      category: PROPS_LABEL,
    },
  },
  defaultSelected: {
    control: 'boolean',
    table: {
      category: PROPS_LABEL,
    },
  },
  children: {
    table: {
      category: PROPS_LABEL,
    },
  },
  onChange: {
    table: {
      category: EVENTS_LABEL,
    },
  },
  onBlur: {
    table: {
      category: EVENTS_LABEL,
    },
  },
  onFocus: {
    table: {
      category: EVENTS_LABEL,
    },
  },
  onFocusChange: {
    table: {
      category: EVENTS_LABEL,
    },
  },
  onKeyDown: {
    table: {
      category: EVENTS_LABEL,
    },
  },
  onKeyUp: {
    table: {
      category: EVENTS_LABEL,
    },
  },
  id: {
    control: { type: 'text' },
    table: {
      category: FORMS_LABEL,
    },
  },
  value: {
    control: { type: 'text' },
    table: {
      category: FORMS_LABEL,
    },
  },
  name: {
    control: { type: 'text' },
    table: {
      category: FORMS_LABEL,
    },
  },
  excludeFromTabOrder: {
    control: { type: 'text' },
    table: {
      category: FORMS_LABEL,
    },
  },
  'data-testid': {
    control: { type: 'text' },
    table: {
      category: TESTING_LABEL,
    },
  },
  classes: {
    control: { type: 'text' },
    table: {
      category: STYLING_API_LABEL,
    },
  },
  'aria-controls': {
    control: { type: 'text' },
    table: {
      category: ACCESSIBILITY_LABEL,
    },
  },
  'aria-details': {
    control: { type: 'text' },
    table: {
      category: ACCESSIBILITY_LABEL,
    },
  },
  'aria-describedby': {
    control: { type: 'text' },
    table: {
      category: ACCESSIBILITY_LABEL,
    },
  },
  'aria-errormessage': {
    control: { type: 'text' },
    table: {
      category: ACCESSIBILITY_LABEL,
    },
  },
  'aria-label': {
    control: { type: 'text' },
    table: {
      category: ACCESSIBILITY_LABEL,
    },
  },
  'aria-labelledby': {
    control: { type: 'text' },
    table: {
      category: ACCESSIBILITY_LABEL,
    },
  },
};

export default CheckboxArgTypes;
