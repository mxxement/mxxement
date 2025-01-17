import { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    textRefs.current.forEach((el, i) => {
      if (el) {
        gsap.set(el, { y: 1000, scale: 15, opacity: 0 });
        gsap.to(el, {
          y: 0,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: `top+=${i * 300}px`, // 각 글자마다 시작 지점 다르게 설정
            end: "bottom",
            scrub: 3,
            markers: true,
          },
        });
      }
    });
  }, []);

  return (
    <Article>
      <TextWrap ref={textContainerRef}>
        <p>N</p>
        {[".", "E", ".", "R", ".", "D"].map((char, i) => (
          <p key={i} ref={(el) => (textRefs.current[i] = el)}>
            {char}
          </p>
        ))}
      </TextWrap>
    </Article>
  );
};

export default Title;

const Article = styled.article`
  margin-top: 250px;
  height: 500vh;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: calc(50% - 60px);
  font-size: 120px;
  font-weight: bold;
`;
