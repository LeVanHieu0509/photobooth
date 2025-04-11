import { device } from "@/styles/media";
import styled from "styled-components";


export const SplashScreenWrapper = styled.div`

    position: absolute;
    z-index: 2000;
    background-color: blue;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    color: wheat;

  .splash-container {
    
    p{
    font-family: var(--font-inter) !important;
    }
  }

  @media ${device.mobile} {
    .splash-container {
      padding-top: 0px;
    }
  }
`;