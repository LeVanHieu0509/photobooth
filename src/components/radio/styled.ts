import { device } from "@/styles/media";
import styled, { css } from "styled-components";

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const ErrorStyle = css`
  :after {
    border-color: ${({ theme }) => theme.color.status.red};
  }
`;

const CheckedStyle = css`
  &:hover {
    :after {
      border-color: ${({ theme }) => theme.color.status.black};
    }
  }
  svg {
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

export const RadioButton = styled.button<{ highlight?: boolean; checked?: boolean; error?: boolean }>`
  cursor: pointer;
  display: block;
  padding: 0px 0px 0px 30px;
  position: relative;
  border: none;
  background: none;
  min-height: 24px;
  h5 {
    text-align: left;
    ${({ highlight }) =>
      highlight
        ? css`
            font-weight: 700;
            font-style: italic;
          `
        : ""};
  }

  &:after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;

    position: absolute;
    top: 0px;
    left: 0px;

    border: 1px solid ${({ theme }) => theme.color.status.black};
    border-radius: 50%;
  }

  ${({ checked }) => (checked ? CheckedStyle : "")}
  ${({ error }) => (error ? ErrorStyle : "")};

  &:disabled {
    cursor: not-allowed;
    transform: none;

    svg {
      position: absolute;
      top: 2px;
      left: 0;
    }
    :after {
      /* border: none; */
    }
  }
  &:hover {
    :after {
      border-color: ${({ theme }) => theme.color.status.black};
    }
  }
  /* &:focus {
    box-shadow: none;
    :before {
      content: "";
      display: block;
      width: 21.5px;
      height: 21.5px;
      z-index: 10;

      position: absolute;
      top: 1.25px;
      left: -0.75px;

      border-radius: 50%;

      pointer-events: none;
      user-select: none;
    }
  } */

  @media ${device.mobile} {
    z-index: 1;
  }
`;
