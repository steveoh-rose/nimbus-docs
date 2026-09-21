// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

const PROPS_LABEL = 'Props';
const EVENTS_LABEL = 'Events';
const COMPONENT_TOASTER = '<Toaster/>';
const COMPONENT_QUEUE = 'queue()';

export const ToastArgTypes: ArgTypes = {
  // Toaster Props
  placement: {
    control: 'select',
    options: ['top-right', 'bottom-right', 'top-middle', 'bottom-middle'],
    description: 'Screen quadrant where the Toaster mounts.',
    table: { category: COMPONENT_TOASTER, subcategory: PROPS_LABEL },
  },
  // queue props
  title: {
    control: 'text',
    description: 'The primary headline of the toast.',
    table: { category: COMPONENT_QUEUE, subcategory: PROPS_LABEL },
  },
  description: {
    control: 'text',
    description: 'Optional secondary text for additional context.',
    table: { category: COMPONENT_QUEUE, subcategory: PROPS_LABEL },
  },
  variant: {
    control: 'select',
    options: ['neutral', 'info', 'success', 'warning', 'error', 'loading'],
    description: 'The visual style and semantic intent of the toast.',
    table: { category: COMPONENT_QUEUE, subcategory: PROPS_LABEL },
  },
  timeout: {
    control: 'number',
    description: 'Duration in milliseconds before the toast auto-dismisses.',
    table: { category: COMPONENT_QUEUE, subcategory: PROPS_LABEL },
  },
  action: {
    control: 'object',
    description: 'controls the optional interactive action attached to the toast.',
    table: {
      category: COMPONENT_QUEUE,
      subcategory: EVENTS_LABEL,
    },
  },
};
