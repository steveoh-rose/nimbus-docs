// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

const PROPS_LABEL = 'Props';
const EVENTS_LABEL = 'Events';
const STYLING_LABEL = 'Styling';
const ADVANCED_LABEL = 'Advanced';

export const DisclosureArgTypes: ArgTypes = {
  variant: {
    description: 'The visual style of the disclosure.',
    options: ['enclosed', 'outline', 'subtle', 'plain'],
    control: { type: 'select' },
    table: {
      category: PROPS_LABEL,
      type: { summary: "'enclosed' | 'outline' | 'subtle' | 'plain'" },
      defaultValue: { summary: "'enclosed'" },
    },
  },
  isDisabled: {
    description: 'Whether the disclosure is disabled, preventing user interaction.',
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  isExpanded: {
    description: 'The controlled expanded state of the disclosure.',
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
      type: { summary: 'boolean' },
    },
  },
  defaultExpanded: {
    description: 'The default expanded state when initially rendered (uncontrolled).',
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  onExpandedChange: {
    description: 'Handler that is called when the expanded state changes.',
    action: 'onExpandedChange',
    table: {
      category: EVENTS_LABEL,
      type: { summary: '(isExpanded: boolean) => void' },
    },
  },
  className: {
    description: 'A custom class name applied to the disclosure wrapper.',
    control: { type: 'text' },
    table: {
      category: STYLING_LABEL,
      type: { summary: 'string' },
    },
  },
  style: {
    description: 'Inline styles applied to the disclosure wrapper.',
    control: { type: 'object' },
    table: {
      category: STYLING_LABEL,
      type: { summary: 'React.CSSProperties' },
    },
  },
  'data-testid': {
    description: 'The test identifier for targeting the component in tests.',
    control: { type: 'text' },
    table: {
      category: ADVANCED_LABEL,
      type: { summary: 'string' },
    },
  },
};
