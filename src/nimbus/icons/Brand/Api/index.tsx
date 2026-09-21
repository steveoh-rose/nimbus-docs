// @ts-nocheck
import React from 'react';
import { ReactComponent as IconApi } from './api.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Api: React.FC<BrandIconProps> = (props) => (
  <IconApi className={brandIconClassinator('api', props)} />
);

export default Api;
