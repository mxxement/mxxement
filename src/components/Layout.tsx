import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutWrap>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </LayoutWrap>
  );
};
export default Layout;

const LayoutWrap = styled.article`
  > div {
    width: 100vw;
    height: 100vh;
    color: #fff;
    background: #111;
  }
`;
