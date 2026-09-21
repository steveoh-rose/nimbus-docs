// @ts-nocheck
import React from 'react';
import { ReactComponent as IconPlayCircleOutline } from '../ui-icons/play-circle-outline.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const PlayCircleOutline: React.FC<IconProps> = (props) => {
  return (
    <IconPlayCircleOutline
      className={classinator('play-circle-outline', props)}
    />
  );
};

export default PlayCircleOutline;
