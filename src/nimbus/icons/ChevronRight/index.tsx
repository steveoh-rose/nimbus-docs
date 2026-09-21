// @ts-nocheck
import React from 'react';
import { ReactComponent as IconChevronRight } from '../ui-icons/chevron-right.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const ChevronRight: React.FC<IconProps> = (props) => {
  return <IconChevronRight className={classinator('chevron-right', props)} />;
};

export default ChevronRight;
