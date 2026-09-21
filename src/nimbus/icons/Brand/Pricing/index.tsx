// @ts-nocheck
import React from 'react';
import { ReactComponent as IconPricing } from './pricing.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Pricing: React.FC<BrandIconProps> = (props) => (
  <IconPricing className={brandIconClassinator('pricing', props)} />
);

export default Pricing;
