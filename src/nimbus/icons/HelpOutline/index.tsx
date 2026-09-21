// @ts-nocheck
import React from 'react';
import { ReactComponent as IconHelpOutline } from '../ui-icons/help-outline.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const HelpOutline: React.FC<IconProps> = (props) => {
  return <IconHelpOutline className={classinator('help-outline', props)} />;
};

export default HelpOutline;
