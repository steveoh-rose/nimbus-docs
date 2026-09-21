// @ts-nocheck
import React from 'react';
import { ReactComponent as IconGrid } from '../ui-icons/grid.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Grid: React.FC<IconProps> = (props) => {
  return <IconGrid className={classinator('grid', props)} />;
};

export default Grid;
