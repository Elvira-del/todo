import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../UI/button/Button";
import * as Styled from "./StyledAddTaskForm";
import { InputText } from "components/UI/input/InputText";

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
          <InputText
            value={text}
            onChange={handleChangeTitle}
            id="titleTask"
            placeholder="Add your task"
          />
        </Styled.LabelTaskForm>

        <Button buttonColor="primary" type="submit">
          Add
        </Button>
      </Styled.TaskForm>
    </>
  );
};
