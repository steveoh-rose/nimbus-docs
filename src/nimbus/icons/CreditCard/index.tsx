// @ts-nocheck
import React from 'react';
import { ReactComponent as IconCreditCard } from '../ui-icons/credit-card.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const CreditCard: React.FC<IconProps> = (props) => {
  return <IconCreditCard className={classinator('pin', props)} />;
};

export default CreditCard;
