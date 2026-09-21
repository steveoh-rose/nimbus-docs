// @ts-nocheck
import React from 'react';
import { Overlay, usePopover } from 'react-aria';
import classNames from 'classnames';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';
import styles from './Popover.module.scss';
import { ComboBoxClasses } from '../ComboBox';

interface PopoverProps extends AriaPopoverProps {
  children: React.ReactNode;
  state: OverlayTriggerState;
  popoverRef: React.RefObject<HTMLDivElement>;
  portalContainer?: Element;
  classes?: ComboBoxClasses;
}

const DEFAULT_OFFSET_PX = 8;

export function Popover({
  children,
  state,
  offset = DEFAULT_OFFSET_PX,
  popoverRef,
  portalContainer,
  classes,
  ...props
}: Readonly<PopoverProps>) {
  const { popoverProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  return (
    <Overlay portalContainer={portalContainer}>
      <div
        {...popoverProps}
        ref={popoverRef}
        className={classNames(styles.root, classes?.popover)}
        data-placement={placement}
        data-testid="combobox-popover"
      >
        {children}
      </div>
    </Overlay>
  );
}
