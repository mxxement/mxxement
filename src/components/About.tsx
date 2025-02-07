import { useRef } from "react";
import { useObserver } from "../hooks/useObserver";
import { styleType } from "../assets/ts/StyleType";
import styled from "styled-components";

const About = () => {
  const targetRefA = useRef<HTMLDivElement>(null);
  const targetRefB = useRef<HTMLDivElement>(null);
  const targetRefC = useRef<HTMLDivElement>(null);
  const targetRefD = useRef<HTMLDivElement>(null);

  const isVisibleA = useObserver(targetRefA, {
    threshold: 0.5,
  });

  const isVisibleB = useObserver(targetRefB, {
    threshold: 0.5,
  });

  const isVisibleC = useObserver(targetRefC, {
    threshold: 0.5,
  });

  const isVisibleD = useObserver(targetRefD, {
    threshold: 0.5,
  });

  return (
    <Article>
      <Title
        ref={targetRefA}
        className={isVisibleA ? "active" : ""}
        translateY="-10%"
      >
        Cannondale
      </Title>
      <Contents>
        <Description>
          <TopText
            ref={targetRefB}
            className={isVisibleB ? "active" : ""}
            translateY="-10%"
          >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <p>Soluta dolorum tenetur quod inventore consectetur quam </p>
            <p>quaerat eos enim laborum</p>
          </TopText>
          <BottomText
            ref={targetRefC}
            className={isVisibleC ? "active" : ""}
            translateY="-10%"
          >
            <p>KUWAHARA GAAP</p>
            <p>BRIDGESTONE</p>
            <p>CEEPO</p>
            <p>ARAYA</p>
            <p>ANCHOR</p>
            <p>TYRELL</p>
            <p>PANASONIC</p>
            <p>GUSTO</p>
            <p>MERIDA</p>
            <p>MOSSO</p>
            <p>GIANT</p>
            <p>TRIGON</p>
            <p>WHEELER</p>
            <p>SAVA</p>
            <p>SCOTT</p>
          </BottomText>
        </Description>
        <RightDescription
          ref={targetRefD}
          className={isVisibleD ? "active" : ""}
          translateY="-10%"
        >
          <div>
            <p>voluptatum enim vero amet</p>
            <p>optio nemo error quaera</p>
            <p>laborum deleniti ipsum enim?</p>
          </div>
          <div>
            <p>Laudantium rerum fugiat officiis.</p>
            <p>quaerat eos enim laborum </p>
            <p>quod inventore</p>
          </div>
          <div>
            <p>consectetur adipisicing elit</p>
            <p>Distinctio, quos eos. </p>
            <p>laborum deleniti ipsum enim?</p>
          </div>
          <div>
            <p>Laudantium rerum fugiat officiis.</p>
            <p>Vel labore dolore facer.</p>
            <p>consequuntur architecto placeat?</p>
          </div>
        </RightDescription>
      </Contents>
    </Article>
  );
};

export default About;

const Article = styled.article`
  margin: calc(${(props) => props.theme.gutter} * 8)
    ${(props) => props.theme.gutter} 0px;
`;

const Title = styled.div<styleType>`
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

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 45px;
  border-top: 1px solid #fff;
`;

const Description = styled.div<styleType>`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  font-size: 30px;
`;

const RightDescription = styled(Description)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 16px;
  color: #ccc;
  opacity: 0;
  &.active {
    animation: 0.5s ease
      ${({ theme, translateX, translateY }) =>
        theme.keyframes.showing(translateX, translateY)}
      forwards;
  }
`;

const TopText = styled.div<styleType>`
  opacity: 0;
  &.active {
    animation: 0.5s ease
      ${({ theme, translateX, translateY }) =>
        theme.keyframes.showing(translateX, translateY)}
      forwards;
  }
`;

const BottomText = styled.div<styleType>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px 20px;
  max-width: 500px;
  margin-top: auto;
  font-size: 14px;
  color: #ccc;
  text-transform: uppercase;
  opacity: 0;
  &.active {
    animation: 0.5s ease
      ${({ theme, translateX, translateY }) =>
        theme.keyframes.showing(translateX, translateY)}
      forwards;
  }
`;
