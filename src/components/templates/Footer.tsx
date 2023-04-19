import { FooterBlock, Container, FooterWrapper } from "./style";

type FooterProps = {
  completed: number;
  total: number;
};
const Footer = ({ completed, total }: FooterProps) => {
  return (
    <FooterBlock>
      <Container>
        <hr />
        <FooterWrapper>
          <span>
            Completed: {completed} / Total: {total}
          </span>
        </FooterWrapper>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
