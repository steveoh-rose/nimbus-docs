// @ts-nocheck
import { ElementType, ComponentPropsWithRef, CSSProperties } from 'react';

type FlexOwnProps<T extends ElementType> = {
  as?: T;
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  wrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
};

export type FlexProps<T extends ElementType> = FlexOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof FlexOwnProps<T>>;
