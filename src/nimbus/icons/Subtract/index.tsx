// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSubtract } from '../ui-icons/subtract.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Subtract: React.FC<IconProps> = (props) => {
  return <IconSubtract className={classinator('subtract', props)} />;
};

export default Subtract;
