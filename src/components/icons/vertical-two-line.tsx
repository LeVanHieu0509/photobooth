import { IconProps } from ".";

const IconVerticalTwoLine = ({ width = 4, height = 12, stroke = "#707070" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={1} height={12} fill={stroke} />
      <rect x={3} width={1} height={12} fill={stroke} />
    </svg>
  );
};

export default IconVerticalTwoLine;
