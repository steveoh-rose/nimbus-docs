// @ts-nocheck
import React from 'react';
import { ReactComponent as IconPerson } from '../ui-icons/person.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Person: React.FC<IconProps> = (props) => {
  return <IconPerson className={classinator('person', props)} />;
};

export default Person;
