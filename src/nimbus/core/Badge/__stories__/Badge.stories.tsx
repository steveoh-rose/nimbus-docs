// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@nimbus/core';
import { Add, Home } from '@nimbus/assets/icons/app';
import { Badge, BadgeProps } from '../Badge';
import { BadgeArgTypes } from './BadgeArgTypes';

type Story = StoryObj<typeof Badge>;
type MetaPreview = Meta<typeof Badge>;

const meta: MetaPreview = {
  title: 'nimbus-core/Badge',
  parameters: {
    status: { type: 'in development' },
    controls: { sort: 'alpha' },
  },
  component: Badge,
  argTypes: BadgeArgTypes,
};

export default meta;

// Assign display names for cleaner Storybook code snippets
(Badge.Icon as any).displayName = 'Badge.Icon';
(Badge.Label as any).displayName = 'Badge.Label';

/**
 * Extract source code between comments.
 * Used to show the original source code of a story, rather than the output.
 */
const transformStorySource = (code: string) => {
  const regex = /\/\*\* <SOURCE> \*\/([\s\S]*?)\/\*\* <\/SOURCE> \*\//;
  const match = code.match(regex);
  return match ? match[1].trim() : code;
};

/* ********************************************************** *
 * Stories                                                    *
 * ********************************************************** */

/**
 * The default Badge component. By default, it uses the `neutral` intent and `subtle` variant.
 * It is composed using `<Badge.Icon>` and `<Badge.Label>`.
 */
export const Primary: Story = {
  render: (args) => (
    <Badge {...args}>
      <Badge.Icon />
      <Badge.Label>Active</Badge.Label>
    </Badge>
  ),
  args: {
    variant: 'subtle',
    intent: 'success',
  },
};

/**
 * Badges come in three structural variants: `solid`, `subtle`, and `plain`.
 * The `plain` variant removes the background padding and defaults to a Dot icon for a minimalist look.
 */
export const Variant: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      console.log('Checking sub-components:', {
        Badge,
        Icon: Badge.Icon,
        Label: Badge.Label,
      });
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Badge intent="success" variant="solid">
              <Badge.Icon />
              <Badge.Label>Solid</Badge.Label>
            </Badge>
            <Badge intent="success" variant="subtle">
              <Badge.Icon />
              <Badge.Label>Subtle</Badge.Label>
            </Badge>
            <Badge intent="success" variant="plain">
              <Badge.Icon />
              <Badge.Label>Plain</Badge.Label>
            </Badge>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Badge intent="success" variant="solid">
              <Badge.Label>Solid</Badge.Label>
            </Badge>
            <Badge intent="success" variant="subtle">
              <Badge.Label>Subtle</Badge.Label>
            </Badge>
            <Badge intent="success" variant="plain">
              <Badge.Label>Plain</Badge.Label>
            </Badge>
          </div>
        </div>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    docs: { source: { transform: transformStorySource } },
  },
};

/**
 * Use the `intent` prop to communicate semantic meaning.
 * Changing the intent automatically updates the background, text color, and default icon.
 */
export const Intent: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      const intents: BadgeProps['intent'][] = [
        'neutral',
        'info',
        'success',
        'warning',
        'danger',
        'special',
      ];

      return (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {intents.map((intent) => (
            <Badge key={intent} intent={intent} variant="subtle">
              <Badge.Icon />
              <Badge.Label>{intent}</Badge.Label>
            </Badge>
          ))}
        </div>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    docs: { source: { transform: transformStorySource } },
  },
};

/**
 * While `<Badge.Icon>` renders a default semantic icon, you can pass any custom SVG or component
 * as a child to override it. The icon will automatically inherit the correct intent color.
 */
export const CustomIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Badge intent="info" variant="solid" {...args}>
        <Badge.Icon>
          <Home />
        </Badge.Icon>
        <Badge.Label>Home Network</Badge.Label>
      </Badge>

      <Badge intent="special" variant="subtle" {...args}>
        <Badge.Icon>
          <Add />
        </Badge.Icon>
        <Badge.Label>New Release</Badge.Label>
      </Badge>
    </div>
  ),
  args: {
    children: undefined,
  },
};

/**
 * If you need a completely custom layout (e.g., an animated loading state or a raw number counter),
 * you can bypass the `<Badge.Icon>` and `<Badge.Label>` sub-components and pass custom children directly.
 */
export const Loading: Story = {
  render: (args) => (
    <Badge intent="warning" variant="subtle" {...args}>
      <Spinner />
      <Badge.Label>Syncing...</Badge.Label>
    </Badge>
  ),
  args: {
    children: undefined,
  },
};

/**
 * If you need a completely custom layout (e.g., an animated loading state or a raw number counter),
 * you can bypass the `<Badge.Icon>` and `<Badge.Label>` sub-components and pass custom children directly.
 */
export const CustomChildren: Story = {
  render: (args) => (
    <Badge intent="danger" variant="solid" {...args}>
      99+
    </Badge>
  ),
  args: {
    children: undefined,
  },
};
