// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Info } from '@nimbus/icons';
import { Tooltip } from '@nimbus/core/Tooltip';
import { Checkbox } from '../Checkbox';
import CheckboxArgTypes from './CheckboxArgTypes';

type Story = StoryObj<typeof Checkbox>;
type MetaPreview = Meta<typeof Checkbox>;

const meta: MetaPreview = {
  title: 'nimbus-core/Checkbox',
  parameters: {
    status: {
      type: 'in development', // 'stable' | 'deprecated' | 'in development'
    },
  },
  component: Checkbox,
  argTypes: {
    ...CheckboxArgTypes,
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
  render: (args) => <Checkbox {...args} />,
  parameters: {
    controls: {
      include: [...Object.keys(CheckboxArgTypes)],
      exclude: [
        'onFocus',
        'onBlur',
        'onFocusChange',
        'onKeyDown',
        'onKeyUp',
        'excludeFromTabOrder',
        'aria-controls',
        'aria-details',
        'aria-describedby',
        'aria-errormessage',
        'aria-label',
        'aria-labelledby',
        'validationState',
      ],
    },
  },
  args: {
    children: 'Label',
    hint: undefined,
    disabled: false,
    invalid: false,
    readonly: false,
    isSelected: undefined,
    indeterminate: false,
    defaultSelected: false,
    onChange: undefined,
    id: undefined,
    name: undefined,
    'data-testid': undefined,
    classes: undefined,
  },
};

/**
 * A Checkbox can be in an indeterminate state, controlled using the `indeterminate` prop.
 * This overrides the appearance of the Checkbox, whether selection is controlled or uncontrolled.
 * The Checkbox will visually remain indeterminate until the `indeterminate` prop is set to false,
 * regardless of user interaction.
 */
export const Indeterminate: Story = {
  render: (args) => <Checkbox {...args}>Label</Checkbox>,
  parameters: {
    controls: {
      include: ['indeterminate'],
    },
  },
  args: {
    indeterminate: true,
  },
};

/**
 * Pass the `readonly` prop to checkbox when the user should not be able to toggle the checkbox but be able to focus the checkbox.
 */
export const ReadOnly: Story = {
  render: (args) => (
    <>
      <Checkbox {...args}>Unselected</Checkbox>
      <br />
      <Checkbox {...args} defaultSelected>
        Selected
      </Checkbox>
      <br />
      <Checkbox {...args} hint="Amazing hint text">
        With hint
      </Checkbox>
    </>
  ),
  parameters: {
    controls: {
      include: ['readonly'],
    },
  },
  args: {
    readonly: true,
  },
};

/**
 * Pass the `disabled` prop to checkbox when the user should not be able to toggle the checkbox and not be able to focus the checkbox.
 */
export const Disabled: Story = {
  render: (args) => (
    <>
      <Checkbox {...args}>Unselected</Checkbox>
      <br />
      <Checkbox {...args} defaultSelected>
        Selected
      </Checkbox>
      <br />
      <Checkbox {...args} hint="Amazing hint text">
        With hint
      </Checkbox>
    </>
  ),
  parameters: {
    controls: {
      include: ['disabled'],
    },
  },
  args: {
    disabled: true,
  },
};

/**
 * Pass the `invalid` prop to the checkbox to place the checkbox in its invalid state
 */
export const Invalid: Story = {
  render: (args) => (
    <>
      <Checkbox {...args}>Unselected</Checkbox>
      <br />
      <Checkbox {...args} defaultSelected>
        Selected
      </Checkbox>
      <br />
      <Checkbox {...args} hint="Amazing hint text">
        With hint
      </Checkbox>
    </>
  ),
  parameters: {
    controls: {
      include: ['invalid'],
    },
  },
  args: {
    invalid: true,
  },
};

/**
 * The `isSelected` prop can be used to make the selected state controlled.
 * The onChange event is fired when the user presses the checkbox, and receives the new value.
 */
export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
        format: 'dedent',
      },
    },
  },
  render: function Render() {
    /** <SOURCE> */
    const [selected, setSelected] = useState(false);

    const handleChange = (e: boolean | ((prevState: boolean) => boolean)) => {
      setSelected(e);
    };

    return (
      <>
        <Checkbox isSelected={selected} onChange={(e) => handleChange(e)}>
          Label
        </Checkbox>
        <br />
        <span>Checkbox selected is: {selected.toString()}</span>
      </>
    );
    /** </SOURCE> */
  },
};

/**
 * Pass the `defaultSelected` prop to toggle on default selected (uncontrolled).
 * If you're using a controlled version of the checkbox, use the `selected` prop.
 */
export const DefaultSelected: Story = {
  render: (args) => <Checkbox {...args}>Label</Checkbox>,
  parameters: {
    controls: {
      include: ['defaultSelected'],
    },
  },
  args: {
    defaultSelected: true,
  },
};

/**
 * Pass the `autofocus` prop to automatically toggle focus. This is commonly used within modals or popovers to not focus trap the user.
 */
export const AutoFocus: Story = {
  render: (args) => (
    <Checkbox {...args} autoFocus>
      Label
    </Checkbox>
  ),
  parameters: {
    controls: {
      include: ['autoFocus'],
    },
  },
  args: {
    autoFocus: true,
  },
};

/**
 * Do not pass a child to the checkbox if you do not want a label. Cannot render a hint if a label is not rendered
 * An `aria-label` prop must be specified when the checkbox is used with no label, for accessibility.
 */
export const NoLabel: Story = {
  render: (args) => <Checkbox {...args} />,
  parameters: {
    controls: {
      include: ['children', 'aria-label'],
    },
  },
  args: {
    children: null,
    'aria-label': 'No label',
  },
};

/**
 * Pass the `hint` prop to render a hint with the label. The hint will not be rendered if there is no label.
 */
export const WithHint: Story = {
  render: (args) => <Checkbox {...args}>Label</Checkbox>,
  parameters: {
    controls: {
      include: ['hint'],
    },
  },
  args: {
    hint: (
      <span>
        please <a href="/">contact us</a> for support
      </span>
    ),
  },
};

/**
 * Children are a composable prop you can use to create rich content for the checkbox.
 */
export const RichContent: Story = {
  render: (args) => (
    <>
      <Checkbox {...args} hint="hint">
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
          <span>Add to cart</span>
          <Tooltip>
            <Tooltip.Trigger>
              <Info />
            </Tooltip.Trigger>
            <Tooltip.Content>Hidden content</Tooltip.Content>
          </Tooltip>
        </div>
      </Checkbox>
      <br />
      <Checkbox {...args}>
        The ordering or purchase of any products or services through this online account is subject
        to: (i) any existing service contract between PCCW Global and Customer (i.e.: the registered
        company); or (ii) in the absence of an existing service contract, PCCW Global’s general
        terms and conditions set out at{' '}
        <a href="/">https://www.pccwglobal.com/en/terms-conditions</a> in effect as of the date that
        the order is placed, and I agree to be bound by the terms of the existing service contract
        or the general terms and conditions, as the case may be.
      </Checkbox>
    </>
  ),
  parameters: {
    controls: {
      include: ['children'],
    },
  },
};
