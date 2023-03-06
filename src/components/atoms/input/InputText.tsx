import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.font};
  border-radius: ${({ theme }) => theme.border.radius}px;
`;

export const InputText = ({ ...rest }) => {
  return <Input type="text" {...rest} />;
};