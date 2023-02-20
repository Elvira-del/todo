import React, { ChangeEvent, useState } from "react";
import { Title3 } from "../../../styles/components";
import { Button } from "../../UI/button/Button";
import { Checkbox } from "components/UI/input/Checkbox";
import { Task } from "../TaskApp";
import * as Styled from "./StyledTaskCard";

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
    <Styled.TaskCard>
      <Checkbox checked={task.done} onChange={handleCheckTask} />

      {isEditing ? (
        <Styled.TaskContent>
          <input
            value={task.text}
            onChange={(e) => onEdit({ ...task, text: e.target.value })}
            type="text"
            title="Change your task"
          />

          <Styled.TaskButtonWrap>
            <Button
              buttonColor="success"
              onClick={() => setIsEditing(false)}
              type="button"
            >
              Save
            </Button>
          </Styled.TaskButtonWrap>
        </Styled.TaskContent>
      ) : (
        <Styled.TaskContent done={task.done}>
          <Title3>{task.text}</Title3>

          <Styled.TaskButtonWrap>
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
          </Styled.TaskButtonWrap>
        </Styled.TaskContent>
      )}
    </Styled.TaskCard>
  );
};
