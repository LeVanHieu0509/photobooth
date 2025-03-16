import { IconProps } from ".";

const FactoriesMaker = ({ fill = "black" }: IconProps) => {
  return (
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="5" fill={fill} />
    </svg>
  );
};

export default FactoriesMaker;
