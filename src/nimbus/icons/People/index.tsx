// @ts-nocheck
import React from 'react';
import { ReactComponent as IconPeople } from '../ui-icons/people.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const People: React.FC<IconProps> = (props) => {
  return <IconPeople className={classinator('people', props)} />;
};

export default People;
