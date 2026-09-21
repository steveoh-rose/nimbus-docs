// @ts-nocheck
import React from 'react';
import { ReactComponent as IconReply } from '../ui-icons/reply.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Reply: React.FC<IconProps> = (props) => {
  return <IconReply className={classinator('reply', props)} />;
};

export default Reply;
