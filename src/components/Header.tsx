import styled from "styled-components";

const Header = () => {
  return (
    <Article>
      <Logo />
      <Menu>
        <MenuItem>Adventure</MenuItem>
        <MenuItem>Story</MenuItem>
      </Menu>
    </Article>
  );
};

export default Header;

const Article = styled.article`
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
  color: #fff;
  box-sizing: border-box;
`;

const Logo = styled.h1``;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const MenuItem = styled.li`
  position: relative;
  padding: 2px 4px;
  cursor: pointer;
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    background: #de3163;
    border-radius: 4px;
  }
`;
