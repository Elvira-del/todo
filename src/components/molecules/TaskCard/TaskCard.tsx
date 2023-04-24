import {
  ChangeEvent,
  FormEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import Checkbox from "components/atoms/Checkbox";
import { Task } from "components/pages/TaskApp/TaskApp";
import TaskEdit from "./components/TaskEdit";
import TaskDisplay from "./components/TaskDisplay";
import { Card, Content } from "./style";

type TaskCardProps = {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onEdit: (task: Task) => void;
};

const TaskCard = memo(
  ({ task, onDelete, onComplete, onEdit }: TaskCardProps) => {
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
            <TaskEdit
              onSave={handleSaveTask}
              text={task.text}
              ref={inputRef}
              onChange={handleChangeTaskContent}
            />
          </Content>
        ) : (
          <Content>
            <TaskDisplay
              task={task}
              onEdit={handleEditTask}
              onDelete={onDelete}
            />
          </Content>
        )}
      </Card>
    );
  }
);

export default TaskCard;
