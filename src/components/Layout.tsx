import styled from "styled-components";

import Visual from "./Visual";

const Layout = () => {
  return (
    <>
      <LayoutWrap>
        <Visual />
      </LayoutWrap>
    </>
  );
};
export default Layout;

const LayoutWrap = styled.article`
  position: relative;
  z-index: 1;
  background: #14110c;
  color: #fff;
  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 50%;
    z-index: -1;
    height: 100vw;
    width: 200vw;
    background: radial-gradient(#ff98a2, #ff98a200 70%);
    transform: translateX(-50%) translateY(50vh);
    opacity: 0.5;
    pointer-events: none;
  }
`;
