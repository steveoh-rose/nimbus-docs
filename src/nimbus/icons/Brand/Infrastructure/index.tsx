// @ts-nocheck
import React from 'react';
import { ReactComponent as IconInfrastructure } from './infrastructure.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Infrastructure: React.FC<BrandIconProps> = (props) => (
  <IconInfrastructure
    className={brandIconClassinator('infrastructure', props)}
  />
);

export default Infrastructure;
