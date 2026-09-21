// @ts-nocheck
import React from 'react';
import { ReactComponent as IconInfo } from '../ui-icons/info-outline.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const InfoOutline: React.FC<IconProps> = (props) => {
  return <IconInfo className={classinator('info-outline', props)} />;
};

export default InfoOutline;
