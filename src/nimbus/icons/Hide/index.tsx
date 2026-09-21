// @ts-nocheck
import React from 'react';
import { ReactComponent as IconHide } from '../ui-icons/hide.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Hide: React.FC<IconProps> = (props) => {
  return <IconHide className={classinator('hide', props)} />;
};

export default Hide;
