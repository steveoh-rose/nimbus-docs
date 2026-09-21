// @ts-nocheck
import React from 'react';
import { ReactComponent as IconInfo } from '../ui-icons/info-fill.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const InfoFill: React.FC<IconProps> = (props) => {
  return <IconInfo className={classinator('info-fill', props)} />;
};

export default InfoFill;
