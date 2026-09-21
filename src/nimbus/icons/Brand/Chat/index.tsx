// @ts-nocheck
import React from 'react';
import { ReactComponent as IconChat } from './chat.svg';
import './index.scss';
import { brandIconClassinator, BrandIconProps } from '../helpers';

const Chat: React.FC<BrandIconProps> = (props) => (
  <IconChat className={brandIconClassinator('chat', props)} />
);

export default Chat;
