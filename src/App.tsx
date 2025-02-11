import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "./assets/ts/theme";

import CommonStyle from "./assets/ts/CommonStyle";

import Starfield from "./components/Star";

const Layout = lazy(() => import("./page/Layout"));
const Detail = lazy(() => import("./page/Detail"));

const router = createBrowserRouter([
  { path: "/", element: <Layout /> },
  { path: "/story", element: <Detail /> },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CommonStyle />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <RouterProvider router={router} />
      {/* </Suspense> */}
      <Starfield />
    </ThemeProvider>
  );
};

export default App;
