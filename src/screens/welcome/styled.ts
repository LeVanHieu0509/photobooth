import { device } from "@/styles/media";
import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  .welcome-container {
    padding-top: 100px;

    p{
    font-family: var(--font-inter) !important;
    }

    h1{
      color:#ff69b4;
    }
  }

  @media ${device.mobile} {
    .welcome-container {
      padding-top: 0px;
    }
  }
`;
