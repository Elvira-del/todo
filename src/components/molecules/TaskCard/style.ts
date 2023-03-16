import styled from "styled-components";
import { Title3 } from "../../../styles/components";

type TaskContentProps = {
  done?: boolean;
};

export const Card = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  min-width: ${({ theme }) => theme.sizes.task.minWidth};
  min-height: 50px;
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div<TaskContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  width: 100%;

  ${Title3} {
    transition: all ${({ theme }) => theme.durations.ms300} ease-in-out;
    text-decoration: ${({ done }) => (done ? "line-through" : "none")};
    color: ${({ done }) => (done ? "#999999" : "")};
  }
`;

export const Form = styled.form`
  display: flex;
  column-gap: 10px;
  width: 100%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  column-gap: 10px;
`;
