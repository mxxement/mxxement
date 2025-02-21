import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/ts/theme";
import CommonStyle from "./assets/ts/CommonStyle";
import Starfield from "./components/Star";

import Work from "./page/Work";
import Detail from "./page/Detail";
import Header from "./components/Header";
// import Footer from "./components/Footer";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={3000}
        classNames="transition"
      >
        <div className="transition">
          <Routes location={location}>
            <Route path="/" element={<Work />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CommonStyle />
      <Router>
        <Header />
        <AnimatedRoutes />
        {/* <Footer /> */}
      </Router>
      <Starfield />
    </ThemeProvider>
  );
};

export default App;
