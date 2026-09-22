// @ts-nocheck
/* ********************************************************
 * React Aria Exports                                     *
 * ****************************************************** */
import React from 'react';
import {
  DialogTrigger as _DialogTrigger,
  MenuTrigger as _MenuTrigger,
  Pressable as _Pressable,
} from 'react-aria-components';

export { Pressable } from 'react-aria-components';

/**
 * React 19 compat shim: Nimbus's core Button doesn't register as a "pressable" child of
 * these trigger components without an explicit <Pressable> wrapper around the trigger
 * element (the first child) — see docs/keeping-docs-in-sync.md in the docs repo.
 */
function withPressableTrigger(Trigger) {
  return function PatchedTrigger({ children, ...props }) {
    const [trigger, ...rest] = React.Children.toArray(children);
    return React.createElement(Trigger, props, React.createElement(_Pressable, null, trigger), ...rest);
  };
}

export const DialogTrigger = withPressableTrigger(_DialogTrigger);
export const MenuTrigger = withPressableTrigger(_MenuTrigger);
export { ListBox as AriaListBox } from 'react-aria-components';
export { ListBoxItem as AriaListBoxItem } from 'react-aria-components';

/* ********************************************************
 * Nimbus Core Exports                                    *
 * ****************************************************** */
export * from './Badge';
export * from './Button';
export * from './Callout';
export * from './Checkbox';
export * from './ComboBox';
export * from './DatePicker';
export * from './Dialog';
export * from './Disclosure';
export * from './FileTrigger';
export * from './Menu';
export * from './Modal';
export * from './Pagination';
export * from './Popover';
export { default as Pagination } from './Pagination';
export * from './Spinner';
export * from './Radio';
export * from './Switch';
export * from './Table';
export * from './TextArea';
export * from './TextInput';
export * from './Toast';
export * from './Tooltip';
export * from './Flex';
