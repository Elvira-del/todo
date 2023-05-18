import { useStore } from "effector-react";
import AddTaskForm from "components/organisms/AddTaskForm";
import TaskList from "components/organisms/TaskList";
import Footer from "components/templates/Footer";
import Header from "components/templates/Header";
import Main from "components/templates/Main";
import { model } from "store";
import { TaskPanelTitle } from "components/templates/style";

const TaskApp = () => {
  const tasks = useStore(model.$tasks);

  return (
    <>
      <Header />

      <Main>
        <AddTaskForm onAddTask={model.addTask} />

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

      <Footer tasks={tasks} />
    </>
  );
};

export default TaskApp;
