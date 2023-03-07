import React from "react";
import { Container } from "styles/components";
import * as Styled from "./StyledSection";

interface SectionProps {
  children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <Styled.Section>
      <Container>{children}</Container>
    </Styled.Section>
  );
};
