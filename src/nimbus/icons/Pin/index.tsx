// @ts-nocheck
import React from 'react';
import { ReactComponent as IconPin } from '../ui-icons/pin.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Pin: React.FC<IconProps> = (props) => {
  return <IconPin className={classinator('pin', props)} />;
};

export default Pin;
