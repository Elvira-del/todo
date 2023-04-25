import {
  ChangeEvent,
  FormEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "components/atoms/Button";
import InputText from "components/atoms/Input";
import { TaskForm, LabelTaskForm } from "./style";

type AddTaskFormProps = {
  onAddTask: (text: string) => void;
};

const AddTaskForm = memo(({ onAddTask }: AddTaskFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, []);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmitTask = (e: FormEvent) => {
    e.preventDefault();
    if (text.length) {
      onAddTask(text);
    }
    setText("");
  };

  return (
    <>
      <TaskForm onSubmit={handleSubmitTask}>
        <LabelTaskForm htmlFor="titleTask">
          <InputText
            value={text}
            onChange={handleChangeTitle}
            ref={inputRef}
            id="titleTask"
            placeholder="Add your task"
          />
        </LabelTaskForm>

        <Button
          type="submit"
          className={text.length ? "primary" : "disabled"}
          disabled={!text.length}
        >
          Add
        </Button>
      </TaskForm>
    </>
  );
});

export default AddTaskForm;
