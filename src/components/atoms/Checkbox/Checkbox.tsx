import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { Label, HiddenCheckbox } from "./style";

type CheckboxProps = {
  checked: boolean;
  id: string;
  onChange: ChangeEventHandler;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ checked, id, onChange, ...rest }: CheckboxProps) => {
  return (
    <Label htmlFor={id}>
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        id={id}
        onChange={onChange}
        {...rest}
      />
    </Label>
  );
};

export default Checkbox;
