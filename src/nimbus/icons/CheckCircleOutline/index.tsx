// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCheckCircleOutline } from '../ui-icons/check-circle-outline.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CheckCircleOutline: React.FC<IconProps> = (props) => {
  return (
    <IconCheckCircleOutline
      className={classinator('check-circle-outline', props)}
    />
  );
};

export default CheckCircleOutline;
