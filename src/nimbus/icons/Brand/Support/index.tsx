// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSupport } from './support.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Support: React.FC<BrandIconProps> = (props) => (
  <IconSupport className={brandIconClassinator('support', props)} />
);

export default Support;
