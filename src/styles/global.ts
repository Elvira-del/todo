import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body {
    color: ${({ theme }) => theme.colors.font};
  }  

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  label,
  input[type="checkbox"] {
    cursor: pointer;
  }
`;
