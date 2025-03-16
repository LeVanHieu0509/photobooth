import React from "react";
import { IconProps } from "../icons";

const RadioDisabled = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg width={width ?? 20} height={height ?? 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" rx="10" fill={fill ?? "#EDEFF0"} />
      <rect x="5" y="9" width="10" height="2" rx="1" fill={stroke ?? "#BDC3C7"} />
    </svg>
  );
};

export default RadioDisabled;
