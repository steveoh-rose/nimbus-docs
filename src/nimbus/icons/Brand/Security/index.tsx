// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSecurity } from './security.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Security: React.FC<BrandIconProps> = (props) => (
  <IconSecurity className={brandIconClassinator('security', props)} />
);

export default Security;
