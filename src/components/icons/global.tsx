import { IconProps } from ".";

const IconGlobal = ({ width = 18, height = 18, stroke = "black" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.69922 6.75H15.2992" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.69922 11.25H15.2992" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.62475 2.25C7.36126 4.27471 6.69141 6.6134 6.69141 9C6.69141 11.3866 7.36126 13.7253 8.62475 15.75"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.375 2.25C10.6385 4.27471 11.3083 6.6134 11.3083 9C11.3083 11.3866 10.6385 13.7253 9.375 15.75"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconGlobal;
