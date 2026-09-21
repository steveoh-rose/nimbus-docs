// @ts-nocheck
import React from 'react';
import { ReactComponent as IconStatusDot } from '../ui-icons/status-dot.svg';
import { classinator, IconProps } from '../shared';

import './index.scss';
import '../index.scss';

const StatusDot: React.FC<IconProps> = (props) => {
  return <IconStatusDot className={classinator('status-dot', props)} />;
};

export default StatusDot;
