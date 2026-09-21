// @ts-nocheck
import React from 'react';
import { ReactComponent as IconFirstPage } from '../ui-icons/first-page.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const FirstPage: React.FC<IconProps> = (props) => {
  return <IconFirstPage className={classinator('first-page', props)} />;
};

export default FirstPage;
