import styled, { css } from "styled-components";

type ButtonUIProps = {
  bg: string;
};

// const buttonMap = (theme: any) => {
//   return {
//     primary: theme.colors.primary,
//     secondary: theme.colors.secondary,
//     success: theme.colors.success,
//   };
// };

export const ButtonUI = styled.button<ButtonUIProps>`
  padding: 12px 10px;
  max-width: 100px;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
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
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 500;
  color: #ffffff;
`;
