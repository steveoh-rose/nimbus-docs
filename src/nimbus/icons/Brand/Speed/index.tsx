// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSpeed } from './speed.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Speed: React.FC<BrandIconProps> = (props) => (
  <IconSpeed className={brandIconClassinator('speed', props)} />
);

export default Speed;
