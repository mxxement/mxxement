import styled from "styled-components";

import Visual from "../components/Visual";
import Grid from "../components/Grid";
// import Title from "./Title";
// import Description from "./Description";
// import About from "../components/About";
// import Experience from "../components/Experience";
// import WorkList from "../components/WorkList";

const Layout = () => {
  return (
    <LayoutWrap>
      <Visual />
      <div style={{ margin: "100px 40px 0px", fontSize: "0px" }}>
        <video
          style={{ width: "175px" }}
          src="../assets/video/gospheres.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <Grid />
      <Shadow />
    </LayoutWrap>
  );
};
export default Layout;

const LayoutWrap = styled.article`
  .sticky {
    height: 400vh;
    .sticky-title {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 150vh;
      p {
        position: sticky;
        top: 50%;
        font-size: 50px;
        font-weight: bold;
        translate: 0px -50%;
      }
    }
  }
`;

const Shadow = styled.article`
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
