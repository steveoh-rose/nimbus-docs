// @ts-nocheck
import React, { ReactNode } from 'react';
import type {
  PopoverProps,
  MenuProps as ReactAriaMenuProps,
  MenuItemProps,
  SeparatorProps,
  SubmenuTriggerProps,
  TextProps,
  MenuSectionProps,
} from 'react-aria-components';
import {
  SubmenuTrigger as ReactAriaSubmenuTrigger,
  Menu as ReactAriaMenu,
  MenuItem as ReactAriaMenuItem,
  Header as ReactAriaHeader,
  MenuSection as ReactAriaMenuSection,
  Separator as ReactAriaSeparator,
  Text,
} from 'react-aria-components';

import { Popover } from '@nimbus/core';
import { Check, ChevronRight } from '@nimbus/assets/icons/app';
import cx from 'classnames';
import styles from './Menu.module.scss';

/* ************************************************* *
 * MenuProps                                        *
 * ************************************************* */

export type MenuProps<T extends object> = Omit<ReactAriaMenuProps<T>, 'style'> &
  Omit<PopoverProps, 'arrowBoundaryOffset' | 'containerPadding'> & {
    /**
     * Additional className to apply to the table root element.
     * This can be used to apply custom styles or override default styles.
     */
    className?: string;
    /**
     * Data attribute for E2E testing purposes
     */
    'data-testid'?: string;
    /**
     * Data attribute for GTM purposes. Pass this property to add a custom id to the root element for GTM tracking.
     */
    'data-rac-id'?: string;
  };

/* ************************************************* *
 * Menu.Item                                         *
 * ************************************************* */

function MenuItem(props: MenuItemProps & { className?: string; isDanger?: boolean; children }) {
  const { children, className, isDanger, textValue } = props;
  const itemTextValue = textValue || (typeof children === 'string' ? children : undefined);

  return (
    <ReactAriaMenuItem
      {...props}
      className={cx(styles.item, className)}
      textValue={itemTextValue}
      data-intent={(isDanger && 'danger') || undefined}
    >
      {({ hasSubmenu, isSelected }) => (
        <>
          {isSelected && <Check width={16} height={16} aria-hidden data-slot="checked" />}
          {children}
          {hasSubmenu && <ChevronRight width={16} height={16} aria-hidden data-slot="chevron" />}
        </>
      )}
    </ReactAriaMenuItem>
  );
}

function MenuLabel(props: Readonly<TextProps>) {
  const { className, children, ...rest } = props;
  return (
    <Text slot="label" className={cx(styles.label, className)} {...rest}>
      {children}
    </Text>
  );
}

function MenuDescription(props: Readonly<TextProps>) {
  const { className, children, ...rest } = props;
  return (
    <Text slot="description" className={cx(styles.description, className)} {...rest}>
      {children}
    </Text>
  );
}

/* ************************************************* *
 * Menu.Separator                                    *
 * ************************************************* */

function Separator(props: Readonly<SeparatorProps>) {
  const { className, ...rest } = props;

  return (
    <ReactAriaSeparator
      orientation="horizontal"
      className={cx(styles.separator, className)}
      {...rest}
    />
  );
}

/* ************************************************* *
 * Menu.Header                                       *
 * ************************************************* */

function MenuHeader(props: Readonly<{ children?: ReactNode; className?: string }>) {
  const { children, className, ...rest } = props;
  return (
    <ReactAriaHeader className={cx(styles.header, className)} {...rest}>
      {children}
    </ReactAriaHeader>
  );
}

/* ************************************************* *
 * Menu.Section                                      *
 * ************************************************* */

function MenuSection(props: MenuSectionProps<object> & { title?: string }) {
  const { children, className, title } = props;
  return (
    <ReactAriaMenuSection className={cx(styles.section, className)}>
      <MenuHeader>
        <Text className={styles.title}>{title}</Text>
      </MenuHeader>
      {children}
    </ReactAriaMenuSection>
  );
}

/* ************************************************* *
 * Menu.Submenu                                      *
 * ************************************************* */

function Submenu(props: Readonly<SubmenuTriggerProps>) {
  const { delay = 150, children, ...rest } = props;

  return (
    <ReactAriaSubmenuTrigger {...rest} delay={delay}>
      {children}
    </ReactAriaSubmenuTrigger>
  );
}

/* ************************************************* *
 * Menu                                              *
 * ************************************************* */
function Menu<T extends object>(props: MenuProps<T>) {
  const { children, className, ...rest } = props;

  const {
    placement,
    offset = 6,
    crossOffset = -4,
    isNonModal = false,
    ...popoverProps
  } = rest as PopoverProps;

  const menuProps = rest as ReactAriaMenuProps<T>;

  return (
    <Popover
      placement={placement}
      offset={offset}
      crossOffset={crossOffset}
      isNonModal={isNonModal}
      {...popoverProps}
    >
      <ReactAriaMenu {...menuProps} data-slot="menu-content" className={cx(styles.menu, className)}>
        {children}
      </ReactAriaMenu>
    </Popover>
  );
}

/* ************************************************* *
 * Attach subcomponents                              *
 * ************************************************* */
Menu.Item = MenuItem;
Menu.Submenu = Submenu;
Menu.Separator = Separator;
Menu.Section = MenuSection;
Menu.Header = MenuHeader;
Menu.Label = MenuLabel;
Menu.Description = MenuDescription;

export { Menu };
