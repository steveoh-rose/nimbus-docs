// @ts-nocheck
import React from 'react';
import { ReactComponent as IconFileDownload } from '../ui-icons/file-download.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const FileDownload: React.FC<IconProps> = (props) => {
  return <IconFileDownload className={classinator('file-download', props)} />;
};

export default FileDownload;
