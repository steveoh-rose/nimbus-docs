// @ts-nocheck
import React from 'react';
import { ReactComponent as IconWarning } from '../ui-icons/warning.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Warning: React.FC<IconProps> = (props) => {
  return <IconWarning className={classinator('warning', props)} />;
};

export default Warning;
