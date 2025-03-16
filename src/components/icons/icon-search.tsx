import { IconProps } from ".";

const IconSearch = ({ width = 11, height = 13, fill = "white" }: IconProps) => {
  return (
    <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse
        cx="8.98204"
        cy="8.48216"
        rx="7.48204"
        ry="7.48204"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1854 14.0741L17.1188 16.9999"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSearch;
