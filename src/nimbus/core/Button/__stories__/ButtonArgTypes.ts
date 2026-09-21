// @ts-nocheck
import type { ArgTypes } from '@storybook/react';
import { designTokenColors } from '../../../utils/design-token-helpers';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

export const ButtonArgTypes: ArgTypes = {
  children: {
    control: { type: 'text' },
    table: {
      category: '⚛️ Props',
    },
  },
  variant: {
    options: ['primary', 'secondary', 'subtle', 'outline', 'ghost', 'negative', 'brand'],
    control: { type: 'select' },
    table: {
      category: '⚛️ Props',
    },
  },
  brandBgColor: {
    options: [...designTokenColors],
    control: { type: 'select' },
    if: { arg: 'variant', eq: 'brand' },
    table: {
      category: '⚛️ Props',
    },
  },
  brandTextColor: {
    options: [...designTokenColors],
    control: { type: 'select' },
    if: { arg: 'variant', eq: 'brand' },
    table: {
      category: '⚛️ Props',
    },
  },
  size: {
    options: ['sm', 'lg'],
    control: { type: 'select' },
    table: {
      category: '⚛️ Props',
    },
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
    table: {
      category: '⚛️ Props',
    },
  },
  loading: {
    control: { type: 'boolean' },
    defaultValue: false,
    table: {
      category: '⚛️ Props',
    },
  },
  rounded: {
    control: { type: 'boolean' },
    defaultValue: false,
    table: {
      category: '⚛️ Props',
    },
  },
  loadingText: {
    control: { type: 'text' },
    table: {
      category: '⚛️ Props',
    },
  },
  onPress: {
    action: 'pressed',
    table: {
      category: '⚛️ Props',
    },
  },
  autoFocus: {
    control: { type: 'boolean' },
    table: {
      category: 'Advanced',
    },
  },
  fullWidth: {
    control: { type: 'boolean' },
    table: {
      category: 'Advanced',
    },
  },
  as: {
    options: ['a', 'button', 'div', 'Link'],
    control: { type: 'select' },
    table: {
      category: 'Advanced',
    },
  },
  type: {
    options: ['button', 'submit', 'reset'],
    control: { type: 'select' },
    table: {
      category: 'Advanced',
    },
  },
  onPressStart: {
    action: 'press started',
    table: {
      category: 'Events',
    },
  },
  onFocus: {
    action: 'focused',
    table: {
      category: 'Events',
    },
  },
  onBlur: {
    action: 'blur',
    table: {
      category: 'Events',
    },
  },
  onPressEnd: {
    action: 'press ended',
    table: {
      category: 'Events',
    },
  },
};
