import { useEffect, useRef, useState } from "react";
import AddTaskForm from "components/molecules/AddTaskForm";
import TaskList from "components/organisms/TaskList";
import Footer from "components/templates/Footer";
import Header from "components/templates/Header";
import Main from "components/templates/Main";
import { TaskPanelTitle } from "components/templates/style";
import { useStore } from "effector-react";
import { model } from "store";

export type Task = {
  id: string;
  text: string;
  done: boolean;
};

const TaskApp = () => {
  const tasks = useStore(model.$tasks);

  const [completed, setCompleted] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    setCompleted(tasks.filter((task) => task.done));
  }, [tasks]);

  return (
    <>
      <Header />

      <Main>
        <AddTaskForm onAddTask={model.addTask} ref={inputRef} />

        <TaskPanelTitle size={24} weight={600} tag="h2">
          Tasks
        </TaskPanelTitle>

        {tasks.length ? (
          <TaskList
            tasks={tasks}
            onDeleteTask={model.deleteTask}
            onCompleteTask={model.completeTask}
            onEditTask={model.editTask}
          />
        ) : (
          <span>No tasks</span>
        )}
      </Main>

      <Footer completed={completed.length} total={tasks.length} />
    </>
  );
};

export default TaskApp;
