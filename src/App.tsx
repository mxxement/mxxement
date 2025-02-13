import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/ts/theme";
import CommonStyle from "./assets/ts/CommonStyle";
import Starfield from "./components/Star";

import Layout from "./page/Layout";
import Work from "./page/Work";
import Detail from "./page/Detail";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CommonStyle />
      <Router>
        <Routes>
          {/* 기본 경로로 접근 시 /work로 리디렉션 */}
          <Route path="/" element={<Navigate to="/work" />} />

          {/* Layout은 /work, /detail 페이지를 공통으로 사용 */}
          <Route path="/" element={<Layout />}>
            <Route path="/work" element={<Work />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
        </Routes>
      </Router>
      <Starfield />
    </ThemeProvider>
  );
};

export default App;
