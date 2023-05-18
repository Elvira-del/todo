import { memo } from "react";
import TaskCard from "components/organisms/TaskCard";
import { Task } from "store/model";
import { List } from "./style";

type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
  onEditTask: (task: Task) => void;
};

const TaskList = memo(
  ({ tasks, onDeleteTask, onCompleteTask, onEditTask }: TaskListProps) => {
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
  }
);

export default TaskList;
