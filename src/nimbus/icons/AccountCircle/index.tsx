// @ts-nocheck
import React from 'react';
import { ReactComponent as IconAccountCircle } from '../ui-icons/account-circle.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const AccountCircle: React.FC<IconProps> = (props) => {
  return <IconAccountCircle className={classinator('account-circle', props)} />;
};

export default AccountCircle;
