// @ts-nocheck
import React from 'react';
import { ReactComponent as IconNetwork } from './network.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Network: React.FC<BrandIconProps> = (props) => (
  <IconNetwork className={brandIconClassinator('network', props)} />
);

export default Network;
