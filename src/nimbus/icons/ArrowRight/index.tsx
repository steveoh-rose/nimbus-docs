// @ts-nocheck
import React from 'react';
import { ReactComponent as IconArrowRight } from '../ui-icons/arrow-right.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const ArrowRight: React.FC<IconProps> = (props) => {
  return <IconArrowRight className={classinator('arrow-right', props)} />;
};

export default ArrowRight;
