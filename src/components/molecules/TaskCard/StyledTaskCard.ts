import styled from "styled-components";
import { Title3 } from "../../../styles/components";

export const TaskCard = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  min-width: ${({ theme }) => theme.sizes.task.minWidth}px;
  min-height: 50px;
  border-radius: ${({ theme }) => theme.border.radius}px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
`;

interface TaskContentProps {
  done?: boolean;
}

export const TaskContent = styled.div<TaskContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  width: 100%;

  ${Title3} {
    transition: all ${({ theme }) => theme.durations.ms300}ms linear;
    text-decoration: ${({ done }) => (done ? "line-through" : "none")};
    color: ${({ done }) => (done ? "#999999" : "")};
  }
`;

export const TaskButtonWrap = styled.div`
  display: flex;
  column-gap: 10px;
`;
