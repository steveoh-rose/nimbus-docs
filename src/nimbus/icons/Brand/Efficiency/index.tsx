// @ts-nocheck
import React from 'react';
import { ReactComponent as IconEfficiency } from './efficiency.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Efficiency: React.FC<BrandIconProps> = (props) => (
  <IconEfficiency className={brandIconClassinator('efficiency', props)} />
);

export default Efficiency;
