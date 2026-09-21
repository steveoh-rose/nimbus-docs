// @ts-nocheck
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { MoreVertical } from '@nimbus/assets/icons/app';
import { PolymorphicButton as CoreButtonStory, Button as CoreButton, PressEvent } from '../Button';
import { ButtonArgTypes } from './ButtonArgTypes';
import styles from './Button.stories.module.scss';

type Story = StoryObj<typeof Button>;
type MetaPreview = Meta<typeof Button>;

const meta: MetaPreview = {
  title: 'nimbus-core/Button',
  parameters: {
    status: {
      type: 'stable',
    },
    controls: { sort: 'alpha' },
  },
  component: CoreButtonStory,
};

export default meta;

/**
 * Need to rename Button from core as this will print out on the source PolymorphicButton
 * @returns Button from /core
 */
const Button = (args) => <CoreButton {...args} />;

export const Primary: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
  parameters: {
    controls: {
      include: [...Object.keys(ButtonArgTypes)],
    },
    sort: 'alpha',
  },
  argTypes: {
    ...ButtonArgTypes,
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: undefined,
    loading: false,
    loadingText: undefined,
    disabled: false,
    rounded: false,
    autoFocus: false,
    onFocus: undefined,
    onBlur: undefined,
    onPressStart: undefined,
    onPressEnd: undefined,
    onPress: undefined,
  },
};

/**
 * Buttons allow for variantions in different styles. With the `variation` prop, you can control the colour, background color and style of the button without having to explicitly
 */
export const ButtonVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '15px' }}>
      <Button {...args}>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="subtle">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="brand">Button</Button>
      <Button variant="negative">Button</Button>
    </div>
  ),
  parameters: {
    controls: {
      include: ['variant', 'brandColor'],
    },
  },
  argTypes: {
    ...ButtonArgTypes,
  },
  args: {
    variant: 'primary',
  },
};

/**
 * Use the `brandColor` prop in conjunction with the `variant="brand"` prop to allow for a custom brand colour from
 * one of the design tokens we have. This prop is usually used best with lighter colours such as accent-bright-2.
 */
export const BrandColor: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  parameters: {
    controls: {
      include: ['brandBgColor', 'brandTextColor'],
      brandBgColor: {
        control: 'select',
      },
      brandTextColor: {
        control: 'select',
      },
    },
  },
  argTypes: {
    ...ButtonArgTypes,
  },
  args: {
    variant: 'brand',
    brandBgColor: 'accent-bright-2',
    brandTextColor: 'text-100',
  },
};

/**
 * A Button size can be changed using the `size` prop.
 * This prop allows you to specify "sm" or "lg" which will change the size of the button.
 */
export const Size: Story = {
  render: ({ size = undefined }) => (
    <div style={{ display: 'flex', gap: '15px' }}>
      <Button variant="secondary" size={size || 'sm'}>
        Button
      </Button>
      <Button variant="secondary" size={size || 'lg'}>
        Button
      </Button>
    </div>
  ),
  parameters: {
    controls: {
      include: ['size'],
    },
  },
  argTypes: {
    ...ButtonArgTypes,
  },
  args: {
    size: undefined,
  },
};

/**
 * A Button border radius can be changed using the `rounded` prop.
 * Setting this prop to true or false will allow you toggle. Implicity by including this prop it will toggle radius.
 */
export const Rounded: Story = {
  render: ({ rounded }) => (
    <div style={{ display: 'flex', gap: '15px' }}>
      <Button variant="secondary" size="sm" rounded={rounded}>
        Button
      </Button>
      <Button variant="secondary" size="lg" rounded={rounded}>
        Button
      </Button>
    </div>
  ),
  parameters: {
    controls: {
      include: ['rounded'],
    },
  },
  argTypes: {
    ...ButtonArgTypes,
  },
  args: {
    rounded: true,
  },
};

/**
 * Button supports user interactions via mouse, keyboard, and touch.
 * You can handle all of these via the `onPress` prop.
 * This is similar to the standard `onClick` event, but normalized to support all interaction methods equally.
 * In addition, the `onPressStart`, `onPressEnd`, and `onPressChange` events are fired as the user interacts
 * with the button.
 */
export const OnPress: Story = {
  render: (args) => (
    <Button variant="secondary" {...args}>
      Click me!
    </Button>
  ),
  parameters: {
    controls: {
      include: ['onPress'],
    },
  },
  argTypes: { onPress: { action: 'clicked' } },
};

/**
 * A Button can be set to have autoFocus using the `autoFocus` prop. This prop allows you to automatically toggle focus on render.
 * This is useful for modals and portals inside of your components and should mainly be used as a focus trap.
 */
export const AutoFocus: Story = {
  render: ({ autoFocus }) => (
    <Button variant="secondary" autoFocus={autoFocus}>
      Button
    </Button>
  ),
  parameters: {
    controls: {
      include: ['autoFocus'],
    },
  },
  args: { autoFocus: true },
};

/**
 * A Button can be disabled using the `disabled` prop.

 */
export const Disabled: Story = {
  render: ({ disabled }) => <Button disabled={disabled}>Button</Button>,
  parameters: {
    controls: {
      include: ['disabled'],
    },
  },
  args: { disabled: true },
};

/**
 * A Button can be toggled as loading using the `loading` prop.
 * Use the `loadingText` prop as a method to create loading text inside the button
 */
export const Loading: Story = {
  render: ({ loading, loadingText }) => (
    <Button variant="secondary" loading={loading} loadingText={loadingText}>
      Button
    </Button>
  ),
  parameters: {
    controls: {
      include: ['loading', 'loadingText'],
    },
  },
  args: { loading: true, loadingText: 'Loading...' },
};

/**
 * Using a custom icon can be easy by including it as a child. The fill will be inherited from the parent. You can specify a custom colour using a className.
 */
export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      {/* Nimbus Assets Icon */}
      <Button variant="secondary">
        <MoreVertical />
      </Button>
      {/* Custom Icon with padding to stop cut off */}
      <Button variant="secondary" classes={{ root: styles.customIcon }}>
        12
      </Button>
    </div>
  ),
};

/**
 * A Button can be toggled to show `fullWidth`.
 */
export const FullWidth: Story = {
  render: ({ fullWidth }) => (
    <Button variant="secondary" fullWidth={fullWidth}>
      Checkout
    </Button>
  ),
  parameters: {
    controls: {
      include: ['fullWidth'],
    },
  },
  args: { fullWidth: true },
};

/**
 * The `as` prop can be used to transform the underlying HTML element to the correct button type.
 * The HTML element can be any element but the most common are `a`, `button` and `RouterLink` by React Router.
 */
export const PolymorphicButton: Story = {
  render: () => (
    <Button variant="secondary" as="a" href="/">
      Link
    </Button>
  ),
};

/**
 * Use the classes API to make changes without destroying the button. You can use the following psudoselectors.
 * ```
 * data-pressed="true"
   data-hovered="true"
   data-focus-visible="true"
   data-size="sm | lg"
   data-rounded="true"
   data-loading="true"
   data-disabled="true"
   data-full-width="true"
 * ```
 */
export const ClassesAPI: Story = {
  render: () => (
    <Button classes={{ root: 'my-cool-class' }} variant="brand" brandBgColor="accent-bright-1-100">
      Button
    </Button>
  ),
};

/**
 * Press events propagate by default. You can use `stopPropagation` on the `PressEvent` to stop the event from bubbling.
 */
export const PressEventPropagation: Story = {
  render: () => (
    <div onClick={() => alert('This should not fire!')}>
      <Button
        onPress={(event: PressEvent) => {
          event.stopPropagation();
        }}
      >
        Button
      </Button>
    </div>
  ),
};
