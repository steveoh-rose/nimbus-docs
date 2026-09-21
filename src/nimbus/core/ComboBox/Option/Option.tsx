// @ts-nocheck
import React from 'react';
import { useOption } from 'react-aria';
import { ComboBoxState, Node } from 'react-stately';
import classNames from 'classnames';
import styles from './Option.module.scss';
import { ReactComponent as Check } from './check.svg';
import { ComboBoxClasses } from '../ComboBox';

interface OptionProps<T> {
  item: Node<T>;
  state: ComboBoxState<T>;
  classes?: ComboBoxClasses;
}

export function Option<T extends object>({ item, state, classes }: Readonly<OptionProps<T>>) {
  const ref = React.useRef(null);
  const { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      className={classNames(styles.root, classes?.option)}
      data-selected={isSelected}
      data-focused={isFocused}
      data-disabled={isDisabled}
      data-testid="combobox-option"
    >
      <div className={styles.inner}>
        <div className={styles.rendered}>{item.rendered}</div>
        <div aria-hidden className={styles.indicator}>
          {isSelected && <Check />}
        </div>
      </div>
    </li>
  );
}
