import { IconProps } from "../icons";

const RightIcon = ({ width = 11, height = 13, fill = "black" }: IconProps) => {
  return (
    <svg width={28} height={8} viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0L0 4L6 8L28 4L6 0Z" fill="black" />
    </svg>
  );
};

export default RightIcon;
