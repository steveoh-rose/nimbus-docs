// @ts-nocheck
import React from 'react';
import { ReactComponent as IconVerified } from '../ui-icons/verified.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Verified: React.FC<IconProps> = (props) => {
  return <IconVerified className={classinator('unfold-more', props)} />;
};

export default Verified;
