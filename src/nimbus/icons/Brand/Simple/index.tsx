// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSimple } from './simple.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Simple: React.FC<BrandIconProps> = (props) => (
  <IconSimple className={brandIconClassinator('simple', props)} />
);

export default Simple;
