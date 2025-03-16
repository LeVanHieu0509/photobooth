import { IconProps } from ".";

const IconArrowLongRight = ({ width = 60, height = 60, stroke = "black" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 60 60`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.4678 21.4673L46.729 29.7285L38.4678 37.9898" stroke={stroke} strokeWidth={2} />
      <path d="M46.3281 29.8926H13.1074" stroke={stroke} strokeWidth={2} />
    </svg>
  );
};

export default IconArrowLongRight;
