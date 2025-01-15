import styled from "styled-components";

const Marquee = () => {
  return (
    <Article>
      <Content>
        <p>인생은 B와 D 사이에 C</p>
        <p>인생은 B와 D 사이에 C</p>
        <p>인생은 B와 D 사이에 C</p>
      </Content>
      <Content>
        <p>인생은 B와 D 사이에 C</p>
        <p>인생은 B와 D 사이에 C</p>
        <p>인생은 B와 D 사이에 C</p>
      </Content>
    </Article>
  );
};

export default Marquee;

const Article = styled.article`
  display: flex;
  gap: 10px;
  overflow: hidden;
  width: 415px;
  height: 20px;
  position: relative;
  font-size: 14px;
`;

const Content = styled.div`
  display: flex;
  gap: 10px;
  min-width: fit-content;
  text-align: center;
  animation: marquee 10s linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
