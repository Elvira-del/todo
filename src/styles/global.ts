import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;        
  }

  *:focus {
    outline: none;
  }  

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.5;      
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
