// @ts-nocheck
import React from 'react';
import { ReactComponent as IconGrowth } from './growth.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Growth: React.FC<BrandIconProps> = (props) => (
  <IconGrowth className={brandIconClassinator('growth', props)} />
);

export default Growth;
