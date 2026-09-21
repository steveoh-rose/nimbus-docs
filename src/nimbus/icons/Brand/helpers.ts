// @ts-nocheck
import classnames from 'classnames';

export type BrandIconVariant = 'light' | 'dark' | 'light-on-white';
export const brandIconVariants: BrandIconVariant[] = [
  'light',
  'dark',
  'light-on-white',
];

export interface BrandIconProps {
  variant?: BrandIconVariant;
  className?: string;
}
// gah
export const brandIconClassinator = (
  iconClass: string,
  props: BrandIconProps
) =>
  classnames('nb-brand-icon', `nb-brand-icon-${iconClass}`, props.className, {
    [`nb-brand-icon--${props.variant}`]: props.variant,
  });
