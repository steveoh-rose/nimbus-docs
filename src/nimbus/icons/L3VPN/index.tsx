// @ts-nocheck
import React from 'react';
import { ReactComponent as IconL3VPN } from '../ui-icons/l3vpn.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const L3VPN: React.FC<IconProps> = (props) => {
  return <IconL3VPN className={classinator('l3vpn', props)} />;
};

export default L3VPN;
