// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCaretDropDown } from '../ui-icons/caret-drop-down.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CaretDropDown: React.FC<IconProps> = (props) => {
  return (
    <IconCaretDropDown className={classinator('caret-drop-down', props)} />
  );
};

export default CaretDropDown;
