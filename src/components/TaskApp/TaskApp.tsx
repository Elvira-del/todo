import React from "react";
import { useLocalStorage } from "hooks/hooks";
import { Header } from "./Header/Header";
import { AddTaskForm } from "./AddTaskForm/AddTaskForm";
import { Title2 } from "../../styles/components";
import { TaskList } from "./TaskList/TaskList";
import { Section } from "components/Section/Section";
import idGenerate from "utils/idGenerate";

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

export const TaskApp = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("localTasks", []);

  const handleAddTask = (text: string) => {
    setTasks([...tasks, { id: idGenerate(), text, done: false }]);
  };

  const handleEditTask = (editTask: any) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === editTask.id) {
          return editTask;
        } else {
          return task;
        }
      })
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompleteTask = (doneTask: any) => {
    const completed = tasks.map((task) =>
      task.id === doneTask.id ? { ...task, done: doneTask.done } : task
    );
    setTasks(completed);
  };

  return (
    <>
      <Header />

      <main>
        <Section>
          <AddTaskForm onAddTask={handleAddTask} />
        </Section>

        <Section>
          <Title2>Tasks</Title2>

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
        </Section>
      </main>
    </>
  );
};