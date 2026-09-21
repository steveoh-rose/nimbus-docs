// @ts-nocheck
import React from 'react';
import { ReactComponent as IconUnfoldLess } from '../ui-icons/unfold-less.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const UnfoldLess: React.FC<IconProps> = (props) => {
  return <IconUnfoldLess className={classinator('unfold-less', props)} />;
};

export default UnfoldLess;
