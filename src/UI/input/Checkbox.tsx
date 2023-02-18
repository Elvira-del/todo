import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const Label = styled.label.attrs({
  htmlFor: "checkTask",
})`
  display: flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs<CheckboxProps>({
  type: "checkbox",
  id: "checkTask",
})`
  position: relative;
  appearance: none;
  width: 1.6em;
  height: 1.6em;
  border: 2px solid #007a7e;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 1em;
    height: 1em;
    background-color: #007a7e;
    border-radius: 50%;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.durations.ms300}ms ease-in-out;
  }

  &:checked::before {
    opacity: 1;
  }
`;

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  checked: boolean;
}

export const Checkbox = ({ checked, ...other }: CheckboxProps) => {
  return (
    <Label>
      <HiddenCheckbox checked={checked} {...other} />
    </Label>
  );
};
