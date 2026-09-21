// @ts-nocheck
import React from 'react';
import { ReactComponent as IconFactCheck } from '../ui-icons/fact-check.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const FactCheck: React.FC<IconProps> = (props) => {
  return <IconFactCheck className={classinator('fact-check', props)} />;
};

export default FactCheck;
