// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

const PROPS_LABEL = 'Props';
const EVENTS_LABEL = 'Events';
const STYLING_LABEL = 'Styling';
const ADVANCED_LABEL = 'Advanced';

export const TableArgTypes: ArgTypes = {
  children: {
    control: { type: 'object' },
    table: {
      category: PROPS_LABEL,
    },
  },
  isCompact: {
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
    },
  },
  selectionMode: {
    options: ['multiple', 'single', 'none'],
    control: { type: 'select' },
    table: {
      category: PROPS_LABEL,
    },
  },
  renderEmptyState: {
    control: { type: 'object' },
    table: {
      category: PROPS_LABEL,
    },
  },
  selectionBehavior: {
    options: ['toggle', 'select'],
    control: { type: 'select' },
    table: {
      category: PROPS_LABEL,
    },
  },
  disallowEmptySelection: {
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
    },
  },
  disabledKeys: {
    control: { type: 'array' },
    table: {
      category: ADVANCED_LABEL,
    },
  },
  selectedKeys: {
    control: { type: 'array' },
    table: {
      category: ADVANCED_LABEL,
    },
  },
  defaultSelectedKeys: {
    control: { type: 'array' },
    table: {
      category: ADVANCED_LABEL,
    },
  },
  sortDescriptor: {
    control: { type: 'object' },
    table: {
      category: ADVANCED_LABEL,
    },
  },
  onRowAction: {
    control: false,
    table: {
      category: EVENTS_LABEL,
    },
  },
  onSortChange: {
    control: { type: 'object' },
    table: {
      category: EVENTS_LABEL,
    },
  },
  onSelectionChange: {
    control: { type: 'object' },
    table: {
      category: EVENTS_LABEL,
    },
  },
  onScroll: {
    control: { type: 'object' },
    table: {
      category: EVENTS_LABEL,
    },
  },
  width: {
    control: { type: 'number' },
    table: {
      category: STYLING_LABEL,
    },
    description: 'Allows you to set a `width` on the Table',
    defaultValue: undefined,
  },
  maxWidth: {
    control: { type: 'number' },
    table: {
      category: STYLING_LABEL,
    },
    description: 'Allows you to set a `maxWidth` on the Table',
  },
  minWidth: {
    control: { type: 'number' },
    table: {
      category: STYLING_LABEL,
    },
    description: 'Allows you to set a `minWidth` on the Table',
  },
  className: {
    control: false,
    table: {
      category: STYLING_LABEL,
    },
  },
  style: {
    control: false,
    table: {
      category: STYLING_LABEL,
    },
  },
};
