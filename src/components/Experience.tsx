import { useRef, Fragment } from "react";
import { useObserver } from "../hooks/useObserver";
import { styleType } from "../assets/ts/StyleType.ts";

import styled from "styled-components";

import data from "../assets/data/company";

const Experience = () => {
  const targetRefA = useRef<HTMLDivElement>(null);
  const targetRefB = useRef<HTMLDivElement>(null);
  const targetRefC = useRef<HTMLDivElement>(null);

  const isVisibleA = useObserver(targetRefA, {
    threshold: 0.5,
  });

  const isVisibleB = useObserver(targetRefB, {
    threshold: 0.5,
  });

  const isVisibleC = useObserver(targetRefC, {
    threshold: 0.5,
  });

  return (
    <Article>
      {data.map((item, index) => (
        <Fragment key={index}>
          <Title
            ref={targetRefA}
            className={isVisibleA ? "active" : ""}
            translateY="-10%"
          >
            {item.title}
          </Title>
          <ContentsWrap>
            <InnerWrap>
              <ContentTitle
                ref={targetRefB}
                className={isVisibleB ? "active" : ""}
                translateY="-10%"
              >
                {item.contentTitle}
              </ContentTitle>
              <Contents
                ref={targetRefC}
                className={isVisibleC ? "active" : ""}
                translateY="-10%"
              >
                {item.info.map((infoItem, infoIndex) => (
                  <div className="date" key={infoIndex}>
                    <p>{infoItem.title}</p>
                    <p>{infoItem.date}</p>
                  </div>
                ))}
                {item.info.map((positionItem, positionIndex) => (
                  <Fragment key={positionIndex}>
                    {positionItem.position?.map((innerItem, innerIndex) => (
                      <div className="info" key={innerIndex}>
                        <p>{innerItem.title}</p>
                        <p>{innerItem.description}</p>
                      </div>
                    ))}
                  </Fragment>
                ))}
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
        </Fragment>
      ))}
    </Article>
  );
};

export default Experience;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: calc(${(props) => props.theme.gutter} * 8)
    ${(props) => props.theme.gutter} 0px;
`;

const Title = styled.div<styleType>`
  line-height: 1;
  font-size: 70px;
  font-weight: bold;
  color: #f9f5ef;
  text-transform: capitalize;
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

const InnerWrap = styled.div<styleType>``;

const Contents = styled.div<styleType>`
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

const ContentTitle = styled.div<styleType>`
  font-size: 40px;
  font-weight: bold;
  text-transform: capitalize;
  opacity: 0;
  &.active {
    animation: 0.5s ease
      ${({ theme, translateX, translateY }) =>
        theme.keyframes.showing(translateX, translateY)}
      forwards;
  }
`;
