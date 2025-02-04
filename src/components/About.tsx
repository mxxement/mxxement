import { useRef, useEffect } from "react";
import { useObserver } from "../hooks/useObserver";
import styled from "styled-components";

const About = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    useObserver(targetRef, 0.5);
  });
  return (
    <Article>
      <Title ref={targetRef}>Cannondale</Title>
      <Contents>
        <Description>
          <TopText>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <p>Soluta dolorum tenetur quod inventore consectetur quam </p>
            <p>quaerat eos enim laborum</p>
          </TopText>
          <BottomText>
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
        <RightDescription>
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

const Title = styled.div`
  line-height: 1;
  font-size: 70px;
  font-weight: bold;
  color: #f9f5ef;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 45px;
  border-top: 1px solid #fff;
`;

const Description = styled.div`
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
`;

const TopText = styled.div``;

const BottomText = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px 20px;
  max-width: 500px;
  margin-top: auto;
  font-size: 14px;
  color: #ccc;
  text-transform: uppercase;
`;
