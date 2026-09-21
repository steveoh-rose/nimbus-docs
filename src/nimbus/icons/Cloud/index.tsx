// @ts-nocheck
import React from 'react';
import classnames from 'classnames';
import CloudRouter from '../Brand/CloudRouter';
import { BrandIconProps } from '../Brand/helpers';

// Moved to BrandIcons, reference left for existing consumers
const Cloud: React.FC<BrandIconProps> = ({ className, ...props }) => (
  <CloudRouter
    {...props}
    className={classnames('cc-icon', 'cc-icon-cloud', className)}
  />
);
export default Cloud;
