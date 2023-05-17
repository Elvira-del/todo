import { useCallback, useEffect, useRef, useState } from "react";
import { getLocalStorage, setLocalStorage } from "utils/localStorage";
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
  const todos = useStore(model.$todos);

  const [tasks, setTasks] = useState<Task[]>(
    getLocalStorage("localTasks") ?? []
  );
  const [completed, setCompleted] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    setLocalStorage("localTasks", tasks);
  }, [tasks]);

  useEffect(() => {
    setCompleted(tasks.filter((task) => task.done));
  }, [tasks]);

  const handleEditTask = useCallback((editTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === editTask.id ? editTask : task))
    );
  }, []);

  const handleCompleteTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }, []);

  return (
    <>
      <Header />

      <Main>
        <AddTaskForm onAddTask={model.addTask} ref={inputRef} />

        <TaskPanelTitle size={24} weight={600} tag="h2">
          Tasks
        </TaskPanelTitle>

        {todos.length ? (
          <TaskList
            tasks={todos}
            onDeleteTask={model.deleteTask}
            onCompleteTask={handleCompleteTask}
            onEditTask={handleEditTask}
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
