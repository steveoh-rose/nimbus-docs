// @ts-nocheck
import React from 'react';
import { brandIconClassinator, BrandIconProps } from '../helpers';
import { ReactComponent as EmailDark } from './email-dark.svg';
import { ReactComponent as EmailLight } from './email-light.svg';
import { ReactComponent as EmailLightOnWhite } from './email-light-on-white.svg';
import './index.scss';

const Email = (props: BrandIconProps) => {
  const classNames = brandIconClassinator('email', props);

  switch (props.variant) {
    case 'light':
      return <EmailLight className={classNames} />;
    case 'light-on-white':
      return <EmailLightOnWhite className={classNames} />;
    default:
      return <EmailDark className={classNames} />;
  }
};

export default Email;
