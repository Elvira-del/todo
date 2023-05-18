import { createStore, createApi, createEvent } from "effector";
import connectLocalStorage from "effector-localstorage/sync";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  text: string;
  done: boolean;
};

export const createTodoList = () => {
  const setTasks = createEvent();

  const tasksLocalStorage = connectLocalStorage("localTasks")
    .onError((err) => console.log(err))
    .onChange(setTasks);

  const $tasks = createStore<Task[]>(tasksLocalStorage.init([]));

  const todoApi = createApi($tasks, {
    addTask: (tasks, text: string) => [
      ...tasks,
      { id: uuidv4(), text, done: false },
    ],
    deleteTask: (tasks, id: string) => tasks.filter((task) => task.id !== id),
    completeTask: (tasks, id: string) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    editTask: (tasks, taskEditing: Task) =>
      tasks.map((task) => (task.id === taskEditing.id ? taskEditing : task)),
  });

  $tasks.on(setTasks, (_, value) => value);

  $tasks.watch(tasksLocalStorage);

  return {
    $tasks,
    ...todoApi,
  };
};
