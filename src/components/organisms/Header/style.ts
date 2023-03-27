import styled from "styled-components";
import Title from "components/atoms/title/Title";

export const HeaderSection = styled.header`
  height: ${({ theme }) => theme.sizes.header.height};
  margin-bottom: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const HeaderTitle = styled(Title)``;
