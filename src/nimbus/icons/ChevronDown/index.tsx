// @ts-nocheck
import React from 'react';
import { ReactComponent as IconChevronDown } from '../ui-icons/chevron-down.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const ChevronDown: React.FC<IconProps> = (props) => {
  return <IconChevronDown className={classinator('chevron-down', props)} />;
};

export default ChevronDown;
