import React, { ChangeEvent, useState } from "react";
import { Title3 } from "../../../styles/components";
import { Button } from "../../atoms/button/Button";
import { Checkbox } from "components/atoms/checkbox/Checkbox";
import { Task } from "../TaskApp";
import { InputText } from "components/atoms/input/InputText";
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
      <Checkbox checked={task.done} id={task.id} onChange={handleCheckTask} />

      {isEditing ? (
        <Styled.TaskContent>
          <InputText
            value={task.text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onEdit({ ...task, text: e.target.value })
            }
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
              type="button"
              buttonColor="primary"
              onClick={() => handleEditTask(task)}
            >
              Edit
            </Button>
            <Button
              type="button"
              buttonColor="secondary"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </Button>
          </Styled.TaskButtonWrap>
        </Styled.TaskContent>
      )}
    </Styled.TaskCard>
  );
};