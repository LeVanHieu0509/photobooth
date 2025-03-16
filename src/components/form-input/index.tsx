import { Col, Row } from "@/styles/common";
import { WalletIcon } from "@heroicons/react/24/outline";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import DateInput from "../date-picker/input";
import DropDown from "../dropdown-fieldset";
import { FormContainer, FormWrapper } from "./styled";
import { useState } from "react";

interface FormProps {
  listInput: any;
  modifiedData: any;
  onChange: (a: any, b: any) => void;
}

const FormInput = ({ listInput, modifiedData, onChange }: FormProps) => {
  const [isFocus, setIsFocus] = useState<any>({});

  console.log({ isFocus });
  return (
    <FormWrapper>
      <FormContainer>
        {listInput.map((row: any, key: number) => (
          <Row rowGap={24} rowGapMb={16} key={key}>
            {row.map((col: any, index: number) => (
              <Col key={index} md={row.length == 1 ? 12 : 6} sm={12}>
                {col.type == "input" ? (
                  <div>
                    <Input
                      icon={
                        col.showScanCode ? (
                          <svg
                            style={{ cursor: "pointer" }}
                            onClick={col.onClick}
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
                          </svg>
                        ) : col.showMaxQuantity ? (
                          <WalletIcon className="cursor-pointer" onClick={col.onClick} />
                        ) : null
                      }
                      disabled={col.disabled}
                      label={col.label}
                      size="lg"
                      labelProps={{
                        className: " ml-4 before:content-none after:content-none",
                      }}
                      value={modifiedData[col.name] ?? ""}
                      onChange={(e) => onChange(col.name, e.target.value)}
                      type={col.subType}
                      placeholder={col.placeHolder}
                      containerProps={{ className: "min-w-[100px]" }}
                      onBlur={() => {
                        setIsFocus((pre: any) => ({
                          ...pre,
                          [col.name]: false,
                        }));
                      }}
                      onFocus={() => {
                        setIsFocus((pre: any) => ({
                          ...pre,
                          [col.name]: true,
                        }));
                      }}
                    />
                    {col.error && isFocus[col.name] ? (
                      <p style={{ fontSize: "10px", height: "8px", color: "red" }}>{col.error()}</p>
                    ) : null}
                  </div>
                ) : null}

                {col.type == "textarea" ? (
                  <div>
                    <Textarea
                      style={{ minHeight: "50px" }}
                      value={modifiedData[col.name]}
                      label={col.label}
                      variant="static"
                      onChange={(e) => onChange(col.name, e.target.value)}
                      rows={2}
                      resize={true}
                      placeholder={col.placeHolder}
                      containerProps={{
                        className: "grid h-full",
                      }}
                      onBlur={() => {
                        setIsFocus((pre: any) => ({
                          ...pre,
                          [col.name]: false,
                        }));
                      }}
                      onFocus={() => {
                        setIsFocus((pre: any) => ({
                          ...pre,
                          [col.name]: true,
                        }));
                      }}
                      className="pl-10  "
                      labelProps={{
                        className: "ml-4 mt-2 before:content-none after:content-none",
                      }}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                    {col.error && isFocus[col.name] ? (
                      <p style={{ fontSize: "10px", height: "8px", color: "red", marginTop: "5px" }}>{col.error()}</p>
                    ) : null}
                  </div>
                ) : null}

                {col.type == "select" ? (
                  <Select
                    disabled={col.disabled}
                    labelProps={{
                      className: " ml-4  before:content-none after:content-none",
                    }}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    selected={(element) =>
                      element
                        ? element
                        : col.listDropdown.find((item: any) => item.value == modifiedData[col.name])?.key
                    }
                    onChange={(e) => onChange(col.name, e)}
                    variant="outlined"
                    label={col.label}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {col.listDropdown.map((item: any) => (
                      <Option className="py-2" key={item.value} value={item.value}>
                        {item.key}
                      </Option>
                    ))}
                  </Select>
                ) : null}

                {col.type == "dropdown" ? (
                  <DropDown
                    showText
                    title={col.label}
                    onChange={(e) => onChange(col.name, e)}
                    list={col.listDropdown}
                    value={col.listDropdown.find((item: any) => item.value === modifiedData[col.name])?.value}
                  />
                ) : null}

                {col.type == "inputDate" ? (
                  <DateInput
                    placeholder={col.label}
                    required
                    disabled={col.disabled}
                    value={modifiedData[col.name]}
                    onChange={(e) => onChange(col.name, e)}
                    error={col.error}
                  />
                ) : null}
              </Col>
            ))}
          </Row>
        ))}
      </FormContainer>
    </FormWrapper>
  );
};

export default FormInput;
