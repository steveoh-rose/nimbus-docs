// @ts-nocheck
import React from 'react';
import { AriaListBoxOptions, useListBox } from 'react-aria';
import { ComboBoxState } from 'react-stately';
import classNames from 'classnames';
import { useLoadMore } from '@react-aria/utils';
import { Option } from '../Option';
import { Group } from '../Group';
import styles from './Listbox.module.scss';
import { ComboBoxClasses } from '../ComboBox';
import { LoadMoreItem } from '../LoadMoreItem';

interface ListBoxProps<T> extends AriaListBoxOptions<T> {
  state: ComboBoxState<T>;
  isLoading?: boolean;
  classes?: ComboBoxClasses;
  emptyStateNode?: React.ReactNode;
}

function Items<T extends object>({
  state,
  classes,
  emptyStateNode,
  isLoading,
}: Readonly<Partial<ListBoxProps<T>>>) {
  if (!state?.collection.size) {
    return <li className={styles.liEmpty}>{emptyStateNode ?? <span>No results found</span>}</li>;
  }

  return (
    <>
      {[...state.collection].map((item) =>
        item.type === 'section' ? (
          <Group key={item.key} section={item} state={state} classes={classes} />
        ) : (
          <Option key={item.key} item={item} state={state} classes={classes} />
        )
      )}
      {isLoading && <LoadMoreItem />}
    </>
  );
}

export function ListBox<T extends object>(
  props: Readonly<ListBoxProps<T> & { onLoadMore?: () => void }>
) {
  const { state, classes, emptyStateNode, isLoading, onLoadMore } = props;
  const ref = React.useRef(null);
  const { listBoxProps } = useListBox(props, state, ref);
  const loadMoreProps = React.useMemo(() => ({ isLoading, onLoadMore }), [isLoading, onLoadMore]);
  useLoadMore(loadMoreProps, ref);

  return (
    <ul
      {...listBoxProps}
      ref={ref}
      className={classNames(styles.root, classes?.listbox)}
      data-testid="combobox-listbox"
    >
      <Items
        state={state}
        classes={classes}
        emptyStateNode={emptyStateNode}
        isLoading={isLoading}
      />
    </ul>
  );
}
