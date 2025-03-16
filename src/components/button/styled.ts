import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 10px 0;
  color: #ffffff;
  background-color: #37abf4;
  width: 100%;
  border-radius: 8px;

  font-weight: 700;
  cursor: pointer;
  font-family: var(--font-lora);
  display: block;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.8;
  }
`;
