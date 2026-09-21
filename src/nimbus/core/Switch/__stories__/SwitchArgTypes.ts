// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

const SwitchArgTypes: ArgTypes = {
  size: {
    table: {
      category: '⚛️ Props',
    },
  },
  disabled: {
    table: {
      category: '⚛️ Props',
    },
  },
  readonly: {
    table: {
      category: '⚛️ Props',
    },
  },
  selected: {
    table: {
      category: '⚛️ Props',
    },
  },
  value: {
    table: {
      category: '⚛️ Props',
    },
  },
  onChange: {
    table: {
      category: 'Advanced',
    },
  },
  autoFocus: {
    table: {
      category: 'Advanced',
    },
  },
  defaultSelected: {
    table: {
      category: 'Advanced',
    },
  },
  id: {
    table: {
      category: 'HTML forms',
    },
  },
  name: {
    table: {
      category: 'HTML forms',
    },
  },
};

export default SwitchArgTypes;
