// @ts-nocheck
import React from 'react';
import { ReactComponent as IconFavouriteOutline } from '../ui-icons/favorite-outline.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const FavouriteOutline: React.FC<IconProps> = (props) => {
  return (
    <IconFavouriteOutline className={classinator('favorite-outline', props)} />
  );
};

export default FavouriteOutline;
