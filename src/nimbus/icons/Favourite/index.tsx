// @ts-nocheck
import React from 'react';
import { ReactComponent as IconFavourite } from '../ui-icons/favorite.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Favourite: React.FC<IconProps> = (props) => {
  return <IconFavourite className={classinator('favorite', props)} />;
};

export default Favourite;
