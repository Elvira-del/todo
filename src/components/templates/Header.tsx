import { HeaderBlock, Container, HeaderWrapper, HeaderTitle } from "./style";

const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <HeaderWrapper>
          <HeaderTitle size={32} weight={700} tag="h1">
            To-Do List
          </HeaderTitle>
        </HeaderWrapper>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
