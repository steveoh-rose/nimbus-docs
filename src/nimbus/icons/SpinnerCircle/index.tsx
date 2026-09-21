// @ts-nocheck
import React from 'react';
import classnames from 'classnames';
import { ReactComponent as IconAccountCircle } from '../spinner.svg';
import { classinator, IconProps } from '../shared';
import { DesignTokenColor } from '../../utils/design-token-helpers';

import './index.scss';
import '../index.scss';

interface SpinnerIconProps extends IconProps {
  circleColor?: DesignTokenColor;
  hoverCircleColor?: DesignTokenColor;
}

const SpinnerCircle: React.FC<SpinnerIconProps> = ({ circleColor, hoverCircleColor, ...props }) => {
  return (
    <IconAccountCircle
      className={classnames(classinator('spinner-circle', props), {
        [`cc-icon--circle-${circleColor}`]: circleColor,
        [`cc-icon--hover-circle-${hoverCircleColor}`]: hoverCircleColor,
      })}
    />
  );
};

export default SpinnerCircle;
