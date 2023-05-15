import { ChangeEventHandler, InputHTMLAttributes, forwardRef } from "react";
import { Input } from "./style";

type InputTextProps = {
  onChange: ChangeEventHandler;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ onChange, ...rest }, ref) => {
    return <Input type="text" onChange={onChange} ref={ref} {...rest} />;
  }
);

export default InputText;
