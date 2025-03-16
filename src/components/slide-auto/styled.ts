import { device } from "@/styles/media";
import styled from "styled-components";

export const CustomerFeedbackWrapper = styled.div`
  background: #ffffff;
  padding: 84px 0;

  h2 {
    font-weight: 700;
    font-size: 39px;
    line-height: 125%;

    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    padding-bottom: 60px;
    padding-top: 60px;

    h2 {
      margin-bottom: 24px;

      text-align: center;
      font-size: 25px !important;
    }
  }
`;

export const QuotesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px 15px;
  margin-top: 180px;

  @media (max-width: 768px) {
    padding: 0px 20px;
    margin-top: 50px;
  }
`;

export const HaftContent = styled.div`
  position: relative;
  flex: 1 0 0;
  width: 50%;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const Square = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 8px;
  position: absolute;
  transform: translateX(-50%) rotate(45deg);
  left: -35px;
  top: 40px;

  @media (max-width: 768px) {
    height: 130px;
    width: 130px;
    left: -25px;
  }
`;

export const TextContent = styled.div`
  padding: 70px 0 70px 170px;

  h2,
  p {
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    padding: 50px 0 50px 85px;

    h2 {
      font-size: 36px;
      line-height: 30px;
    }

    h3 {
      font-size: 18px;
      line-height: 1.2;
    }

    p {
      font-size: 40px;
      line-height: 40px;
    }
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SliderContent = styled.div`
  display: flex;
  position: relative;
`;

export const SliderItem = styled.div`
  padding: 0 7px;

  display: inline-block;
  vertical-align: top;
  transition: opacity 0.3s ease-in-out;
  min-width: calc(100% / 3);

  cursor: pointer;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const PaginationDot = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 24px;
  transition: all 0.3s ease-in-out;
  gap: 3px;
  .active {
    width: 16px;
    height: 6px;
    background: ${({ theme }) => theme.color.status.primary};
    border-radius: 100px;
  }
`;

export const Dot = styled.div<{ className: any }>`
  transition: all 0.3s ease-in-out;
  width: 6px;
  height: 6px;

  background: ${({ theme }) => theme.color.status.gray2};
  border-radius: 50%;

  :not(:first-child) {
    margin-left: 10px;
  }
`;
