import { Task } from "components/pages/TaskApp/TaskApp";
import Button from "components/atoms/Button";
import { TaskTitle, ButtonWrap } from "./style";

type TaskDisplayProps = {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};

const TaskDisplay = ({ task, onEdit, onDelete }: TaskDisplayProps) => {
  return (
    <>
      <TaskTitle size={18} weight={500} tag="h3" done={task.done}>
        {task.text}
      </TaskTitle>

      <ButtonWrap>
        <Button type="button" className="primary" onClick={() => onEdit(task)}>
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
    </>
  );
};

export default TaskDisplay;
