import styled, { DefaultTheme } from "styled-components";

type ButtonUIProps = {
  bg: string;
};

type MapProps = {
  [K: string]: string;
};

const buttonMap = (theme: DefaultTheme): MapProps => {
  return {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    success: theme.colors.success,
    disabled: theme.colors.disabled,
  };
};

export const ButtonUI = styled.button<ButtonUIProps>`
  padding: 12px 10px;
  max-width: 100px;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ bg, theme }) => buttonMap(theme)[bg]};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 500;
  color: #ffffff;
`;
