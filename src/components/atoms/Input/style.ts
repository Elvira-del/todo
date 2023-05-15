import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.font};
  border-radius: ${({ theme }) => theme.border.radius};
  transition: ${({ theme }) => theme.durations.ms300} ease-in-out;
  font-family: ${({ theme }) => theme.fonts.main};
  &:focus-visible {
    border-color: transparent;
    outline: 2px solid ${({ theme }) => theme.colors.success};
  }
`;
