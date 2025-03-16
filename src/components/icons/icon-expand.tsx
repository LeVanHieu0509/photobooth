import React from "react";
import { IconProps } from ".";

const IconExpandRecap = ({ width = 16, height = 16, fill = "black" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16L4 0L13 8L4 16Z" fill={fill} />
    </svg>
  );
};

export default IconExpandRecap;
