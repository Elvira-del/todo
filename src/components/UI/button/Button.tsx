import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { ButtonUI } from "../../../styles/components";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  buttonColor: string;
  children: ReactNode;
}

export const Button = ({ buttonColor, children, ...other }: ButtonProps) => {
  return (
    <ButtonUI bg={buttonColor} {...other}>
      {children}
    </ButtonUI>
  );
};
