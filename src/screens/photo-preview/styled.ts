import { device } from "@/styles/media";
import styled from "styled-components";

export const PhotoPreviewScreenWrapper = styled.div`
  margin-top: 50px;

  button {
    padding: 12px;
  }

  p {
    font-family: var(--font-inter) !important;
  }

  .photo-preview h1{
    color: #ff96c8;
  }

  @media ${device.mobile} {
    margin-top: 16px;
  }
`;
