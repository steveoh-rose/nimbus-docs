// @ts-nocheck
import React from 'react';
import { ReactComponent as IconFaq } from './faq.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Faq: React.FC<BrandIconProps> = (props) => (
  <IconFaq className={brandIconClassinator('faq', props)} />
);

export default Faq;
