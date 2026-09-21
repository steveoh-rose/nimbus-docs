// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSelfService } from './self-service.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const SelfService: React.FC<BrandIconProps> = (props) => (
  <IconSelfService className={brandIconClassinator('self-service', props)} />
);

export default SelfService;
