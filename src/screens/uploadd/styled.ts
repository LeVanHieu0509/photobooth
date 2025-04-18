import { device } from "@/styles/media";
import styled from "styled-components";

export const UploadScreenWrapper = styled.div`
  .upload-booth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    padding: 40px;
  }

  .upload-booth h1{
    color:#ff69b4;
  }

  @media ${device.mobile} {
    .upload-booth {
      padding-top: 0px;
    }

    .upload-booth .side-preview {
      width: 160px !important;
      height: 120px !important;
    }
  }
`;
