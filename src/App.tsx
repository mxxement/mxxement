import { ThemeProvider } from "styled-components";
import { theme } from "./assets/ts/theme";

import CommonStyle from "./assets/ts/CommonStyle";

import Layout from "./components/Layout";
import Starfield from "./components/Star";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CommonStyle />
      <Layout />
      <Starfield />
    </ThemeProvider>
  );
};

export default App;
