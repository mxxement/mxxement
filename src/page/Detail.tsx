import styled from "styled-components";
// import Horizontal from "../components/Horizontal";
import data from "../assets/data/data";

const Detail = () => {
  return (
    <DetailWrap>
      {/* <Horizontal /> */}
      {data.map((items, index) => (
        <p key={index}>{items.title}</p>
      ))}
    </DetailWrap>
  );
};

export default Detail;

const DetailWrap = styled.article``;
