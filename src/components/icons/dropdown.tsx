import { IconProps } from ".";

const IconDropdown = ({ width = 18, height = 18, stroke = "black" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7L9 12L14 7" stroke={stroke} strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  );
};

export default IconDropdown;
