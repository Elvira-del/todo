import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { Button } from "../../../UI/button/Button";

const TaskForm = styled.form`
  display: flex;
  column-gap: 10px;
  width: 100%;
`;

const LabelTaskForm = styled.label.attrs({
  htmlFor: "titleTask",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputTaskForm = styled.input.attrs({
  type: "text",
  id: "titleTask",
  placeholder: "Add your task",
})`
  padding: 10px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.font};
  border-radius: ${({ theme }) => theme.border.radius}px;
`;

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
      <TaskForm onSubmit={handleSubmitTask}>
        <LabelTaskForm>
          <InputTaskForm value={text} onChange={handleChangeTitle} />
        </LabelTaskForm>

        <Button buttonColor="primary" type="submit">
          Add
        </Button>
      </TaskForm>
    </>
  );
};
