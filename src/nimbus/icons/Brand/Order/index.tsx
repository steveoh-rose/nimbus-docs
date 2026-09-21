// @ts-nocheck
import React from 'react';
import { brandIconClassinator, BrandIconProps } from '../helpers';
import { ReactComponent as IconOrder } from './order.svg';
import './index.scss';

const Order: React.FC<BrandIconProps> = (props) => (
  <IconOrder className={brandIconClassinator('order', props)} />
);

export default Order;
