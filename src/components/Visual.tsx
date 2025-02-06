import { useRef, useEffect } from "react";

import styled from "styled-components";

import { VisualType } from "../assets/ts/VisualType.ts";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Visual = () => {
  const titleLeftRef = useRef<HTMLDivElement>(null);
  const titleRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set([titleLeftRef.current, titleRightRef.current], { x: 0 });

    gsap.to(titleLeftRef.current, {
      x: 50,
      scrollTrigger: {
        trigger: titleLeftRef.current,
        start: "-51% 0%",
        end: "bottom -50%",
        scrub: true,
      },
    });

    gsap.to(titleRightRef.current, {
      x: -50,
      scrollTrigger: {
        trigger: titleLeftRef.current,
        start: "-51% 0%",
        end: "bottom -50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <Article>
        <Description>
          <TextLeft ref={titleLeftRef}>
            <MoveTitle>
              <TransitionInner $animationDelay={0.6} translateY="-70%">
                PRIZM
              </TransitionInner>
            </MoveTitle>
            <SubTitle>
              <TransitionInner $animationDelay={1.2} translateY="-70%">
                <p>Lorem ipsum dolor sit amet</p>
                <p> consectetur adipisicing elit.</p>
                <p>Dolores corporis quaerat nesciunt</p>
                <p> a rerum, dolorem mollitia</p>
              </TransitionInner>
            </SubTitle>
          </TextLeft>
          <TextRight>
            <SubTitle>
              <TransitionInner $animationDelay={1.5} translateY="-70%">
                <p>Laudantium rerum fugiat officiis.</p>
                <p>Distinctio, quos eos. </p>
                <p>laborum deleniti ipsum enim?</p>
              </TransitionInner>
            </SubTitle>
            <MoveTitle ref={titleRightRef}>
              <TransitionInner $animationDelay={0.9} translateY="-70%">
                HIGH
              </TransitionInner>
            </MoveTitle>
          </TextRight>
        </Description>
        <PositioningTitle>
          <TransitionInner $animationDelay={0.9} translateY="-70%">
            BIGBANG x 2NE1 x BABYMONSTER
          </TransitionInner>
        </PositioningTitle>
      </Article>
    </>
  );
};

export default Visual;

const Article = styled.article`
  overflow: hidden;
`;

const TransitionInner = styled.div<VisualType>`
  animation: 0.5s ease
    ${({ theme, translateX, translateY }) =>
      theme.keyframes.showing(translateX, translateY)}
    forwards;
  animation-delay: ${(props) => props.$animationDelay}s;
  opacity: 0;
`;

const Description = styled.div`
  margin: 100px ${(props) => props.theme.gutter} 0px;
`;

const MoveTitle = styled.div`
  line-height: 1;
  font-size: 320px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #ccc;
`;

const PositioningTitle = styled(SubTitle)`
  margin: 200px 40px 0px;
`;

const TextLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TextRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
