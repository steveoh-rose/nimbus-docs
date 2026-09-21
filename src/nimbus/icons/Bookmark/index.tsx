// @ts-nocheck
import React from 'react';
import { ReactComponent as IconBookmark } from '../ui-icons/bookmark.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Bookmark: React.FC<IconProps> = (props) => {
  return <IconBookmark className={classinator('bookmark', props)} />;
};

export default Bookmark;
