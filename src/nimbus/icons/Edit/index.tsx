// @ts-nocheck
import React from 'react';
import { ReactComponent as IconEdit } from '../ui-icons/edit.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Edit: React.FC<IconProps> = (props) => {
  return <IconEdit className={classinator('edit', props)} />;
};

export default Edit;
