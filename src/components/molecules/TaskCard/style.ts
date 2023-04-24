import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  width: 100%;
`;
