import { ChangeEvent, FormEvent, InputHTMLAttributes, forwardRef } from "react";
import InputText from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Form } from "./style";

type TaskEditProps = {
  onSave: (e: FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TaskEdit = forwardRef<HTMLInputElement, TaskEditProps>(
  ({ onSave, onChange, text }, ref) => {
    return (
      <Form onSubmit={onSave}>
        <InputText
          value={text}
          ref={ref}
          onChange={onChange}
          title="Change your task"
        />

        <Button type="submit" className="success">
          Save
        </Button>
      </Form>
    );
  }
);

export default TaskEdit;
