import { useLocalStorage } from "hooks/useLocalStorage";
import idGenerate from "utils/idGenerate";
import Header from "components/organisms/Header";
import AddTaskForm from "components/molecules/AddTaskForm";
import TaskList from "components/organisms/TaskList";
import Section from "components/templates/Section";
import Footer from "components/organisms/Footer";
import { Title2 } from "../../../styles/components";

export type Task = {
  id: string;
  text: string;
  done: boolean;
};

const TaskApp = () => {
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

      <Footer tasks={tasks} />
    </>
  );
};

export default TaskApp;
