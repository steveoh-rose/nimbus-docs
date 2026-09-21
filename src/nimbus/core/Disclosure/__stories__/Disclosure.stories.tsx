// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@nimbus/core';
import { Add, Subtract } from '@nimbus/assets/icons/app';
import { Disclosure } from '../Disclosure';
import styles from './styles/Disclosure.stories.module.scss';
import { DisclosureArgTypes } from './types/DisclosureArgTypes';

type Story = StoryObj<typeof Disclosure>;
type MetaPreview = Meta<typeof Disclosure>;

const meta: MetaPreview = {
  title: 'nimbus-core/Disclosure',
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'alpha' },
  },
  component: Disclosure,
  argTypes: DisclosureArgTypes,
};

export default meta;

// Render Code Snippets w/ correct names
(Button as any).displayName = 'Button';
(Disclosure as any).displayName = 'Disclosure';
(Disclosure.Panel as any).displayName = 'Disclosure.Panel';
(Disclosure.Header as any).displayName = 'Disclosure.Header';
(Disclosure.Indicator as any).displayName = 'Disclosure.Indicator';

/**
 * The default `<Disclosure>` dictating the layout and borders of multiple Disclosure components.
 */
export const Primary: Story = {
  render: (args) => (
    <Disclosure {...args}>
      <Disclosure.Header>
        Personal Information
        <Disclosure.Indicator />
      </Disclosure.Header>
      <Disclosure.Panel>
        <p className={styles.content}>Content goes here...</p>
      </Disclosure.Panel>
    </Disclosure>
  ),
  parameters: {
    controls: {
      include: [...Object.keys(DisclosureArgTypes)],
    },
    sort: 'alpha',
  },
  argTypes: {
    ...DisclosureArgTypes,
  },
  args: {
    variant: 'enclosed',
    isDisabled: undefined,
    isExpanded: undefined,
    defaultExpanded: undefined,
    onExpandedChange: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    'data-testid': undefined,
  },
};

/**
 * Disclosures come in four distinct visual `variants= enclosed | outline | subtle | plain`.
 */
export const Variant: Story = {
  render: (args) => (
    <div className={styles.wrapper}>
      <Disclosure {...args}>
        <Disclosure.Header>
          Enclosed
          <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>Content goes here...</p>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure variant="outline">
        <Disclosure.Header>
          Outline
          <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>Content goes here...</p>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure variant="subtle">
        <Disclosure.Header>
          Subtle
          <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>Content goes here...</p>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure variant="plain">
        <Disclosure.Header>
          Plain
          <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel className={styles.panel}>
          <p>Content goes here...</p>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  ),
  args: {
    variant: 'enclosed',
  },
};

/**
 * The default `<Disclosure>` without an icon.
 */
export const NoIcon: Story = {
  render: (args) => (
    <Disclosure variant="enclosed" {...args}>
      <Disclosure.Header>Personal Information</Disclosure.Header>
      <Disclosure.Panel>Content goes here...</Disclosure.Panel>
    </Disclosure>
  ),
  args: {},
};

/**
 * The default `<Disclosure>` with a custom icon.
 */
export const CustomIcon: Story = {
  render: (args) => (
    <Disclosure variant="enclosed" {...args}>
      <Disclosure.Header>
        Personal Information
        <Disclosure.Indicator>
          <Add />
        </Disclosure.Indicator>
      </Disclosure.Header>
      <Disclosure.Panel>
        <p>Content goes here...</p>
      </Disclosure.Panel>
    </Disclosure>
  ),
  args: {},
};

/**
 * The default `<Disclosure>` with a custom icon.
 * This example uses custom render props to control the icon displayed.
 */
export const CustomIconRenderProps: Story = {
  render: (args) => (
    <Disclosure variant="enclosed" {...args}>
      <Disclosure.Header>
        Personal Information
        <Disclosure.Indicator>
          {({ isExpanded }) => (!isExpanded ? <Add /> : <Subtract />)}
        </Disclosure.Indicator>
      </Disclosure.Header>
      <Disclosure.Panel>
        <p>Content goes here...</p>
      </Disclosure.Panel>
    </Disclosure>
  ),
  args: {},
};

/**
 * Use `defaultExpanded` prop to control the initial expanded state.
 */
export const DefaultExpanded: Story = {
  render: (args) => (
    <Disclosure {...args} variant="enclosed">
      <Disclosure.Header>
        Starts Open
        <Disclosure.Indicator />
      </Disclosure.Header>
      <Disclosure.Panel>
        <p>This panel is expanded by default using the `defaultExpanded` prop.</p>
      </Disclosure.Panel>
    </Disclosure>
  ),
  args: {
    defaultExpanded: true,
  },
};

/**
 * Use `isDisabled` prop to control the disabled state.
 */
export const Disabled: Story = {
  render: (args) => (
    <Disclosure variant="enclosed" {...args}>
      <Disclosure.Header>
        Disabled Disclosure
        <Disclosure.Indicator />
      </Disclosure.Header>
      <Disclosure.Panel>
        <p>This content cannot be reached by user interaction.</p>
      </Disclosure.Panel>
    </Disclosure>
  ),
  args: {
    isDisabled: true,
  },
};
