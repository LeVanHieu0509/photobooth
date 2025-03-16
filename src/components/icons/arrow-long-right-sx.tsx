import { IconProps } from ".";

const IconArrowLongRightSx = ({ width = 60, height = 60, stroke = "black" }: IconProps) => {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2833_8223)">
        <path d="M12.7231 4.8689L16.9718 9.11754L12.7231 13.3662" stroke="black" strokeWidth={2} />
        <path d="M16.9714 9.25714H0" stroke="black" strokeWidth={2} />
      </g>
      <defs>
        <clipPath id="clip0_2833_8223">
          <rect width={18} height={18} fill="white" transform="matrix(-1 0 0 1 18 0)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrowLongRightSx;
