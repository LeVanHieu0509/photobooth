import { device } from "@/styles/media";
import styled from "styled-components";

export const AboutInfoWrapper = styled.div`
  display: "flex";
  justify-content: "center";
`;

export const AboutInfoDiv = styled.div<{ reverse: boolean }>`
  display: flex;
  justify-content: center;

  h2 {
    display: flex;
    gap: 10px;

    span {
      font-size: 74px;
      color: #565656;
      opacity: 0.2;
      line-height: 55px;
    }
  }

  @media ${device.mobile} {
    flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};

    img {
      width: 100%;
      margin: 0;
    }
  }
`;
