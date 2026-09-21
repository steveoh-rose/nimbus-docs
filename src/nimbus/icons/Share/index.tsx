// @ts-nocheck
import React from 'react';
import { ReactComponent as IconShare } from '../ui-icons/share.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Share: React.FC<IconProps> = (props) => {
  return <IconShare className={classinator('share', props)} />;
};

export default Share;
