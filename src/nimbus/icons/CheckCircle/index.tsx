// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCheckCircle } from '../ui-icons/check-circle.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CheckCircle: React.FC<IconProps> = (props) => {
  return <IconCheckCircle className={classinator('check-circle', props)} />;
};

export default CheckCircle;
