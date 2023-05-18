import { Task } from "store/model";
import { FooterBlock, Container, FooterWrapper } from "./style";

type FooterProps = {
  tasks: Task[];
};
const Footer = ({ tasks }: FooterProps) => {
  const completed = tasks.reduce(
    (completed, task) => (task.done ? (completed += 1) : completed),
    0
  );

  return (
    <FooterBlock>
      <Container>
        <hr />
        <FooterWrapper>
          <span>
            Completed: {completed} / Total: {tasks.length}
          </span>
        </FooterWrapper>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
