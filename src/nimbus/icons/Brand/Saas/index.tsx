// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSaas } from './saas.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Saas: React.FC<BrandIconProps> = (props) => (
  <IconSaas className={brandIconClassinator('saas', props)} />
);

export default Saas;
