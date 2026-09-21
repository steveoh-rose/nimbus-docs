// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

const PROPS_LABEL = 'Props';
const STYLING_LABEL = 'Styling';
const ADVANCED_LABEL = 'Advanced';

export const BadgeArgTypes: ArgTypes = {
  intent: {
    control: 'select',
    options: ['neutral', 'info', 'success', 'warning', 'danger', 'special'],
    description: 'The semantic intent of the badge, which dictates its colors and default icon.',
    table: {
      category: PROPS_LABEL,
    },
  },
  variant: {
    control: 'inline-radio',
    options: ['solid', 'subtle', 'plain'],
    description: 'The visual appearance style of the badge.',
    table: {
      category: PROPS_LABEL,
    },
  },
  className: {
    control: 'text',
    description: 'Optional custom CSS class to apply to the root badge element.',
    table: {
      category: STYLING_LABEL,
    },
  },
  'data-testid': {
    control: 'text',
    description: 'A unique identifier for automated testing purposes.',
    table: {
      category: ADVANCED_LABEL,
    },
  },
  'data-rac-id': {
    control: 'text',
    description: 'A unique identifier for automated testing purposes.',
    table: {
      category: ADVANCED_LABEL,
    },
  },
  children: {
    control: false, // We disable the children control so we can compose it cleanly in the render function
    description: 'The content to render inside the Badge.',
    table: {
      category: PROPS_LABEL,
    },
  },
};
