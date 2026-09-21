// @ts-nocheck
import React from 'react';
import { ReactComponent as IconInternet } from './internet.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Internet: React.FC<BrandIconProps> = (props) => (
  <IconInternet className={brandIconClassinator('internet', props)} />
);

export default Internet;
