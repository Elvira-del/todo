import { Container } from "../../../styles/components";
import { HeaderSection, HeaderWrapper, HeaderTitle } from "./style";

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderWrapper>
          <HeaderTitle>To-Do List</HeaderTitle>
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};

export default Header;
