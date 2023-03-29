import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Button from "components/atoms/button";
import Checkbox from "components/atoms/checkbox";
import InputText from "components/atoms/input";
import { Task } from "components/pages/TaskApp/TaskApp";
import { Card, Content, TaskTitle, Form, ButtonWrap } from "./style";

type TaskCardProps = {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onEdit: (task: Task) => void;
};

const TaskCard = ({ task, onDelete, onComplete, onEdit }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleCheckTask = () => {
    onComplete(task.id);
  };

  const handleEditTask = (task: Task) => {
    setIsEditing(true);
    onEdit(task);
  };

  const handleChangeTaskContent = (e: ChangeEvent<HTMLInputElement>) => {
    onEdit({ ...task, text: e.target.value });
  };

  const handleSaveTask = (e: FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <Card>
      <Checkbox checked={task.done} id={task.id} onChange={handleCheckTask} />

      {isEditing ? (
        <Content>
          <Form onSubmit={handleSaveTask}>
            <InputText
              value={task.text}
              ref={inputRef}
              onChange={handleChangeTaskContent}
              title="Change your task"
            />

            <ButtonWrap>
              <Button type="submit" className="success">
                Save
              </Button>
            </ButtonWrap>
          </Form>
        </Content>
      ) : (
        <Content done={task.done}>
          <TaskTitle size={18} weight={400} tag="h3">
            {task.text}
          </TaskTitle>

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
