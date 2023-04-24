import styled from "styled-components";
import Title from "components/atoms/Title";

type TaskTitleProps = {
  done?: boolean;
};

export const TaskTitle = styled(Title)<TaskTitleProps>`
  transition: all ${({ theme }) => theme.durations.ms300} ease-in-out;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  color: ${({ done }) => (done ? "#999999" : "")};
`;

export const ButtonWrap = styled.div`
  display: flex;
  column-gap: 10px;
`;
