// @ts-nocheck
import React from 'react';
import { ReactComponent as IconShareOutline } from '../ui-icons/share-outline.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const ShareOutline: React.FC<IconProps> = (props) => {
  return <IconShareOutline className={classinator('share-outline', props)} />;
};

export default ShareOutline;
