// @ts-nocheck
import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './Spinner.module.scss';

type SpinnerTypes = {
  size?: 'sm' | 'lg';
  onDark?: boolean;
  classes?: {
    circleStroke?: string;
    circleFill?: string;
  };
} & HTMLAttributes<SVGElement>;

export const Spinner = ({ size = 'sm', onDark, classes, className, ...props }: SpinnerTypes) => {
  return (
    <svg
      data-size={size}
      data-ondark={onDark || undefined}
      className={cx(styles.spinner, className)}
      viewBox="0 0 50 50"
      role="progressbar"
      data-slot="icon"
      {...props}
    >
      <circle
        className={cx(styles['spinner-background'], classes?.circleFill)}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
        data-slot="icon"
      />
      <circle
        className={cx(styles['spinner-foreground'], classes?.circleStroke)}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );
};

Spinner.defaultProps = {
  size: 'sm',
  onDark: false,
};
