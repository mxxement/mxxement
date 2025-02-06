import { useRef } from "react";
import { useObserver } from "../hooks/useObserver";
import styled from "styled-components";

const Experience = () => {
  const targetRefA = useRef<HTMLDivElement>(null);
  const targetRefB = useRef<HTMLDivElement>(null);
  const targetRefC = useRef<HTMLDivElement>(null);

  const isVisibleA = useObserver(targetRefA, {
    isReStart: true,
    threshold: 0.5,
  });

  const isVisibleB = useObserver(targetRefB, {
    isReStart: true,
    threshold: 0.5,
  });

  const isVisibleC = useObserver(targetRefC, {
    isReStart: true,
    threshold: 0.5,
  });

  return (
    <Article>
      <Title
        ref={targetRefA}
        className={isVisibleA ? "active" : ""}
        translateY="-50%"
      >
        Panasonic
      </Title>
      <ContentsWrap>
        <InnerWrap>
          <div
            ref={targetRefB}
            className={`name ${isVisibleB ? "active" : ""}`}
            translateY="-50%"
          >
            Pagan
          </div>
          <Contents
            ref={targetRefC}
            className={isVisibleC ? "active" : ""}
            translateY="-50%"
          >
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
      </ContentsWrap>
    </Article>
  );
};

export default Experience;

const Article = styled.article`
  margin: calc(${(props) => props.theme.gutter} * 8)
    ${(props) => props.theme.gutter} 0px;
  overflow-x: hidden;
`;

const Title = styled.div`
  line-height: 1;
  font-size: 70px;
  font-weight: bold;
  color: #f9f5ef;
  opacity: 0;
  &.active {
    animation: 0.5s ease
      ${({ theme, translateX, translateY }) =>
        theme.keyframes.showing(translateX, translateY)}
      forwards;
  }
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 15px;
  padding-top: 45px;
  border-top: 1px solid #fff;
`;

const InnerWrap = styled.div`
  .name {
    font-size: 40px;
    font-weight: bold;
    opacity: 0;
    &.active {
      animation: 0.5s ease
        ${({ theme, translateX, translateY }) =>
          theme.keyframes.showing(translateX, translateY)}
        forwards;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  opacity: 0;
  &.active {
    animation: 0.5s ease
      ${({ theme, translateX, translateY }) =>
        theme.keyframes.showing(translateX, translateY)}
      forwards;
  }

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
