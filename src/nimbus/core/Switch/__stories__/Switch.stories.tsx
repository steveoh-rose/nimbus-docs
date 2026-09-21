// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import type { SwitchProps } from '../Switch';
import { Switch } from '../Switch';
import SwitchArgTypes from './SwitchArgTypes';

type Story = SwitchProps & StoryObj;
type MetaPreview = SwitchProps & Meta;

const meta: MetaPreview = {
  title: 'nimbus-core/Switch',
  component: Switch,
  parameters: {
    status: {
      type: 'stable', // 'stable' | 'deprecated' | 'in development'
    },
  },
  argTypes: {
    children: {
      table: {
        category: 'Custom Props',
      },
    },
    size: {
      options: ['sm', 'lg'],
      mapping: {
        sm: 'sm',
        lg: 'lg',
      },
      table: {
        category: 'Custom Props',
      },
    },
  },
};

export default meta;

export const Primary: Story = {
  render: (args) => <Switch {...args}>Airplane mode</Switch>,
  parameters: {
    controls: {
      include: [...Object.keys(SwitchArgTypes)],
    },
  },
  argTypes: {
    ...SwitchArgTypes,
  },
};

/**
 * The controlled form of the input
 */

const ControlledExample = ({ args }) => {
  const [selected, setSelected] = useState(false);

  const handleChange = (e) => {
    setSelected(e);
  };

  return (
    <div>
      <Switch {...args} isSelected={selected} onChange={(e) => handleChange(e)}>
        Airplane mode
      </Switch>
      <div style={{ paddingTop: '16px' }}>selected: {selected.toString()}</div>
    </div>
  );
};

export const Controlled: Story = {
  render: (args) => <ControlledExample args={args} />,
};

/**
 * Switches can be used in an uncontrolled way by utilising the `<form/>` html component.
 * The following form will automatically submit using the url params. If you press "submit"
 * you can see the params in the URL change based on the off/on state of the input.
 */
export const Uncontrolled: Story = {
  render: () => {
    return (
      <form>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Switch
            id="airplane-mode"
            name="airplane-mode"
            aria-label="airplane-mode"
            defaultSelected
            value="on"
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="airplane-mode">Airplane mode</label>
        </div>
        <button style={{ marginTop: 16 }} type="submit">
          Submit
        </button>
      </form>
    );
  },
};

/**
 * Pass the `size` prop to change the size of the Switch.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Switch size="sm">Airplane mode</Switch>
      <Switch size="lg">Airplane mode</Switch>
    </div>
  ),
};

/**
 * Pass the `defaultSelected` prop to toggle on default selected (uncontrolled).
 * If you're using a controlled version of the Switch, use the `isSelected` prop.
 */
export const DefaultSelected: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Switch defaultSelected>Airplane mode</Switch>
    </div>
  ),
};

/**
 * States like `isDisabled` & `isReadOnly` have an impact on the usability of a Switch and on the styles.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch disabled>disabled</Switch>
      <Switch defaultSelected disabled>
        disabled & selected
      </Switch>
      <Switch defaultSelected readonly>
        readonly
      </Switch>
    </div>
  ),
};

/**
 * Pass the `autoFocus` prop to automatically toggle focus. This is commonly used within modals or popovers to not focus trap the user.
 */
export const AutoFocus: Story = {
  render: () => <Switch autoFocus>Auto Focus</Switch>,
};

/**
 * Take advantage of the children prop to generate more complex layouts for forms.
 * We use the style prop here, but a className via the classes API would be much better for this usecase.
 * In the future we intend to make the Switch API more accessible and easier to style for this usecase.
 */
export const Children: Story = {
  render: () => (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
          gap: '16px',
          borderBottom: 'solid 1px lightgrey',
          width: '350px',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Open Sans',
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="community" style={{ cursor: 'pointer' }}>
            Community alerts
          </label>
          <p style={{ color: '#666', fontSize: '13px' }}>
            When you are mentioned in articles or posts{' '}
          </p>
        </div>
        <Switch id="community" name="community" />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
          gap: '16px',
          borderBottom: 'solid 1px lightgrey',
          width: '350px',
          paddingTop: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Open Sans',
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="network" style={{ cursor: 'pointer' }}>
            Network alerts
          </label>
          <p style={{ color: '#666', fontSize: '13px' }}>
            Import alerts about your services are always on.
          </p>
        </div>
        <Switch id="network" defaultSelected />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
          gap: '16px',
          borderBottom: 'solid 1px lightgrey',
          width: '350px',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <div
          style={{
            fontFamily: 'Open Sans',
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="messaging" style={{ cursor: 'pointer' }}>
            Messaging alerts
          </label>
        </div>
        <Switch id="messaging" />
      </div>
    </form>
  ),
};
