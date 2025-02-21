import styled from "styled-components";
import { useRef } from "react";
import { useObserver } from "../hooks/useObserver";

const Grid = () => {
  const itemUrls = [
    "item-01.jpg",
    "empty",
    "item-02.jpg",
    "empty",
    "item-03.jpg",
    "empty",
    "empty",
    "empty",
    "item-04.jpg",
    "item-05.jpg",
    "empty",
    "item-06.jpg",
    "empty",
    "empty",
    "item-07.jpg",
    "item-08.jpg",
    "empty",
    "empty",
    "item-09.jpg",
    "empty",
    "item-10.jpg",
    "empty",
    "item-11.jpg",
    "empty",
    "empty",
    "item-12.jpg",
    "empty",
    "item-13.jpg",
    "empty",
    "item-14.jpg",
    "empty",
    "item-15.jpg",
    "item-16.jpg",
    "empty",
    "empty",
    "empty",
    "item-17.jpg",
    "item-18.jpg",
  ];

  const GridItems = ({ itemUrl }: { itemUrl: string }) => {
    const observerRef = useRef<HTMLLIElement>(null);
    const observerGrid = useObserver(observerRef, { threshold: 0 });

    const randomCount = (Math.random() * 0.3).toFixed(1);

    return (
      <GridItem
        ref={observerRef}
        className={itemUrl !== "empty" && observerGrid ? "active" : ""}
        delay={randomCount}
      >
        {itemUrl == "empty" ? (
          ""
        ) : (
          <img
            style={{ width: "100%" }}
            src={`../assets/images/common/item/${itemUrl}`}
            alt=""
          />
        )}
      </GridItem>
    );
  };

  return (
    <GridWrap>
      <GridInner>
        {itemUrls.map((itemUrl, index) => (
          <GridItems key={index} itemUrl={itemUrl} />
        ))}
      </GridInner>
    </GridWrap>
  );
};

export default Grid;

const GridWrap = styled.div`
  width: calc(100% - 80px);
  margin: 200px 40px 0px;
`;

const GridInner = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 100px 50px;
`;

const GridItem = styled.li<{ delay: string }>`
  translate: 0 150%;
  transition: 0.5s ease;
  opacity: 0;
  &.active {
    translate: 0 0;
    transition-delay: ${({ delay }) => delay}s;
    opacity: 1;
  }
`;
