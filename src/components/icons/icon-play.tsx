import { IconProps } from ".";

const IconPlay = ({ width = 80, height = 80 }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="black" />
      <path d="M34 56V24L52 40L34 56Z" fill="white" />
    </svg>
  );
};

export default IconPlay;
