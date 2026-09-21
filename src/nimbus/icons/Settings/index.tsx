// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSettings } from '../ui-icons/settings.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Settings: React.FC<IconProps> = (props) => {
  return <IconSettings className={classinator('settings', props)} />;
};

export default Settings;
