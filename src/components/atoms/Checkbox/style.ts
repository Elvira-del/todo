import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input`
  position: relative;
  appearance: none;
  width: 21px;
  height: 21px;
  border: 2px solid #007a7e;
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 13px;
    height: 13px;
    background-color: #007a7e;
    border-radius: 50%;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.durations.ms300} ease-in-out;
  }
  &:checked::before {
    opacity: 1;
  }
`;
