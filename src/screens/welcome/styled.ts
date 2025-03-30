import { device } from "@/styles/media";
import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  .welcome-container {
    padding-top: 100px;
  }

  @media ${device.mobile} {
    .welcome-container {
      padding-top: 0px;
    }
  }
`;
