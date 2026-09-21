// @ts-nocheck
import type { ArgTypes } from '@storybook/react';

/**
 * This object specifies which controls to include in the args table.
 * Any controls whose names don't match the regex or are not part of
 * the array will be left out of the table.
 */

const PROPS_LABEL = 'Props';
const EVENTS_LABEL = 'Events';
const ADVANCED_LABEL = 'Advanced';

export const FileTriggerArgTypes: ArgTypes = {
  children: {
    control: { type: 'text' },
    table: {
      category: PROPS_LABEL,
    },
  },
  allowsMultiple: {
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
    },
  },
  acceptedFileTypes: {
    options: ['image/png', 'image/jpeg'],
    control: { type: 'select' },
    table: {
      category: PROPS_LABEL,
    },
  },
  acceptDirectory: {
    control: { type: 'boolean' },
    table: {
      category: PROPS_LABEL,
    },
  },
  defaultCamera: {
    options: ['user', 'environment'],
    control: { type: 'select' },
    table: {
      category: PROPS_LABEL,
    },
  },
  onSelect: {
    control: { type: 'object' },
    table: {
      category: EVENTS_LABEL,
    },
  },
  'data-test-id': {
    control: { type: 'text' },
    table: {
      category: ADVANCED_LABEL,
    },
  },
  'data-rac-id': {
    control: { type: 'text' },
    table: {
      category: ADVANCED_LABEL,
    },
  },
};
