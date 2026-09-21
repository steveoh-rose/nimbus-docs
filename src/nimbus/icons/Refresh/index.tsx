// @ts-nocheck
import React from 'react';
import { ReactComponent as IconRefresh } from '../ui-icons/refresh.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Refresh: React.FC<IconProps> = (props) => {
  return <IconRefresh className={classinator('refresh', props)} />;
};

export default Refresh;
