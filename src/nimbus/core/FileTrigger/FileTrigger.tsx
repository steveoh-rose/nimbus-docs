// @ts-nocheck
import React from 'react';
import type { FileTriggerProps as ReactAriaFileTriggerProps } from 'react-aria-components';
import { FileTrigger as ReactAriaFileTrigger } from 'react-aria-components';

/* ************************************************* *
 * FileTriggerProps                                  *
 * ************************************************* */
export type FileTriggerProps = ReactAriaFileTriggerProps & {
  /**
   * Children to render for the FileTrigger component.
   * This should include Button or Pressable components.
   */
  children?: React.ReactNode;
  /**
   * Data attribute for E2E testing purposes
   */
  'data-test-id'?: string;
  /**
   * Data attribute for GTM purposes. Pass this property to add a custom id to the root element for GTM tracking.
   */
  'data-rac-id'?: string;
};

/* ************************************************* *
 * FileTrigger Component                             *
 * ************************************************* */

export const FileTrigger = ({ children, ...rest }: FileTriggerProps) => {
  return <ReactAriaFileTrigger {...rest}>{children}</ReactAriaFileTrigger>;
};

FileTrigger.displayName = 'FileTrigger';
