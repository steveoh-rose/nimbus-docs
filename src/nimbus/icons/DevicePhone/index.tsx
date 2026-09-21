// @ts-nocheck
import React from 'react';
import { ReactComponent as IconDevicePhone } from '../ui-icons/device-phone.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const DevicePhone: React.FC<IconProps> = (props) => {
  return <IconDevicePhone className={classinator('device-phone', props)} />;
};

export default DevicePhone;
