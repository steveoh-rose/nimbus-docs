// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCloudUpload } from '../ui-icons/cloud-upload.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CloudUpload: React.FC<IconProps> = (props) => {
  return <IconCloudUpload className={classinator('cloud-upload', props)} />;
};

export default CloudUpload;
