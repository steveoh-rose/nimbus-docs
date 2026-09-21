// @ts-nocheck
import React from 'react';
import { ReactComponent as IconIdea } from './idea.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Idea: React.FC<BrandIconProps> = (props) => (
  <IconIdea className={brandIconClassinator('idea', props)} />
);

export default Idea;
