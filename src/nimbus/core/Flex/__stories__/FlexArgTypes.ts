// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

const PROPS_LABEL = 'Props';
const STYLING_LABEL = 'Styling';

export const FlexArgTypes: ArgTypes = {
  ref: {
    table: {
      disable: true,
    },
  },
  as: {
    control: 'select',
    options: ['div', 'span', 'section', 'article', 'nav', 'main', 'header', 'footer', 'aside'],
    description: 'The semantic HTML tag to render.',
    table: {
      category: PROPS_LABEL,
      type: { summary: 'ElementType' },
      defaultValue: { summary: 'div' },
    },
  },
  direction: {
    control: 'select',
    options: ['row', 'column', 'row-reverse', 'column-reverse'],
    description: 'The direction of the flex container layout.',
    table: {
      category: PROPS_LABEL,
      type: { summary: "'row' | 'column' | 'row-reverse' | 'column-reverse'" },
      defaultValue: { summary: 'row' },
    },
  },
  justify: {
    control: 'select',
    options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
    description: 'Aligns flex items along the main axis.',
    table: {
      category: PROPS_LABEL,
      type: { summary: "'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'" },
    },
  },
  align: {
    control: 'select',
    options: ['start', 'end', 'center', 'baseline', 'stretch'],
    description: 'Aligns flex items along the cross axis.',
    table: {
      category: PROPS_LABEL,
      type: { summary: "'start' | 'end' | 'center' | 'baseline' | 'stretch'" },
      defaultValue: { summary: 'stretch' },
    },
  },
  wrap: {
    control: 'select',
    options: ['nowrap', 'wrap', 'wrap-reverse'],
    description: 'Controls whether the flex container is single-line or multi-line.',
    table: {
      category: PROPS_LABEL,
      type: { summary: "'nowrap' | 'wrap' | 'wrap-reverse'" },
      defaultValue: { summary: 'nowrap' },
    },
  },
  gap: {
    control: 'text',
    description: 'Specifies the gap between flex items. Accepts a string or number.',
    table: {
      category: PROPS_LABEL,
      type: { summary: 'string | number' },
    },
  },
  className: {
    control: 'text',
    description: 'Optional custom CSS class to apply to the flex container.',
    table: {
      category: STYLING_LABEL,
    },
  },
  style: {
    control: 'object',
    description: 'Optional custom inline styles.',
    table: {
      category: STYLING_LABEL,
    },
  },
};
