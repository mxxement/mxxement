import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Visual from "./Visual";
// import Title from "./Title";
// import Description from "./Description";
import About from "./About";
import Experience from "./Experience";
import WorkList from "./WorkList";

const Layout = () => {
  return (
    <>
      <Header />
      <Visual />
      {/* <Title /> */}
      {/* <Description /> */}
      <About />
      <Experience />
      <WorkList />
      <LayoutWrap />
      <Footer />
    </>
  );
};
export default Layout;

const LayoutWrap = styled.article`
  position: relative;
  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 50%;
    z-index: -1;
    height: 100vw;
    width: 200vw;
    background: radial-gradient(#590911, #ff98a200 70%);
    transform: translateX(-50%) translateY(50vh);
    opacity: 0.5;
    pointer-events: none;
  }
`;
