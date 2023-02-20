import styled from "styled-components";

export const TaskForm = styled.form`
  display: flex;
  column-gap: 10px;
  width: 100%;
`;

export const LabelTaskForm = styled.label.attrs({
  htmlFor: "titleTask",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputTaskForm = styled.input.attrs({
  type: "text",
  id: "titleTask",
  placeholder: "Add your task",
})`
  padding: 10px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.font};
  border-radius: ${({ theme }) => theme.border.radius}px;
`;
