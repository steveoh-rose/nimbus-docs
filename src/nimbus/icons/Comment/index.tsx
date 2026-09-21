// @ts-nocheck
import React from 'react';
import { ReactComponent as IconComment } from '../ui-icons/comment.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Comment: React.FC<IconProps> = (props) => {
  return <IconComment className={classinator('comment', props)} />;
};

export default Comment;
