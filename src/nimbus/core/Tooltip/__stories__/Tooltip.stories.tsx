// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import type { TooltipTriggerProps } from '@nimbus/core/Tooltip';

import React from 'react';
import { Tooltip } from '@nimbus/core/Tooltip';
import { Button } from '@nimbus/core/Button';
import { TooltipArgTypes } from './TooltipArgTypes';
import styles from './Tooltip.stories.module.scss';

type Story = StoryObj<typeof Tooltip>;
type MetaPreview = Meta<typeof Tooltip>;

const meta: MetaPreview = {
  title: 'nimbus-core/Tooltip',
  component: Tooltip,
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'alpha' },
    docs: {
      source: {
        transform: (code) => code.replaceAll('PolymorphicButton', 'Button'),
      },
    },
  },
  argTypes: {
    ...TooltipArgTypes,
  },
};

export default meta;

export const Primary: Story = {
  render: (args) => {
    return (
      <Tooltip {...args}>
        <Tooltip.Trigger>
          <Button>Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Hidden content</Tooltip.Content>
      </Tooltip>
    );
  },
  parameters: {
    controls: {
      include: [...Object.keys(TooltipArgTypes)],
    },
  },
  args: {
    children: Tooltip.Trigger,
    variant: undefined,
    placement: undefined,
    delay: undefined,
    offset: undefined,
    allowDismiss: undefined,
    open: undefined,
    defaultOpen: undefined,
    onOpenChange: undefined,
    classes: undefined,
  },
};

/**
 * Buttons allow for variantions in different styles. With the `variation` prop,<br/>
 * you can control the colour, background color and style of the button.
 */
export const TooltipVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '15px' }}>
      <Tooltip {...args}>
        <Tooltip.Trigger>
          <Button variant="secondary">Dark</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Hidden content</Tooltip.Content>
      </Tooltip>
      <Tooltip variant="light">
        <Tooltip.Trigger>
          <Button variant="secondary">Light</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Hidden content</Tooltip.Content>
      </Tooltip>
      <Tooltip variant="accent">
        <Tooltip.Trigger>
          <Button variant="secondary">Accent</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Hidden content</Tooltip.Content>
      </Tooltip>
    </div>
  ),
  parameters: {
    controls: {
      include: ['variant'],
    },
  },
  args: {
    variant: 'dark',
  },
};

/**
 * Use the `placement` prop to set the preferred placement of the tooltip.
 */
export const Placement: Story = {
  render: (args) => {
    return (
      <div className={styles.placementGrid} {...args}>
        <Tooltip delay={0} placement="top-end">
          <Tooltip.Trigger style={{ gridArea: 'g2' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>top-end</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="top">
          <Tooltip.Trigger style={{ gridArea: 'g3' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>top</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="top-start">
          <Tooltip.Trigger style={{ gridArea: 'g4' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>top-start</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="left-start">
          <Tooltip.Trigger style={{ gridArea: 'g6' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>left-end</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="left">
          <Tooltip.Trigger style={{ gridArea: 'g11' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>left</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="left-end">
          <Tooltip.Trigger style={{ gridArea: 'g16' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>left-start</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="bottom-end">
          <Tooltip.Trigger style={{ gridArea: 'g22' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>bottom-end</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="bottom">
          <Tooltip.Trigger style={{ gridArea: 'g23' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>bottom</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="bottom-start">
          <Tooltip.Trigger style={{ gridArea: 'g24' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>bottom-start</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="right-start">
          <Tooltip.Trigger style={{ gridArea: 'g10' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>right-end</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="right">
          <Tooltip.Trigger style={{ gridArea: 'g15' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>right</Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0} placement="right-end">
          <Tooltip.Trigger style={{ gridArea: 'g20' }}>
            <Button variant="secondary">&nbsp;</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>right-start</Tooltip.Content>
        </Tooltip>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
    controls: {
      include: ['placement'],
    },
    docs: {
      source: {
        transform: () => `
            <Tooltip placement="top-end">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>top-end</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="top">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>top</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="top-start">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>top-start</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="left-start">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>left-end</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="left">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>left</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="left-end">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>left-start</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="bottom-end">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>bottom-end</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="bottom">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>bottom</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="bottom-start">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>bottom-start</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="right-start">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>right-end</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="right">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>right</Tooltip.Content>
            </Tooltip>
            <Tooltip placement="right-end">
              <Tooltip.Trigger>
                <Button />
              </Tooltip.Trigger>
              <Tooltip.Content>right-start</Tooltip.Content>
            </Tooltip>
          `,
      },
    },
  },
  args: {
    placement: 'top',
  },
};

/**
 * By default Tooltips have a short delay when hovering the trigger, or instantly when using keyboard focus.<br />
 * You can control this delay using the `delay` prop. By default the prop is set to 750ms.
 *
 *
 * Below is a tooltip delay is set to `0ms`.
 */
export const Delay: Story = {
  render: (args) => {
    return (
      <Tooltip delay={args?.delay}>
        <Tooltip.Trigger>
          <Button variant="secondary">Custom Delay</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Hidden content</Tooltip.Content>
      </Tooltip>
    );
  },
  parameters: {
    controls: {
      include: ['delay'],
    },
    sort: 'alpha',
  },
  args: {
    delay: 0,
  },
};

/**
 * The Tooltip's offset with respect to its trigger can be adjusted using the `offset` prop. <br />
 * The offset prop controls the spacing applied along the main axis between the element and its trigger.
 *
 *
 * Below is a tooltip offset by an additional `30px` above the trigger.
 */
export const Offset: Story = {
  render: (args) => {
    return (
      <Tooltip offset={args?.offset}>
        <Tooltip.Trigger>
          <Button variant="secondary">Custom Offset</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Hidden content</Tooltip.Content>
      </Tooltip>
    );
  },
  parameters: {
    controls: {
      include: ['offset'],
    },
    sort: 'alpha',
  },
  args: {
    offset: 30,
  },
};

/**
 * Tooltips can be controlled using the `open` prop with your own state hook.<br/>
 * Pass your setter to onOpenChange to allow keyboard events, blur events etc. to continue outside of the trigger.<br/>
 *
 * `Tooltip.Trigger` allows for react-aria Events such as [PressEvents](https://react-spectrum.adobe.com/react-aria/usePress.html), [HoverEvents](https://react-spectrum.adobe.com/react-aria/useHover.html) instead of using native HTMLElement only.
 */
export const Controlled: Story = {
  render: function ControlledStory(args) {
    const [open, setOpen] = React.useState(false);

    return (
      <Tooltip {...args} open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger onPress={() => setOpen((v) => !v)}>
          <Button>Click me!</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Hidden content</Tooltip.Content>
      </Tooltip>
    );
  },
  parameters: {
    controls: {
      include: ['open', 'onOpenChange'],
    },
    sort: 'alpha',
  },
  args: {
    open: undefined,
    onOpenChange: undefined,
  },
};

/**
 * You can control the tooltip from the Button props as well without using trigger.
 * In this example Button is able to replicate the state with react-aria's [PressEvents](https://react-spectrum.adobe.com/react-aria/usePress.html), [HoverEvents](https://react-spectrum.adobe.com/react-aria/useHover.html) and [FocusEvents](https://react-spectrum.adobe.com/react-aria/useFocus.html).
 */
export const ButtonEvents: Story = {
  render: function ControlledStory(args) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Tooltip open={isOpen} {...args}>
        <Tooltip.Trigger>
          <Button
            variant="secondary"
            onPress={() => setIsOpen(false)}
            onHoverStart={() => setIsOpen(true)}
            onHoverEnd={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
          >
            Button events
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Hidden content</Tooltip.Content>
      </Tooltip>
    );
  },
};

/**
 * Use the `defaultOpen` prop to set the tooltip open on render (uncontrolled).
 */
export const DefaultOpen: Story = {
  render: (args) => (
    <Tooltip defaultOpen={args.defaultOpen}>
      <Tooltip.Trigger>
        <Button variant="secondary">Default Open</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Hidden content</Tooltip.Content>
    </Tooltip>
  ),
  parameters: {
    controls: {
      include: ['defaultOpen'],
    },
    sort: 'alpha',
  },
  args: {
    defaultOpen: true,
  },
};

/**
 * Use the `allowDismiss` prop to dismiss the Tooltip upon pressing the reference element.<br/>
 * The tooltip will still work with keyboard press.
 */
export const AllowDismiss: Story = {
  render: (args) => (
    <Tooltip allowDismiss={args.allowDismiss}>
      <Tooltip.Trigger>
        <Button variant="secondary">Click to close</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Hidden content</Tooltip.Content>
    </Tooltip>
  ),
  parameters: {
    controls: {
      include: ['allowDismiss'],
    },
    sort: 'alpha',
  },
  args: {
    allowDismiss: true,
  },
};

/**
 * You can render rich content within the Tooltip.<br/>
 * Use any HTML markup you require but try and avoid interactive content as focus doesn't persist within a Tooltip.
 */
export const RichContent: Story = {
  render: (args) => (
    <Tooltip placement="right" {...args}>
      <Tooltip.Trigger>
        <Button variant="secondary">Default Open</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <h3>Price on Application</h3>
        <p>Sorry! We don’t have a price listed for this request. Please to get a price.</p>
      </Tooltip.Content>
    </Tooltip>
  ),
};

/**
 * Use the `asChild` prop to render the trigger element as the trigger rather than the wrapper div.
 */
export const AsChild: StoryObj<TooltipTriggerProps> = {
  render: (args) => (
    <Tooltip>
      <Tooltip.Trigger {...args}>
        <Button variant="secondary">Default Open</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Hidden content</Tooltip.Content>
    </Tooltip>
  ),
  parameters: {
    controls: {
      include: ['asChild'],
    },
  },
  argTypes: {
    asChild: {
      control: { type: 'boolean' },
      description:
        'Changes the default rendered `<span/>` for the element passed as a child, merging their props and behavior.',
      table: {
        category: '🔷 React Only',
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    asChild: true,
  },
};

/**
 * Use the classes API to make changes without overriding className. You can use the following psudoselectors.
 */
export const ClassesAPI: Story = {
  render: (args) => (
    <Tooltip
      classes={{
        trigger: styles.customTrigger,
        tooltip: styles.customTooltipContent,
      }}
      {...args}
    >
      <Tooltip.Trigger>I have a custom tooltip</Tooltip.Trigger>
      <Tooltip.Content>I have a custom style</Tooltip.Content>
    </Tooltip>
  ),
};
