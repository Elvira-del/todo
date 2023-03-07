import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { ButtonUI } from "./style";

type ButtonProps = {
  className: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children, onClick, ...rest }: ButtonProps) => {
  return (
    <ButtonUI bg={className} onClick={onClick} {...rest}>
      {children}
    </ButtonUI>
  );
};

export default Button;
