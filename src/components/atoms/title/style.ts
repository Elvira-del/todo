import styled from "styled-components";

type TitleProps = {
  $size: number;
  $weight: number;
};

export const Heading = styled.h1<TitleProps>`
  font-size: ${({ $size }) => $size}px;
  font-weight: ${({ $weight }) => $weight};
  color: ${({ theme }) => theme.colors.font};
`;
