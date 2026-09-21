// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCancelCircle } from '../ui-icons/cancel-circle.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CancelCircle: React.FC<IconProps> = (props) => {
  return <IconCancelCircle className={classinator('cancel-circle', props)} />;
};

export default CancelCircle;
