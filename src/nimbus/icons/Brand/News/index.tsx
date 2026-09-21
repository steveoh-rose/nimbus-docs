// @ts-nocheck
import React from 'react';
import { ReactComponent as IconNews } from './news.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const News: React.FC<BrandIconProps> = (props) => (
  <IconNews className={brandIconClassinator('news', props)} />
);

export default News;
