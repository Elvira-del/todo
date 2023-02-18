import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Title3 } from "../../../styles/components";
import { Button } from "../../../UI/button/Button";
import { Checkbox } from "UI/input/Checkbox";
import { Task } from "../TaskApp";

const StyledTaskCard = styled.li`
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

interface StyledTaskContentProps {
  done?: boolean;
}

const StyledTaskContent = styled.div<StyledTaskContentProps>`
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

const StyledTaskButtonWrap = styled.div`
  display: flex;
  column-gap: 10px;
`;

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (task: any) => void;
  onEdit: (task: any) => void;
}

export const TaskCard = ({
  task,
  onDelete,
  onComplete,
  onEdit,
}: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckTask = (e: ChangeEvent<HTMLInputElement>) => {
    onComplete({ ...task, done: e.target.checked });
  };

  const handleEditTask = (task: any) => {
    setIsEditing(true);
    onEdit(task);
  };

  return (
    <StyledTaskCard>
      <Checkbox checked={task.done} onChange={handleCheckTask} />

      {isEditing ? (
        <StyledTaskContent>
          <input
            value={task.text}
            onChange={(e) => onEdit({ ...task, text: e.target.value })}
            type="text"
            title="Change your task"
          />

          <StyledTaskButtonWrap>
            <Button
              buttonColor="success"
              onClick={() => setIsEditing(false)}
              type="button"
            >
              Save
            </Button>
          </StyledTaskButtonWrap>
        </StyledTaskContent>
      ) : (
        <StyledTaskContent done={task.done}>
          <Title3>{task.text}</Title3>

          <StyledTaskButtonWrap>
            <Button
              buttonColor="primary"
              onClick={() => handleEditTask(task)}
              type="button"
            >
              Edit
            </Button>
            <Button
              buttonColor="secondary"
              onClick={() => onDelete(task.id)}
              type="button"
            >
              Delete
            </Button>
          </StyledTaskButtonWrap>
        </StyledTaskContent>
      )}
    </StyledTaskCard>
  );
};
