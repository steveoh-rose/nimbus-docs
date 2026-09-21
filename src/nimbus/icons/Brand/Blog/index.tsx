// @ts-nocheck
import React from 'react';
import { ReactComponent as IconBlog } from './blog.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const CloudRouter: React.FC<BrandIconProps> = (props) => (
  <IconBlog className={brandIconClassinator('blog', props)} />
);

export default CloudRouter;
