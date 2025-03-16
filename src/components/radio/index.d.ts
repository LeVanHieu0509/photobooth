import { ButtonHTMLAttributes } from "react";

export declare type label = "";
export declare type disabled = false;
export declare type selected = false;
export declare type onChange = null;

interface Props extends ButtonHTMLAttributes<HTMLElement> {
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  selected?: boolean;
  error?: boolean;
  highlight?: boolean;
  onChange?: () => void;
}

declare function RadioButton(props: Props): JSX.Element;

export default RadioButton;
