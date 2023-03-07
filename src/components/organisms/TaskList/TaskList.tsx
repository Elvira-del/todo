import React from "react";
import { TaskCard } from "../../molecules/TaskCard/TaskCard";
import { StyledTaskList } from "../../../styles/components";
import { Task } from "../../pages/TaskApp/TaskApp";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (task: any) => void;
  onEditTask: (task: any) => void;
}

export const TaskList = ({
  tasks,
  onDeleteTask,
  onCompleteTask,
  onEditTask,
}: TaskListProps) => {
  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onComplete={onCompleteTask}
          onEdit={onEditTask}
        />
      ))}
    </StyledTaskList>
  );
};
