import React from "react";
import { Container } from "styles/components";
import { Task } from "../TaskApp";
import * as Styled from "./StyledFooter";

interface FooterProps {
  tasks: Task[];
}

const Footer = ({ tasks }: FooterProps) => {
  const completed = tasks.filter((task) => task.done);

  return (
    <Styled.Footer>
      <Container>
        <hr />
        <Styled.FooterWrapper>
          <span>
            Completed: {completed.length} / Total: {tasks.length}
          </span>
        </Styled.FooterWrapper>
      </Container>
    </Styled.Footer>
  );
};

export default Footer;
