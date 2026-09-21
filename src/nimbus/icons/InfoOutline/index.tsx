// @ts-nocheck
import React from 'react';
import { ReactComponent as IconInfoOutline } from '../ui-icons/info-outline.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const InfoOutline: React.FC<IconProps> = (props) => {
  return <IconInfoOutline className={classinator('info-outline', props)} />;
};

export default InfoOutline;
