import styled from "styled-components";

export const LineDateWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;

  div {
    background-color: red;
    position: relative;
    min-width: 161px;
  }

  p {
    height: 40px;
    min-width: 161px;
    display: block;
    padding: 0 42px;
    background: white;
    margin-top: -12px;
    text-align: center;
    position: absolute;

    &:after {
      border-radius: 999px;
      content: "";
      height: 6px;
      width: 6px;
      position: absolute;
      background: black;
      top: 9px;
      left: 30px;
    }
    &:before {
      border-radius: 999px;
      content: "";
      height: 6px;
      width: 6px;
      position: absolute;
      background: black;
      top: 9px;
      right: 30px;
    }
  }

  svg {
    position: absolute;
    text-align: center;

    &:first-child {
      top: -4px;
      left: -4px;
      z-index: 1;
    }

    &:last-child {
      top: -4px;
      right: -4px;
      z-index: 1;
    }
  }
`;

export const Dot = styled.span<{ space: number }>`
  &:first-child {
    display: block;
    border-radius: 999px;
    height: 6px;
    width: 6px;
    position: absolute;
    background: black;
    top: 9px;
    right: ${({ space }) => space && `${space * 15}px`};
    right: 45px;
  }
  &:nth-child(2) {
    display: block;
    border-radius: 999px;
    height: 6px;
    width: 6px;
    position: absolute;
    background: black;
    top: 9px;
    right: ${({ space }) => space && `${space * 15}px`};
  }
  &:nth-child(3) {
    display: block;
    border-radius: 999px;
    height: 6px;
    width: 6px;
    position: absolute;
    background: black;
    top: 9px;
    right: ${({ space }) => space && `${space * 15}px`};
  }
  &:nth-child(4) {
    display: block;
    border-radius: 999px;
    height: 6px;
    width: 6px;
    position: absolute;
    background: black;
    top: 9px;
    right: ${({ space }) => space && `${space * 15}px`};
  }
  &:last-child {
    display: block;
    border-radius: 999px;
    height: 6px;
    width: 6px;
    position: absolute;
    background: black;
    top: 9px;
    right: ${({ space }) => space && `${space * 15}px`};
  }
`;
