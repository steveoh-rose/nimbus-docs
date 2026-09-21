// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DisclosureGroup, Disclosure } from '../Disclosure';
import { DisclosureGroupArgTypes } from './types/DisclosureGroupArgTypes';
import styles from './styles/Disclosure.stories.module.scss';

type Story = StoryObj<typeof DisclosureGroup>;
type MetaPreview = Meta<typeof DisclosureGroup>;

const meta: MetaPreview = {
  title: 'nimbus-core/DisclosureGroup',
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'alpha' },
  },
  component: DisclosureGroup,
  argTypes: DisclosureGroupArgTypes,
};

export default meta;

/**
 * The default `<DisclosureGroup>` dictating the layout and borders of multiple Disclosure components.
 */
export const Primary: Story = {
  render: (args) => (
    <DisclosureGroup {...args}>
      <Disclosure id="info">
        <Disclosure.Header>
          Personal Information
          <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>Name, email, and phone number go here.</p>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure id="billing">
        <Disclosure.Header>
          Billing Address
          <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>Credit card and location details go here.</p>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure id="security">
        <Disclosure.Header>
          Security Settings
          <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>Password and 2FA configuration.</p>
        </Disclosure.Panel>
      </Disclosure>
    </DisclosureGroup>
  ),
  parameters: {
    controls: {
      include: [...Object.keys(DisclosureGroupArgTypes)],
    },
    sort: 'alpha',
  },
  argTypes: {
    ...DisclosureGroupArgTypes,
  },
  args: {
    variant: 'enclosed',
    allowsMultipleExpanded: undefined,
    isDisabled: undefined,
    expandedKeys: undefined,
    defaultExpandedKeys: undefined,
    onExpandedChange: undefined,
    className: undefined,
    style: undefined,
    'data-testid': undefined,
  },
};

/**
 * Disclosures groups come in four distinct visual variants: `enclosed`, `outline`, `subtle`, and `plain`.
 */
export const Variant: Story = {
  render: () => (
    <div className={styles.wrapper}>
      {['enclosed', 'outline', 'subtle', 'plain'].map((variant) => (
        <div key={variant} style={{ marginBottom: '2rem' }}>
          <h3
            style={{ textTransform: 'capitalize', marginBottom: '1rem', fontFamily: 'sans-serif' }}
          >
            {variant}
          </h3>
          <DisclosureGroup variant={variant as any}>
            <Disclosure id="item-1">
              <Disclosure.Header>
                Item 1 <Disclosure.Indicator />
              </Disclosure.Header>
              <Disclosure.Panel>
                <p>Content for item 1.</p>
              </Disclosure.Panel>
            </Disclosure>
            <Disclosure id="item-2">
              <Disclosure.Header>
                Item 2 <Disclosure.Indicator />
              </Disclosure.Header>
              <Disclosure.Panel>
                <p>Content for item 2.</p>
              </Disclosure.Panel>
            </Disclosure>
          </DisclosureGroup>
        </div>
      ))}
    </div>
  ),
};

/**
 * Whether multiple disclosure items can be expanded at the same time.
 */
export const AllowsMultiple: Story = {
  args: {
    allowsMultipleExpanded: true,
    variant: 'outline',
  },
  render: (args) => (
    <DisclosureGroup {...args}>
      <Disclosure id="item-1">
        <Disclosure.Header>
          Can be open <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>First panel content.</p>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure id="item-2">
        <Disclosure.Header>
          At the same time <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>Second panel content.</p>
        </Disclosure.Panel>
      </Disclosure>
    </DisclosureGroup>
  ),
};

/**
 * Applying the `isDisabled` prop prevents user interaction and applies a dimmed visual state to the entire group.
 */
export const Disabled: Story = {
  args: {
    isDisabled: true,
    variant: 'enclosed',
  },
  render: (args) => (
    <DisclosureGroup {...args}>
      <Disclosure id="info">
        <Disclosure.Header>
          Personal Information <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>Content.</p>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure id="billing">
        <Disclosure.Header>
          Billing Address <Disclosure.Indicator />
        </Disclosure.Header>
        <Disclosure.Panel>
          <p>Content.</p>
        </Disclosure.Panel>
      </Disclosure>
    </DisclosureGroup>
  ),
};
