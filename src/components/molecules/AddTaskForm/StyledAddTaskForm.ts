import styled from "styled-components";

export const TaskForm = styled.form`
  display: flex;
  column-gap: 10px;
  margin-bottom: 30px;
  width: 100%;
`;

export const LabelTaskForm = styled.label.attrs({
  htmlFor: "titleTask",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
