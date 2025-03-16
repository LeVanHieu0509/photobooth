import { IconProps } from ".";

const IconArrowDown = ({ width = 20, height = 20, stroke = "black" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7.5L10 12.5L15 7.5" stroke={stroke} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  );
};

export default IconArrowDown;
