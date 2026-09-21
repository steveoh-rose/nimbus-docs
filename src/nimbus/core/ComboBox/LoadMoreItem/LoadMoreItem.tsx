// @ts-nocheck
import React from 'react';
import { Spinner } from '@nimbus/core';
import styles from './LoadMoreItem.module.scss';

export const LoadMoreItem = () => {
  return (
    <li role="presentation" className={styles.root}>
      <Spinner size="lg" aria-label="Loading more items" />
    </li>
  );
};
