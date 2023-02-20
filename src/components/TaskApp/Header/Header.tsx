import React from "react";
import { Container } from "../../../styles/components";
import * as Styled from "./StyledHeader";

export const Header = () => {
  return (
    <Styled.Header>
      <Container>
        <Styled.HeaderWrapper>
          <Styled.HeaderTitle>To-Do List</Styled.HeaderTitle>
        </Styled.HeaderWrapper>
      </Container>
    </Styled.Header>
  );
};
