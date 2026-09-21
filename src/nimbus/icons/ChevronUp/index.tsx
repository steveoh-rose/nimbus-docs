// @ts-nocheck
import React from 'react';
import { ReactComponent as IconChevronUp } from '../ui-icons/chevron-up.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const ChevronUp: React.FC<IconProps> = (props) => {
  return <IconChevronUp className={classinator('chevron-up', props)} />;
};

export default ChevronUp;
