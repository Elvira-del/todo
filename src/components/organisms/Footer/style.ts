import styled from "styled-components";

export const FooterSection = styled.footer`
  height: ${({ theme }) => theme.sizes.footer.height};
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
`;
