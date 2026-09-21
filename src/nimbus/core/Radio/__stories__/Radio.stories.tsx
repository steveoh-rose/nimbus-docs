// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies, react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Label } from '@nimbus/core/Label/Label';
import { Tooltip } from '@nimbus/core';
import { Info } from '@nimbus/icons';
import { RadioArgTypes } from './RadioArgTypes';
import { Radio } from '../Radio';
import styles from './Radio.stories.module.scss';

type Story = StoryObj<typeof Radio.Group>;
type MetaPreview = Meta<typeof Radio.Group>;

const propsOmmitedFromProvider = ['data-testid', 'classes', 'label', 'orientation', 'hint'];
const RadioGroupProviderArgTypes = Object.assign(
  {},
  ...Object.keys(RadioArgTypes)
    .filter((key) => !propsOmmitedFromProvider.includes(key))
    .map((key) => ({ [key]: RadioArgTypes[key] }))
);

const meta: MetaPreview = {
  title: 'nimbus-core/Radio',
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'alpha' },
  },
  component: Radio.Group,
  argTypes: {
    ...RadioArgTypes,
  },
};

export default meta;

/**
 * Extract source code between comments.
 * Used to show the original source code of a story, rather than the output.
 */
const transformStorySource = (code: string) => {
  const regex = /\/\*\* <SOURCE> \*\/([\s\S]*?)\/\*\* <\/SOURCE> \*\//;
  const renderContentMatch = code.match(regex);
  return renderContentMatch ? renderContentMatch[1].trim() : code;
};

export const Primary: Story = {
  render: (args) => (
    <Radio.Group {...args} aria-label="group-aria-label">
      <Radio value="brisbane">Brisbane</Radio>
      <Radio value="london">London</Radio>
      <Radio value="kowloon">Kowloon</Radio>
      <Radio value="thessaloniki">Thessaloniki</Radio>
    </Radio.Group>
  ),
  parameters: {
    controls: {
      include: [...Object.keys(RadioArgTypes)],
    },
  },
  args: {
    children: Radio,
    label: undefined,
    value: undefined,
    hint: undefined,
    disabled: false,
    invalid: false,
    required: false,
    readonly: false,
    orientation: 'vertical',
    defaultValue: undefined,
  },
};

/**
 * The `disabled` prop can be used to render an error state on either the `Radio.Group` or the individual `Radio` buttons.
 * If a single radio is disabled, it will be taken out of the focus order flow.
 */
export const Disabled: Story = {
  render: (args) => (
    <>
      <Radio.Group {...args}>
        <Radio value="gojo">Gojo</Radio>
        <Radio value="naruto">Naruto</Radio>
        <Radio value="midoria">Midoria</Radio>
        <Radio value="goku">Goku</Radio>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group label="Single disabled">
        <Radio value="gojo">Gojo</Radio>
        <Radio value="naruto" disabled>
          Naruto
        </Radio>
        <Radio value="midoria">Midoria</Radio>
        <Radio value="goku">Goku</Radio>
      </Radio.Group>
    </>
  ),
  parameters: {
    controls: {
      include: ['disabled'],
    },
  },
  args: {
    children: Radio,
    label: 'Disabled Group',
    disabled: true,
  },
};

/**
 * The `invalid` prop can be used to render an error state on the `Radio.Group`.
 */
export const Invalid: Story = {
  render: (args) => (
    <Radio.Group {...args}>
      <Radio value="gojo">Gojo</Radio>
      <Radio value="naruto">Naruto</Radio>
      <Radio value="midoria">Midoria</Radio>
      <Radio value="goku">Goku</Radio>
    </Radio.Group>
  ),
  parameters: {
    controls: {
      include: ['invalid'],
    },
  },
  args: {
    children: Radio,
    label: 'Group invalid',
    invalid: true,
  },
};

/**
 * The `label` prop lets you customize labels dynamically using a render prop.
 * By supplying a function to `label`, you can create labels with special features
 * like tooltips and icons. The function receives `labelProps` and `required` values
 * for further customization. In the example below, the `Radio.Group` component
 * showcases how to use the `label` render prop to generate dynamic labels
 * for different input choices.
 */
export const CustomLabel: Story = {
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
  },
  render: () => (
    /** <SOURCE> */
    <Radio.Group
      required
      label={({ labelProps, required }) => {
        return (
          <>
            <Label {...labelProps} required={required}>
              Dynamic Label
            </Label>
            <Tooltip delay={0}>
              <Tooltip.Trigger height={24}>
                <Info />
              </Tooltip.Trigger>
              <Tooltip.Content>This is a label</Tooltip.Content>
            </Tooltip>
          </>
        );
      }}
    >
      <Radio value="credit">Credit Card</Radio>
      <Radio value="invoice">Invoice</Radio>
    </Radio.Group>
    /** </SOURCE> */
  ),
};

/**
 * The `required` prop can be used to change the form element into a required form element. This has two benefits,
 * firstly it creates a visual cue as a red * and it natively changes the froms behaviour by setting required as an aria-label.
 */
export const Required: Story = {
  render: (args) => (
    <Radio.Group {...args}>
      <Radio value="gojo">Gojo</Radio>
      <Radio value="naruto">Naruto</Radio>
      <Radio value="midoria">Midoria</Radio>
      <Radio value="goku">Goku</Radio>
    </Radio.Group>
  ),
  parameters: {
    controls: {
      include: ['required'],
    },
  },
  args: {
    children: Radio,
    label: 'Label',
    required: true,
  },
};

/**
 * Use the `defaultValue` prop to create select a default radio. This prop takes a value as a string.
 */
export const DefaultValue: Story = {
  render: (args) => (
    <Radio.Group {...args}>
      <Radio value="gojo">Gojo</Radio>
      <Radio value="naruto">Naruto</Radio>
      <Radio value="midoria">Midoria</Radio>
      <Radio value="goku">Goku</Radio>
    </Radio.Group>
  ),
  parameters: {
    controls: {
      include: ['defaultValue'],
    },
  },
  args: {
    children: Radio,
    label: 'Label',
    defaultValue: 'gojo',
  },
};

/**
 * The `hint` prop can be used to create a prop for the description of the input on either the `Radio.Group` or the individual `Radio` buttons.
 * This props sets the aria-describedby attribute to a random generated id when used for `Radio.Group`.
 * The hint appears below the input.
 */
export const WithHint: Story = {
  render: (args) => (
    <>
      <Radio.Group {...args}>
        <Radio value="credit">Credit Card</Radio>
        <Radio value="invoice">Invoice</Radio>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group label="Single Radio hint">
        <Radio value="credit" hint="Extra charges may apply.">
          Credit Card
        </Radio>
        <Radio value="invoice">Invoice</Radio>
      </Radio.Group>
    </>
  ),
  parameters: {
    controls: {
      include: ['hint'],
    },
  },
  args: {
    children: Radio,
    label: 'Group hint',
    hint: 'Subsequent invoices will be issued at the beginning of each month.',
  },
};

/**
 * The `oritentation` prop can be used to set the display of the radios in a radio group.
 * This props sets the aria-orientation attribute as well.
 * By default it's set to `[aria-orientation="vertical"]`.
 */
export const Orientation: Story = {
  render: (args) => (
    <Radio.Group {...args} orientation="horizontal">
      <Radio value="credit">Credit Card</Radio>
      <Radio value="invoice">Invoice</Radio>
    </Radio.Group>
  ),
  parameters: {
    controls: {
      include: ['orientation'],
    },
  },
  args: {
    children: Radio,
    label: 'Payment Method',
    hint: 'Subsequent invoices will be issued at the beginning of each month.',
  },
};

/**
 * Individual radios allow you to set Rich content as they accept any valid JSX element.
 * You can create custom hints this way for the individual radio that also enable clicks.
 * If you want to go even further you can create titles, cards etc using radio groups.
 */
export const RichContent: Story = {
  render: (args) => (
    <Radio.Group {...args}>
      <Radio value="dynamic">
        <span>Dynamic Routing</span>
        <p className={styles.hint}>Use dynamic routing if you have custom APN</p>
      </Radio>
      <Radio value="static">
        <span>Static Routing</span>
        <p className={styles.hint}>Use static routing if you do not have a custom APN</p>
      </Radio>
    </Radio.Group>
  ),
  parameters: {
    controls: {
      include: [],
    },
  },
  args: {
    children: Radio,
    label: 'Select a plan',
  },
};

/**
 * The Radio.Group can be controlled to use a custom state. This example
 * shows controlling the selected item with the `value` and `onChange` props.
 */
export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
  },
  render: () => {
    /** <SOURCE> */
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const items = [
      { id: 1, label: 'Apple' },
      { id: 2, label: 'Banana' },
      { id: 3, label: 'Coconut' },
    ];

    return (
      <Radio.Group label="Fruit" value={selected} onChange={setSelected}>
        {items.map((item) => (
          <Radio key={item.id} value={item.label}>
            {item.label}
          </Radio>
        ))}
      </Radio.Group>
    );
    /** </SOURCE> */
  },
};

/**
 * The `Radio.GroupProvider` provides state information to child components.
 * It can be used when you don't want to propagate `Radio.Group` styles (e.g: wrapping a Table element).
 */
export const GroupProvider: Story = {
  render: (args) => (
    <Radio.GroupProvider {...args} aria-label="provider-aria-label">
      <Radio value="gojo">Gojo</Radio>
      <Radio value="naruto">Naruto</Radio>
      <Radio value="midoria">Midoria</Radio>
      <Radio value="goku">Goku</Radio>
    </Radio.GroupProvider>
  ),
  parameters: {
    controls: {
      include: [...Object.keys(RadioGroupProviderArgTypes)],
    },
  },
  args: {
    children: Radio,
    value: undefined,
    hint: undefined,
    disabled: false,
    invalid: false,
    required: false,
    readonly: false,
    orientation: 'vertical',
    defaultValue: undefined,
  },
};
