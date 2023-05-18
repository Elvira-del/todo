import { useEffect, useRef, useState } from "react";
import { useStore } from "effector-react";
import AddTaskForm from "components/molecules/AddTaskForm";
import TaskList from "components/organisms/TaskList";
import Footer from "components/templates/Footer";
import Header from "components/templates/Header";
import Main from "components/templates/Main";
import { model } from "store";
import { Task } from "store/model";
import { TaskPanelTitle } from "components/templates/style";

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
