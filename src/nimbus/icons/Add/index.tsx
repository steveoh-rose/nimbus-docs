// @ts-nocheck
import React from 'react';
import { ReactComponent as IconAdd } from '../ui-icons/add.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Add: React.FC<IconProps> = (props) => {
  return <IconAdd className={classinator('add', props)} />;
};

export default Add;
