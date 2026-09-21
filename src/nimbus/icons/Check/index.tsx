// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCheck } from '../ui-icons/check.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Check: React.FC<IconProps> = (props) => {
  return <IconCheck className={classinator('check', props)} />;
};

export default Check;
