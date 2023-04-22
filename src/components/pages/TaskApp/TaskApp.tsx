import { useCallback, useEffect, useMemo, useState } from "react";
import { getLocalStorage, setLocalStorage } from "utils/localStorage";
import idGenerate from "utils/idGenerate";
import AddTaskForm from "components/molecules/AddTaskForm";
import TaskList from "components/organisms/TaskList";
import Footer from "components/templates/Footer";
import Header from "components/templates/Header";
import Main from "components/templates/Main";
import { TaskPanelTitle } from "components/templates/style";

export type Task = {
  id: string;
  text: string;
  done: boolean;
};

const TaskApp = () => {
  const [tasks, setTasks] = useState<Task[]>(
    getLocalStorage("localTasks") ?? []
  );

  useEffect(() => {
    setLocalStorage("localTasks", tasks);
  }, [tasks]);

  const handleAddTask = useCallback((text: string) => {
    setTasks((prev) => [...prev, { id: idGenerate(), text, done: false }]);
  }, []);

  const handleEditTask = useCallback((editTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === editTask.id ? editTask : task))
    );
  }, []);

  const handleDeleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const handleCompleteTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }, []);

  const completedTask = useMemo(() => {
    return tasks.filter((task) => task.done);
  }, [tasks]);

  return (
    <>
      <Header />

      <Main>
        <AddTaskForm onAddTask={handleAddTask} />

        <TaskPanelTitle size={24} weight={600} tag="h2">
          Tasks
        </TaskPanelTitle>

        {tasks.length ? (
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onCompleteTask={handleCompleteTask}
            onEditTask={handleEditTask}
          />
        ) : (
          <span>No tasks</span>
        )}
      </Main>

      <Footer completed={completedTask.length} total={tasks.length} />
    </>
  );
};

export default TaskApp;
