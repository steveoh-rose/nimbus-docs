// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

const PROPS_LABEL = 'Props';
const EVENTS_LABEL = 'Events';
const STYLING_LABEL = 'Styling';
const ADVANCED_LABEL = 'Advanced';

export const DisclosureGroupArgTypes: ArgTypes = {
  variant: {
    description: 'The visual style of the disclosure group.',
    options: ['enclosed', 'outline', 'subtle', 'plain'],
    control: { type: 'select' },
    table: {
      category: PROPS_LABEL,
      type: { summary: "'enclosed' | 'outline' | 'subtle' | 'plain'" },
      defaultValue: { summary: "'enclosed'" },
    },
  },
  allowsMultipleExpanded: {
    description: 'Whether multiple disclosure items can be expanded at the same time.',
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  isDisabled: {
    description: 'Whether the entire disclosure group is disabled, preventing user interaction.',
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  expandedKeys: {
    description: 'The controlled expanded keys of the disclosure group.',
    control: { type: 'object' },
    table: {
      category: PROPS_LABEL,
      type: { summary: 'Iterable<Key>' },
    },
  },
  defaultExpandedKeys: {
    description: 'The default expanded keys when initially rendered (uncontrolled).',
    control: { type: 'object' },
    table: {
      category: PROPS_LABEL,
      type: { summary: 'Iterable<Key>' },
    },
  },
  onExpandedChange: {
    description: 'Handler that is called when the expanded items change.',
    action: 'onExpandedChange',
    table: {
      category: EVENTS_LABEL,
      type: { summary: '(keys: Set<Key>) => void' },
    },
  },
  className: {
    description: 'A custom class name applied to the group wrapper.',
    control: { type: 'text' },
    table: {
      category: STYLING_LABEL,
      type: { summary: 'string' },
    },
  },
  style: {
    description: 'Inline styles applied to the group wrapper.',
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
