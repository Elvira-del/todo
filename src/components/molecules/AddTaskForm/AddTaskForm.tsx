import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../atoms/button/Button";
import * as Styled from "./StyledAddTaskForm";
import InputText from "components/atoms/input/InputText";

type AddTaskFormProps = {
  onAddTask: (text: string) => void;
};

export const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

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
      <Styled.TaskForm onSubmit={handleSubmitTask}>
        <Styled.LabelTaskForm>
          <InputText
            value={text}
            onChange={handleChangeTitle}
            id="titleTask"
            placeholder="Add your task"
          />
        </Styled.LabelTaskForm>

        <Button
          type="submit"
          className={isDisabled ? "disabled" : "primary"}
          disabled={isDisabled}
        >
          Add
        </Button>
      </Styled.TaskForm>
    </>
  );
};
