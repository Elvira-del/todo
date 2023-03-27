import styled from "styled-components";
import Title from "components/atoms/title/Title";

type ContainerProps = {
  horizontal?: number;
};

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const Main = styled.main``;

export const Container = styled.div<ContainerProps>`
  margin: ${({ theme }) => theme.align.center};
  padding: ${({ horizontal = 50 }) => `0px ${horizontal}px`};
  max-width: ${({ theme }) => theme.sizes.container.maxWidth};
  width: 100%;

  @media ${({ theme }) => theme.media.medium} {
    padding: ${({ horizontal = 30 }) => `0px ${horizontal}px`};
  }
`;

export const TaskPanelTitle = styled(Title)`
  margin-bottom: 15px;
`;
