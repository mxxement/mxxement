import styled from "styled-components";
import { useRef } from "react";
import { useObserver } from "../hooks/useObserver";
import data, { GridItemType } from "../assets/data/data";

const Grid = () => {
  // const shuffleUrl = [...itemUrls].sort(() => Math.random() - 0.5);

  const AddGridItems = [...data, ...Array(30).fill(null)].sort(
    () => Math.random() - 0.5
  );

  const GridItemComponent = ({ item }: { item: GridItemType }) => {
    const observerRef = useRef<HTMLLIElement>(null);
    const observerGrid = useObserver(observerRef, { threshold: 0 });
    const randomCount = (Math.random() * 0.3).toFixed(1);

    return (
      <GridItems
        ref={observerRef}
        className={observerGrid ? "active" : ""}
        delay={randomCount}
      >
        {item && (
          <>
            <img src={item.imageUrl} alt="" />
            <Titles>{item.title}</Titles>
          </>
        )}
      </GridItems>
    );
  };

  return (
    <GridWrap>
      <GridInner>
        {AddGridItems.map((item, index) => (
          <GridItemComponent key={index} item={item} />
        ))}
      </GridInner>
    </GridWrap>
  );
};
export default Grid;

const GridWrap = styled.div`
  width: calc(100% - 80px);
  margin: 200px 40px;
`;

const Titles = styled.p`
  padding-top: 10px;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 1s cubic-bezier(0.25, 0.76, 0.355, 1);
  opacity: 0;
`;

const GridInner = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 200px 50px;
`;

const GridItems = styled.li<{ delay: string }>`
  transition: 1s cubic-bezier(0.25, 0.76, 0.355, 1);
  &.active {
    transition-delay: ${({ delay }) => delay}s;
    img {
      clip-path: inset(0 0 0 0);
    }
    ${Titles} {
      transition-delay: 0.7s;
      opacity: 1;
    }
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: 0.5s ease;
    clip-path: inset(0 0 100% 0);
  }
`;
