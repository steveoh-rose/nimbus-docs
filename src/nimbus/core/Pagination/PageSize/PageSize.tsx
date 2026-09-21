// @ts-nocheck
import React, { PropsWithoutRef } from 'react';
import cx from 'classnames';
import { Button, ButtonProps, Menu, MenuTrigger } from '@nimbus/core';
import { ArrowDropDown } from '@nimbus/assets/icons/app';
import styles from './PageSize.module.scss';

export const defaultOptions = [10, 25, 50, 100];

const PageSize = ({ children }: { children: React.ReactNode }) => {
  return <MenuTrigger>{children}</MenuTrigger>;
};

const PageSizeButton = ({
  children,
  ...props
}: PropsWithoutRef<Omit<ButtonProps<'button'>, 'onClick'>>) => {
  return (
    <Button
      variant="subtle"
      {...props}
      data-pagesize="true"
      classes={{ ...props.classes, root: cx(props.classes?.root, styles.button) }}
    >
      {children}
      <ArrowDropDown aria-hidden className={styles.arrowIcon} />
    </Button>
  );
};

export interface PaginationPageSizeMenuProps {
  header?: React.ReactNode;
  onChange: (pageSize: number) => void;
  options?: number[];
}

const PageSizeMenu = ({
  header,
  onChange,
  options = defaultOptions,
}: PaginationPageSizeMenuProps) => {
  return (
    <Menu onAction={(key) => onChange(Number(key))}>
      {Boolean(header) && <Menu.Header>{header}</Menu.Header>}
      {options.map((value) => (
        <Menu.Item key={value} id={value}>
          {value}
        </Menu.Item>
      ))}
    </Menu>
  );
};

PageSize.displayName = 'Pagination.PageSize';
PageSizeButton.displayName = 'Pagination.PageSize.Button';
PageSizeMenu.displayName = 'Pagination.PageSize.Menu';
PageSize.Button = PageSizeButton;
PageSize.Menu = PageSizeMenu;
export default PageSize;
