// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Button, DialogTrigger, TextInput, Spinner } from '@nimbus/core';
import { action } from '@storybook/addon-actions';
import { Modal } from '../Modal';
import { ModalArgTypes } from './ModalArgTypes';

type Story = StoryObj<typeof Modal>;
type MetaPreview = Meta<typeof Modal>;

/**
 * ----------------------------
 * Storybook Docs Setup
 * ----------------------------
 */

const meta: MetaPreview = {
  title: 'nimbus-core/Modal',
  parameters: {
    status: {
      type: 'in-development',
    },
    controls: { sort: 'requiredFirst' },
  },
  component: Modal,
  argTypes: {
    ...ModalArgTypes,
  },
};

/**
 * Preview of Button and Trigger wont display correctly
 */
Button.displayName = 'Button';
DialogTrigger.displayName = 'DialogTrigger';

export default meta;

export const Primary: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Open Modal</Button>
      <Modal {...args}>
        <Modal.Close />
        <Modal.Header>
          <Modal.Title>Terms of Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
          25 and is meant to ensure a common set of data rights in the European Union. It requires
          organizations to notify users as soon as possible of high-risk data breaches that could
          personally affect them.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" slot="close">
            Decline
          </Button>
          <Button variant="primary" onPress={action('on-press')} slot="close">
            I accept
          </Button>
        </Modal.Footer>
      </Modal>
    </DialogTrigger>
  ),
  parameters: {
    sort: 'alpha',
  },
  args: {
    size: 'md',
    placement: 'center',
    isOpen: undefined,
    children: undefined,
    defaultOpen: undefined,
    isDismissable: undefined,
    onOpenChange: undefined,
  },
};

/**
 * When you open the modal you can use the `autoFocus` prop on most components to toggle focus programatically.
 */
export const AutoFocus: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Open Modal</Button>
      <Modal {...args}>
        <Modal.Close />
        <Modal.Header>
          <Modal.Title>Add user name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextInput autoFocus fullWidth />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" slot="close">
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </DialogTrigger>
  ),
  parameters: {
    controls: {
      include: [],
    },
  },
};

/**
 * The Modal.Title component is optional. If not provided you must provide an `aria-label` to the Modal for accessibility.
 */
export const NoTitle: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Open Modal</Button>
      <Modal {...args} aria-label="Add user name">
        <Modal.Close />
        <Modal.Body>
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
          25 and is meant to ensure a common set of data rights in the European Union. It requires
          organizations to notify users as soon as possible of high-risk data breaches that could
          personally affect them.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" slot="close">
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </DialogTrigger>
  ),
  parameters: {
    controls: {
      include: ['aria-label'],
    },
  },
};

/**
 * The sizes prop control the size of the modal `sm | md | lg | cover`
 */
export const Size: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Open Modal</Button>
      <Modal {...args}>
        <Modal.Close />
        <Modal.Header>
          <Modal.Title>Add user name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
          25 and is meant to ensure a common set of data rights in the European Union. It requires
          organizations to notify users as soon as possible of high-risk data breaches that could
          personally affect them.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" slot="close">
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </DialogTrigger>
  ),
  parameters: {
    controls: {
      include: ['size'],
    },
  },
  args: {
    size: 'md',
  },
};

/**
 * The modal is placed vertically in the center by default. Use the `placement` prop to switch between `top | center | bottom`.
 */
export const Placement: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Open Modal</Button>
      <Modal {...args}>
        <Modal.Close />
        <Modal.Header>
          <Modal.Title>Add user name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
          25 and is meant to ensure a common set of data rights in the European Union. It requires
          organizations to notify users as soon as possible of high-risk data breaches that could
          personally affect them.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" slot="close">
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </DialogTrigger>
  ),
  parameters: {
    controls: {
      include: ['placement'],
    },
  },
  args: {
    placement: 'top',
  },
};

/**
 * The modal had an internal scroll that allows the user to scroll Body.
 * Use `Modal.Header` and `Modal.Footer` to create sticky titles & actions.
 */
export const InsideScroll: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Open Modal</Button>
      <Modal {...args}>
        <Modal.Close />
        <Modal.Header>
          <Modal.Title>Inside scroll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" slot="close">
            Close
          </Button>
          <Button variant="primary" slot="close">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </DialogTrigger>
  ),
  parameters: {
    controls: {
      include: [],
    },
  },
};

/**
 * Loading states can be achieved by removing the close buttons and setting isDismissable to `false`
 */
export const Loading: Story = {
  render: function LoadingStory(args) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (!isOpen) return undefined; // Explicitly return undefined to satisfy ESLint

      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, [isOpen]);

    return (
      <DialogTrigger>
        <Button variant="primary" onPress={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal
          {...args}
          size="sm"
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          isDismissable={false}
          isKeyboardDismissDisabled
        >
          <Modal.Header>
            <Modal.Title>Good vibes?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Spinner size="lg" />
              <p>Sending good vibes...</p>
            </div>
          </Modal.Body>
        </Modal>
      </DialogTrigger>
    );
  },
};

/**
 * Most (but not all) aspects of the Modal can be controlled. This example shows controlling the isOpen prop being controlled.
 */
export const Controlled: Story = {
  render: function ControlledStory(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onPress={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
          <Modal.Close onPress={() => setIsOpen(false)} />
          <Modal.Header>
            <Modal.Title>Add user name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
            May 25 and is meant to ensure a common set of data rights in the European Union. It
            requires organizations to notify users as soon as possible of high-risk data breaches
            that could personally affect them.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onPress={() => setIsOpen(false)}>
              Close
            </Button>
            <Button variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
  parameters: {
    controls: {
      include: ['open'],
    },
    sort: 'alpha',
  },
  args: {
    isOpen: undefined,
  },
};

/**
 * This story demonstrates how to manage multiple modals within a single component.
 * The first modal contains a button that opens a second modal, which is controlled via state.
 * This approach is useful for workflows requiring sequential user input, such as multi-step forms
 * or confirmation dialogs.
 */
export const MultipleModals: Story = {
  render: function ControlledStory(args) {
    const [isSecondModalOpen, setSecondModalOpen] = useState(false);

    return (
      <DialogTrigger>
        <Button variant="primary">Open Modal</Button>
        <Modal {...args}>
          <Modal.Close />
          <Modal.Header>
            <Modal.Title>First modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This is the firt modal I have opened. It contains a button that opens a second modal.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" slot="close">
              Close
            </Button>
            <Button variant="primary" onPress={() => setSecondModalOpen(true)}>
              Open second modal
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal size="sm" isOpen={isSecondModalOpen} onOpenChange={setSecondModalOpen}>
          <Modal.Close />
          <Modal.Header>
            <Modal.Title>Second modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This is the second modal I have opened. It is controlled by a separate state from the
            first modal. This approach is useful for workflows requiring sequential user input, such
            as multi-step forms or confirmation dialogs.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" slot="close">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </DialogTrigger>
    );
  },
};
