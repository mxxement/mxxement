import { useRef } from "react";
import { useObserver } from "../hooks/useObserver";

import styled from "styled-components";

const Title = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const isVisible = useObserver(targetRef, { isReStart: true, threshold: 0.5 });

  return (
    <>
      <Article ref={targetRef} className={isVisible ? "active" : ""}>
        <StickyWrap>
          <AnimationObj>
            <p>누자베 스 싱고투</p>
          </AnimationObj>
          <AnimationObj>
            <p>술탄 오브 더 디스코</p>
            <ShowImage
              src="../assets/images/common/slowglow.webp"
              alt="슬로우글로우 썸네일"
            />
            <p>김간지</p>
          </AnimationObj>
          <AnimationObj>
            <p>저스트뮤직 기리보이</p>
          </AnimationObj>
        </StickyWrap>
      </Article>
    </>
  );
};

export default Title;

const StickyWrap = styled.div``;

const AnimationObj = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  p {
    transition: 1s ease;
    translate: 0 150%;
  }
`;

const ShowImage = styled.img`
  width: 0px;
  clip-path: inset(100%);
  transition: 1s cubic-bezier(0.8, -0.18, 0, 1.15);
  @keyframes width {
    from {
      width: 0px;
    }
    to {
      width: 130px;
    }
  }
  @keyframes showing {
    from {
      clip-path: inset(100%);
    }
    to {
      clip-path: inset(0);
    }
  }
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
      p {
        translate: 0;
      }
      ${ShowImage} {
        animation: 1s cubic-bezier(0.8, -0.18, 0, 1.15) width forwards,
          1s cubic-bezier(0.8, -0.18, 0, 1.15) showing forwards;
        animation-delay: 0.4s;
      }
    }
  }
`;
