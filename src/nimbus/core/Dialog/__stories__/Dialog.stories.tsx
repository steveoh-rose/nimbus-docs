// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@nimbus/core';
import { Dialog } from '../Dialog';
import styles from './Dialog.stories.module.scss';

type Story = StoryObj<typeof Dialog>;
type MetaPreview = Meta<typeof Dialog>;

/* ********************************************************** *
 * Storybook Docs Setup                                       *
 * ********************************************************** */
const meta: MetaPreview = {
  title: 'nimbus-core/Dialog',
  parameters: {
    status: {
      type: 'in-development',
    },
    controls: { sort: 'requiredFirst' },
  },
  component: Dialog,
};

/**
 * Preview of Button and Trigger wont display correctly
 */
Button.displayName = 'Button';

export default meta;

/* ********************************************************** *
 * Dialog Stories                                             *
 * ********************************************************** */

export const Primary: Story = {
  render: (args) => (
    <div className={styles.card}>
      <Dialog {...args}>
        <Dialog.Header>
          <Dialog.Title>Terms of Service</Dialog.Title>
          <Dialog.Description>Last updated: January 2024</Dialog.Description>
          <Dialog.Close />
        </Dialog.Header>
        <Dialog.Body>
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
          25 and is meant to ensure a common set of data rights in the European Union. It requires
          organizations to notify users as soon as possible of high-risk data breaches that could
          personally affect them.
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="secondary" slot="close">
            Decline
          </Button>
          <Button variant="primary">I accept</Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  ),
  parameters: {
    sort: 'alpha',
  },
};
