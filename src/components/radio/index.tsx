import RadioDisabled from "./radio-disabled";
import RadioSelected from "./radio-selected";
import React from "react";
import { RadioButton } from "./styled";

function Radio({
  label,
  onChange,
  disabled,
  readOnly,
  selected,
  error,
  ...props
}: {
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  selected?: boolean;
  error?: boolean;
  highlight?: boolean;
  onChange?: () => void;
}) {
  return (
    <RadioButton checked={selected} disabled={disabled || readOnly} onClick={onChange} error={error} {...props}>
      <h5>{label}</h5>
      {/* <span></span> */}
      {selected && <RadioSelected stroke="#000000" />}
      {disabled && <RadioDisabled />}
    </RadioButton>
  );
}

export default Radio;
