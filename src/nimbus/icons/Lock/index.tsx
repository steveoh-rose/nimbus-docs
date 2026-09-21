// @ts-nocheck
import React from 'react';
import { ReactComponent as IconLock } from '../ui-icons/lock.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Lock: React.FC<IconProps> = (props) => {
  return <IconLock className={classinator('lock', props)} />;
};

export default Lock;
