// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCaretDropUp } from '../ui-icons/caret-drop-up.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CaretDropUp: React.FC<IconProps> = (props) => {
  return <IconCaretDropUp className={classinator('caret-drop-up', props)} />;
};

export default CaretDropUp;
