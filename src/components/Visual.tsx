import { useRef, useEffect } from "react";

import styled from "styled-components";

import { VisualType } from "../assets/ts/VisualType.ts";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Visual = () => {
  // const scrollRef = useRef<HTMLDivElement>(null);
  const titleLeftRef = useRef<HTMLDivElement>(null);
  const titleRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.set(scrollRef.current, { y: 0 });

    // gsap.to(scrollRef.current, {
    //   y: -100,
    //   scrollTrigger: {
    //     trigger: scrollRef.current,
    //     start: "top",
    //     end: "bottom 10%",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // });

    gsap.set([titleLeftRef.current, titleRightRef.current], { x: 0 });

    gsap.to(titleLeftRef.current, {
      x: 50,
      scrollTrigger: {
        trigger: titleLeftRef.current,
        start: "top 0%",
        end: "bottom -50%",
        scrub: true,
      },
    });

    gsap.to(titleRightRef.current, {
      x: -50,
      scrollTrigger: {
        trigger: titleLeftRef.current,
        start: "top 0%",
        end: "bottom -50%",
        scrub: true,
      },
    });
  }, []);

  // const balloonBg = [
  //   "../assets/images/3d/1.png",
  //   "../assets/images/3d/2.png",
  //   "../assets/images/3d/3.png",
  //   "../assets/images/3d/4.png",
  // ];

  return (
    <>
      <Article>
        <Description>
          <TextLeft ref={titleLeftRef}>
            <MoveTitle>
              <TransitionInner>PRIZM</TransitionInner>
            </MoveTitle>
            <SubTitle>
              <TransitionInner animationDelay={0.6}>
                <p>Lorem ipsum dolor sit amet</p>
                <p> consectetur adipisicing elit.</p>
                <p>Dolores corporis quaerat nesciunt</p>
                <p> a rerum, dolorem mollitia</p>
              </TransitionInner>
            </SubTitle>
          </TextLeft>
          <TextRight>
            <SubTitle>
              <TransitionInner animationDelay={0.9}>
                <p>Laudantium rerum fugiat officiis.</p>
                <p>Distinctio, quos eos. </p>
                <p>laborum deleniti ipsum enim?</p>
              </TransitionInner>
            </SubTitle>
            <MoveTitle ref={titleRightRef}>
              <TransitionInner animationDelay={0.3}>HIGH</TransitionInner>
            </MoveTitle>
          </TextRight>
        </Description>
        <PositioningTitle>
          <TransitionInner animationDelay={0.6}>
            BIGBANG x 2NE1 x BABYMONSTER
          </TransitionInner>
        </PositioningTitle>
        {/* <BalloonWrap>
          <Balloon ref={scrollRef}>
            {balloonBg.map((bg, index) => (
              <BalloonItem key={index} bg={bg} />
            ))}
          </Balloon>
        </BalloonWrap> */}
      </Article>
    </>
  );
};

export default Visual;

const Article = styled.article`
  overflow: hidden;
`;

const TransitionInner = styled.div<VisualType>`
  animation: 0.5s ease showing forwards;
  animation-delay: ${(props) => props.animationDelay}s;
  opacity: 0;
  @keyframes showing {
    from {
      translate: 0 -70%;
    }
    to {
      translate: 0 0%;
      opacity: 1;
    }
  }
`;

const Description = styled.div`
  margin: 0px ${(props) => props.theme.gutter};
`;

const MoveTitle = styled.div`
  line-height: 1;
  font-size: 320px;
  font-weight: bold;
  /* color: #de3163; */
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

// const BalloonWrap = styled.div`
//   overflow: hidden;
// `;

// const Balloon = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const BalloonItem = styled.div<{ bg: string }>`
//   width: 180px;
//   height: 180px;
//   background: url(${(props) => props.bg}) -200px 0 / 400px no-repeat;
// `;
