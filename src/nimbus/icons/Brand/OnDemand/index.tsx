// @ts-nocheck
import React from 'react';
import { ReactComponent as IconOnDemand } from './on-demand.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const OnDemand: React.FC<BrandIconProps> = (props) => (
  <IconOnDemand className={brandIconClassinator('on-demand', props)} />
);

export default OnDemand;
