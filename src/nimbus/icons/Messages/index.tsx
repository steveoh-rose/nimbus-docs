// @ts-nocheck
import React from 'react';
import { ReactComponent as IconMessages } from '../ui-icons/messages.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Messages: React.FC<IconProps> = (props) => {
  return <IconMessages className={classinator('messages', props)} />;
};

export default Messages;
