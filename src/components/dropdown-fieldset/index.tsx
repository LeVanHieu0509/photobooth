import useClickAway from "@/hooks/use-click-away";
import { removeVietnameseTones } from "@/utils";
import { isEmpty, isNil } from "lodash";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import Icons from "../icons";
import { Label } from "../input-fileldset/styled";
import { DropDownFiled, DropDownWrapper, Error, List, ListWrapper } from "./styled";

export interface IOption {
  value: string;
  label: string;
  extra?: any;
}

interface DropDownProps {
  list?: IOption[];
  title?: any;
  value?: string | number;
  error?: string | boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  required?: boolean;
  sizeIcon?: number;
  canRemove?: boolean;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  onChange?(value: string, option: IOption): void;
  onReset?(): void;
  onBlur?(): void;
  loading?: boolean;
  isSearch?: boolean;
}

function DropDown({
  id,
  name,
  list = [],
  title,
  value,
  error,
  disabled,
  required = false,
  canRemove,
  size,
  showText,
  onChange,
  loading,
  onBlur,
  isSearch,
  ...props
}: DropDownProps) {
  const [show, setShow] = useState(false);
  const [indexFocus, setIndexFocus] = useState(-1);
  const [pos, setPos] = useState<React.CSSProperties>();
  const ref = useRef<HTMLDivElement | any>();
  const refButton = useRef<HTMLDivElement | any>();

  const [focusButton, setFocusButton] = useState(false);
  const [autoComplete, setAutoComplete] = useState(false);
  const refSelect = useRef<HTMLSelectElement>();
  const [text, setText] = useState<string | number | null>();

  const [searchKey, setSearchKey] = useState("");
  const [isFocus, setFocus] = useState(false);

  //need optimize
  useEffect(() => {
    if (showText && !list.find((item) => item.value === value)) {
      setText(value);
    } else {
      setText(null);
    }
  }, [value]);

  console.log({ value });

  useEffect(() => {
    const handle = () => {
      setFocusButton(true);
    };
    if (refButton.current) {
      refButton.current?.addEventListener("focus", handle);
    }
    return () => {
      if (ref.current) {
        refButton.current?.removeEventListener("focus", handle);
      }
    };
  }, []);

  useClickAway(ref, (e: Event) => {
    setShow(false);
    setFocusButton(false);
    onBlur?.();
  });

  useEffect(() => {
    setSearchKey("");
  }, [value]);

  const handleKeydown = (e: KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        setShow(true);
        setIndexFocus((pre) => {
          return pre < list.length - 1 ? pre + 1 : list.length - 1;
        });
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        setIndexFocus((pre) => {
          return pre > 0 ? pre - 1 : 0;
        });
        break;
      }
      case "Enter": {
        e.preventDefault();
        if (refButton.current) {
          refButton.current.blur();
        }
        setShow(false);
        indexFocus != -1 && onChange?.(list[indexFocus].value, list[indexFocus]);
        break;
      }
      case "Tab": {
        if (e.shiftKey) {
          setIndexFocus((pre) => {
            return pre > 0 ? pre - 1 : 0;
          });
        } else {
          setIndexFocus((pre) => {
            return pre < list.length - 1 ? pre + 1 : list.length - 1;
          });
        }
        break;
      }
    }
  };

  useEffect(() => {
    if (indexFocus >= 0 && ref.current) {
      const element: HTMLElement = ref.current.children[indexFocus] as HTMLElement;
      // const scrollTop = element?.offsetTop;
      element?.focus?.();
      // ref.current.scrollTo({ top: scrollTop, left: 0 });
    }
  }, [indexFocus]);

  const onSelectItem = (value: string, item: IOption) => {
    setShow(false);
    onChange?.(value, item);
    setIndexFocus(-1);
    // document.body.style.overflow = "unset";
    setAutoComplete(false);
    // setTimeout(() => {
    //   refSelect.current?.blur();
    // }, 100);
  };

  const onShowList = () => {
    if (!loading) {
      setShow(true);
    }
  };

  // useEffect(() => {
  //   if (show && refButton.current) {
  //     var box = refButton.current.getBoundingClientRect();
  //     setPos({
  //       marginLeft: box.left,
  //       marginTop: box.top + refButton.current.offsetHeight,
  //       width: Math.max(300, refButton.current.offsetWidth),
  //     });
  //   }
  // }, [show, refButton.current]);
  // const height = Math.min(224, jobs.length * 44 + 16);

  // var body = document.body;
  // var docEl = document.documentElement;

  // var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  // var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  // var clientTop = docEl.clientTop || body.clientTop || 0;
  // var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // var top = box.top + scrollTop - clientTop + refButton.current.offsetHeight + 10;
  // var left = box.left + scrollLeft - clientLeft;
  // if (top + height > document.body.offsetHeight) {
  //   top += -height - refButton.current.offsetHeight - 20;
  // }
  // if (left + 300 > window.innerWidth) {
  //   left = window.innerWidth - 310;
  // }
  // setPos({ top: top, left: left, width: Math.max(300, refButton.current.offsetWidth) });
  //   }
  // }, [show, ref.current]);

  useEffect(() => {
    setTimeout(() => {
      try {
        if (refSelect.current?.matches(":-internal-autofill-selected")) {
          setAutoComplete(true);
        }
      } catch (_) {}
    }, 300);
  }, []);

  const selectedLabel = text ? value : value && list?.find((e) => e.value === value)?.label;

  return (
    <DropDownWrapper>
      <DropDownFiled
        ref={refButton}
        size={size}
        active={focusButton}
        tabIndex={0}
        onBlur={() => {
          setFocusButton(false);
        }}
        onKeyDown={() => handleKeydown}
        onClick={onShowList}
        onFocus={(e) => {
          e.preventDefault();
          setIndexFocus(-1);
        }}
        disabled={disabled}
        error={!!error}
      >
        {title && (
          <Label
            focus={focusButton}
            required={required}
            type={"dropdown"}
            haveValue={autoComplete || (!isEmpty(`${value}`) && !isNil(value)) || isFocus}
          >
            {title}
            {required && <span className="red-color">*</span>}
          </Label>
        )}
        {isSearch ? (
          <input
            style={{ padding: "12px 16px", width: "100%" }}
            value={isFocus ? searchKey : selectedLabel}
            onChange={(e) => setSearchKey(e.target.value)}
            // placeholder={selectedLabel.toString()}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
            }}
          />
        ) : (
          <p className={value ? "value" : ""}>{selectedLabel}</p>
        )}
        <Icons icon="dropdown" />
      </DropDownFiled>
      {typeof error === "string" && <Error>{error}</Error>}

      {show && !disabled && (
        // <Portal id="">
        <ListWrapper ref={ref} onClick={() => setShow(false)}>
          <List>
            {list
              .filter(
                (a) =>
                  !searchKey ||
                  removeVietnameseTones(a.label?.toLowerCase()).includes(removeVietnameseTones(searchKey.toLowerCase()))
              )
              .map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onSelectItem(item.value, item);
                  }}
                  onKeyDown={handleKeydown}
                  className={value === item.value || indexFocus === index ? "primary-color" : ""}
                >
                  <span className={value === item.value || indexFocus === index ? "primary-color" : ""}>
                    {item.label}
                  </span>
                </button>
              ))}
          </List>
        </ListWrapper>
      )}
    </DropDownWrapper>
  );
}

export default DropDown;
