// @ts-nocheck
import React from 'react';
import { ReactComponent as IconWebinar } from './webinar.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Webinar: React.FC<BrandIconProps> = (props) => (
  <IconWebinar className={brandIconClassinator('webinar', props)} />
);

export default Webinar;
