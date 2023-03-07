import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input`
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
