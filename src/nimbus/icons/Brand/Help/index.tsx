// @ts-nocheck
import React from 'react';
import { brandIconClassinator, BrandIconProps } from '../helpers';
import { ReactComponent as HelpDark } from './help-dark.svg';
import { ReactComponent as HelpLight } from './help-light.svg';
import { ReactComponent as HelpLightOnWhite } from './help-light-on-white.svg';
import './index.scss';

const Help = (props: BrandIconProps) => {
  const classNames = brandIconClassinator('help', props);

  switch (props.variant) {
    case 'light':
      return <HelpLight className={classNames} />;
    case 'light-on-white':
      return <HelpLightOnWhite className={classNames} />;
    default:
      return <HelpDark className={classNames} />;
  }
};

export default Help;
