// @ts-nocheck
import React from 'react';
import { ReactComponent as IconWeb } from '../ui-icons/web.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Web: React.FC<IconProps> = (props) => {
  return <IconWeb className={classinator('web', props)} />;
};

export default Web;
