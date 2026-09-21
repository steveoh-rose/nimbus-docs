// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCloudRouter } from './cloudrouter.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const CloudRouter: React.FC<BrandIconProps> = (props) => (
  <IconCloudRouter className={brandIconClassinator('cloudrouter', props)} />
);

export default CloudRouter;
