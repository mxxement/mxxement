import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkList = () => {
  return (
    <>
      <Article>123</Article>
    </>
  );
};

export default WorkList;

const Article = styled.article`
  margin: ${(props) => props.theme.gutter};
`;
