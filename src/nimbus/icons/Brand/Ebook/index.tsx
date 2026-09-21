// @ts-nocheck
import React from 'react';
import { ReactComponent as IconEbook } from './ebook.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Ebook: React.FC<BrandIconProps> = (props) => (
  <IconEbook className={brandIconClassinator('ebook', props)} />
);

export default Ebook;
