// @ts-nocheck
import React from 'react';
import { ReactComponent as IconPort } from './port.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Port: React.FC<BrandIconProps> = (props) => (
  <IconPort className={brandIconClassinator('port', props)} />
);

export default Port;
