// @ts-nocheck
import React from 'react';
import { ReactComponent as IconPerformance } from './performance.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Performance: React.FC<BrandIconProps> = (props) => (
  <IconPerformance className={brandIconClassinator('performance', props)} />
);

export default Performance;
