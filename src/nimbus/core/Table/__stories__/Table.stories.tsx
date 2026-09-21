// @ts-nocheck
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { useAsyncList } from 'react-stately';
import { Order } from '@nimbus/assets/icons/brand';

import { Table, ResizableTableContainer } from '../Table';
import styles from './Table.stories.module.scss';
import { TableArgTypes } from './TableArgTypes';

type Story = StoryObj<typeof Table>;
type MetaPreview = Meta<typeof Table>;

/* ********************************************************** *
 * Storybook Docs Setup                                       *
 * ********************************************************** */

/**
 * Set Readable Table display names for storybook code
 */
(Table as React.FunctionComponent).displayName = 'Table';
(Table.Header as React.FunctionComponent).displayName = 'Table.Header';
(Table.Column as React.FunctionComponent).displayName = 'Table.Column';
(Table.Body as React.FunctionComponent).displayName = 'Table.Body';
(Table.Row as React.FunctionComponent).displayName = 'Table.Row';
(Table.Cell as React.FunctionComponent).displayName = 'Table.Cell';
(Table.ColumnResizer as React.FunctionComponent).displayName = 'Table.ColumnResizer';

const meta: MetaPreview = {
  title: 'nimbus-core/Table',
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'requiredFirst' },
  },
  component: Table,
  argTypes: {
    ...TableArgTypes,
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

/* ********************************************************** *
 * Table Stories                                              *
 * ********************************************************** */

export const Primary: Story = {
  render: (args) => (
    <Table aria-label="Primary Table" {...args}>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: {
    sort: 'alpha',
    controls: {
      include: [...Object.keys(TableArgTypes)],
    },
  },
  argTypes: {
    ...TableArgTypes,
  },
  args: {
    selectionMode: undefined,
  },
};

/**
 * Table makes use of `Collections`, a concept in react-aria-components that allows for a JSX-based interface to help maps
 * over your data and applies a function for each item to render it. The following example shows how a collection can be
 * rendered based on dynamic data for both the `Table.Column` and `Table.Row` components.
 *
 * [React Aria Docs | Dynamic Collections](https://react-spectrum.adobe.com/react-aria/collections.html#dynamic-collections)
 * <br/>
 * [React Aria Docs | Table Collections](https://react-spectrum.adobe.com/react-aria/Table.html#resize-events)
 */
export const Dynamic: Story = {
  render: () => {
    /** <SOURCE> */
    const columns = [
      { key: 'name', name: 'Name' },
      { key: 'type', name: 'Type' },
      { key: 'dateModified', name: 'Date Modified' },
    ] as const;

    const items = [
      { id: 'Games', name: 'Games', type: 'File folder', dateModified: '6/7/2020' },
      { id: 'ProgramFiles', name: 'Program Files', type: 'File folder', dateModified: '4/7/2021' },
      { id: 'bootmgr', name: 'bootmgr', type: 'System file', dateModified: '11/20/2010' },
      { id: 'log.txt', name: 'log.txt', type: 'Text Document', dateModified: '1/18/2016' },
    ];

    return (
      <Table aria-label="Table with Row Actions">
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column isRowHeader id={column.key}>
              {column.name}
            </Table.Column>
          )}
        </Table.Header>

        <Table.Body items={items}>
          {(item) => (
            <Table.Row id={item.id} key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell>{item.dateModified}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
    /** </SOURCE> */
  },
  parameters: {
    sort: 'alpha',
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
  },
};

/**
 * When `isCompact` is set to true, the table will have less padding and margins.
 * This is useful for displaying more data in a smaller space.
 */
export const IsCompact: Story = {
  render: (args) => (
    <Table aria-label="Table is compact" {...args}>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: {
    sort: 'alpha',
    controls: {
      include: ['isCompact'],
    },
  },
  args: {
    isCompact: true,
  },
};

/**
 * By default, Table doesn't allow row selection but this can be enabled using the `selectionMode` prop.
 * The `selectionMode` prop can be set to `single`, `multiple`, or `none`.
 * When `selectionMode` is set to `single`, only one row can be selected at a time.
 */
export const SingleSelection: Story = {
  render: (args) => (
    <Table aria-label="Single selection table" {...args}>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: {
    sort: 'alpha',
    controls: {
      include: ['selectionMode'],
    },
  },
  args: { selectionMode: 'single' },
};

/**
 * When `disallowEmptySelection` is set to true, the table will not allow the user to deselect all rows.
 */
export const DisallowEmptySelection: Story = {
  render: (args) => (
    <Table aria-label="Disallow empty selection table" selectionMode="single" {...args}>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: {
    sort: 'alpha',
    controls: {
      include: ['disallowEmptySelection'],
    },
  },
  args: { disallowEmptySelection: true },
};

/**
 * When `selectionMode` is set to `multiple`, the table allows multiple rows to be selected.
 * The user can select multiple rows by holding down the Ctrl (or Cmd on Mac) key while clicking on rows.
 */
export const MultipleSelection: Story = {
  render: (args) => (
    <Table aria-label="Multiple selections table" {...args}>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: {
    sort: 'alpha',
    controls: {
      include: ['selectionMode'],
    },
  },
  args: { selectionMode: 'multiple' },
};

/**
 * Use `defaultSelectedKeys` to provide a default set of selected rows.
 * Please note that the value of the selected keys must match the `id` prop of the row.
 * For example, if your is `id={"mike"}` your defaultSelectedKeys prop much match `defaultSelectedKeys={["mike"]}`.
 */
export const DefaultSelectedKeys: Story = {
  render: (args) => (
    <Table aria-label="Default selections table" selectionMode="multiple" {...args}>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row id={1}>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row id={2}>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row id={3}>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row id={4}>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: {
    sort: 'alpha',
    controls: {
      include: ['defaultSelectedKeys'],
    },
  },
  args: { defaultSelectedKeys: [2, 4] },
};

/**
 * To programmatically control row selection, use the selectedKeys prop paired with the onSelectionChange callback.
 * The id prop from the selected rows will be passed into the callback when the row is pressed, allowing you to update state accordingly.
 */
export const ControlledSingleSelection: Story = {
  render: () =>
    (function () {
      const [selectedKeys, setSelectedKeys] = useState(new Set(['Games', 'Programs']));

      return (
        <Table
          aria-label="Controlled single selection table"
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={(id) => setSelectedKeys(id as Set<string>)}
        >
          <Table.Header>
            <Table.Column>Name</Table.Column>
            <Table.Column>Type</Table.Column>
            <Table.Column>Date Modified</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row id="Games">
              <Table.Cell>Games</Table.Cell>
              <Table.Cell>File folder</Table.Cell>
              <Table.Cell>6/7/2020</Table.Cell>
            </Table.Row>
            <Table.Row id="Programs">
              <Table.Cell>Program Files</Table.Cell>
              <Table.Cell>File folder</Table.Cell>
              <Table.Cell>4/7/2021</Table.Cell>
            </Table.Row>
            <Table.Row id="bootmgr">
              <Table.Cell>bootmgr</Table.Cell>
              <Table.Cell>System file</Table.Cell>
              <Table.Cell>11/20/2010</Table.Cell>
            </Table.Row>
            <Table.Row id="log.txt">
              <Table.Cell>log.txt</Table.Cell>
              <Table.Cell>Text Document</Table.Cell>
              <Table.Cell>1/18/2016</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    })(),
  parameters: {
    sort: 'alpha',
    controls: {
      include: ['selectedKeys', 'onSelectionChange'],
    },
  },
};

/**
 * This story demonstrates how to implement client-side sorting in a table.
 * It uses the `useAsyncList` hook to fetch data from an API and sort it based on user interaction.
 * The table allows users to sort by clicking on the column headers.
 * The `sortDescriptor` and `sort` function are used to manage the sorting state.
 * The `items` array is populated with data fetched from the API, and the table displays this data.
 * The `allowsSorting` prop on the `Table.Column` components enables sorting functionality for those columns.
 */
export const Sortable: Story = {
  render: () => {
    const SortableTable = () => {
      /** <SOURCE> */
      interface Character {
        name: string;
        height: number;
        mass: number;
        birth_year: number;
      }
      const { items, sortDescriptor, sort } = useAsyncList<Character>({
        async load({ signal }) {
          const res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
            signal,
          });
          const json = await res.json();
          return {
            items: json.results,
          };
        },
        async sort({ items: tableItems, sortDescriptor: descriptor }) {
          return {
            items: tableItems.sort((a, b) => {
              const first = a[descriptor.column];
              const second = b[descriptor.column];
              let cmp = (parseInt(first, 10) || first) < (parseInt(second, 10) || second) ? -1 : 1;
              if (descriptor.direction === 'descending') {
                cmp *= -1;
              }
              return cmp;
            }),
          };
        },
      });

      return (
        <Table
          aria-label="Client side sortable table"
          sortDescriptor={sortDescriptor}
          onSortChange={sort}
          selectionMode="multiple"
        >
          <Table.Header>
            <Table.Column id="name" allowsSorting isRowHeader>
              Name
            </Table.Column>
            <Table.Column id="height" allowsSorting>
              Height
            </Table.Column>
            <Table.Column id="mass" allowsSorting>
              Mass
            </Table.Column>
            <Table.Column id="birth_year" allowsSorting>
              Birth Year
            </Table.Column>
          </Table.Header>

          <Table.Body items={items}>
            {(item) => (
              <Table.Row id={item.name}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.height}</Table.Cell>
                <Table.Cell>{item.mass}</Table.Cell>
                <Table.Cell>{item.birth_year}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      );
      /** </SOURCE> */
    };
    return <SortableTable />;
  },
  parameters: {
    sort: 'alpha',
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
    controls: {
      include: ['onSortChange', 'sortDescriptor'],
    },
  },
};

/**
 * You can use useAsyncList on the server as well. This function will return a `sort` fn() and a `sortDescriptor`.
 * These properties will trigger when passed to the onSortChange prop and the header is clicked.
 *
 */
export const ServerSideSort: Story = {
  render: () => {
    const ServerSortableTable = () => {
      /** <SOURCE> */
      interface Character {
        name: string;
        height: number;
        mass: number;
        birth_year: number;
      }

      const { items, sortDescriptor, sort } = useAsyncList<Character>({
        async load({ signal, sortDescriptor: descriptor }) {
          const url = new URL('http://example.com/api');
          if (descriptor) {
            url.searchParams.append('sort_key', descriptor.column as string);
            url.searchParams.append('sort_direction', descriptor.direction);
          }

          const res = await fetch(url, { signal });
          const json = await res.json();
          return {
            items: json.results,
          };
        },
      });

      return (
        <Table
          aria-label="Client side sortable table"
          sortDescriptor={sortDescriptor}
          onSortChange={sort}
          selectionMode="multiple"
        >
          <Table.Header>
            <Table.Column id="name" allowsSorting isRowHeader>
              Name
            </Table.Column>
            <Table.Column id="height" allowsSorting>
              Height
            </Table.Column>
            <Table.Column id="mass" allowsSorting>
              Mass
            </Table.Column>
            <Table.Column id="birth_year" allowsSorting>
              Birth Year
            </Table.Column>
          </Table.Header>

          <Table.Body items={items}>
            {(item) => (
              <Table.Row id={item.name}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.height}</Table.Cell>
                <Table.Cell>{item.mass}</Table.Cell>
                <Table.Cell>{item.birth_year}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      );
      /** </SOURCE> */
    };
    return <ServerSortableTable />;
  },
  parameters: {
    sort: 'alpha',
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
    controls: {
      include: ['onSortChange', 'sortDescriptor'],
    },
  },
};

/**
 * If you need to display an empty state when there are no results, you can use the `renderEmptyState` prop on the Table.Body component.
 * This prop accepts a function that returns a React element to display when there are no items in the body.
 * If you do not provide a `renderEmptyState` prop, the default empty state will be displayed.
 */
export const EmptyState: Story = {
  render: (args) => (
    <>
      <h2>Custom Empty State</h2>
      <Table aria-label="Custom Empty State">
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Type</Table.Column>
          <Table.Column>Date Modified</Table.Column>
        </Table.Header>
        <Table.Body renderEmptyState={args.renderEmptyState}>{[]}</Table.Body>
      </Table>
      <h2>Default Empty State</h2>
      <Table aria-label="Default Empty State">
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Type</Table.Column>
          <Table.Column>Date Modified</Table.Column>
        </Table.Header>
        <Table.Body>{[]}</Table.Body>
      </Table>
    </>
  ),
  parameters: {
    sort: 'alpha',
    controls: {
      include: ['renderEmptyState'],
    },
  },
  args: {
    renderEmptyState: () => (
      <div className={styles.empty}>
        <Order className={styles.brand} />
        <span>
          <h3>No Results found</h3>
          <p>There are no records to display for the selected date range</p>
        </span>
      </div>
    ),
  },
};

/**
 * Use the `onRowAction` prop to create actions from clicking rows.
 * In the default "toggle" selection behavior, when nothing is selected, clicking or tapping the row triggers the row action. When at least one item is selected, the table is in selection mode, and clicking or tapping a row toggles the selection. Actions may also be triggered via the Enter key, and selection using the Space key.
 * This behavior is slightly different in the "replace" selection behavior, where single clicking selects the row and actions are performed via double click.
 */
export const OnRowAction: Story = {
  render: (args) => {
    const columns = [
      { key: 'name', name: 'Name' },
      { key: 'type', name: 'Type' },
      { key: 'dateModified', name: 'Date Modified' },
    ] as const;

    const items = [
      { id: 'Games', name: 'Games', type: 'File folder', dateModified: '6/7/2020' },
      { id: 'ProgramFiles', name: 'Program Files', type: 'File folder', dateModified: '4/7/2021' },
      { id: 'bootmgr', name: 'bootmgr', type: 'System file', dateModified: '11/20/2010' },
      { id: 'log.txt', name: 'log.txt', type: 'Text Document', dateModified: '1/18/2016' },
    ];

    return (
      <Table
        aria-label="Table with Row Actions"
        onRowAction={(key) => action('onRowAction')(`Opening ${key}`)}
        {...args}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column isRowHeader id={column.key}>
              {column.name}
            </Table.Column>
          )}
        </Table.Header>

        <Table.Body items={items}>
          {(item) => (
            <Table.Row id={item.id} key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell>{item.dateModified}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  },
  parameters: {
    sort: 'alpha',
    controls: { include: ['onRowAction'] },
  },
};

/**
 * Rows may also have a row action specified by directly applying onAction on the Row itself.
 * This may be especially convenient in static collections.
 * If `onAction` is also provided to the Table, both the table's and the row's onAction are called.
 */
export const OnAction: Story = {
  render: (args) => (
    <Table aria-label="Table with Row Actions" {...args}>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row onAction={action(`onAction: Opening Games`)}>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row onAction={action(`onAction: Opening Blastoise`)}>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row onAction={action(`onAction: Opening Venusaur`)}>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row onAction={action(`onAction: Opening Pikachu`)}>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: {
    sort: 'alpha',
  },
};

/**
 * Pass the `href` prop to the `<Row>` component in order to create link rows.
 */
export const Links: Story = {
  render: () => (
    <Table aria-label="Table with Links" selectionMode="multiple">
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row href="https://adobe.com/" target="_blank">
          <Table.Cell>Adobe</Table.Cell>
          <Table.Cell>https://adobe.com/</Table.Cell>
          <Table.Cell>January 28, 2023</Table.Cell>
        </Table.Row>
        <Table.Row href="https://google.com/" target="_blank">
          <Table.Cell>Google</Table.Cell>
          <Table.Cell>https://google.com/</Table.Cell>
          <Table.Cell>April 5, 2023</Table.Cell>
        </Table.Row>
        <Table.Row href="https://nytimes.com/" target="_blank">
          <Table.Cell>New York Times</Table.Cell>
          <Table.Cell>https://nytimes.com/</Table.Cell>
          <Table.Cell>July 12, 2023</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: {
    sort: 'alpha',
    controls: { include: ['href'] },
  },
};

/**
 * Use the `isDisabled` prop on Table.Row to disable specific rows.
 */
export const DisabledRows: Story = {
  render: (args) => (
    <Table aria-label="Disabled Table" selectionMode="multiple" {...args}>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row isDisabled>
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: {
    sort: 'alpha',
    controls: { include: ['isDisabled'] },
  },
};

/**
 * To create a resizable table, you can use the `ResizableTableContainer` component.
 * This component wraps the `Table` component and provides the ability to resize columns by dragging the `ColumnResizer`.
 * The `isResizable` prop is a required prop on `Table.Column` to make specific columns resizable.
 * You can also set the `minWidth`, `maxWidth`, and `width` props on `Table.Column` to control the size of the columns.
 * The `ResizableTableContainer` component will automatically handle the resizing logic for you.
 */
export const Resizable: Story = {
  render: (args) => (
    <ResizableTableContainer minWidth={700} maxWidth={1000}>
      <Table aria-label="Resizable Table" {...args}>
        <Table.Header>
          <Table.Column minWidth={200} isResizable isRowHeader>
            Name
          </Table.Column>
          <Table.Column minWidth={200} isResizable>
            Type
          </Table.Column>
          <Table.Column minWidth={200}>Date Modified</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Games</Table.Cell>
            <Table.Cell>File folder</Table.Cell>
            <Table.Cell>6/7/2020</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Program Files</Table.Cell>
            <Table.Cell>File folder</Table.Cell>
            <Table.Cell>4/7/2021</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>bootmgr</Table.Cell>
            <Table.Cell>System file</Table.Cell>
            <Table.Cell>11/20/2010</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>log.txt</Table.Cell>
            <Table.Cell>Text Document</Table.Cell>
            <Table.Cell>1/18/2016</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </ResizableTableContainer>
  ),
  parameters: {
    sort: 'alpha',
  },
};
