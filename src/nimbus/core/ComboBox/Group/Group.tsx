// @ts-nocheck
import React from 'react';
import { useListBoxSection } from 'react-aria';
import { ComboBoxState, Node } from 'react-stately';
import { Option } from '../Option';
import styles from './Group.module.scss';
import { ComboBoxClasses } from '../ComboBox';

interface GroupProps<T> {
  section: Node<T>;
  state: ComboBoxState<T>;
  classes?: ComboBoxClasses;
}

export function Group<T extends object>({ section, state, classes }: Readonly<GroupProps<T>>) {
  const childNodes = Array.from(state.collection.getChildren?.(section.key) ?? []);
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li role="presentation" className={styles.separator} />
      )}
      <li {...itemProps} className={classes?.group} data-testid="combobox-group">
        {section.rendered && (
          <span {...headingProps} className={styles.heading}>
            {section.rendered}
          </span>
        )}
        <ul {...groupProps} className={styles.ul}>
          {childNodes.map((node) => (
            <Option key={node.key} item={node} state={state} classes={classes} />
          ))}
        </ul>
      </li>
    </>
  );
}
