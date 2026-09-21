// @ts-nocheck
import React from 'react';
import classnames from 'classnames';
import { ReactComponent as IconMedal } from './medal.svg';
import './index.scss';

export type MedalColor = 'gold' | 'silver' | 'bronze';

export interface MedalProps {
  color: MedalColor;
}

const Medal: React.FC<MedalProps> = ({ color }) => (
  <IconMedal
    className={classnames('nb-icon-medal', `nb-icon-medal-${color}`)}
  />
);
export default Medal;
