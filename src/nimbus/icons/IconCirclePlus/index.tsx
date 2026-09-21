// @ts-nocheck
import React from 'react';

interface IconCirclePlusProps {
  size?: number;
  style?: React.CSSProperties;
}

const IconCirclePlus = ({ size = 20, style }: IconCirclePlusProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path
      className="circle"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 31.9999C24.8366 31.9999 32 24.8365 32 15.9999C32 7.16338 24.8366 -6.10352e-05 16 -6.10352e-05C7.16344 -6.10352e-05 0 7.16338 0 15.9999C0 24.8365 7.16344 31.9999 16 31.9999Z"
      fill="#0098FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.1429 9.99994V15.1428H10V16.8571H15.1429V21.9999H16.8571V16.8571H22V15.1428H16.8571V9.99994H15.1429Z"
      fill="white"
    />
  </svg>
);

export default IconCirclePlus;
