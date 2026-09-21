// @ts-nocheck
import React from 'react';
import { ReactComponent as IconThumbsUp } from './thumbs-up.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const ThumbsUp: React.FC<BrandIconProps> = (props) => (
  <IconThumbsUp className={brandIconClassinator('thumbs-up', props)} />
);

export default ThumbsUp;
