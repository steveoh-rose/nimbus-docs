// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCloudRouter } from '../ui-icons/cloud-router.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CloudRouter: React.FC<IconProps> = (props) => {
  return <IconCloudRouter className={classinator('cloud-router', props)} />;
};

export default CloudRouter;
