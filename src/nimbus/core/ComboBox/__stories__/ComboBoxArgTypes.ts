// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

export const ComboBoxArgTypes: ArgTypes = {
  placeholder: {
    control: 'text',
    table: {
      category: '⚛️ Props',
    },
  },
  label: {
    control: 'text',
    table: {
      category: '⚛️ Props',
    },
  },
  invalid: {
    control: 'boolean',
    table: {
      category: '⚛️ Props',
    },
  },
  disabled: {
    control: 'boolean',
    table: {
      category: '⚛️ Props',
    },
  },
  required: {
    control: 'boolean',
    table: {
      category: '⚛️ Props',
    },
  },
  hint: {
    control: 'text',
    table: {
      category: '⚛️ Props',
    },
  },
  loading: {
    control: 'boolean',
    table: {
      category: '⚛️ Props',
    },
  },
  allowsCustomValue: {
    control: 'boolean',
    table: {
      category: 'Advanced',
    },
  },
  allowsEmptyCollection: {
    control: 'boolean',
    table: {
      category: 'Advanced',
    },
  },
  autoFocus: {
    control: 'boolean',
    table: {
      category: 'Advanced',
    },
  },
  fullWidth: {
    control: 'boolean',
    table: {
      category: 'Advanced',
    },
  },
  readonly: {
    control: 'boolean',
    table: {
      category: 'Advanced',
    },
  },
  classes: {
    table: {
      category: 'Advanced',
    },
  },
};
