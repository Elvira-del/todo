import React from "react";
import styled from "styled-components";
import { Container, Title1 } from "../../../styles/components";

const StyledHeader = styled.header`
  height: ${({ theme }) => theme.sizes.header.height}px;
  margin-bottom: 30px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
`;

const HeaderTitle = styled(Title1)`
  margin: 0 auto;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <HeaderTitle>To-Do List</HeaderTitle>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
