// @ts-nocheck
import * as React from 'react';
import { getFirstOnPage, getLastOnPage } from '../utils';
import styles from './Records.module.scss';

export interface PaginationRecordsProps {
  /** Current page number */
  currentPage: number;
  /** Number of items per page. Used to calculate page info range. */
  pageSize: number;
  /** The total number of items (not pages). */
  totalItems: number;
}

const Records = ({ currentPage, pageSize, totalItems }: PaginationRecordsProps) => {
  return (
    <div className={styles.current} data-testid="page-numbers-current-page-info">
      <span data-testid="page-numbers-first-on-page">
        {getFirstOnPage(currentPage, pageSize, totalItems)}
      </span>
      <span className={styles.separator}>&ndash;</span>
      <span data-testid="page-numbers-last-on-page">
        {getLastOnPage(currentPage, pageSize, totalItems)}
      </span>
      <span className={styles.last}>of</span>
      <span data-testid="page-numbers-total">{totalItems}</span>
    </div>
  );
};

export default React.memo(Records);
