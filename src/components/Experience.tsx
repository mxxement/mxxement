import styled from "styled-components";

const Experience = () => {
  return (
    <Article>
      <Title>Panasonic</Title>
      <ContentsWrap>
        <InnerWrap>
          <p className="name">Pagan</p>
          <Contents>
            <div className="date">
              <p>swift</p>
              <p>1981-2043</p>
            </div>
            <div className="info">
              <p>position</p>
              <p>frontend</p>
              <p>industry</p>
              <p>e-commerce</p>
              <p>website</p>
              <p>http</p>
            </div>
            <div className="description">
              <div>
                <p>and web page editors now use</p>
                <p>Lorem Ipsum as their default model text</p>
                <p>If you are going to use a passage of Lorem Ipsum</p>
              </div>
              <div>
                <p>It is a long established fact that</p>
                <p>as opposed to using 'Content here,</p>
                <p>Many desktop publishing packages </p>
              </div>
            </div>
          </Contents>
        </InnerWrap>
        <InnerWrap>
          <p className="name">Histogram</p>
          <Contents>
            <div className="date">
              <p>swift</p>
              <p>1981-2043</p>
            </div>
            <div className="info">
              <p>position</p>
              <p>frontend</p>
              <p>industry</p>
              <p>e commerce</p>
              <p>website</p>
              <p>http</p>
            </div>
            <div className="description">
              <div>
                <p>It is a long established fact that</p>
                <p>as opposed to using 'Content here,</p>
                <p>Many desktop publishing packages </p>
              </div>
              <div>
                <p>and web page editors now use</p>
                <p>Lorem Ipsum as their default model text</p>
                <p>If you are going to use a passage of Lorem Ipsum</p>
              </div>
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
  justify-content: space-between;
  margin-top: 25px;

  .description {
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 20px;
    color: #ccc;
  }

  .date {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-transform: capitalize;
  }

  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;
