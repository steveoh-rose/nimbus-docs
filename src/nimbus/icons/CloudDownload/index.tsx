// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCloudDownload } from '../ui-icons/cloud-download.svg';
import { classinator, IconProps } from '../shared';

import './index.scss';

const CloudDownload: React.FC<IconProps> = (props) => {
  return <IconCloudDownload className={classinator('cloud-download', props)} />;
};

export default CloudDownload;
