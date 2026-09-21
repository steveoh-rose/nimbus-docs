// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCaretLeft } from '../ui-icons/caret-left.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CaretLeft: React.FC<IconProps> = (props) => {
  return <IconCaretLeft className={classinator('caret-left', props)} />;
};

export default CaretLeft;
