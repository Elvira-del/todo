import { createStore, createApi } from "effector";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  text: string;
  done: boolean;
};

export const createTodoList = () => {
  const $todos = createStore<Task[]>([]);

  const todoApi = createApi($todos, {
    addTodo: (todos, text: string) => [
      ...todos,
      { id: uuidv4(), text, done: false },
    ],
  });

  return {
    $todos,
    ...todoApi,
  };
};
