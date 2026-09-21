// @ts-nocheck
import React from 'react';
import { ReactComponent as IconDataCenterCCEnabled } from './data-center-cc-enabled.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const DataCenterCCEnabled: React.FC<BrandIconProps> = (props) => (
  <IconDataCenterCCEnabled
    className={brandIconClassinator('data-center-cc-enabled', props)}
  />
);

export default DataCenterCCEnabled;
