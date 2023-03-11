import { ReactNode } from "react";
import { Container } from "styles/components";
import * as Styled from "./style";

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <Styled.Section>
      <Container>{children}</Container>
    </Styled.Section>
  );
};

export default Section;
