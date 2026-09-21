// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCCWebapp } from './cc-webapp.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const CCWebApp: React.FC<BrandIconProps> = (props) => (
  <IconCCWebapp className={brandIconClassinator('cc-webapp', props)} />
);

export default CCWebApp;
