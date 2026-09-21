// @ts-nocheck
import React from 'react';
import { ReactComponent as IconNotificationsOff } from '../ui-icons/notifications-off.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const NotificationsOff: React.FC<IconProps> = (props) => {
  return (
    <IconNotificationsOff className={classinator('notifications-off', props)} />
  );
};

export default NotificationsOff;
