// @ts-nocheck
import React from 'react';
import { ReactComponent as IconReliability } from './reliability.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Reliability: React.FC<BrandIconProps> = (props) => (
  <IconReliability className={brandIconClassinator('reliability', props)} />
);

export default Reliability;
