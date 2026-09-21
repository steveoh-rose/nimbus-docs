// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

const REACT_ONLY_LABEL = '🔷 React Only';
const DESIGN_ALIGNED_LABEL = '⚛️ Design Aligned';
const STYLING_API_LABEL = 'Styling';

export const RadioArgTypes: ArgTypes = {
  label: {
    control: { type: 'text' },
    table: {
      category: DESIGN_ALIGNED_LABEL,
    },
  },
  disabled: {
    control: { type: 'boolean' },
    table: {
      category: DESIGN_ALIGNED_LABEL,
    },
  },
  invalid: {
    control: { type: 'boolean' },
    table: {
      category: DESIGN_ALIGNED_LABEL,
    },
  },
  readonly: {
    control: { type: 'boolean' },
    table: {
      category: DESIGN_ALIGNED_LABEL,
    },
  },
  required: {
    control: { type: 'boolean' },
    table: {
      category: DESIGN_ALIGNED_LABEL,
    },
  },
  hint: {
    control: { type: 'text' },
    table: {
      category: DESIGN_ALIGNED_LABEL,
    },
  },
  orientation: {
    options: ['vertical', 'horizontal'],
    control: { type: 'select' },
    table: {
      category: DESIGN_ALIGNED_LABEL,
    },
  },
  'data-testid': {
    control: { type: 'text' },
    table: {
      category: REACT_ONLY_LABEL,
    },
  },
  classes: {
    control: { type: 'object' },
    table: {
      category: STYLING_API_LABEL,
    },
  },
};
