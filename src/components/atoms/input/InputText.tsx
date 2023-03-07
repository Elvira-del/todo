import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { Input } from "./style";

type InputTextProps = {
  onChange: ChangeEventHandler;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({ onChange, ...rest }: InputTextProps) => {
  return <Input type="text" onChange={onChange} {...rest} />;
};

export default InputText;
