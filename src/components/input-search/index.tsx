import { useEffect, useRef, useState } from "react";
import { NumericFormat } from "react-number-format";
import { ButtonIconClose, CustomInputNumber, InputSearchWrapper } from "./styled";
import Icons from "../icons";
import { Input } from "../input-fileldset/styled";

type SearchType = "search-phone" | "text" | "";
interface InputFieldSetProps {
  id?: string;
  name?: string;
  value: string | number;
  placeholder?: string;
  type?: SearchType;
  onChange?(e: { target: { value: string } }): void;
  onChangeInputNumber?(value: string): void;
  onClose: () => void;
  onSubmit: () => void;
}

function InputSearch({
  id,
  name,
  value,
  placeholder,
  type,
  onChange,
  onChangeInputNumber,
  onClose,
  onSubmit,
}: InputFieldSetProps) {
  const [focus, setFocus] = useState(false);

  const refInput = useRef<any>(null);

  useEffect(() => {
    const handel = () => {
      setFocus(true);
    };
    setTimeout(() => {
      try {
        if (refInput.current.matches(":-internal-autofill-selected")) {
        }
      } catch (_) {}
    }, 300);

    refInput.current?.addEventListener?.("focus", handel);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      refInput.current?.removeEventListener?.("focus", handel);
    };
  }, []);

  const handleBlur = () => {
    setFocus(false);
    onChange?.({ target: { value: value?.toString() || "" } });
  };

  return (
    <InputSearchWrapper active={focus}>
      <Icons fill="#EA8E31" icon="icon-search" />

      {type === "search-phone" ? (
        <CustomInputNumber>
          <NumericFormat
            placeholder={placeholder}
            // disabled={disabled}
            value={value ?? ""}
            decimalSeparator=","
            thousandSeparator={false}
            getInputRef={refInput}
            allowLeadingZeros={true}
            allowNegative={false}
            onValueChange={(value: any) => onChangeInputNumber && onChangeInputNumber(value.value)}
            onBlur={handleBlur}
          />
        </CustomInputNumber>
      ) : (
        <Input
          ref={refInput}
          id={id}
          name={name}
          value={value ?? ""}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
      )}
      <button onClick={onSubmit}>Tìm kiếm</button>

      <ButtonIconClose onClick={onClose}>
        <Icons stroke="white" icon="close" />
      </ButtonIconClose>
    </InputSearchWrapper>
  );
}

export default InputSearch;
