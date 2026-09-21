// @ts-nocheck
import React from 'react';
import { ReactComponent as IconChevronLeft } from '../ui-icons/chevron-left.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const ChevronLeft: React.FC<IconProps> = (props) => {
  return <IconChevronLeft className={classinator('chevron-left', props)} />;
};

export default ChevronLeft;
