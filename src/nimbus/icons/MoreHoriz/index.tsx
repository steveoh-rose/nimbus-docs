// @ts-nocheck
import React from 'react';
import { ReactComponent as IconMoreHoriz } from '../ui-icons/more-horiz.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const MoreHoriz: React.FC<IconProps> = (props) => {
  return <IconMoreHoriz className={classinator('more-horiz', props)} />;
};

export default MoreHoriz;
