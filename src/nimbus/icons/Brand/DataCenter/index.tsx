// @ts-nocheck
import React from 'react';
import { ReactComponent as IconDataCenter } from './data-center.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const DataCenter: React.FC<BrandIconProps> = (props) => (
  <IconDataCenter className={brandIconClassinator('data-center', props)} />
);

export default DataCenter;
