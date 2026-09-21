// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, MenuTrigger, Pressable } from '@nimbus/core';
import type { Selection } from 'react-aria-components';
import {
  Add,
  Menu as IconMenu,
  Home,
  Logout,
  TuneVertical,
} from '@nimbus/assets/icons/app';
import { Menu } from '../Menu';
import styles from './Menu.stories.module.scss';
import { MenuArgTypes } from './MenuArgTypes';

type Story = StoryObj<typeof Menu>;
type MetaPreview = Meta<typeof Menu>;

const meta: MetaPreview = {
  title: 'nimbus-core/Menu',
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'requiredFirst' },
  },
  component: Menu,
  argTypes: {
    ...MenuArgTypes,
  },
};

export default meta;

MenuTrigger.displayName = 'MenuTrigger';
(Menu.Item as any).displayName = 'Menu.Item';
(Menu.Submenu as any).displayName = 'Menu.Submenu';
(Menu.Separator as any).displayName = 'Menu.Separator';
(Menu.Section as any).displayName = 'Menu.Section';
(Menu.Header as any).displayName = 'Menu.Header';
(Menu.Label as any).displayName = 'Menu.Label';
(Menu.Description as any).displayName = 'Menu.Description';

/**
 * Extract source code between comments.
 * Used to show the original source code of a story, rather than the output.
 */
const transformStorySource = (code: string) => {
  const regex = /\/\*\* <SOURCE> \*\/([\s\S]*?)\/\*\* <\/SOURCE> \*\//;
  const renderContentMatch = code.match(regex);
  return renderContentMatch ? renderContentMatch[1].trim() : code;
};

/* ********************************************************** *
 * Stories                                                    *
 * ********************************************************** */

export const Primary: Story = {
  render: (args) => {
    return (() => {
      /** <SOURCE> */
      const [selected, setSelected] = React.useState<Selection>(new Set(['system']));
      const themeItems = [
        { id: 'system', name: 'System' },
        { id: 'light', name: 'Light' },
        { id: 'dark', name: 'Dark' },
      ];

      return (
        <MenuTrigger>
          <Button variant="secondary">Menu</Button>
          <Menu {...args} className={styles.menu}>
            <Menu.Header>
              <div className={styles.title}>Kurt Cobain</div>
              <div className={styles.description}>@cobain</div>
            </Menu.Header>
            <Menu.Separator />
            <Menu.Submenu>
              <Menu.Item>
                <TuneVertical />
                <Menu.Label>Kurt kobain</Menu.Label>
                <Menu.Description>Find the details</Menu.Description>
              </Menu.Item>
              <Menu
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={themeItems}
              >
                {(item) => (
                  <Menu.Item id={item.id} textValue={item.name}>
                    <Menu.Label>{item.name}</Menu.Label>
                  </Menu.Item>
                )}
              </Menu>
            </Menu.Submenu>
            <Menu.Item>
              <Home />
              <Menu.Label>Home</Menu.Label>
              <Menu.Description>Access the home page</Menu.Description>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              <Menu.Label>Contact Support</Menu.Label>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item isDanger>
              <Logout />
              <Menu.Label>Logout</Menu.Label>
            </Menu.Item>
          </Menu>
        </MenuTrigger>
      );
      /** </SOURCE> */
    })();
  },
  parameters: {
    sort: 'alpha',
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
  },
};

/**
 * Menu supports sections in order to group options. Sections can be used by wrapping groups of Items in a Section component.
 * Each Section takes a title and key prop. Sections can be used by wrapping groups of `<Menu.Item/>` in a `<Menu.Section>` component.
 * A `<Menu.Header>` element may also be included to label the section.
 */
export const Section: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button variant="secondary">Menu</Button>
      <Menu {...args}>
        <Menu.Section title="Fruits">
          <Menu.Item key="bananna">
            <Menu.Label>Bannana</Menu.Label>
          </Menu.Item>
          <Menu.Item key="apple">
            <Menu.Label>Apple</Menu.Label>
          </Menu.Item>
        </Menu.Section>
        <Menu.Section title="Animals">
          <Menu.Item key="cat">
            <Menu.Label>Cat</Menu.Label>
          </Menu.Item>
          <Menu.Item key="dog">
            <Menu.Label>Dog</Menu.Label>
          </Menu.Item>
        </Menu.Section>
        <Menu.Section title="Foods">
          <Menu.Item key="pasta">
            <Menu.Label>Pasta</Menu.Label>
          </Menu.Item>
          <Menu.Item key="pizza">
            <Menu.Label>Pizza</Menu.Label>
          </Menu.Item>
        </Menu.Section>
      </Menu>
    </MenuTrigger>
  ),
  args: {},
};

/**
 * Use the `selectionMode` prop to enable selection within a Menu, using either `single` or `multiple` selection.
 * Use `single` to allow users to select only one item at a time.
 */
export const Single: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      const [selected, setSelected] = React.useState<Selection>(new Set(['autoPlay']));
      const items = [
        { name: 'Auto-Play Videos', slug: 'autoPlay' },
        { name: 'High-Quality Streaming', slug: 'highQuality' },
        { name: 'Exclusive Releases', slug: 'exclusiveContent' },
        { name: 'Default Subtitles', slug: 'subtitles' },
        { name: 'Background Play', slug: 'backgroundPlay' },
        { name: 'Allow Downloads', slug: 'download' },
      ];

      return (
        <MenuTrigger>
          <Button variant="secondary">Filter</Button>
          <Menu
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
            items={items}
          >
            {(item) => (
              <Menu.Item id={item.slug}>
                <Add />
                <Menu.Label>{item.name}</Menu.Label>
              </Menu.Item>
            )}
          </Menu>
        </MenuTrigger>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    sort: 'alpha',
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
  },
};

/**
 * The Menu component also supports multiple selection using the `selectionMode` prop.
 * Use `multiple` to allow users to select more than one item at a time.
 */
export const Multiple: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      const [selected, setSelected] = React.useState<Selection>(new Set(['autoPlay']));
      const items = [
        { name: 'Auto-Play Videos', slug: 'autoPlay' },
        { name: 'High-Quality Streaming', slug: 'highQuality' },
        { name: 'Exclusive Releases', slug: 'exclusiveContent' },
        { name: 'Default Subtitles', slug: 'subtitles' },
        { name: 'Background Play', slug: 'backgroundPlay' },
        { name: 'Allow Downloads', slug: 'download' },
      ];

      return (
        <MenuTrigger>
          <Button variant="secondary">Filter</Button>
          <Menu
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={setSelected}
            items={items}
          >
            {(item) => (
              <Menu.Item id={item.slug}>
                <Add />
                <Menu.Label>{item.name}</Menu.Label>
              </Menu.Item>
            )}
          </Menu>
        </MenuTrigger>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    sort: 'alpha',
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
  },
};

/**
 * Submenus can be created by wrapping an item and a submenu in a SubmenuTrigger.
 * The `<Menu.Submenu>` accepts exactly two children: the first child should be the `<MenuItem>`
 * which triggers opening of the submenu, and second child should be the new `<Menu>` component.
 */
export const Submenu: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button variant="secondary">Menu</Button>
      <Menu {...args}>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Submenu>
          <Menu.Item>SubMenu</Menu.Item>
          <Menu>
            <Menu.Item>Nested menu</Menu.Item>
            <Menu.Item>Nested menu</Menu.Item>
          </Menu>
        </Menu.Submenu>
      </Menu>
    </MenuTrigger>
  ),
  args: {},
};

/**
 * Use the `isDanger` prop to designate a menu item as dangerous. This will use our danger theme colours to color the
 * background, icon and text of the menu item.
 */
export const isDanger: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button variant="secondary">Menu</Button>
      <Menu {...args}>
        <Menu.Item>
          <Menu.Label>Item 1</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Menu.Label>Item 1</Menu.Label>
        </Menu.Item>
        <Menu.Item isDanger>
          <Logout />
          <Menu.Label>Item 1</Menu.Label>
        </Menu.Item>
      </Menu>
    </MenuTrigger>
  ),
  args: {},
};

/**
 * Use the `isDisabled` prop to disable specific menu items.
 */
export const isDisabled: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button variant="secondary">Menu</Button>
      <Menu {...args}>
        <Menu.Item>
          <Menu.Label>Item 1</Menu.Label>
        </Menu.Item>
        <Menu.Item isDisabled>
          <Menu.Label>Item 1</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Menu.Label>Item 1</Menu.Label>
        </Menu.Item>
      </Menu>
    </MenuTrigger>
  ),
  args: {},
};

/**
 * Separators may be added between menu items or sections using `<Menu.Seperator>` in order to create non-labeled groupings.
 */
export const Separator: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button variant="secondary">Menu</Button>
      <Menu {...args}>
        <Menu.Item>
          <Menu.Label>New Item 1</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Menu.Label>New Item 2</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <Menu.Label>New Item 3</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Menu.Label>New Item 4</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <Menu.Label>New Item 5</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Menu.Label>New Item 6</Menu.Label>
        </Menu.Item>
      </Menu>
    </MenuTrigger>
  ),
  args: {},
};

/**
 * To use a custom trigger element, import the `<Pressable>` component and wrap whatever item you'd like to make pressable.
 * Some elements such as SVGs don't spread props, simple use a span or extra div for problematic components.
 */
export const CustomTrigger: Story = {
  render: (args) => (
    <MenuTrigger>
      <Pressable>
        <span>
          <IconMenu width={20} height={20} />
        </span>
      </Pressable>
      <Menu {...args}>
        <Menu.Item>
          <Menu.Label>New Item 1</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Menu.Label>New Item 2</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <Menu.Label>New Item 3</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Menu.Label>New Item 4</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <Menu.Label>New Item 5</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Menu.Label>New Item 6</Menu.Label>
        </Menu.Item>
      </Menu>
    </MenuTrigger>
  ),
  args: {},
};
