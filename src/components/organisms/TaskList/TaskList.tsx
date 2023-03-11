import TaskCard from "components/molecules/TaskCard";
import { Task } from "components/pages/TaskApp/TaskApp";
import { List } from "./style";

type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (task: any) => void;
  onEditTask: (task: any) => void;
};

const TaskList = ({
  tasks,
  onDeleteTask,
  onCompleteTask,
  onEditTask,
}: TaskListProps) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onComplete={onCompleteTask}
          onEdit={onEditTask}
        />
      ))}
    </List>
  );
};

export default TaskList;
