// @ts-nocheck
import React from 'react';
import { ReactComponent as IconReportProblem } from '../ui-icons/report-problem.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const ReportProblem: React.FC<IconProps> = (props) => {
  return <IconReportProblem className={classinator('report-problem', props)} />;
};

export default ReportProblem;
