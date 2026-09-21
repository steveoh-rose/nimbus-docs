// @ts-nocheck
import classnames from 'classnames';
import { DesignTokenColor } from '../utils/design-token-helpers';

export interface IconProps {
  color?: DesignTokenColor;
  hoverColor?: DesignTokenColor;
  className?: string;
}

export const classinator = (iconClass: string, props: IconProps) =>
  classnames('cc-icon', `cc-icon-${iconClass}`, props.className, {
    [`cc-icon--${props.color}`]: props.color,
    [`cc-icon--hover-${props.hoverColor}`]: props.hoverColor,
  });
