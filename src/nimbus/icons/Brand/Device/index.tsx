// @ts-nocheck
import React from 'react';
import { ReactComponent as IconDevice } from './device.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Device: React.FC<BrandIconProps> = (props) => (
  <IconDevice className={brandIconClassinator('device', props)} />
);

export default Device;
