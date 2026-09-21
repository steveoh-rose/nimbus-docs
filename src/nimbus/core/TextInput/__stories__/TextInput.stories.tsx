// @ts-nocheck
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ChevronDown } from '@nimbus/icons';
import type { TextInputProps } from '../TextInput';

import { TextInput } from '../TextInput';
import { TextInputArgTypes } from './TextInputArgTypes';

type Story = TextInputProps & StoryObj;
type MetaPreview = TextInputProps & Meta;

const meta: MetaPreview = {
  title: 'nimbus-core/Text Input',
  parameters: {
    status: {
      type: 'stable', // 'stable' | 'deprecated' | 'in development'
    },
  },
  component: TextInput,
};

const EMAIL_LABEL = 'User email';
const EMAIL_PLACEHOLDER = 'Email';

export const Primary: Story = {
  render: (args) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: [...Object.keys(TextInputArgTypes)],
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    value: undefined,
    hint: undefined,
    label: EMAIL_LABEL,
    placeholder: EMAIL_PLACEHOLDER,
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
  render: (args) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: ['label', 'required'],
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    placeholder: EMAIL_PLACEHOLDER,
    label: EMAIL_LABEL,
    required: false,
  },
};

/**
 * TextInput component provides the ability to include addons on both the left and right sides of the input field.
 * Each prop accepts a React.Node, allowing for the flexibility to set them statically or dynamically based on the component's properties.
 */
export const Addon: Story = {
  render: (args) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: ['startAddon', 'endAddon'],
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    startAddon: 'Prefix',
    endAddon: <ChevronDown />,
    placeholder: EMAIL_PLACEHOLDER,
    label: EMAIL_LABEL,
  },
};

/**
 * TextInput allows a togglable state for loading using the `loading` prop.
 * This prop will create a spinner inside of the TextInput component to indicate a loading state.
 */
export const Loading: Story = {
  render: (args) => <TextInput {...args} loading />,
  parameters: {
    controls: {
      include: ['loading'],
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    placeholder: EMAIL_PLACEHOLDER,
    label: EMAIL_LABEL,
  },
};

/**
 * The `fullWidth` prop can be used to make the text input full width.
 */
export const FullWidth: Story = {
  render: (args) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: ['fullWidth'],
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    placeholder: EMAIL_PLACEHOLDER,
    label: EMAIL_LABEL,
    fullWidth: true,
  },
};

/**
 * The `hint` prop can be used to create a prop for the description of the input.
 * This props sets the aria-describedby attribute to a random generated id.
 * The hint appears below the input.
 */
export const WithHint: Story = {
  render: (args) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: 'hint',
      hint: {
        control: 'text',
      },
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    placeholder: EMAIL_PLACEHOLDER,
    hint: 'Enter your email to proceed',
  },
};

export const Disabled: Story = {
  render: (args) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: 'disabled',
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    label: EMAIL_LABEL,
    placeholder: EMAIL_PLACEHOLDER,
    hint: 'Enter your email to proceed',
    disabled: true,
  },
};

export const Required: Story = {
  render: (args) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: ['required'],
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    placeholder: EMAIL_PLACEHOLDER,
    label: EMAIL_LABEL,
    required: true,
  },
};

export const ReadOnly: Story = {
  render: (args) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: ['readonly'],
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    placeholder: EMAIL_PLACEHOLDER,
    label: EMAIL_LABEL,
    defaultValue: 'rockybalboa@consoleconnect.com',
    readonly: true,
  },
};

export const Invalid: Story = {
  render: (args: ArgTypes) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: ['invalid'],
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    placeholder: EMAIL_PLACEHOLDER,
    label: EMAIL_LABEL,
    hint: 'Enter an email to continue',
    defaultValue: 'rockybalboa@consoleconnect.com',
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
      <TextInput value={name} onChange={(e: string) => handleNameChange(e)} />
      <pre>value: {name}</pre>
    </div>
  );
}

/**
 * TextInput can be used in an uncontrolled way by utilising the `<form/>` html component.
 * The following form will automatically submit using the url params. If you press "submit"
 * you can see the params in the URL change based on the off/on state of the input.
 */
export const Uncontrolled: Story = {
  render: (args: ArgTypes) => {
    return (
      <form>
        <TextInput {...args} />
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
    ...TextInputArgTypes,
  },
  args: {
    label: EMAIL_LABEL,
    placeholder: EMAIL_PLACEHOLDER,
    name: 'Email',
    type: 'email',
    defaultValue: 'rockybalbo@consoleconnect.acom',
  },
};

/**
 * The `autoFocus` prop is an attribute for indicating that an element should be focused on page load,
 * or when the element appears on the DOM. Refresh the page to trigger autoFocus.
 */
export const AutoFocus: Story = {
  render: (args: ArgTypes) => <TextInput {...args} />,
  parameters: {
    controls: {
      include: 'autoFocus',
      autoFocus: {
        control: 'boolean',
      },
    },
  },
  argTypes: {
    ...TextInputArgTypes,
  },
  args: {
    placeholder: EMAIL_PLACEHOLDER,
    autoFocus: true,
  },
};

export default meta;
