// @ts-nocheck
import React from 'react';
import { ReactComponent as IconUser } from './user.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const User: React.FC<BrandIconProps> = (props) => (
  <IconUser className={brandIconClassinator('user', props)} />
);

export default User;
