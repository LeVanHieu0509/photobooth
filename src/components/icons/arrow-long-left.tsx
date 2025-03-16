import { IconProps } from ".";

const IconArrowLongLeft = ({ width = 24, height = 24, fill = "black" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_986_4818)">
        <path d="M7.03613 6.4917L1.37127 12.1566L7.03613 17.8214" stroke="black" strokeWidth={2} />
        <path d="M1.37143 12.3428H24" stroke="black" strokeWidth={2} />
      </g>
      <defs>
        <clipPath id="clip0_986_4818">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrowLongLeft;
