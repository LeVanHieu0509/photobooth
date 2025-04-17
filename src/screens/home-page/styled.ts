import { device } from "@/styles/media";
import styled from "styled-components";

export const HomepageWrapper = styled.div`
  .home-container {
    padding-top: 160px;
  }

  .footer{
    margin-bottom: 40px;
  }

  .Posensen-logo {
    animation: titlePulse 3s ease-in-out infinite;
  }

  @media ${device.mobile} {
    .home-container {
      padding-top: 100px;
    }
  }
`;
