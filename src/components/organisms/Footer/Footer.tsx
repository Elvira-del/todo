import { Container } from "components/templates/style";
import { Task } from "components/pages/TaskApp/TaskApp";
import { FooterSection, FooterWrapper } from "./style";

type FooterProps = {
  tasks: Task[];
};

const Footer = ({ tasks }: FooterProps) => {
  const completed = tasks.filter((task) => task.done);

  return (
    <FooterSection>
      <Container>
        <hr />
        <FooterWrapper>
          <span>
            Completed: {completed.length} / Total: {tasks.length}
          </span>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};

export default Footer;
