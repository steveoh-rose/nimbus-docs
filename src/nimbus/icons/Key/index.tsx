// @ts-nocheck
import React from 'react';
import { ReactComponent as IconKey } from '../ui-icons/key.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Key: React.FC<IconProps> = (props) => {
  return <IconKey className={classinator('key', props)} />;
};

export default Key;
