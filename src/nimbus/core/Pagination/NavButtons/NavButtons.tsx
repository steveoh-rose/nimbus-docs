// @ts-nocheck
import * as React from 'react';
import classnames from 'classnames';
import { Button } from '@nimbus/core';
import { FirstPage, LastPage, ChevronLeft, ChevronRight } from '@nimbus/icons';

import styles from './NavButtons.module.scss';

type AriaLabelOrText = { text: string } | { 'aria-label': string };

type GeneralNavButtonProps = {
  textFirst: boolean;
  icon?: React.ReactNode;
  disabled: boolean;
  className?: string;
  testId: string;
  onClick: () => void;
  text?: string;
  'aria-label'?: string;
};

const GeneralNavButton = ({
  disabled,
  className,
  icon,
  onClick,
  text,
  textFirst,
  'aria-label': ariaLabel,
  testId,
}: GeneralNavButtonProps) => {
  return (
    <Button
      aria-label={ariaLabel}
      variant="subtle"
      size="sm"
      type="button"
      disabled={disabled}
      onPress={onClick}
      classes={{
        root: className,
      }}
      data-testid={testId}
    >
      {textFirst ? (
        <>
          {text}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </Button>
  );
};

type SpecificNavButtonProps = {
  text?: string;
  'aria-label'?: string;
  currentPage: number;
  pages: number;
  onPageChange: (newPageNumber: number) => void;
} & AriaLabelOrText;

const FirstPageButton = React.memo(
  ({ text, currentPage, onPageChange, 'aria-label': ariaLabel }: SpecificNavButtonProps) => {
    const onClick = React.useCallback(() => onPageChange(1), [onPageChange]);
    return (
      <GeneralNavButton
        textFirst={false}
        icon={<FirstPage />}
        disabled={currentPage === 1}
        onClick={onClick}
        text={text}
        aria-label={ariaLabel}
        testId="page-numbers-control-first"
      />
    );
  }
);

const PrevPageButton = React.memo(
  ({ text, currentPage, onPageChange, 'aria-label': ariaLabel }: SpecificNavButtonProps) => {
    const onClick = React.useCallback(
      () => onPageChange(Math.max(1, currentPage - 1)),
      [onPageChange, currentPage]
    );
    return (
      <GeneralNavButton
        textFirst={false}
        icon={<ChevronLeft />}
        disabled={currentPage === 1}
        onClick={onClick}
        text={text}
        aria-label={ariaLabel}
        testId="page-numbers-control-prev"
      />
    );
  }
);

const NextPageButton = React.memo(
  ({ text, currentPage, onPageChange, pages, 'aria-label': ariaLabel }: SpecificNavButtonProps) => {
    const onClick = React.useCallback(
      () => onPageChange(Math.min(pages, currentPage + 1)),
      [onPageChange, currentPage, pages]
    );
    return (
      <GeneralNavButton
        textFirst
        icon={<ChevronRight />}
        disabled={currentPage === pages}
        onClick={onClick}
        text={text}
        aria-label={ariaLabel}
        testId="page-numbers-control-next"
      />
    );
  }
);

const LastPageButton = React.memo(
  ({ text, currentPage, onPageChange, pages, 'aria-label': ariaLabel }: SpecificNavButtonProps) => {
    const onClick = React.useCallback(() => onPageChange(pages), [onPageChange, pages]);
    return (
      <GeneralNavButton
        textFirst
        icon={<LastPage />}
        disabled={currentPage === pages}
        onClick={onClick}
        text={text}
        aria-label={ariaLabel}
        testId="page-numbers-control-last"
      />
    );
  }
);

type PageNumberNavButtonProps = {
  pageNumber: number;
} & SpecificNavButtonProps;

const PageNumberButton = React.memo(
  ({
    text,
    currentPage,
    onPageChange,
    pageNumber,
    'aria-label': ariaLabel,
  }: PageNumberNavButtonProps) => {
    const onClick = React.useCallback(() => onPageChange(pageNumber), [onPageChange, pageNumber]);
    const isCurrent = pageNumber === currentPage;

    return (
      <GeneralNavButton
        textFirst
        disabled={isCurrent}
        className={classnames(styles.number, {
          [styles.current]: isCurrent,
        })}
        onClick={onClick}
        text={text}
        aria-label={ariaLabel}
        testId={`page-numbers-control-number-${pageNumber}`}
      />
    );
  }
);

export { FirstPageButton, PrevPageButton, PageNumberButton, NextPageButton, LastPageButton };
