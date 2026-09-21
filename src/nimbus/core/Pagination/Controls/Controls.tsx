// @ts-nocheck
import * as React from 'react';
import { useMemo } from 'react';
import {
  FirstPageButton,
  LastPageButton,
  NextPageButton,
  PageNumberButton,
  PrevPageButton,
} from '../NavButtons/NavButtons';
import { DEFAULT_MAX_NUMBERS_TO_SHOW, DEFAULT_PAGE_SIZE, getPages, getPagesToShow } from '../utils';

import styles from './Controls.module.scss';

export interface PaginationControlsProps {
  /** The total number of items (not pages). */
  totalItems: number;
  /** Current page number */
  currentPage: number;
  /** Called when changing page both by clicking on page numbers, and nav buttons */
  onPageChange: (newPageNumber: number) => void;
  /** Number of items per page. Used to calculate page info range.
   * @default 20
   * */
  pageSize?: number;
  /** Hide page number buttons */
  hideNumbers?: boolean;
  /** Max number of page numbers to show at once.
   * @default 5
   */
  maxNumbersToShow?: number;
  /** Hides button to skip to first or last page */
  hideFirstLast?: boolean;
  /** Hides next and previous page navigation buttons */
  hideNextPrev?: boolean;
  /** Text to show for the first page control. Defaults to show no text. */
  firstText?: string;
  /** Text to show for the last page control. Defaults to show no text. */
  lastText?: string;
  /** Text to show for the next page control, if any. Defaults to show no text. */
  nextText?: string;
  /** Text to show for the previous page control, if any. Defaults to show no text. */
  prevText?: string;
}

const Controls = ({
  totalItems,
  currentPage,
  onPageChange,
  pageSize = DEFAULT_PAGE_SIZE,
  maxNumbersToShow = DEFAULT_MAX_NUMBERS_TO_SHOW,
  hideNumbers,
  hideFirstLast,
  hideNextPrev,
  firstText,
  lastText,
  nextText,
  prevText,
}: PaginationControlsProps) => {
  const pages = useMemo(() => getPages(totalItems, pageSize), [totalItems, pageSize]);
  const [pagesToShow, setPagesToShow] = React.useState<number[]>(
    getPagesToShow(pages, currentPage, maxNumbersToShow)
  );

  React.useEffect(() => {
    setPagesToShow(getPagesToShow(pages, currentPage, maxNumbersToShow));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxNumbersToShow, pages]);

  React.useEffect(() => {
    const pageNotInRange = !pagesToShow.includes(currentPage);
    const isFirstPageInRange = currentPage === pagesToShow[0];
    const isLastPageInRange = currentPage === pagesToShow.at(-1);
    const isLastPage = currentPage === pages;
    const isFirstPage = currentPage === 1;
    if (
      pageNotInRange ||
      (isFirstPageInRange && !isFirstPage) ||
      (isLastPageInRange && !isLastPage)
    ) {
      setPagesToShow(getPagesToShow(pages, currentPage, maxNumbersToShow));
    }
  }, [pages, currentPage, pagesToShow, maxNumbersToShow]);

  return (
    <div className={styles.controls} data-testid="page-numbers-controls">
      {hideFirstLast || (
        <FirstPageButton
          text={firstText}
          aria-label={firstText ?? 'First page'}
          currentPage={currentPage}
          onPageChange={onPageChange}
          pages={pages}
        />
      )}
      {hideNextPrev || (
        <PrevPageButton
          text={prevText}
          aria-label={prevText ?? 'Previous page'}
          currentPage={currentPage}
          onPageChange={onPageChange}
          pages={pages}
        />
      )}
      {hideNumbers ||
        pagesToShow.map((pageNumber: number) => (
          <PageNumberButton
            key={`page-control-${pageNumber}`}
            text={pageNumber.toString()}
            currentPage={currentPage}
            onPageChange={onPageChange}
            pages={pages}
            pageNumber={pageNumber}
          />
        ))}
      {hideNextPrev || (
        <NextPageButton
          text={nextText}
          aria-label={nextText ?? 'Next page'}
          currentPage={currentPage}
          onPageChange={onPageChange}
          pages={pages}
        />
      )}
      {hideFirstLast || (
        <LastPageButton
          text={lastText}
          aria-label={lastText ?? 'Last page'}
          currentPage={currentPage}
          onPageChange={onPageChange}
          pages={pages}
        />
      )}
    </div>
  );
};

export default Controls;
