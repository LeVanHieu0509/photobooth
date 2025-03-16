import { device } from "@/styles/media";
import { cloneDeep } from "lodash";
import styled from "styled-components";

export const ExpandItemWrapper = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 0px;
  padding-top: 28px;

  &:first-child {
    padding-top: 0;
  }
  :not(:first-child) {
    padding-top: 0;
  }

  @media ${device.mobile} {
    padding-top: 16px;
  }
`;

export const FooterFwdMobileWrapper = styled.div``;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
`;

export const TitleWrapper = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;

  svg {
    :last-child {
      transition: 0.3s all ease-in-out;
      margin-top: 5px;
      transform: ${({ show }) => (show ? "rotate(0deg)" : "rotate(180deg) ")};
    }
  }
`;

export const SubLinkWrapper = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  ul {
    margin: 0;
    margin-top: 8px;
    padding-left: 0px;
  }

  margin-bottom: 16px;
`;

export const Answer = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  padding-top: 10px;

  color: #183028;
`;

export const Hr = styled.div`
  height: 1px;
  width: 45%;
  border-top: 1px solid #dbdfe1;
`;

export const SummaryWrapper = styled.div``;

export const PlusIcon = styled.div<{ show: boolean }>`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 3px;
  right: 0px;
  z-index: 0;
  background: transparent;
  border-radius: 50%;

  &:before,
  &:after {
    content: "";
    display: block;
    width: 12px;
    height: 2px;
    z-index: 1000;
    background: black;
    position: absolute;
    transition: all 0.1s ease-in-out;
    top: calc(50% - 1px);
    left: calc(50% - 5.5px);
  }

  &:after {
    transform: rotate(90deg);
  }
  ${({ show }) =>
    show &&
    ` &:before,
      &:after {
        transform: rotate(180deg);
      }`}

  @media (max-width: 768px) {
  }
`;
