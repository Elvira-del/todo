import { ChangeEvent, useState } from "react";
import { Title3 } from "../../../styles/components";
import Button from "components/atoms/button";
import Checkbox from "components/atoms/checkbox";
import InputText from "components/atoms/input";
import { Task } from "components/pages/TaskApp/TaskApp";
import { Card, Content, ButtonWrap } from "./style";

type TaskCardProps = {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (task: any) => void;
  onEdit: (task: any) => void;
};

const TaskCard = ({ task, onDelete, onComplete, onEdit }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckTask = (e: ChangeEvent<HTMLInputElement>) => {
    onComplete({ ...task, done: e.target.checked });
  };

  const handleEditTask = (task: any) => {
    setIsEditing(true);
    onEdit(task);
  };

  return (
    <Card>
      <Checkbox checked={task.done} id={task.id} onChange={handleCheckTask} />

      {isEditing ? (
        <Content>
          <InputText
            value={task.text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onEdit({ ...task, text: e.target.value })
            }
            title="Change your task"
          />

          <ButtonWrap>
            <Button
              type="button"
              className="success"
              onClick={() => setIsEditing(false)}
            >
              Save
            </Button>
          </ButtonWrap>
        </Content>
      ) : (
        <Content done={task.done}>
          <Title3>{task.text}</Title3>

          <ButtonWrap>
            <Button
              type="button"
              className="primary"
              onClick={() => handleEditTask(task)}
            >
              Edit
            </Button>
            <Button
              type="button"
              className="secondary"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </Button>
          </ButtonWrap>
        </Content>
      )}
    </Card>
  );
};

export default TaskCard;
