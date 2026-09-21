// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCloud } from './cloud.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Cloud: React.FC<BrandIconProps> = (props) => (
  <IconCloud className={brandIconClassinator('cloud', props)} />
);

export default Cloud;
