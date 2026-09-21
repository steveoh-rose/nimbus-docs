// @ts-nocheck
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import type { TextAreaProps } from '../TextArea';

import { TextArea } from '../TextArea';
import { TextAreaArgTypes } from './TextAreaArgTypes';

type Story = TextAreaProps & StoryObj;
type MetaPreview = TextAreaProps & Meta;

const meta: MetaPreview = {
  title: 'nimbus-core/Text Area',
  parameters: {
    status: {
      type: 'in development', // 'stable' | 'deprecated' | 'in development'
    },
  },
  component: TextArea,
};

const TEXTAREA_LABEL = 'Comments';
const TEXTAREA_PLACEHOLDER = 'Post a reply';

export const Primary: Story = {
  render: (args) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: [...Object.keys(TextAreaArgTypes)],
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    value: undefined,
    hint: undefined,
    label: TEXTAREA_LABEL,
    placeholder: TEXTAREA_PLACEHOLDER,
    disabled: false,
    invalid: false,
    required: false,
    readonly: false,
    autoFocus: false,
  },
};

/**
 * The `label` prop can be used to generate a label for the input.
 * This props sets the htmlFor attribute to a random generated id.
 * You are able to overwrite the this attribute if you need to take control of the htmlFor prop.
 */
export const WithLabel: Story = {
  render: (args) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: ['label', 'required'],
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    placeholder: TEXTAREA_PLACEHOLDER,
    label: TEXTAREA_LABEL,
    required: false,
  },
};

/**
 * The `fullWidth` prop can be used to make the text input full width.
 */
export const FullWidth: Story = {
  render: (args) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: ['fullWidth'],
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    placeholder: TEXTAREA_PLACEHOLDER,
    label: TEXTAREA_LABEL,
    fullWidth: true,
  },
};

/**
 * The `hint` prop can be used to create a prop for the description of the input.
 * This props sets the aria-describedby attribute to a random generated id.
 * The hint appears below the input.
 */
export const WithHint: Story = {
  render: (args) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: 'hint',
      hint: {
        control: 'text',
      },
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    placeholder: TEXTAREA_PLACEHOLDER,
    hint: 'Enter your email to proceed',
  },
};

export const Disabled: Story = {
  render: (args) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: 'disabled',
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    label: TEXTAREA_LABEL,
    placeholder: TEXTAREA_PLACEHOLDER,
    hint: 'Your comments will be public',
    disabled: true,
  },
};

export const Required: Story = {
  render: (args) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: ['required'],
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    placeholder: TEXTAREA_PLACEHOLDER,
    label: TEXTAREA_LABEL,
    required: true,
  },
};

export const ReadOnly: Story = {
  render: (args) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: ['readonly'],
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    placeholder: TEXTAREA_PLACEHOLDER,
    label: TEXTAREA_LABEL,
    readonly: true,
  },
};

export const Invalid: Story = {
  render: (args: ArgTypes) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: ['invalid'],
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    placeholder: TEXTAREA_PLACEHOLDER,
    label: TEXTAREA_LABEL,
    hint: 'Enter an email to continue',
    invalid: true,
  },
};

/**
 * The controlled form of the input
 */

export function Controlled() {
  const [name, setName] = useState('Rocky III');

  const handleNameChange = (inputName: string) => {
    setName(inputName);
  };

  return (
    <div>
      <TextArea value={name} onChange={(e: string) => handleNameChange(e)} />
      <pre>value: {name}</pre>
    </div>
  );
}

/**
 * TextArea can be used in an uncontrolled way by utilising the `<form/>` html component.
 * The following form will automatically submit using the url params. If you press "submit"
 * you can see the params in the URL change based on the off/on state of the input.
 */
export const Uncontrolled: Story = {
  render: (args: ArgTypes) => {
    return (
      <form>
        <TextArea {...args} />
        <button style={{ marginTop: 16 }} type="submit">
          Submit
        </button>
      </form>
    );
  },
  parameters: {
    controls: {
      include: ['defaultValue', 'label', 'name', 'type'],
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    label: TEXTAREA_LABEL,
    placeholder: TEXTAREA_PLACEHOLDER,
    name: 'Posts',
    defaultValue: 'I love CC connect comments!! 🎉',
  },
};

/**
 * The `autoFocus` prop is an attribute for indicating that an element should be focused on page load,
 * or when the element appears on the DOM. Refresh the page to trigger autoFocus.
 */
export const AutoFocus: Story = {
  render: (args: ArgTypes) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: 'autoFocus',
      autoFocus: {
        control: 'boolean',
      },
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    placeholder: TEXTAREA_PLACEHOLDER,
    autoFocus: true,
  },
};

/**
 * The `resize` prop can be used to change the resize mode of the text area.
 * This props allows you to switch between `vertical` | `horizontal` | `both` | `none`, allowing the user to only resize the text area is the direction specified.
 */
export const Resize: Story = {
  render: (args: ArgTypes) => <TextArea {...args} />,
  parameters: {
    controls: {
      include: ['resize'],
    },
  },
  argTypes: {
    ...TextAreaArgTypes,
  },
  args: {
    resize: 'both',
    label: TEXTAREA_LABEL,
    placeholder: TEXTAREA_PLACEHOLDER,
  },
};

export default meta;
