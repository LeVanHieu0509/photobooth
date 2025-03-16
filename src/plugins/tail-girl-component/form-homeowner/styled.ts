import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;

  .wrapper {
    z-index: 5;
    position: relative;

    &:before {
      width: 100%;
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      background-image: linear-gradient(to right, #1a6380 0%, #018f51 99.71%);
      opacity: 0.59;
    }
  }
`;
