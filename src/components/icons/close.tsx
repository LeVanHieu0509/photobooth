import { IconProps } from ".";

const IconClose = ({ width = 24, height = 24, stroke = "black" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L20 20" stroke={stroke} strokeWidth={2} />
      <path d="M20 4L3.99999 20" stroke={stroke} strokeWidth={2} />
    </svg>
  );
};

export default IconClose;
