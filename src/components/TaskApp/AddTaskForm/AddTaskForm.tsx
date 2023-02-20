import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../UI/button/Button";
import * as Styled from "./StyledAddTaskForm";

interface AddTaskFormProps {
  onAddTask: (text: string) => void;
}

export const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const [text, setText] = useState("");

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
      <Styled.TaskForm onSubmit={handleSubmitTask}>
        <Styled.LabelTaskForm>
          <Styled.InputTaskForm value={text} onChange={handleChangeTitle} />
        </Styled.LabelTaskForm>

        <Button buttonColor="primary" type="submit">
          Add
        </Button>
      </Styled.TaskForm>
    </>
  );
};
