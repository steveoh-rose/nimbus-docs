// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCaseStudy } from './case-study.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const CaseStudy: React.FC<BrandIconProps> = (props) => (
  <IconCaseStudy className={brandIconClassinator('case-study', props)} />
);

export default CaseStudy;
