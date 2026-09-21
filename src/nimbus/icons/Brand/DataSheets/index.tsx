// @ts-nocheck
import React from 'react';
import { ReactComponent as IconDataSheets } from './data-sheets.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const DataSheets: React.FC<BrandIconProps> = (props) => (
  <IconDataSheets className={brandIconClassinator('data-sheets', props)} />
);

export default DataSheets;
