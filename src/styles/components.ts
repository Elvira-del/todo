import styled from "styled-components";

type TitleProps = {
  weight?: number;
};

export const Title1 = styled.h1<TitleProps>`
  font-size: 32px;
  font-weight: ${({ weight = 700 }) => weight};
  color: ${({ theme }) => theme.colors.font};
`;

export const Title2 = styled.h2<TitleProps>`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: ${({ weight = 700 }) => weight};
  color: ${({ theme }) => theme.colors.font};
`;

export const Title3 = styled.h3<TitleProps>`
  padding-right: 10px;
  font-size: 18px;
  font-weight: ${({ weight = 500 }) => weight};
  color: ${({ theme }) => theme.colors.font};
`;
