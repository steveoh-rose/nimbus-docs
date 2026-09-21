// @ts-nocheck
import React from 'react';
import { ReactComponent as IconAntiDDoS } from '../ui-icons/icon_ADD.svg';
import { classinator, IconProps } from '../shared';
import '../index.scss';

const AntiDDoS: React.FC<IconProps> = (props) => {
  return <IconAntiDDoS className={classinator('cs-add', props)} />;
};

export default AntiDDoS;
