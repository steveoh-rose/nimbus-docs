// @ts-nocheck
import React from 'react';
import { brandIconClassinator, BrandIconProps } from '../helpers';
import IxDark from './IxDark';
import IxLight from './IxLight';
import IxLightOnWhite from './IxLightOnWhite';
import './index.scss';

const IxIcon = (props: BrandIconProps) => {
  const { variant } = props;
  const classNames = brandIconClassinator('ix', props);

  switch (variant) {
    case 'light':
      return <IxLight className={classNames} />;
    case 'light-on-white':
      return <IxLightOnWhite className={classNames} />;
    default:
      return <IxDark className={classNames} />;
  }
};

export default IxIcon;
