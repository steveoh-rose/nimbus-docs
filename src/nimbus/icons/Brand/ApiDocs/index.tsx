// @ts-nocheck
import React from 'react';
import { brandIconClassinator, BrandIconProps } from '../helpers';
import { ReactComponent as ApiDocsDark } from './api-docs-dark.svg';
import { ReactComponent as ApiDocsLight } from './api-docs-light.svg';
import { ReactComponent as ApiDocsLightOnWhite } from './api-docs-light-on-white.svg';
import './index.scss';

const ApiDocs = (props: BrandIconProps) => {
  const classNames = brandIconClassinator('api-docs', props);

  switch (props.variant) {
    case 'light':
      return <ApiDocsLight className={classNames} />;
    case 'light-on-white':
      return <ApiDocsLightOnWhite className={classNames} />;
    default:
      return <ApiDocsDark className={classNames} />;
  }
};

export default ApiDocs;
