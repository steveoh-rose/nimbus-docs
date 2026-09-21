// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Add, Partner } from '@nimbus/assets/icons/app';
import { Antiddos } from '@nimbus/assets/icons/brand';
import { Callout, CalloutProps } from '../Callout';
import { CalloutArgTypes } from './CalloutArgTypes';

type Story = StoryObj<typeof Callout>;
type MetaPreview = Meta<typeof Callout>;

const meta: MetaPreview = {
  title: 'nimbus-core/Callout',
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'alpha' },
  },
  component: Callout,
  argTypes: {
    ...CalloutArgTypes,
  },
};

export default meta;

// Assign display names for cleaner Storybook code snippets
(Callout.Icon as any).displayName = 'Callout.Icon';
(Callout.Content as any).displayName = 'Callout.Content';
(Callout.Title as any).displayName = 'Callout.Title';
(Callout.Description as any).displayName = 'Callout.Description';

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
  render: (args) => (
    <Callout {...args}>
      <Callout.Icon />
      <Callout.Content>
        <Callout.Title>System Update</Callout.Title>
        <Callout.Description>
          Your system is currently up to date. No further action is required.
        </Callout.Description>
      </Callout.Content>
    </Callout>
  ),
  parameters: {
    docs: {
      source: { transform: transformStorySource },
    },
  },
};

/**
 * Use the `intent` prop to communicate the semantic meaning of the callout.
 * Available intents are `neutral`, `info`, `success`, `warning`, `danger`, and `special`.
 * Changing the intent automatically updates the background, border, text, and default icon.
 */
export const SemanticIntents: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      const intents: CalloutProps['intent'][] = [
        'success',
        'info',
        'warning',
        'danger',
        'special',
        'neutral',
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {intents.map((intent) => (
            <Callout key={intent} intent={intent}>
              <Callout.Icon />
              <Callout.Content>
                <Callout.Title>Title</Callout.Title>
                <Callout.Description>
                  This callout demonstrates the semantic styling and default icon for the {intent}{' '}
                  intent.
                </Callout.Description>
              </Callout.Content>
            </Callout>
          ))}
        </div>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    docs: {
      source: { transform: transformStorySource },
    },
  },
};

/**
 * Use the `variant` prop to change the structural appearance of the callout.
 * The `enclosed` variant (default) features a full bounding border and a thick accent strip.
 * The `subtle` variant removes the border, relying solely on background color and spacing for grouping.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Callout intent="info" {...args}>
        <Callout.Icon />
        <Callout.Content>
          <Callout.Title>Enclosed</Callout.Title>
          <Callout.Description>
            Features a full border wrapping the entire component with an accent strip.
          </Callout.Description>
        </Callout.Content>
      </Callout>

      <Callout intent="info" variant="subtle">
        <Callout.Icon />
        <Callout.Content>
          <Callout.Title>Subtle</Callout.Title>
          <Callout.Description>
            Removes the outer border for a softer visual presence, ideal for inline forms or nested
            layouts.
          </Callout.Description>
        </Callout.Content>
      </Callout>
    </div>
  ),
  args: { variant: 'enclosed' },
};

/**
 * While `<Callout.Icon />` automatically renders a semantic icon based on the intent,
 * you can override it by passing a custom SVG or component as a child.
 * You are able to also provide a custom color directly to the icon if required.
 * You can also omit `<Callout.Icon>` entirely if you need to use a larger, custom-sized brand icon.
 */
export const CustomIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Callout intent="special" variant="enclosed" {...args}>
        <Callout.Icon>
          <Add />
        </Callout.Icon>
        <Callout.Content>
          <Callout.Title>New Feature Available!</Callout.Title>
          <Callout.Description>
            {`We've just released the new reporting dashboard. Check it out now.`}
          </Callout.Description>
        </Callout.Content>
      </Callout>
      <Callout intent="neutral" variant="subtle">
        <Callout.Icon>
          <Partner color="red" />
        </Callout.Icon>
        <Callout.Content>
          <Callout.Title>New Feature Available!</Callout.Title>
          <Callout.Description>
            {`We've just released the new reporting dashboard. Check it out now.`}
          </Callout.Description>
        </Callout.Content>
      </Callout>
    </div>
  ),
  args: {},
};

/**
 * Instead of using `<Custom.Icon>` it's better to use brand icons directly.
 * This will prevent fills from being applied incorrectly.
 */
export const BrandIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Callout intent="neutral" {...args}>
        <Antiddos width={40} height={40} style={{ minWidth: 40 }} />
        <Callout.Content>
          <Callout.Title>Antiddos Pro is now live</Callout.Title>
          <Callout.Description>
            Experience advanced Layer 7 protection. You can now configure custom rate-limiting rules
            directly from your security settings. The layout automatically handles long text and
            prevents the custom brand icon from shrinking.
          </Callout.Description>
        </Callout.Content>
      </Callout>

      <Callout intent="neutral" variant="subtle">
        <Antiddos width={40} height={40} style={{ minWidth: 40 }} />
        <Callout.Content>
          <Callout.Title>Antiddos Pro is now live</Callout.Title>
          <Callout.Description>
            Experience advanced Layer 7 protection. You can now configure custom rate-limiting rules
            directly from your security settings. The layout automatically handles long text and
            prevents the custom brand icon from shrinking.
          </Callout.Description>
        </Callout.Content>
      </Callout>
    </div>
  ),
  args: {},
};

/**
 * Callouts provide a dedicated `<Callout.Button>` component to ensure strict visual consistency
 * and accessibility. Using `<Callout.Button>` automatically applies the semantic colors of the
 * active `intent` and leverages TypeScript to restrict the allowed variants to `primary`,
 * `outline`, and `ghost`. Standard global `<Button>` components placed inside a Callout will
 * remain completely unaffected.
 */
export const CalloutButtons: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      const intents: CalloutProps['intent'][] = [
        'neutral',
        'info',
        'success',
        'warning',
        'danger',
        'special',
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {intents.map((intent) => (
            <Callout key={intent} intent={intent}>
              <Callout.Icon />
              <Callout.Content>
                <Callout.Title>Action Required</Callout.Title>
                <Callout.Description>
                  This callout uses the <strong>{intent}</strong> semantic tokens. Notice how the
                  buttons automatically adapt to match the intent color across all variants.
                </Callout.Description>

                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <Callout.Button onPress={action(`${intent} primary clicked`)}>
                    Primary
                  </Callout.Button>
                  <Callout.Button variant="outline" onPress={action(`${intent} outline clicked`)}>
                    Outline
                  </Callout.Button>
                  <Callout.Button variant="ghost" onPress={action(`${intent} ghost clicked`)}>
                    Ghost
                  </Callout.Button>
                </div>
              </Callout.Content>
            </Callout>
          ))}
        </div>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    docs: {
      source: { transform: transformStorySource },
    },
  },
};
