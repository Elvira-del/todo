import React from "react";
import styled from "styled-components";
import { Container } from "styles/components";

const StyledSection = styled.section`
  margin-bottom: 30px;
`;

interface SectionProps {
  children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <StyledSection>
      <Container>{children}</Container>
    </StyledSection>
  );
};
