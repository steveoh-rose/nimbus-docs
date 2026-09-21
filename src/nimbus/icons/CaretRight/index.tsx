// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCaretRight } from '../ui-icons/caret-right.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CaretRight: React.FC<IconProps> = (props) => {
  return <IconCaretRight className={classinator('caret-right', props)} />;
};

export default CaretRight;
