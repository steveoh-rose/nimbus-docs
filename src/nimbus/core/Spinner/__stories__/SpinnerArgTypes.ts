// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

export const SpinnerArgTypes: ArgTypes = {
  size: {
    options: ['sm', 'lg'],
    control: { type: 'select' },
    table: {
      category: '⚛️ Props',
    },
  },
  onDark: {
    control: { type: 'boolean' },
    table: {
      category: '⚛️ Props',
    },
  },
};
