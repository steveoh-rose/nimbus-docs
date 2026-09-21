// @ts-nocheck
import React from 'react';
import classNames from 'classnames';
import { ReactComponent as IconConsoleConnect } from '../ui-icons/console-logo-white.svg';
import { IconProps } from '../shared';

import './index.scss';

const ConsoleConnectLogo: React.FC<IconProps> = ({ className, ...props }) => (
  <IconConsoleConnect {...props} className={classNames('cc-logo', className)} />
);

export default ConsoleConnectLogo;
