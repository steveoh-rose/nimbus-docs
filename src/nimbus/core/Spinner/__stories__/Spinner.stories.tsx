// @ts-nocheck
import React from 'react';
import { Spinner } from '../Spinner';
import { SpinnerArgTypes } from './SpinnerArgTypes';

const meta = {
  title: 'nimbus-core/Spinner',
  parameters: {
    status: {
      type: 'stable',
    },
  },
  component: Spinner,
};

export default meta;

export const Primary = {
  render: ({ size, onDark }) => (
    <>
      {onDark ? (
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#222',
          }}
        >
          <Spinner size={size} onDark={onDark} />
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Spinner size={size} onDark={onDark} />
        </div>
      )}
    </>
  ),
  parameters: {
    controls: {
      include: [...Object.keys(SpinnerArgTypes)],
    },
  },
  argTypes: {
    ...SpinnerArgTypes,
  },
  args: {
    size: 'lg',
    onDark: false,
  },
};

/**
 * The Spinner component is available in two sizes, specify the `size` prop to create either a 'sm' or 'lg' variant.
 */
export const Size = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Spinner {...args} />
    </div>
  ),
  parameters: {
    controls: {
      include: ['size'],
    },
  },
  argTypes: {
    ...SpinnerArgTypes,
  },
  args: {
    size: 'sm',
    onDark: 'false',
  },
};

/**
 * Use the `onDark` prop to change the spinner from primary to white. This enables us to control the theming of the Spinner.
 */
export const OnDark = {
  render: ({ onDark }) => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      {onDark ? (
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#222',
          }}
        >
          <Spinner onDark={onDark} />
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Spinner onDark={onDark} />
        </div>
      )}
    </div>
  ),
  parameters: {
    controls: {
      include: ['onDark'],
    },
  },
  argTypes: {
    ...SpinnerArgTypes,
  },
  args: {
    onDark: true,
  },
};
