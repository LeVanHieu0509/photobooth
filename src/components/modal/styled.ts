import { ButtonIcon } from "@/styles/button";
import styled from "styled-components";
import { device } from "@/styles/media";
import { css } from "styled-components";

export const ModalWrapper = styled.div<{ showFooter?: boolean; bg?: string }>`
  width: 100vw;
  height: calc(100 * var(--vh));
  padding-bottom: ${({ showFooter }) => (showFooter ? "84px" : "")};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1100;
  overflow: auto;

  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    background: ${({ bg }) => bg ?? "#ffffff"};
  }

  svg {
    stroke: ${({ bg }) => (bg ? "#ffffff" : "black")};
  }
`;

export const RgbaBackground = styled.div<{ $active?: boolean; $rgbaToMinusHeight?: number }>`
  transition: all 0.4s ease;
  ${({ $active, $rgbaToMinusHeight }) =>
    $active
      ? css`
          background: rgba(0, 0, 0, 0.3);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          z-index: 1200;
          right: 0;
          width: 100vw;
          height: calc(100 * var(--vh) - ${$rgbaToMinusHeight}px);
        `
      : ""}
`;

export const Body = styled.div`
  /* height: calc(100 * var(--vh)); */
  padding-top: 55px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 15px 18px;
  min-height: 55px;

  position: fixed;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.color.status.gray2};
`;

export const LeftHeader = styled.div`
  display: flex;

  h6 {
    margin-left: 22px;
  }

  @media ${device.mobile} {
    align-items: center;

    h6 {
      font-size: 16px;
    }
  }
`;

export const WrapperButtonFooter = styled.div`
  width: 100%;
  padding: 16px 32px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  display: flex;

  background: white;
  box-shadow: 0px -1px 0px #dbdfe1;

  @media ${device.mobile} {
    padding: 16px;

    button {
      min-width: auto;
      max-width: 100%;

      flex: 1;

      :nth-of-type(2) {
        margin-left: 16px;
      }
    }
  }
`;

export const ButtonClose = styled(ButtonIcon)<{ show?: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};

  position: absolute;
  top: 14.75px;
  right: 24px;

  @media ${device.mobile} {
    display: block;
    z-index: 1;
    top: 16px;
    right: 16px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
