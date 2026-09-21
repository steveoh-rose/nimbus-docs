// @ts-nocheck
import React from 'react';
import { ReactComponent as IconManagedFirewall } from '../ui-icons/icon_MFW.svg';
import { classinator, IconProps } from '../shared';

const ManagedFirewall: React.FC<IconProps> = (props) => {
  return (
    <IconManagedFirewall className={classinator('managed-firewall', props)} />
  );
};

export default ManagedFirewall;
