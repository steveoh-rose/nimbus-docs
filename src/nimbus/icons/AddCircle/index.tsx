// @ts-nocheck
import React from 'react';
import { ReactComponent as IconAddCircle } from '../ui-icons/add-circle.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const AddCircle: React.FC<IconProps> = (props) => {
  return <IconAddCircle className={classinator('add-circle', props)} />;
};

export default AddCircle;
