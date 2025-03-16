import Icons from "@/components/icons";
import Portal from "@/components/portal";
import { Body, ButtonClose, Header, LeftHeader, ModalWrapper, RgbaBackground, WrapperButtonFooter } from "./styled";
import { useEffect } from "react";

interface ModalProps {
  bg?: string;
  show?: boolean;
  title: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
  secondaryBtn?: {
    text?: string;
    disable?: boolean;
    onClick?: () => void;
  };
  primaryBtn?: {
    text?: string;
    disable?: boolean;
    onClick?: () => void;
  };
  onClose: () => void;
  footer?: React.ReactNode;
  rgbBackground?: boolean;
  rgbaToMinusHeight?: number; //số height cần trừ dể show rgba
}

const Modal = ({
  bg,
  footer,
  show,
  title,
  children,
  secondaryBtn,
  primaryBtn,
  rgbBackground,
  rgbaToMinusHeight,
  onClose,
}: ModalProps) => {
  const showFooter = typeof primaryBtn?.onClick === "function" || typeof secondaryBtn?.onClick === "function";
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <Portal>
      <ModalWrapper bg={bg} showFooter={showFooter}>
        <Header>
          <LeftHeader>
            <h6>{title}</h6>
            <ButtonClose onClick={onClose} show={true}>
              <Icons icon="close" stroke={`${bg ? "white" : "black"}`} />
            </ButtonClose>
          </LeftHeader>
        </Header>

        <Body>{children}</Body>

        {showFooter ? (
          <WrapperButtonFooter>
            {/* {typeof secondaryBtn?.onClick === "function" ? (
              <ButtonSecondary disabled={secondaryBtn?.disable} size="large" long onClick={secondaryBtn?.onClick}>
                {secondaryBtn?.text ?? "Hủy bỏ"}
              </ButtonSecondary>
            ) : null}
            <Spacing className="hide-mobile" />
            {typeof primaryBtn?.onClick === "function" ? (
              <ButtonPrimary disabled={primaryBtn?.disable} size="large" long onClick={primaryBtn?.onClick}>
                {primaryBtn?.text ?? "Xác nhận"}
              </ButtonPrimary>
            ) : null} */}
          </WrapperButtonFooter>
        ) : null}

        {footer && <WrapperButtonFooter>{footer}</WrapperButtonFooter>}
      </ModalWrapper>
      <RgbaBackground $active={rgbBackground} $rgbaToMinusHeight={rgbaToMinusHeight} />
    </Portal>
  );
};

export default Modal;
