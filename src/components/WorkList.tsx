import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import data from "../assets/data/data";

gsap.registerPlugin(ScrollTrigger);

const WorkList = () => {
  return (
    <>
      <Article>
        <ItemWrap>
          {data.map((item, index) => (
            <Item key={index}>
              <Image>
                <img src={item.imageUrl} alt="" />
              </Image>
              <Title>{item.title}</Title>
            </Item>
          ))}
        </ItemWrap>
      </Article>
    </>
  );
};

export default WorkList;

const Article = styled.article`
  margin: 100px ${(props) => props.theme.gutter} 0px;
`;

const ItemWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Item = styled.li``;

const Image = styled.div`
  width: 440px;
  img {
    width: 100%;
  }
`;

const Title = styled.p`
  padding-top: 10px;
  font-size: 16px;
  text-transform: capitalize;
`;
