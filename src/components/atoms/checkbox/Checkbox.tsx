import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input`
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
  id: string;
}

export const Checkbox = ({ checked, id, ...rest }: CheckboxProps) => {
  return (
    <Label htmlFor={id}>
      <HiddenCheckbox type="checkbox" checked={checked} id={id} {...rest} />
    </Label>
  );
};
