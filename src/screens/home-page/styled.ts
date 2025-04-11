import { device } from "@/styles/media";
import styled from "styled-components";

export const HomepageWrapper = styled.div`
  .home-container {
    padding-top: 100px;
  }

  .footer{
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    .home-container {
      padding-top: 0px;
    }
  }
`;
