// @ts-nocheck
import React from 'react';
import * as ReactAria from 'react-aria-components';
import {
  ButtonProps,
  Dialog,
  DialogBody,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@nimbus/core';
import cx from 'classnames';
import styles from './Modal.module.scss';

export type ModalProps = Omit<ReactAria.ModalOverlayProps, 'style'> &
  ReactAria.DialogProps & {
    className?: string;
    children: ReactAria.DialogProps['children'];
    size?: 'sm' | 'md' | 'lg' | 'cover';
    placement?: 'center' | 'top' | 'bottom';
  };

function Modal({
  className,
  children,
  size = 'md',
  placement = 'center',
  isDismissable = true,
  ...props
}: ModalProps) {
  return (
    <ReactAria.ModalOverlay
      {...props}
      className={cx(styles.overlay)}
      isDismissable={isDismissable}
      data-placement={placement}
    >
      <ReactAria.Modal className={cx(styles.modal, className)} data-size={size}>
        <Dialog {...props}>{children}</Dialog>
      </ReactAria.Modal>
    </ReactAria.ModalOverlay>
  );
}

// Subcomponents typed as React.FC to allow displayName
const ModalHeader: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <DialogHeader {...props} role="banner" className={className}>
    {children}
  </DialogHeader>
);

const ModalTitle: React.FC<ReactAria.HeadingProps> = ({ children, className, ...props }) => (
  <DialogTitle {...props} className={cx(styles.title, className)}>
    {children}
  </DialogTitle>
);

const ModalBody: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <DialogBody {...props} role="region" className={className}>
    {children}
  </DialogBody>
);

const ModalFooter: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <DialogFooter {...props} role="contentinfo" className={className}>
    {children}
  </DialogFooter>
);

const ModalClose: React.FC<ButtonProps<'button'>> = (props) => <DialogClose {...props} />;

// Assign subcomponents
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Close = ModalClose;

// Add displayNames
Modal.displayName = 'Modal';
Modal.Header.displayName = 'Modal.Header';
Modal.Title.displayName = 'Modal.Title';
Modal.Body.displayName = 'Modal.Body';
Modal.Footer.displayName = 'Modal.Footer';
Modal.Close.displayName = 'Modal.Close';

export { Modal };
