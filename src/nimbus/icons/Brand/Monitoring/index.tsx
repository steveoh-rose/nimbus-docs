// @ts-nocheck
import React from 'react';
import { ReactComponent as IconMonitoring } from './monitoring.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Monitoring: React.FC<BrandIconProps> = (props) => (
  <IconMonitoring className={brandIconClassinator('monitoring', props)} />
);

export default Monitoring;
