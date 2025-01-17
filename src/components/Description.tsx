import { useRef, useEffect } from "react";
import { useObserver } from "../hooks/useObserver";

import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isVisible = useObserver(targetRef, { isReStart: true, threshold: 0.5 });

  useEffect(() => {
    gsap.set(imageRef.current, { y: 0 });
    gsap.to(imageRef.current, {
      y: 0,
      scrollTrigger: {
        trigger: targetRef.current,
        start: "20% 50%",
        end: "80% 50%",
        scrub: 3,
        markers: true,
      },
    });
  }, []);

  return (
    <>
      <Article ref={targetRef} className={isVisible ? "active" : ""}>
        <StickyWrap ref={imageRef}>
          <AnimationObj>
            <p>Power Clean</p>
          </AnimationObj>
          <AnimationObj>
            <p>Hand Stand Push Up</p>
            <ShowImage
              src="../assets/images/common/slowglow.webp"
              alt="슬로우글로우 썸네일"
            />
            <p>Rep</p>
          </AnimationObj>
          <AnimationObj>
            <p>Squat Clean</p>
          </AnimationObj>
        </StickyWrap>
      </Article>
    </>
  );
};

export default Description;

const StickyWrap = styled.div``;

const AnimationObj = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ShowImage = styled.img`
  width: 0px;
  clip-path: inset(100%);
  transition: 1s cubic-bezier(0.8, -0.18, 0, 1.15);
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  padding: 0px 40px;
  font-size: 90px;
  font-weight: bold;
  &.active {
    ${AnimationObj} {
      ${ShowImage} {
        width: 130px;
        clip-path: inset(0);
      }
    }
  }
`;
