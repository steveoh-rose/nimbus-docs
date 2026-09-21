// @ts-nocheck
import React from 'react';
import { ReactComponent as IconOrder } from '../ui-icons/order.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Order: React.FC<IconProps> = (props) => {
  return <IconOrder className={classinator('order', props)} />;
};

export default Order;
