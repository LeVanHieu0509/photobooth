import styled, { css } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24px;

  .active {
    color: #ffffff;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.status.primary};
  }
`;

const PaginationButton = css`
  width: auto;
  min-width: 24px;
  height: 24px;
  padding: 0px 2px;

  position: relative;

  font-weight: 500;
  font-size: 17px;
  line-height: 22px;

  color: ${({ theme }) => theme.color.text.body};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 8px;
  }

  :disabled {
    cursor: not-allowed;

    :hover {
      border-color: ${({ theme }) => theme.color.status.gray1};
    }
  }
`;

const Shape = css`
  display: block;
  position: relative;

  &:disabled {
    svg {
      path {
        stroke: ${({ theme }) => theme.color.status.gray1};
      }
    }
  }
`;

export const Previous = styled.button`
  ${PaginationButton}
  ${Shape}
`;

export const PageNumber = styled.button`
  ${PaginationButton}
`;

export const Next = styled.button`
  ${PaginationButton}
  ${Shape}
`;
