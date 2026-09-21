// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSpeed } from '../ui-icons/speed.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Speed: React.FC<IconProps> = (props) => {
  return <IconSpeed className={classinator('speed', props)} />;
};

export default Speed;
