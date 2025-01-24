import styled from "styled-components";

const Experience = () => {
  return (
    <Article>
      <Title>Panasonic</Title>
      <ContentsWrap>
        <InnerWrap>
          <p className="name">Pagan</p>
          <Contents>
            <div>1</div>
            <div>2</div>
            <div className="description">
              <p>and web page editors now use</p>
              <p>Lorem Ipsum as their default model text</p>
              <p>If you are going to use a passage of Lorem Ipsum</p>
            </div>
          </Contents>
        </InnerWrap>
        <InnerWrap>
          <p className="name">Histogram</p>
          <Contents>
            <div>4</div>
            <div>5</div>
            <div className="description">
              <p>It is a long established fact that</p>
              <p>as opposed to using 'Content here,</p>
              <p>Many desktop publishing packages </p>
            </div>
          </Contents>
        </InnerWrap>
      </ContentsWrap>
    </Article>
  );
};

export default Experience;

const Article = styled.article`
  margin: calc(${(props) => props.theme.gutter} * 8)
    ${(props) => props.theme.gutter} 0px;
`;

const Title = styled.div`
  line-height: 1;
  padding-bottom: 20px;
  font-size: 70px;
  font-weight: bold;
  color: #f9f5ef;
  border-bottom: 1px solid #fff;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 45px;
`;

const InnerWrap = styled.div`
  .name {
    font-size: 40px;
    font-weight: bold;
  }
`;

const Contents = styled.div`
  display: flex;
  margin-top: 25px;
  .description {
    margin-left: auto;
    font-size: 20px;
    color: #ccc;
  }
`;
