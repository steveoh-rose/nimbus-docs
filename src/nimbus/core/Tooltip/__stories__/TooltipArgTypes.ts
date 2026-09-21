// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

const REACT_ONLY_LABEL = '🔷 React Only';
const DESIGN_ALIGNED_LABEL = '⚛️ Design Aligned';
const EVENTS_LABEL = '📳 Events';
const STYLING_API_LABEL = 'Styling';

export const TooltipArgTypes: ArgTypes = {
  variant: {
    options: ['dark', 'light', 'accent'],
    control: { type: 'select' },
    table: {
      category: DESIGN_ALIGNED_LABEL,
    },
  },
  placement: {
    options: [
      'top',
      'right',
      'bottom',
      'left',
      'top-end',
      'top-start',
      'right-end',
      'right-start',
      'bottom-end',
      'bottom-start',
      'left-end',
      'left-start',
    ],
    control: { type: 'select' },
    table: {
      category: REACT_ONLY_LABEL,
    },
  },
  delay: {
    control: { type: 'number', min: 1, max: 1000, step: 1 },
    table: {
      category: REACT_ONLY_LABEL,
    },
  },
  offset: {
    control: { type: 'number', min: 1, max: 1000, step: 1 },
    table: {
      category: REACT_ONLY_LABEL,
    },
  },
  allowDismiss: {
    control: { type: 'boolean' },
    table: {
      category: REACT_ONLY_LABEL,
    },
  },
  open: {
    control: { type: 'boolean' },
    table: {
      category: REACT_ONLY_LABEL,
    },
  },
  defaultOpen: {
    control: { type: 'boolean' },
    table: {
      category: REACT_ONLY_LABEL,
    },
  },
  onOpenChange: {
    control: { type: 'object' },
    table: {
      category: EVENTS_LABEL,
    },
  },
  classes: {
    control: { type: 'object' },
    table: {
      category: STYLING_API_LABEL,
    },
  },
};
