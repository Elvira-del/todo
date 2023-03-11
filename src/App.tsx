import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";

import TaskApp from "components/pages/TaskApp/";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <TaskApp />
    </ThemeProvider>
  );
}

export default App;
