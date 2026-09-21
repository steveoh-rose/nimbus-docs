// @ts-nocheck
import React from 'react';
import { ReactComponent as IconConnection } from './connection.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Connection: React.FC<BrandIconProps> = (props) => (
  <IconConnection className={brandIconClassinator('connection', props)} />
);

export default Connection;
