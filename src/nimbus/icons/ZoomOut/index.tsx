// @ts-nocheck
import React from 'react';
import { ReactComponent as IconZoomOut } from '../ui-icons/zoom-out.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const ZoomOut: React.FC<IconProps> = (props) => {
  return <IconZoomOut className={classinator('zoom-out', props)} />;
};

export default ZoomOut;
