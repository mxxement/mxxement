import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { styleType } from "../assets/ts/StyleType.ts";

const Header = () => {
  return (
    <Article>
      {/* <LavaLamp $animationDelay={0.4} translateY="-100%">
        <LavaInner>
          <div className="bubble"></div>
          <div className="bubble1"></div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </LavaInner>
      </LavaLamp> */}
      <Menu $animationDelay={0.6} translateY="-100%">
        <MenuItem>
          <NavLink to="/">
            <span>Kasina</span>
            Adventure
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/detail">
            <span>TwoTimesYou</span>
            Story
          </NavLink>
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
  justify-content: center;
  width: 100%;
  padding: 20px ${(props) => props.theme.gutter};
  color: #fff;
  box-sizing: border-box;
`;

// const LavaLamp = styled.div<styleType>`
//   animation: 0.5s ease
//     ${({ theme, translateX, translateY }) =>
//       theme.keyframes.showing(translateX, translateY)}
//     forwards;
//   animation-delay: ${(props) => props.$animationDelay}s;
//   opacity: 0;
// `;

// const LavaInner = styled.div`
//   position: relative;
//   width: 100px;
//   height: 35px;
//   border-radius: 25px;
//   overflow: hidden;

//   @keyframes drop {
//     0% {
//       transform: translateX(0px);
//     }
//     50% {
//       transform: translateX(80px);
//     }
//     100% {
//       transform: translateX(0px);
//     }
//   }

//   .bubble {
//     position: absolute;
//     top: -5px;
//     left: 0px;
//     width: 15px;
//     height: 15px;
//     background: linear-gradient(to bottom, #de3163, #ff8787);
//     border-radius: 50%;
//     animation: drop 5s ease-in-out infinite;
//   }

//   .bubble1 {
//     position: absolute;
//     top: 10px;
//     left: 0px;
//     width: 15px;
//     height: 15px;
//     background: linear-gradient(to bottom, #aada68, #17afc4);
//     border-radius: 50%;
//     animation: drop 3s ease-in-out infinite;
//   }

//   .bubble2 {
//     position: absolute;
//     top: 5px;
//     width: 15px;
//     height: 15px;
//     background: linear-gradient(to bottom, #7153ca, #e60d59);
//     border-radius: 50%;
//     left: 0px;
//     animation: drop 4s ease-in-out infinite;
//   }

//   .bubble3 {
//     position: absolute;
//     top: 25px;
//     left: 0px;
//     width: 15px;
//     height: 15px;
//     background: linear-gradient(to bottom, #b9e713, #51bbdf);
//     border-radius: 50%;
//     animation: drop 6s ease-in-out infinite;
//   }
// `;

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
    padding: 5px 10px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:active {
      transform: scale(0.96);
    }

    &:before,
    &:after {
      position: absolute;
      content: "";
      width: 150%;
      left: 50%;
      height: 100%;
      transform: translateX(-50%);
      z-index: -1000;
      background-repeat: no-repeat;
    }

    &:hover {
      &:before {
        top: -70%;
        background-image: radial-gradient(circle, #a89215 20%, transparent 20%),
          radial-gradient(circle, transparent 20%, #13a5be 20%, transparent 30%),
          radial-gradient(circle, #a3b82d 20%, transparent 20%),
          radial-gradient(circle, #590cbe 20%, transparent 20%),
          radial-gradient(circle, transparent 10%, #bd1717 15%, transparent 20%),
          radial-gradient(circle, #2a7ce8 20%, transparent 20%),
          radial-gradient(circle, #30e82a 20%, transparent 20%),
          radial-gradient(circle, #e92c75 20%, transparent 20%),
          radial-gradient(circle, #914fe7 20%, transparent 20%);
        background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
          15% 15%, 10% 10%, 18% 18%;
        background-position: 50% 120%;
        animation: greenTopBubbles 0.6s ease;
      }
    }

    @keyframes greenTopBubbles {
      0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
          40% 90%, 55% 90%, 70% 90%;
      }

      50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
          50% 50%, 65% 20%, 90% 30%;
      }

      100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
          50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      }
    }

    &:hover {
      &:after {
        bottom: -70%;
        background-image: radial-gradient(circle, #ff93db 20%, transparent 20%),
          radial-gradient(circle, #2ae8df 20%, transparent 20%),
          radial-gradient(circle, transparent 10%, #71ffbd 15%, transparent 20%),
          radial-gradient(circle, #2a9ce8 20%, transparent 20%),
          radial-gradient(circle, #7814fc 20%, transparent 20%),
          radial-gradient(circle, #73e4f8 20%, transparent 20%),
          radial-gradient(circle, #f8d3a9 20%, transparent 20%);
        background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%,
          18% 18%;
        background-position: 50% 0%;
        animation: greenBottomBubbles 0.6s ease;
      }
    }

    @keyframes greenBottomBubbles {
      0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
          70% -10%, 70% 0%;
      }

      50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%,
          95% 60%, 105% 0%;
      }

      100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%,
          95% 70%, 110% 10%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      }
    }

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
      span {
        top: 45px;
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
    }
    span {
      position: absolute;
      top: 0px;
      left: 50%;
      padding: 4px 8px;
      font-size: 14px;
      color: #fff;
      background: #de3163;
      border-radius: 4px;
      translate: -50% 0;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      opacity: 0;
      pointer-events: none;
      &:before {
        content: "";
        width: 10px;
        height: 10px;
        background: #de3163;
        rotate: 45deg;
        position: absolute;
        top: -3px;
        left: 50%;
        translate: -50% 0;
      }
    }
  }
`;
