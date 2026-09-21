// @ts-nocheck
import React from 'react';
import { ReactComponent as IconKeyCircle } from '../ui-icons/key-circle.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const KeyCircle: React.FC<IconProps> = (props) => {
  return <IconKeyCircle className={classinator('key-circle', props)} />;
};

export default KeyCircle;
