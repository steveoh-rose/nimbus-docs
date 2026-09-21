// @ts-nocheck
import React from 'react';
import { ReactComponent as IconLastPage } from '../ui-icons/last-page.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const LastPage: React.FC<IconProps> = (props) => {
  return <IconLastPage className={classinator('last-page', props)} />;
};

export default LastPage;
