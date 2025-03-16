import { IconProps } from ".";

const IconArrowShortRight = ({ width = 18, height = 18, stroke = "black" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1296_6114)">
        <path d="M12.7188 4.86914L16.9674 9.11779L12.7187 13.3664" stroke="black" strokeWidth="2" />
        <path d="M16.9714 9.25781H0" stroke={stroke} strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_1296_6114">
          <rect width="18" height="18" fill="white" transform="matrix(-1 0 0 1 18 0)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrowShortRight;
