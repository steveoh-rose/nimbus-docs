// @ts-nocheck
import React from 'react';
import { ReactComponent as IconNotifications } from '../ui-icons/notifications.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Notifications: React.FC<IconProps> = (props) => {
  return <IconNotifications className={classinator('notifications', props)} />;
};

export default Notifications;
