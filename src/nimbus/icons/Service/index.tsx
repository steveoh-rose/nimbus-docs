// @ts-nocheck
import React from 'react';
import { ReactComponent as IconService } from '../ui-icons/service.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Service: React.FC<IconProps> = (props) => {
  return <IconService className={classinator('order', props)} />;
};

export default Service;
