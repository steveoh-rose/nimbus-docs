// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sizeSpacerMd, sizeSpacerSm, sizeSpacerXl } from '@nimbus/tokens/build/js/_variables';
import { Flex } from '../Flex';
import { FlexArgTypes } from './FlexArgTypes';
import styles from './Flex.stories.module.scss';

type Story = StoryObj<typeof Flex>;
type MetaPreview = Meta<typeof Flex>;

const meta: MetaPreview = {
  title: 'nimbus-core/Layout/Flex',
  parameters: {
    status: { type: 'stable' },
    controls: { sort: 'alpha' },
  },
  component: Flex,
  argTypes: FlexArgTypes,
  decorators: [
    (Story) => (
      <div className={styles.story}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

// Helper Box component to visualize layout items
const Box = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    className={styles.box}
    style={{
      ...style,
    }}
  >
    {children}
  </div>
);

/**
 * Extract source code between comments for clean display in Storybook.
 */
const transformStorySource = (code: string) => {
  const regex = /\/\*\* <SOURCE> \*\/([\s\S]*?)\/\*\* <\/SOURCE> \*\//;
  const match = code.match(regex);
  return match ? match[1].trim() : code;
};

/* ********************************************************** *
 * Stories                                                    *
 * ********************************************************** */

/**
 * The default Flex container. By default, it sets standard flexbox behavior (row, stretch, nowrap).
 */
export const Primary: Story = {
  render: (args) => (
    <Flex {...args}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Flex>
  ),
  args: {
    gap: sizeSpacerMd,
  },
};

/**
 * The `direction` prop defines the main axis of the container, controlling layout flow.
 * Supports `row` (default), `column`, `row-reverse`, and `column-reverse`.
 */
export const Direction: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      return (
        <Flex direction="column" gap={sizeSpacerXl}>
          <div>
            <h4 className={styles.heading}>Row (Default)</h4>
            <Flex direction="row" gap={sizeSpacerSm}>
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </Flex>
          </div>

          <div>
            <h4 className={styles.heading}>Column</h4>
            <Flex direction="column" gap={sizeSpacerSm} style={{ maxWidth: '200px' }}>
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </Flex>
          </div>

          <div>
            <h4 className={styles.heading}>Row Reverse</h4>
            <Flex direction="row-reverse" gap={sizeSpacerSm}>
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </Flex>
          </div>
        </Flex>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    docs: { source: { transform: transformStorySource } },
  },
};

/**
 * Aligning elements is straightforward using the `justify` (main-axis) and `align` (cross-axis) props.
 */
export const AlignmentAndJustification: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      return (
        <Flex direction="column" gap={sizeSpacerXl}>
          <div>
            <h4 className={styles.heading}>Justify Content: Space-Between</h4>
            <Flex justify="space-between" gap={sizeSpacerMd} className={styles.dashed}>
              <Box>Left</Box>
              <Box>Center</Box>
              <Box>Right</Box>
            </Flex>
          </div>

          <div>
            <h4 className={styles.heading}>Align Items: Center (with mixed heights)</h4>
            <Flex align="center" gap={sizeSpacerMd} className={styles.dashed}>
              <Box style={{ height: '40px' }}>Short</Box>
              <Box style={{ height: '80px' }}>Tall</Box>
              <Box style={{ height: '60px' }}>Medium</Box>
            </Flex>
          </div>
        </Flex>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    docs: { source: { transform: transformStorySource } },
  },
};

/**
 * Use the `gap` prop to easily define consistent margins between items, avoiding tricky CSS margin margin selectors.
 * Supports string values (like `1.5rem` or `10%`) and numbers (which append `px`).
 */
export const GapConfig: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      return (
        <Flex direction="column" gap={sizeSpacerXl}>
          <div>
            <h4 className={styles.heading}>Numeric Gap (15px design token)</h4>
            <Flex gap={sizeSpacerMd}>
              <Box>A</Box>
              <Box>B</Box>
              <Box>C</Box>
            </Flex>
          </div>

          <div>
            <h4 className={styles.heading}>String Gap (3rem)</h4>
            <Flex gap="3rem">
              <Box>A</Box>
              <Box>B</Box>
              <Box>C</Box>
            </Flex>
          </div>
        </Flex>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    docs: { source: { transform: transformStorySource } },
  },
};

/**
 * Using the `as` prop, you can easily alter the underlying HTML tag to keep markup semantically correct.
 */
export const SemanticsAndPolymorphism: Story = {
  render: () =>
    (function () {
      /** <SOURCE> */
      return (
        <Flex direction="column" gap={sizeSpacerXl}>
          <div>
            <h4 className={styles.heading}>Rendered as an Ordered List (`&lt;ol&gt;`)</h4>
            <Flex as="ol" direction="column" gap={sizeSpacerMd}>
              <li>First Item</li>
              <li>Second Item</li>
              <li>Third Item</li>
            </Flex>
          </div>

          <div>
            <h4 className={styles.heading}>Rendered as a Semantic Header (`&lt;header&gt;`)</h4>
            <Flex
              as="header"
              justify="space-between"
              align="center"
              gap={sizeSpacerMd}
              className={styles.nav}
            >
              <div style={{ fontWeight: 'bold' }}>Logo</div>
              <Flex as="nav" gap={sizeSpacerSm}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </Flex>
            </Flex>
          </div>
        </Flex>
      );
      /** </SOURCE> */
    })(),
  parameters: {
    docs: { source: { transform: transformStorySource } },
  },
};
