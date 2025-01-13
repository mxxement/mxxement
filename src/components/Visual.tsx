import styled from "styled-components";
const Visual = () => {
  return (
    <>
      <Article>
        <div>AREA1</div>
        <div>AREA2</div>
        <div>AREA3</div>
        <div>AREA4</div>
        <div>AREA5</div>
      </Article>
    </>
  );
};

export default Visual;

const Article = styled.article`
  > div {
    height: 100vh;
  }
`;
