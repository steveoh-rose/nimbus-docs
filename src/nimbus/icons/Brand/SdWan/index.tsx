// @ts-nocheck
import React from 'react';
import { brandIconClassinator, BrandIconProps } from '../helpers';
import { ReactComponent as SdwanDark } from './sdwan-dark.svg';
import { ReactComponent as SdwanLight } from './sdwan-light.svg';
import { ReactComponent as SdwanLightOnWhite } from './sdwan-light-on-white.svg';
import './index.scss';

const SdWan: React.FC<BrandIconProps> = ({ variant, className }) => {
  const classNames = brandIconClassinator('sdwan', { variant, className });

  switch (variant) {
    case 'light':
      return <SdwanLight className={classNames} />;
    case 'light-on-white':
      return <SdwanLightOnWhite className={classNames} />;
    default:
      return <SdwanDark className={classNames} />;
  }
};

export default SdWan;
