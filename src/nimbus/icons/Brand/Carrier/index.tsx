// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCarrier } from './carrier.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Carrier: React.FC<BrandIconProps> = (props) => (
  <IconCarrier className={brandIconClassinator('carrier', props)} />
);

export default Carrier;
