import { useRef, useEffect } from "react";
import { useObserver } from "../hooks/useObserver";

import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import data from "../assets/data/data";

gsap.registerPlugin(ScrollTrigger);

const WorkList = () => {
  const layoutRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const descriptionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isVisible = useObserver(layoutRef, {
    isReStart: false,
  });

  useEffect(() => {
    imageRefs.current.forEach((image) => {
      gsap.set(image, { y: -100 });

      gsap.to(image, {
        y: 100,
        scrollTrigger: {
          trigger: image,
          start: "top 50%",
          end: "bottom -50%",
          scrub: true,
        },
      });
    });

    descriptionRefs.current.forEach((description) => {
      gsap.set(description, { y: 25 });

      gsap.to(description, {
        y: -25,
        scrollTrigger: {
          trigger: description,
          start: "-500% 50%",
          end: "500% -50%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <Article ref={layoutRef} className={isVisible ? "active" : ""}>
      <ItemWrap>
        {data.map((item, index) => (
          <Item key={index}>
            <Image>
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={item.imageUrl}
                alt={item.title + " image"}
              />
            </Image>
            <Description ref={(el) => (descriptionRefs.current[index] = el)}>
              <Title>{item.title}</Title>
              <p>{item.developType}</p>
              <div>
                {item.workType?.map((type, indexs) => (
                  <p key={indexs}>{type.type}</p>
                ))}
              </div>
              <Content>{item.content}</Content>
            </Description>
          </Item>
        ))}
      </ItemWrap>
    </Article>
  );
};

export default WorkList;

const Article = styled.article`
  margin: calc(${(props) => props.theme.gutter} * 8)
    ${(props) => props.theme.gutter} 0px;
  transition: 1s ease;
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;

const ItemWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: calc(${(props) => props.theme.gutter} * 2);
`;

const Item = styled.li`
  position: relative;
  width: 100%;
`;

const Image = styled.div`
  width: 80vw;
  overflow: hidden;
  img {
    width: 100%;
    height: 120vh;
    object-fit: cover;
    scale: 1.2;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0px;
  width: 100%;
  padding: 0px calc(${(props) => props.theme.gutter} * 2);
  font-size: 14px;
  box-sizing: border-box;
  translate: 0 -50%;
  text-transform: uppercase;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Content = styled.p`
  max-width: 280px;
`;
