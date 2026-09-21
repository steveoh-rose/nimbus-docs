// @ts-nocheck
import React from 'react';
import { ReactComponent as IconManagedServices } from '../ui-icons/managed-services.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const ManagedServices: React.FC<IconProps> = (props) => {
  return <IconManagedServices className={classinator('managed-services', props)} />;
};

export default ManagedServices;
