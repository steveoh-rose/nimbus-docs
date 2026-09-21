// @ts-nocheck
import React from 'react';
import { ReactComponent as IconGetLink } from '../ui-icons/get-link.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const GetLink: React.FC<IconProps> = (props) => {
  return <IconGetLink className={classinator('get-link', props)} />;
};

export default GetLink;
