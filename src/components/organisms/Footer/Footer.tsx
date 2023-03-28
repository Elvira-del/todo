import { memo } from "react";
import { Container } from "components/templates/style";
import { FooterSection, FooterWrapper } from "./style";

type FooterProps = {
  completed: number;
  total: number;
};
const Footer = memo(({ completed, total }: FooterProps) => {
  return (
    <FooterSection>
      <Container>
        <hr />
        <FooterWrapper>
          <span>
            Completed: {completed} / Total: {total}
          </span>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
});

export default Footer;
