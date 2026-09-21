// @ts-nocheck
import React from 'react';
import { ReactComponent as IconIoT } from './iot.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const IoT: React.FC<BrandIconProps> = (props) => (
  <IconIoT className={brandIconClassinator('iot', props)} />
);

export default IoT;
