// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies, react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Product } from '../../../icons/Brand';
import { ComboBox, useAsyncList } from '..';
import { ComboBoxArgTypes } from './ComboBoxArgTypes';
import styles from './ComboBox.stories.module.scss';

type Story = StoryObj<typeof ComboBox>;
type MetaPreview = Meta<typeof ComboBox>;

const meta: MetaPreview = {
  title: 'nimbus-core/ComboBox',
  component: ComboBox,
  parameters: {
    status: {
      type: 'in development', // 'stable' | 'deprecated' | 'in development'
    },
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

const fixedHeightDecorator = (height: number) => (Story: React.FC) => (
  <div style={{ height }}>
    <Story />
  </div>
);

export const Primary: Story = {
  render: (args) => (
    <ComboBox {...args}>
      <ComboBox.Item>Australia</ComboBox.Item>
      <ComboBox.Item>China</ComboBox.Item>
      <ComboBox.Item>United Kingdom</ComboBox.Item>
    </ComboBox>
  ),
  parameters: {
    controls: {
      include: [...Object.keys(ComboBoxArgTypes)],
    },
  },
  argTypes: {
    ...ComboBoxArgTypes,
  },
  args: {
    hint: undefined,
    label: 'Country',
    placeholder: 'Select a country',
    disabled: false,
    invalid: false,
    required: false,
    readonly: false,
    autoFocus: false,
  },
  decorators: [fixedHeightDecorator(350)],
};

/**
 * The `fullWidth` prop can be used to make the text input full width.
 */
export const FullWidth: Story = {
  render: (args) => (
    <ComboBox {...args}>
      <ComboBox.Item>Australia</ComboBox.Item>
      <ComboBox.Item>China</ComboBox.Item>
      <ComboBox.Item>United Kingdom</ComboBox.Item>
    </ComboBox>
  ),
  args: {
    label: 'Country',
    fullWidth: true,
  },
  decorators: [fixedHeightDecorator(210)],
};

/**
 * The `invalid` prop can be used to render an error state.
 */
export const Invalid: Story = {
  render: (args) => (
    <ComboBox {...args}>
      <ComboBox.Item>Australia</ComboBox.Item>
      <ComboBox.Item>China</ComboBox.Item>
      <ComboBox.Item>United Kingdom</ComboBox.Item>
    </ComboBox>
  ),
  args: {
    label: 'Country',
    invalid: true,
    required: true,
    hint: 'Enter a country',
  },
  decorators: [fixedHeightDecorator(210)],
};

/**
 * The `disabled` prop can be used to disable the input.
 */
export const Disabled: Story = {
  render: (args) => (
    <ComboBox {...args}>
      <ComboBox.Item>Australia</ComboBox.Item>
      <ComboBox.Item>China</ComboBox.Item>
      <ComboBox.Item>United Kingdom</ComboBox.Item>
    </ComboBox>
  ),
  args: {
    label: 'Country',
    disabled: true,
    placeholder: 'Select a country',
  },
};

/**
 * Whether the input can be selected but not changed by the user.
 */
export const ReadOnly: Story = {
  render: (args) => (
    <ComboBox {...args}>
      <ComboBox.Item key="AU">Australia</ComboBox.Item>
      <ComboBox.Item key="CN">China</ComboBox.Item>
      <ComboBox.Item key="UK">United Kingdom</ComboBox.Item>
    </ComboBox>
  ),
  args: {
    label: 'Country',
    readonly: true,
    placeholder: 'Select a country',
    selectedKey: 'UK',
  },
};

/**
 * Whether the ComboBox allows a non-item matching input value to be set.
 */
export const AllowsCustomValue: Story = {
  render: (args) => (
    <ComboBox {...args}>
      <ComboBox.Item>Australia</ComboBox.Item>
      <ComboBox.Item>China</ComboBox.Item>
      <ComboBox.Item>United Kingdom</ComboBox.Item>
    </ComboBox>
  ),
  args: {
    label: 'Country',
    allowsCustomValue: true,
    allowsEmptyCollection: false,
  },
  decorators: [fixedHeightDecorator(210)],
};

/**
 * Options can be individually disabled by using the `disabledKeys` prop.
 */
export const DisabledOptions: Story = {
  render: (args) => (
    <ComboBox {...args}>
      <ComboBox.Item key="AU">Australia</ComboBox.Item>
      <ComboBox.Item key="CN">China</ComboBox.Item>
      <ComboBox.Item key="UK">United Kingdom</ComboBox.Item>
    </ComboBox>
  ),
  args: {
    label: 'Country',
    disabledKeys: ['CN', 'UK'],
  },
  decorators: [fixedHeightDecorator(210)],
};

/**
 * A custom element can be displayed when no results are found.
 * Try searching searching for a country that is not in the options:
 */
export const CustomEmptyState: Story = {
  render: (args) => (
    <ComboBox {...args} emptyStateNode={<div>There are no countries matching that term.</div>}>
      <ComboBox.Item>Australia</ComboBox.Item>
      <ComboBox.Item>China</ComboBox.Item>
      <ComboBox.Item>United Kingdom</ComboBox.Item>
    </ComboBox>
  ),
  args: {
    label: 'Country',
  },
  decorators: [fixedHeightDecorator(210)],
};

/**
 * Most (but not all) aspects of the ComboBox can be controlled. This example shows controlling the selected item with the `selectedKey` and `onSelectionChange` props.
 */
export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
  },
  decorators: [fixedHeightDecorator(210)],
  render: () => {
    /** <SOURCE> */
    const [selected, setSelected] = useState<React.Key>('1');
    const items = [
      { id: 1, label: 'Apple' },
      { id: 2, label: 'Banana' },
      { id: 3, label: 'Coconut' },
    ];

    return (
      <ComboBox label="Fruit" selectedKey={selected} onSelectionChange={setSelected}>
        {items.map((item) => (
          <ComboBox.Item key={item.id} textValue={item.label}>
            {item.label}
          </ComboBox.Item>
        ))}
      </ComboBox>
    );
    /** </SOURCE> */
  },
};

/**
 * This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle infinite loading and filtering of data from a server.
 * `useAsyncList` is exported by Nimbus UI for ease of use with async ComboBoxes. The state can also be handled manually if required.
 *
 * Use `loadingState="loading"` or `loadingState="filtering"` to display a loading indicator inside the input field, and `loadingState="loadingMore"` to display it inside the dropdown listbox.
 * When paired with `useAsyncList`, the spinner automatically appears on the input during the initial load and switches to the listbox when the user scrolls down to load more items.
 */
export const AsyncLoading: Story = {
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
  },
  decorators: [fixedHeightDecorator(380)],
  render: () => {
    /** <SOURCE> */
    const list = useAsyncList<{ name: string }>({
      async load({ signal, filterText, cursor }) {
        const res = await fetch(
          cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`,
          {
            signal,
          }
        );
        const json = await res.json();

        return {
          items: json.results,
          cursor: json.next,
        };
      },
    });

    return (
      <ComboBox
        label="Star Wars character"
        placeholder="Select a Star Wars character"
        items={list.items}
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
        loadingState={list.loadingState}
        onLoadMore={list.loadMore}
      >
        {(item) => <ComboBox.Item key={item.name}>{item.name}</ComboBox.Item>}
      </ComboBox>
    );
    /** </SOURCE> */
  },
};

/**
 * The ComboBox accepts both static and dynamic collections. This is useful when options come from dynamic data sources, such as from an API call.
 * The ComboBox receives its options through the defaultItems prop. Every item can take a key prop which is relayed to the onSelectionChange handler to determine the chosen item. However, if the item objects have an id property, as demonstrated in the example below, it will be used by default, eliminating the need for a key prop.
 */
export const DynamicCollections: Story = {
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
  },
  decorators: [fixedHeightDecorator(380)],
  render: () => {
    /** <SOURCE> */
    const options = [
      { id: 1, name: 'Aerospace' },
      { id: 2, name: 'Mechanical' },
      { id: 3, name: 'Civil' },
      { id: 4, name: 'Biomedical' },
      { id: 5, name: 'Nuclear' },
      { id: 6, name: 'Industrial' },
      { id: 7, name: 'Chemical' },
      { id: 8, name: 'Agricultural' },
      { id: 9, name: 'Electrical' },
    ];
    const [majorId, setMajorId] = React.useState<React.Key>();

    return (
      <>
        <ComboBox
          label="Pick a engineering major"
          defaultItems={options}
          onSelectionChange={setMajorId}
        >
          {(item) => <ComboBox.Item>{item.name}</ComboBox.Item>}
        </ComboBox>
        <p>Selected topic id: {majorId}</p>
      </>
    );
    /** </SOURCE> */
  },
};

/**
 * Items can be grouped in Sections. Each Section takes a title and a key prop.
 */
export const Sections: Story = {
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  decorators: [fixedHeightDecorator(380)],
  render: () => (
    <ComboBox label="Choose sandwich contents">
      <ComboBox.Section title="Veggies">
        <ComboBox.Item key="lettuce">Lettuce</ComboBox.Item>
        <ComboBox.Item key="tomato">Tomato</ComboBox.Item>
        <ComboBox.Item key="onion">Onion</ComboBox.Item>
      </ComboBox.Section>
      <ComboBox.Section title="Protein">
        <ComboBox.Item key="ham">Ham</ComboBox.Item>
        <ComboBox.Item key="tuna">Tuna</ComboBox.Item>
        <ComboBox.Item key="tofu">Tofu</ComboBox.Item>
      </ComboBox.Section>
      <ComboBox.Section title="Condiments">
        <ComboBox.Item key="mayo">Mayonaise</ComboBox.Item>
        <ComboBox.Item key="mustard">Mustard</ComboBox.Item>
        <ComboBox.Item key="ranch">Ranch</ComboBox.Item>
      </ComboBox.Section>
    </ComboBox>
  ),
};

/**
 * Items can contain additional content, such as icons and descriptions to better communicate options.
 */
export const ComplexItems: Story = {
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  decorators: [fixedHeightDecorator(380)],
  render: () => {
    return (
      <ComboBox label="Select a company">
        <ComboBox.Section title="AI">
          <ComboBox.Item key="DeepMind" textValue="DeepMind">
            <div className={styles.complexItem}>
              <Product />
              <div>
                <strong>DeepMind</strong>
                <div>Google&apos;s AI research lab focused on deep learning.</div>
              </div>
            </div>
          </ComboBox.Item>
          <ComboBox.Item key="OpenAI" textValue="OpenAI">
            <div className={styles.complexItem}>
              <Product />
              <div>
                <strong>OpenAI</strong>
                <div>Independent research organization pushing the boundaries of AI.</div>
              </div>
            </div>
          </ComboBox.Item>
          <ComboBox.Item key="SenseTime" textValue="SenseTime">
            <div className={styles.complexItem}>
              <Product />
              <div>
                <strong>SenseTime</strong>
                <div>Leading AI company specializing in computer vision and deep learning.</div>
              </div>
            </div>
          </ComboBox.Item>
        </ComboBox.Section>

        <ComboBox.Section title="SaaS">
          <ComboBox.Item key="Salesforce" textValue="Salesforce">
            <div className={styles.complexItem}>
              <Product />
              <div>
                <strong>Salesforce</strong>
                <div>Leading CRM platform and cloud-based software provider.</div>
              </div>
            </div>
          </ComboBox.Item>
          <ComboBox.Item key="Slack" textValue="Slack">
            <div className={styles.complexItem}>
              <Product />
              <div>
                <strong>Slack</strong>
                <div>Collaboration tool for team communication.</div>
              </div>
            </div>
          </ComboBox.Item>
          <ComboBox.Item key="Shopify" textValue="Shopify">
            <div className={styles.complexItem}>
              <Product />
              <div>
                <strong>Shopify</strong>
                <div>E-commerce platform for online stores.</div>
              </div>
            </div>
          </ComboBox.Item>
        </ComboBox.Section>

        <ComboBox.Section title="Cloud">
          <ComboBox.Item key="Amazon Web Services (AWS)" textValue="Amazon Web Services (AWS)">
            <div className={styles.complexItem}>
              <Product />
              <div>
                <strong>Amazon Web Services (AWS)</strong>
                <div>
                  Comprehensive cloud services platform offering computing power, storage, and more.
                </div>
              </div>
            </div>
          </ComboBox.Item>
          <ComboBox.Item key="Microsoft Azure" textValue="Microsoft Azure">
            <div className={styles.complexItem}>
              <Product />
              <div>
                <strong>Microsoft Azure</strong>
                <div>Cloud computing platform and infrastructure by Microsoft.</div>
              </div>
            </div>
          </ComboBox.Item>
          <ComboBox.Item key="Google Cloud Platform (GCP)" textValue="Google Cloud Platform (GCP)">
            <div className={styles.complexItem}>
              <Product />
              <div>
                <strong>Google Cloud Platform (GCP)</strong>
                <div>
                  Google&apos;s suite of cloud computing, storage, and data analytics services.
                </div>
              </div>
            </div>
          </ComboBox.Item>
        </ComboBox.Section>
      </ComboBox>
    );
  },
};
