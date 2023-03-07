import styled from "styled-components";
import { Title1 } from "styles/components";

export const Header = styled.header`
  height: ${({ theme }) => theme.sizes.header.height}px;
  margin-bottom: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const HeaderTitle = styled(Title1)`
  margin: 0 auto;
`;
