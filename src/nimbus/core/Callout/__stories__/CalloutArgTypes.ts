// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

const PROPS_LABEL = 'Props';
const STYLING_LABEL = 'Styling';
const ADVANCED_LABEL = 'Advanced';

export const CalloutArgTypes: ArgTypes = {
  intent: {
    control: 'select',
    options: ['neutral', 'info', 'success', 'warning', 'danger', 'special'],
    description: 'The semantic intent of the callout, which dictates its colors and default icon.',
    table: {
      category: PROPS_LABEL,
      defaultValue: { summary: 'neutral' },
    },
  },
  variant: {
    control: 'inline-radio',
    options: ['enclosed', 'subtle'],
    description: 'The visual appearance style of the callout.',
    table: {
      category: PROPS_LABEL,
      defaultValue: { summary: 'enclosed' },
    },
  },
  className: {
    control: 'text',
    description: 'Optional custom CSS class to apply to the root callout element.',
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
    description:
      'An internal identifier used by React Aria Components for context and state tracking.',
    table: {
      category: ADVANCED_LABEL,
    },
  },
  children: {
    control: false, // We disable the children control so we can compose it cleanly in the render function
    description:
      'The content to render inside the Callout. Typically composed of `<Callout.Icon>`, `<Callout.Content>`, `<Callout.Title>`, and `<Callout.Description>`.',
    table: {
      category: PROPS_LABEL,
    },
  },
};
