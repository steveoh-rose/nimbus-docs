// @ts-nocheck
import React, { ReactNode } from 'react';
import type {
  CellProps,
  TableHeaderProps,
  TableBodyProps,
  RowProps,
  ResizableTableContainerProps,
  CheckboxProps,
  ColumnProps,
  ColumnResizerProps,
  TableProps as ReactAriaTableProps,
} from 'react-aria-components';
import {
  Cell as ReactAriaCell,
  Column as ReactAriaColumn,
  Row as ReactAriaRow,
  Table as ReactAriaTable,
  TableBody as ReactAriaTableBody,
  TableHeader as ReactAriaTableHeader,
  Checkbox as ReactAriaCheckbox,
  ColumnResizer as ReactAriaColumnResizer,
  ResizableTableContainer as ReactAriaResizableTableContainer,
  Group,
  Collection,
  useTableOptions,
} from 'react-aria-components';
import {
  Check,
  ArrowDownSmall,
  ArrowUpSmall,
  Subtract,
  SwapVertical,
} from '@nimbus/assets/icons/app';
import cx from 'classnames';
import styles from './Table.module.scss';

/* ************************************************* *
 * TableProps                                        *
 * ************************************************* */
export type TableProps = ReactAriaTableProps & {
  /**
   * Additional className to apply to the table root element.
   * This can be used to apply custom styles or override default styles.
   */
  className?: string;
  /**
   * Children to render inside the table.
   * This should include Table.Header, Table.Body, Table.Row, Table.Cell, etc.
   */
  children?: React.ReactNode;
  /**
   * Whether the table is compact
   * @default false
   */
  isCompact?: boolean;
  /**
   * @returns ReactNode to render when the table is empty.
   * If not provided, a default empty state will be rendered.
   */
  renderEmptyState?: () => React.ReactNode;
  /**
   * Allows you to set a `maxWidth` on the Table root element component.
   */
  maxWidth?: React.CSSProperties['maxWidth'];
  /**
   * Allows you to set a `width` on the Table root element component.
   */
  width?: React.CSSProperties['width'];
  /**
   * Allows you to set a `minWidth` on the Table root element component.
   */
  minWidth?: React.CSSProperties['minWidth'];
  /**
   * Data attribute for E2E testing purposes
   */
  'data-test-id'?: string;
  /**
   * Data attribute for GTM purposes. Pass this property to add a custom id to the root element for GTM tracking.
   */
  'data-rac-id'?: string;
};

type CheckboxIconProps = {
  isSelected: boolean;
  isIndeterminate?: boolean;
};

/* ************************************************* *
 * Table.Checkbox                                    *
 * ************************************************* */

const CheckboxIcon = ({ isSelected, isIndeterminate }: CheckboxIconProps) => {
  if (!isSelected && !isIndeterminate) {
    return null;
  }
  const Icon = isIndeterminate ? Subtract : Check;

  return <Icon className={styles.checkboxIcon} />;
};

const Checkbox = (props: CheckboxProps & React.RefAttributes<HTMLLabelElement>) => {
  return (
    <ReactAriaCheckbox {...props} className={styles.checkbox}>
      {({ isSelected, isIndeterminate }) => (
        <CheckboxIcon isIndeterminate={isIndeterminate} isSelected={isSelected} />
      )}
    </ReactAriaCheckbox>
  );
};

/* ************************************************* *
 * Table.Cell                                        *
 * ************************************************* */

function Cell(props: CellProps & { className?: string; isCompact?: boolean }) {
  const { className, isCompact, children } = props;

  return (
    <ReactAriaCell {...props} data-compact={isCompact} className={cx(styles.cell, className)}>
      {children}
    </ReactAriaCell>
  );
}

/* ************************************************* *
 * Table.Column & Table.Column Resizer               *
 * ************************************************* */

const SORT_ICONS = {
  ascending: <ArrowDownSmall className={styles.sortIcon} aria-hidden="true" />,
  descending: <ArrowUpSmall className={styles.sortIcon} aria-hidden="true" />,
  default: <SwapVertical className={styles.sortIcon} aria-hidden="true" />,
};

function ColumnResizer(props: ColumnResizerProps & { className?: string }) {
  const { className } = props;
  return <ReactAriaColumnResizer className={cx(styles.resizer, className)} />;
}

function Column(props: ColumnProps & { children?: ReactNode; isResizable?: boolean }) {
  const { children, isResizable } = props;

  return (
    <ReactAriaColumn {...props} className={styles.header}>
      {({ allowsSorting, sortDirection }) => (
        <Group role="presentation" className={styles.group}>
          {children}
          {allowsSorting && SORT_ICONS[sortDirection || 'default']}
          {isResizable && <ColumnResizer />}
        </Group>
      )}
    </ReactAriaColumn>
  );
}

/* ************************************************* *
 * Table.Row                                         *
 * ************************************************* */

function Row<T extends object>(props: RowProps<T> & { className?: string }) {
  const { id, columns, className, children } = props;

  const { selectionBehavior } = useTableOptions();

  return (
    <ReactAriaRow id={id} {...props} className={cx(styles.row, className)}>
      {selectionBehavior === 'toggle' && (
        <Cell>
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </ReactAriaRow>
  );
}

/* ************************************************* *
 * Table.Header                                      *
 * ************************************************* */

function Header<T extends object>(props: TableHeaderProps<T> & { className?: string }) {
  const { className, columns, children } = props;
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

  return (
    <ReactAriaTableHeader {...props} className={cx(styles.header, className)}>
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <Column className={selectionBehavior && styles.isCheckboxSortable}>
          {selectionMode === 'multiple' && <Checkbox slot="selection" />}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </ReactAriaTableHeader>
  );
}

/* ************************************************* *
 * Table.Body & Empty States                         *
 * ************************************************* */

function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <p>No results found.</p>
    </div>
  );
}

function Body<T extends object>(props: TableBodyProps<T> & { className?: string }) {
  const { className, children, renderEmptyState } = props;
  return (
    <ReactAriaTableBody
      {...props}
      renderEmptyState={renderEmptyState ?? (() => <EmptyState />)}
      className={cx(className)}
    >
      {children}
    </ReactAriaTableBody>
  );
}

export function ResizableTableContainer(
  props: ResizableTableContainerProps & {
    className?: string;
    maxWidth?: React.CSSProperties['maxWidth'];
    width?: React.CSSProperties['width'];
    minWidth?: React.CSSProperties['minWidth'];
  }
) {
  const { className, children, maxWidth, width, minWidth } = props;

  return (
    <ReactAriaResizableTableContainer
      {...props}
      className={cx(styles.resizableTableContainer, className)}
      style={{ maxWidth, width, minWidth }}
    >
      {children}
    </ReactAriaResizableTableContainer>
  );
}

/* ************************************************* *
 * Table Component                                   *
 * ************************************************* */
// ForwardRef wrapper around React Aria's <Table>,
// allowing refs to access the underlying HTMLTableElement.

const _Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { children, className, isCompact, width, maxWidth, minWidth } = props;

  return (
    <ReactAriaTable
      {...props}
      ref={ref}
      data-compact={isCompact}
      className={cx(styles.table, className)}
      style={{ width, maxWidth, minWidth }}
    >
      {children}
    </ReactAriaTable>
  );
});

/**
 * Attach all subcomponents and set types for React DevTools & Storybook.
 */
export const Table = Object.assign(_Table, {
  Header,
  Column,
  Body,
  Row,
  Cell,
  ColumnResizer,
}) as ((
  props: TableProps & { ref?: React.ForwardedRef<HTMLTableElement> }
) => ReturnType<typeof _Table>) & {
  Header: typeof Header;
  Column: typeof Column;
  Body: typeof Body;
  Row: typeof Row;
  Cell: typeof Cell;
  ColumnResizer: typeof ColumnResizer;
};

Table.Header = Header;
Table.Column = Column;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.ColumnResizer = ColumnResizer;
