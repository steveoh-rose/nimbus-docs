// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCalendar } from '../ui-icons/calendar.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Calendar: React.FC<IconProps> = (props) => {
  return <IconCalendar className={classinator('calendar', props)} />;
};

export default Calendar;
