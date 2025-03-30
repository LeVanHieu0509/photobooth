import { device } from "@/styles/media";
import styled from "styled-components";

export const HomepageWrapper = styled.div`
  .home-container {
    padding-top: 100px;
  }

  @media ${device.mobile} {
    .home-container {
      padding-top: 0px;
    }
  }
`;
