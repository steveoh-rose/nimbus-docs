// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSite } from './site.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Site: React.FC<BrandIconProps> = (props) => (
  <IconSite className={brandIconClassinator('company', props)} />
);

export default Site;
