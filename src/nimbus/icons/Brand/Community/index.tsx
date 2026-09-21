// @ts-nocheck
import React from 'react';
import { brandIconClassinator, BrandIconProps } from '../helpers';
import { ReactComponent as CommunityDark } from './community-dark.svg';
import { ReactComponent as CommunityLight } from './community-light.svg';
import { ReactComponent as CommunityLightOnWhite } from './community-light-on-white.svg';
import './index.scss';

const Community = (props: BrandIconProps) => {
  const classNames = brandIconClassinator('community', props);

  switch (props.variant) {
    case 'light':
      return <CommunityLight className={classNames} />;
    case 'light-on-white':
      return <CommunityLightOnWhite className={classNames} />;
    default:
      return <CommunityDark className={classNames} />;
  }
};

export default Community;
