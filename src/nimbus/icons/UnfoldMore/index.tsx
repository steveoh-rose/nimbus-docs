// @ts-nocheck
import React from 'react';
import { ReactComponent as UnfoldMore } from '../ui-icons/unfold-more.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Verified: React.FC<IconProps> = (props) => {
  return <UnfoldMore className={classinator('unfold-more', props)} />;
};

export default Verified;
