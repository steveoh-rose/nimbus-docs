// @ts-nocheck
import React from 'react';
import { ItemProps, Item as ReactStatelyItem } from 'react-stately';

/**
 * Wrapper for Item from react-stately.
 * This wrapper ensures a stable API and gives us greater control than exposing the components directly.
 */

/**
 * ComboBox Item
 * Used to specify options within a ComboBox
 */
export function Item<T>(props: Readonly<ItemProps<T>>) {
  return <ReactStatelyItem {...props} />;
}

// Copy static methods
Object.assign(Item, ReactStatelyItem);

Item.displayName = 'ComboBox.Item';
