// @ts-nocheck
import React from 'react';
import { brandIconClassinator, BrandIconProps } from '../helpers';
import { ReactComponent as ProductDark } from './product-dark.svg';
import { ReactComponent as ProductLight } from './product-light.svg';
import { ReactComponent as ProductLightOnWhite } from './product-light-on-white.svg';
import './index.scss';

const Product = (props: BrandIconProps) => {
  const classNames = brandIconClassinator('product', props);

  switch (props.variant) {
    case 'light':
      return <ProductLight className={classNames} />;
    case 'light-on-white':
      return <ProductLightOnWhite className={classNames} />;
    default:
      return <ProductDark className={classNames} />;
  }
};

export default Product;
