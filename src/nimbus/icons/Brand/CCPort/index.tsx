// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCCPort } from './cc-port.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const CCPort: React.FC<BrandIconProps> = (props) => (
  <IconCCPort className={brandIconClassinator('cc-port', props)} />
);

export default CCPort;
