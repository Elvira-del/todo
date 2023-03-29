import { useCallback, useMemo } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import idGenerate from "utils/idGenerate";
import AddTaskForm from "components/molecules/AddTaskForm";
import TaskList from "components/organisms/TaskList";
import Footer from "components/organisms/Footer";
import {
  Section,
  Main,
  Container,
  Header,
  HeaderWrapper,
  HeaderTitle,
  TaskPanelTitle,
} from "components/templates/style";

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

  const handleEditTask = (editTask: Task) => {
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

  const handleCompleteTask = useCallback(
    (id: string) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    },
    [tasks, setTasks]
  );

  const completedTask = useMemo(() => {
    return tasks.filter((task) => task.done);
  }, [tasks]);

  return (
    <>
      <Header>
        <Container>
          <HeaderWrapper>
            <HeaderTitle size={32} weight={700} tag="h1">
              To-Do List
            </HeaderTitle>
          </HeaderWrapper>
        </Container>
      </Header>

      <Main>
        <Section>
          <Container>
            <AddTaskForm onAddTask={handleAddTask} />

            <TaskPanelTitle size={24} weight={700} tag="h2">
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
          </Container>
        </Section>
      </Main>

      <Footer completed={completedTask.length} total={tasks.length} />
    </>
  );
};

export default TaskApp;
