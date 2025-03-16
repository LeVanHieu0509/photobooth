import { device } from "@/styles/media";
import styled from "styled-components";

export const StoryBusinessWrapper = styled.div`
  display: "flex";
  justify-content: "center";

  position: relative;

  .wrapper {
    z-index: 5;
    position: relative;

    &:before {
      width: 100%;
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      background-image: linear-gradient(to right, #1a6380 0%, #018f51 99.71%);
      opacity: 0.59;
    }
  }

  p {
    font-size: 22px;
  }

  @media ${device.mobile} {
    p {
      font-size: 16px;
    }
  }
`;

export const StoryWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobile} {
    flex-direction: column;
    flex-direction: column-reverse;

    img {
      width: 100%;
      margin: 0;
    }
  }
`;
