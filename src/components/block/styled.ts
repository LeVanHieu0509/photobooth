import { device } from "@/styles/media";
import styled from "styled-components";

export const BlockWrapper = styled.div<{ isChildren: any }>`
  border-radius: 20px;
  border: ${({ isChildren }) => (isChildren ? "1px solid #37ABF4" : "none")};
  position: relative;
  display: flex;

  align-items: center;
  flex-direction: column;
  width: 100%;
  text-transform: uppercase;

  margin-bottom: 75px;

  @media ${device.mobile} {
    margin-bottom: 50px;
  }
`;

export const BlockHeader = styled.div`
  display: contents;

  h6 {
    top: -20px;
    font-family: var(--font-lora);
    position: absolute;
    color: #ffffff;
  }

  svg {
    position: absolute;
    margin-top: -32px;
  }
`;

export const BlockContent = styled.div`
  background-color: #f4f4f4;
  padding: 14px;

  margin: 10px;

  border-radius: 16px;
  width: calc(100% - 20px);

  text-transform: none;

  li {
    margin-top: 16px;
  }
`;

export const BlockFooter = styled.div`
  display: contents;

  svg {
    z-index: 2;
    position: absolute;
    bottom: -5px;
  }

  &:after {
    z-index: 1;
    bottom: -5px;
    position: absolute;
    content: "";
    height: 10px;
    width: 90px;
    background: white;
  }
`;
