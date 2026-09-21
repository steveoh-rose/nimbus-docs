// @ts-nocheck
import React from 'react';
import { ReactComponent as IconShow } from '../ui-icons/show.svg';

import '../index.scss';
import { classinator, IconProps } from '../shared';

const Show: React.FC<IconProps> = (props) => {
  return <IconShow className={classinator('show', props)} />;
};

export default Show;
