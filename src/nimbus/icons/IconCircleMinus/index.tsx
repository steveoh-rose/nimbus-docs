// @ts-nocheck
import React from 'react';

interface Props {
  size?: number;
}

const IconCircleMinus = ({ size = 20 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="circle"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16345 24.8366 0 16 0C7.16344 0 0 7.16345 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="#0098FF"
      />
      <path
        className="minus"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 16.9999H10V14.9999H22V16.9999Z"
        fill="white"
      />
    </svg>
  );
};

export default IconCircleMinus;
