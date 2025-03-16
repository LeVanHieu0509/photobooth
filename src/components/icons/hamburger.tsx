import { IconProps } from ".";

const IconHamburger = ({ width = 18, height = 18, stroke = "black" }: IconProps) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y={0} width={30} height={2} fill="white" />
      <rect y={6} width={30} height={2} fill="white" />
      <rect y={12} width={30} height={2} fill="white" />
    </svg>
  );
};

export default IconHamburger;
