// @ts-nocheck
import React from 'react';
import { brandIconClassinator, BrandIconProps } from '../helpers';
import { ReactComponent as TrainingDark } from './training-dark.svg';
import { ReactComponent as TrainingLight } from './training-light.svg';
import { ReactComponent as TrainingLightOnWhite } from './training-light-on-white.svg';
import './index.scss';

const Training = (props: BrandIconProps) => {
  const classNames = brandIconClassinator('training', props);

  switch (props.variant) {
    case 'light':
      return <TrainingLight className={classNames} />;
    case 'light-on-white':
      return <TrainingLightOnWhite className={classNames} />;
    default:
      return <TrainingDark className={classNames} />;
  }
};

export default Training;
