// @ts-nocheck
import React from 'react';
import { ReactComponent as IconApi } from './bandwidth.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Api: React.FC<BrandIconProps> = (props) => (
  <IconApi className={brandIconClassinator('bandwidth', props)} />
);

export default Api;
