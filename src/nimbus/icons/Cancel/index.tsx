// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCancel } from '../ui-icons/cancel.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Cancel: React.FC<IconProps> = (props) => {
  return <IconCancel className={classinator('cancel', props)} />;
};

export default Cancel;
