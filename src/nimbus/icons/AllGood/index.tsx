// @ts-nocheck
import React from 'react';
import { ReactComponent as IconAllGood } from '../ui-icons/all-good.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const AllGood: React.FC<IconProps> = (props) => {
  return <IconAllGood className={classinator('all-good', props)} />;
};

export default AllGood;
