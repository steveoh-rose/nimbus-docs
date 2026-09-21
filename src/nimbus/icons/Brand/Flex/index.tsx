// @ts-nocheck
import React from 'react';
import { ReactComponent as IconFlex } from './flex.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Flex: React.FC<BrandIconProps> = (props) => (
  <IconFlex className={brandIconClassinator('flex', props)} />
);

export default Flex;
