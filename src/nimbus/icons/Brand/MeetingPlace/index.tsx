// @ts-nocheck
import React from 'react';
import { ReactComponent as IconMeetingPlace } from './meetingplace.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const MeetingPlace: React.FC<BrandIconProps> = (props) => (
  <IconMeetingPlace className={brandIconClassinator('meetingplace', props)} />
);

export default MeetingPlace;
