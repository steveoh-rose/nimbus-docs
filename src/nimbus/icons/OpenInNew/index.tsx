// @ts-nocheck
import React from 'react';
import { ReactComponent as IconOpenInNew } from '../ui-icons/open-in-new.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const OpenInNew: React.FC<IconProps> = (props) => {
  return <IconOpenInNew className={classinator('open-in-new', props)} />;
};

export default OpenInNew;
