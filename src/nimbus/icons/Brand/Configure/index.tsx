// @ts-nocheck
import React from 'react';
import { ReactComponent as IconConfigure } from './configure.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Configure: React.FC<BrandIconProps> = (props) => (
  <IconConfigure className={brandIconClassinator('configure', props)} />
);

export default Configure;
