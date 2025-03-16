import { IconProps } from ".";

const IconArrowReadMore = ({ width = 18, height = 18, stroke = "black" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1286_3868)">
        <path d="M12.723 4.8689L16.9717 9.11754L12.723 13.3662" stroke={stroke} strokeWidth="2" />
        <path d="M16.9714 9.25708H0" stroke={stroke} strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_1286_3868">
          <rect width="18" height="18" fill="white" transform="matrix(-1 0 0 1 18 0)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrowReadMore;
