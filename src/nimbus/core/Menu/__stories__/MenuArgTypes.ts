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

export const MenuArgTypes: ArgTypes = {
  children: {
    control: { type: 'object' },
    table: {
      category: PROPS_LABEL,
    },
  },
  placement: {
    options: ['top', 'right', 'bottom', 'left'],
    control: { type: 'select' },
    table: {
      category: PROPS_LABEL,
    },
  },
  isOpen: {
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
    },
  },
  isDismissable: {
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
    },
  },
  defaultOpen: {
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
    },
  },
  isKeyboardDismissDisabled: {
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
    },
  },
  shouldCloseOnInteractOutside: {
    control: { type: 'object' },
    table: {
      category: PROPS_LABEL,
    },
  },
  onClose: {
    control: { type: 'boolean' },
    table: {
      category: EVENTS_LABEL,
    },
  },
  onAction: {
    control: { type: 'boolean' },
    table: {
      category: EVENTS_LABEL,
    },
  },
  onScroll: {
    control: { type: 'boolean' },
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
  isEntering: {
    control: { type: 'boolean' },
    table: {
      category: EVENTS_LABEL,
    },
  },
  isExiting: {
    control: { type: 'boolean' },
    table: {
      category: EVENTS_LABEL,
    },
  },
  className: {
    control: { type: 'string' },
    table: {
      category: STYLING_LABEL,
    },
  },
  slot: {
    control: { type: 'string' },
    table: {
      category: STYLING_LABEL,
    },
  },
  UNSTABLE_portalContainer: {
    control: { type: 'object' },
    table: {
      category: ADVANCED_LABEL,
    },
  },
};
