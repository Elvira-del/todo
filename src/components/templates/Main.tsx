import { ReactNode } from "react";
import { Container, MainBlock, Section } from "./style";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <MainBlock>
      <Section>
        <Container>{children}</Container>
      </Section>
    </MainBlock>
  );
};

export default Main;
