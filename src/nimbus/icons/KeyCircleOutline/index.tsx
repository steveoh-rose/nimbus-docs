// @ts-nocheck
import React from 'react';
import { ReactComponent as IconKeyCircleOutline } from '../ui-icons/key-circle-outline.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const KeyCircleOutline: React.FC<IconProps> = (props) => {
  return (
    <IconKeyCircleOutline
      className={classinator('key-circle-outline', props)}
    />
  );
};

export default KeyCircleOutline;
