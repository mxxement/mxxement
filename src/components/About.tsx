import styled from "styled-components";

const About = () => {
  return (
    <Article>
      <Title>Cannondale</Title>
      <Contents>
        <Description>
          <TopText>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <p>Soluta dolorum tenetur quod inventore consectetur quam </p>
            <p>quaerat eos enim laborum</p>
          </TopText>
          <BottomText>
            <p>development</p>
            <p>ux/ui</p>
            <p>react.js</p>
            <p>typescript</p>
            <p>vue.js</p>
            <p>styled-component</p>
            <p>sass</p>
            <p>lottifiles</p>
            <p>zeplin</p>
            <p>figma</p>
            <p>cafe24</p>
            <p>makeshop</p>
            <p>gabia</p>
            <p>godomall</p>
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
  gap: 0px 10px;
  max-width: 400px;
  margin-top: auto;
  font-size: 14px;
  color: #ccc;
  text-transform: uppercase;
`;
