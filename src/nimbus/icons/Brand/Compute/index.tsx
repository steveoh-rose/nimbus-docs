// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCompute } from './compute.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Compute: React.FC<BrandIconProps> = (props) => (
  <IconCompute className={brandIconClassinator('compute', props)} />
);

export default Compute;
