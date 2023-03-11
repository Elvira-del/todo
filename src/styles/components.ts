import styled, { css } from "styled-components";

interface ContainerProps {
  horizontal?: number;
}

export const Container = styled.div<ContainerProps>`
  margin: ${({ theme }) => theme.align.center};
  padding: ${({ horizontal = 50 }) => `0px ${horizontal}px`};
  max-width: ${({ theme }) => theme.sizes.container.maxWidth}px;
  width: 100%;

  @media ${({ theme }) => theme.media.medium} {
    padding: ${({ horizontal = 30 }) => `0px ${horizontal}px`};
  }
`;

interface TitleProps {
  weight?: number;
}

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
