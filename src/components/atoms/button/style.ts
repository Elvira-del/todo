import styled, { css } from "styled-components";

type ButtonUIProps = {
  bg: string;
};

export const ButtonUI = styled.button<ButtonUIProps>`
  padding: 10px;
  max-width: 100px;
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius}px;
  ${({ bg, theme }) => {
    switch (bg) {
      case "success":
        return css`
          background-color: ${theme.colors.success};
        `;
      case "secondary":
        return css`
          background-color: ${theme.colors.secondary};
        `;
      case "disabled":
        return css`
          background-color: ${theme.colors.disabled};
        `;
      default:
        return css`
          background-color: ${theme.colors.primary};
        `;
    }
  }};
  font-weight: 700;
  color: #ffffff;
`;
