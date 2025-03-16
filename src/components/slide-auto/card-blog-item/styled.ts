import { device } from "@/styles/media";
import Link from "next/link";
import styled from "styled-components";

export const CardBlogItemWrapper = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 9px 11px rgba(0, 0, 0, 0.2); */
  /* border-radius: 16px; */
  cursor: pointer;

  img {
    object-fit: cover;
    height: 150px;
    width: 100%;
  }

  transition: all 0.3s ease-in-out !important;

  /* :hover {
    transition: all 0.3s ease-in-out !important;
    transform: translateY(-16px);
  } */

  .label-7 {
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
  }

  h6 {
    text-transform: none;

    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
  }

  p {
    margin-bottom: 0;
  }

  @media ${device.mobile} {
    h6 {
      font-size: 14px !important;
    }
  }
`;
