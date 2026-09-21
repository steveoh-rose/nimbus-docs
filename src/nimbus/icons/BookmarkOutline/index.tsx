// @ts-nocheck
import React from 'react';
import { ReactComponent as IconBookmarkOutline } from '../ui-icons/bookmark-outline.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const BookmarkOutline: React.FC<IconProps> = (props) => {
  return (
    <IconBookmarkOutline className={classinator('bookmark-outline', props)} />
  );
};

export default BookmarkOutline;
