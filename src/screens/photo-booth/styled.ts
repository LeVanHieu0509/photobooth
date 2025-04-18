import { device } from "@/styles/media";
import styled from "styled-components";

export const PhotoBoothScreenWrapper = styled.div`
  .photo-booth {
    padding-top: 100px;
  }

  .photo-booth h1{
    color:#ff69b4;
  }

  @media ${device.mobile} {
    .photo-booth {
      padding-top: 0px;
    }

    .photo-booth .photo-container{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .photo-booth .filters{
      flex-direction: row !important;
    }
  }
`;
