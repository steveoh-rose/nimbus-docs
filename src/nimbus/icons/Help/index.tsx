// @ts-nocheck
import React from 'react';
import { ReactComponent as IconHelp } from '../ui-icons/help.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Help: React.FC<IconProps> = (props) => {
  return <IconHelp className={classinator('help', props)} />;
};

export default Help;
