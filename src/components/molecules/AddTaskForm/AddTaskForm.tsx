import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Button from "components/atoms/button";
import InputText from "components/atoms/input";
import { TaskForm, LabelTaskForm } from "./style";

type AddTaskFormProps = {
  onAddTask: (text: string) => void;
};

const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, []);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setIsDisabled(false);
  };

  const handleSubmitTask = (e: FormEvent) => {
    e.preventDefault();
    if (text.length) {
      onAddTask(text);
    }
    setText("");
    setIsDisabled(true);
  };

  return (
    <>
      <TaskForm onSubmit={handleSubmitTask}>
        <LabelTaskForm>
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
          className={isDisabled ? "disabled" : "primary"}
          disabled={isDisabled}
        >
          Add
        </Button>
      </TaskForm>
    </>
  );
};

export default AddTaskForm;
