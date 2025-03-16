import { device } from "@/styles/media";
import styled from "styled-components";

export const StoryHomeEaseWrapper = styled.div`
  display: "flex";
  justify-content: "center";
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
