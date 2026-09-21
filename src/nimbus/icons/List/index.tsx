// @ts-nocheck
import React from 'react';
import { ReactComponent as IconList } from '../ui-icons/list.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const List: React.FC<IconProps> = (props) => {
  return <IconList className={classinator('list', props)} />;
};

export default List;
