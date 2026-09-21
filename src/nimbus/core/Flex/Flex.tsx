// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import styles from './Flex.module.scss';
import { FlexProps } from './Flex.types';

const initialValue = 'initial';

const FlexInner = <T extends ElementType = 'div'>(
  {
    as,
    className,
    style,
    direction = initialValue,
    justify = initialValue,
    align = initialValue,
    wrap = initialValue,
    gap = initialValue,
    ...rest
  }: FlexProps<T>,
  ref: React.Ref<any>
) => {
  const Component = as ?? 'div';

  const componentStyle = {
    ...style,
    '--nb-flex-gap': typeof gap === 'number' ? `${gap}px` : gap,
    '--nb-flex-direction': direction,
    '--nb-flex-justify': justify,
    '--nb-flex-align': align,
    '--nb-flex-wrap': wrap,
  };

  return (
    <Component className={cn(styles.flex, className)} style={componentStyle} {...rest} ref={ref} />
  );
};

export const Flex = forwardRef(FlexInner) as <T extends ElementType = 'div'>(
  props: FlexProps<T> & { ref?: ForwardedRef<any> }
) => React.ReactElement;
