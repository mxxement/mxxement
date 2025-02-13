import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { styleType } from "../assets/ts/StyleType.ts";

const Header = () => {
  return (
    <Article>
      <Logo />
      <Menu $animationDelay={0.6} translateY="-100%">
        <MenuItem>
          <NavLink to="/work">Adventure</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/detail">Story</NavLink>
        </MenuItem>
      </Menu>
    </Article>
  );
};

export default Header;

const Article = styled.article`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px ${(props) => props.theme.gutter};
  color: #fff;
  box-sizing: border-box;
`;

const Logo = styled.h1``;

const Menu = styled.ul<styleType>`
  display: flex;
  align-items: center;
  gap: 25px;
  animation: 0.5s ease
    ${({ theme, translateX, translateY }) =>
      theme.keyframes.showing(translateX, translateY)}
    forwards;
  animation-delay: ${(props) => props.$animationDelay}s;
  opacity: 0;
`;

const MenuItem = styled.li`
  a {
    position: relative;
    padding: 2px 6px;
    cursor: pointer;
    transition: 0.2s ease;
    &.active {
      color: #fff;
      background: #de3163;
      border-radius: 4px;
      &:hover {
        color: #fff;
        background: #de3163;
      }
    }
    &:hover {
      color: #de3163;
      background: #fff;
      border-radius: 4px;
    }
  }
`;
