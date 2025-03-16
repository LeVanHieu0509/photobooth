import { IconProps } from ".";

const IconBlockFooter = ({ width = 11, height = 13, fill = "black" }: IconProps) => {
  return (
    <svg width={94} height={9} viewBox="0 0 94 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 0.449554L28 4.44955L22 8.44955L0 4.44955L22 0.449554Z" fill="#37ABF4" />
      <path d="M72 0.449554L66 4.44955L72 8.44955L94 4.44955L72 0.449554Z" fill="#37ABF4" />
      <circle cx={35} cy="4.44955" r={3} fill="#37ABF4" />
      <circle cx={47} cy="4.44955" r={2} fill="#37ABF4" />
      <circle cx={3} cy={3} r={3} transform="matrix(-1 0 0 1 62 1.44955)" fill="#37ABF4" />
    </svg>
  );
};

export default IconBlockFooter;
