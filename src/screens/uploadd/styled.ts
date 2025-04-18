import { device } from "@/styles/media";
import styled from "styled-components";

export const UploadScreenWrapper = styled.div`
  .photo-booth {
    padding-top: 100px;
  }

  @media ${device.mobile} {
    .photo-booth {
      padding-top: 0px;
    }
  }
`;
