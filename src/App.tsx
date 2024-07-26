import { Global, ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';
import ToDoApp from '@/components/ToDoApp';
import globalStyle from '@/styles/globalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <ToDoApp />
    </ThemeProvider>
  );
}

export default App;
