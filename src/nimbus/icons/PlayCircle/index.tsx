// @ts-nocheck
import React from 'react';
import { ReactComponent as IconPlayCircle } from '../ui-icons/play-circle.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const PlayCircle: React.FC<IconProps> = (props) => {
  return <IconPlayCircle className={classinator('play-circle', props)} />;
};

export default PlayCircle;
