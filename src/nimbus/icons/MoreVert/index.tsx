// @ts-nocheck
import React from 'react';
import { ReactComponent as IconMoreVert } from '../ui-icons/more-vert.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const MoreVert: React.FC<IconProps> = (props) => {
  return <IconMoreVert className={classinator('more-vert', props)} />;
};

export default MoreVert;
