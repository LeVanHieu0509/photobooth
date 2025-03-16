import styled from "styled-components";

export const InputSearchWrapper = styled.div<{ active: boolean }>`
  display: flex;
  width: 100%;
  margin: 10px 0;
  position: relative;
  border-radius: 100px;
  border: 1px solid ${({ active }) => (active ? "#EA8E31" : "#DBDFE1")};
  background-color: transparent;
  caret-color: ${({ theme }) => theme.color.status.primary};
  transition: all 0.3s ease;

  align-items: center;
  position: relative;

  input {
    background-color: transparent;
    padding: 0px;
    width: 99%;
    height: 38px !important;
    padding: 0 12px;
    border-radius: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;

    :focus::placeholder {
      color: transparent;
    }
  }
  svg {
    margin-left: 10px;
    min-width: 24px;
  }

  button {
    white-space: nowrap;
    padding: 7px 18px;
    background: #f1dbc4;

    font-size: 14px;
    cursor: pointer;
    margin-right: 4px;
    border-radius: 100px;
    font-family: var(--font-lora);
  }
`;

export const CustomInputNumber = styled.div`
  width: 100%;

  input {
    font-weight: 400;
  }
`;

export const ButtonIconClose = styled.div`
  position: absolute;
  right: -40px;

  cursor: pointer;
`;
