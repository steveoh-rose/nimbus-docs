// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSdWan } from '../ui-icons/sdwan.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const SdWan: React.FC<IconProps> = (props) => {
  return <IconSdWan className={classinator('sdwan', props)} />;
};

export default SdWan;
