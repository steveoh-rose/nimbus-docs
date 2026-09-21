// @ts-nocheck
import React from 'react';
import { ReactComponent as IconUpDownArrow } from '../ui-icons/up-down-arrow.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const UpDownArrow: React.FC<IconProps> = (props) => {
  return <IconUpDownArrow className={classinator('up-down-right', props)} />;
};

export default UpDownArrow;
