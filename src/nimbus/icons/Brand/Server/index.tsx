// @ts-nocheck
import React from 'react';
import { ReactComponent as IconServer } from './server.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Server: React.FC<BrandIconProps> = (props) => (
  <IconServer className={brandIconClassinator('server', props)} />
);

export default Server;
