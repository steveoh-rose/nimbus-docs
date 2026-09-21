// @ts-nocheck
import React from 'react';
import { ReactComponent as IconGlobal } from './global.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Global: React.FC<BrandIconProps> = (props) => (
  <IconGlobal className={brandIconClassinator('global', props)} />
);

export default Global;
