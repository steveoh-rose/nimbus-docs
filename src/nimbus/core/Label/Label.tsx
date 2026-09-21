// @ts-nocheck
import type { PropsWithChildren } from 'react';

import React from 'react';
import { LabelAriaProps } from 'react-aria';
import styles from './Label.module.scss';

export interface LabelProps extends LabelAriaProps {
  required?: boolean;
}

function Label(props: Readonly<PropsWithChildren<LabelProps>>) {
  const { children, required, ...restProps } = props;

  return (
    /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
    <label {...restProps} className={styles.label}>
      {children} {required && <span className={styles.required}>*</span>}
    </label>
  );
}

export { Label };
