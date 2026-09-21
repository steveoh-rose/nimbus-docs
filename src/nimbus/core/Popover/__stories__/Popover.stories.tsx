// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, Switch } from '@nimbus/core';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from '@nimbus/assets/icons/app';
import { Popover, PopoverTrigger } from '../Popover';

type Story = StoryObj<typeof Popover>;
type MetaPreview = Meta<typeof Popover>;

/* ********************************************************** *
 * Storybook Docs Setup                                       *
 * ********************************************************** */

/** Setup story source docs */
Popover.Content.displayName = 'Popover.Content';
Popover.Header.displayName = 'Popover.Header';
Popover.Title.displayName = 'Popover.Title';
Popover.Description.displayName = 'Popover.Description';
Popover.Body.displayName = 'Popover.Body';
Popover.Footer.displayName = 'Popover.Footer';
Popover.Close.displayName = 'Popover.Close';
Button.displayName = 'Button';

const meta: MetaPreview = {
  title: 'nimbus-core/Popover',
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'requiredFirst' },
  },
  component: Popover,
};

export default meta;

/* ********************************************************** *
 * Popover Stories                                            *
 * ********************************************************** */

export const Primary: Story = {
  render: (args) => (
    <PopoverTrigger>
      <Button variant="secondary">Popover</Button>
      <Popover {...args}>
        <Popover.Content>
          <Popover.Header>
            <Popover.Title>Dimensions</Popover.Title>
            <Popover.Description>Set the dimensions for the element</Popover.Description>
          </Popover.Header>
          <Popover.Body>
            <Switch>Wifi</Switch>
            <Switch>Bluetooth</Switch>
            <Switch>Mute</Switch>
          </Popover.Body>
        </Popover.Content>
      </Popover>
    </PopoverTrigger>
  ),
};

/**
 * Use the `placement` prop to control where the Popover will appear in relation to the trigger element.
 * The default value is `bottom`.
 */
export const Placement: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <PopoverTrigger>
        <Button variant="secondary">
          <ArrowUp />
        </Button>
        <Popover placement="top" {...args}>
          <Popover.Content>
            <Popover.Body>placement top</Popover.Body>
          </Popover.Content>
        </Popover>
      </PopoverTrigger>
      <PopoverTrigger>
        <Button variant="secondary">
          <ArrowDown />
        </Button>
        <Popover placement="bottom">
          <Popover.Content>
            <Popover.Body>placement bottom</Popover.Body>
          </Popover.Content>
        </Popover>
      </PopoverTrigger>
      <PopoverTrigger>
        <Button variant="secondary">
          <ArrowLeft />
        </Button>
        <Popover placement="left">
          <Popover.Content>
            <Popover.Body>placement left</Popover.Body>
          </Popover.Content>
        </Popover>
      </PopoverTrigger>
      <PopoverTrigger>
        <Button variant="secondary">
          <ArrowRight />
        </Button>
        <Popover placement="right">
          <Popover.Content>
            <Popover.Body>placement right</Popover.Body>
          </Popover.Content>
        </Popover>
      </PopoverTrigger>
    </div>
  ),
  args: { placement: 'top' },
};

/**
 * Use the `showArrow` prop to display an arrow pointing to the trigger element.
 * The arrow will be positioned based on the `placement` prop of the Popover.
 */
export const ShowArrow: Story = {
  render: (args) => (
    <PopoverTrigger>
      <Button variant="secondary">Popover</Button>
      <Popover {...args}>
        <Popover.Content>
          <Popover.Body>This popover has an arrow</Popover.Body>
        </Popover.Content>
      </Popover>
    </PopoverTrigger>
  ),
  args: { showArrow: true, placement: 'bottom' },
};
