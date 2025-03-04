import { useEffect, useRef } from "react";
// import { useAddClassObserver } from "../hooks/useObserver";
import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StoryLayout = styled.div`
  overflow: hidden;
`;

const StoryContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const StoryWrap = styled.div`
  display: flex;
  gap: 2.60417vw;
  padding-left: 2.60417vw;
`;

const StoryTitle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
  font-size: 40vw;
  font-weight: bold;
  background: linear-gradient(45deg, #0ae448 20%, #4fff00 80%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0.52083vw 0.52083vw 0.52083vw black);
`;

const StoryBubble = styled.div`
  position: absolute;
  padding: 0.78125vw 1.04167vw;
  font-size: 2.08333vw;
  font-weight: bold;
  border: 2px solid var(--white);
  border-radius: 2.08333vw;
  background: var(--black);
  box-shadow: 0.26042vw 0.26042vw 0.52083vw 0vw #000;
  -webkit-text-fill-color: initial;
  transition: 1s var(--bezier);
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;

const StoryBubbleA = styled(StoryBubble)`
  top: 55%;
  left: 17%;
  transform: translate(-0.52083vw, -25vw) rotate(720deg);
  &.active {
    transform: translate(0px, 0px) rotate(15deg);
  }
`;

const StoryBubbleB = styled(StoryBubble)`
  top: 35%;
  right: 46%;
  transform: translateX(20vw);
  &.active {
    transform: translateX(0px);
  }
`;

const StoryBubbleC = styled(StoryBubble)`
  bottom: 30%;
  right: 23%;
  transform: scale(2);
  &.active {
    transform: scale(1) rotate(-25deg);
  }
`;

const StoryList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.60417vw;
`;

const StoryListItem = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  width: 55vw;
  font-size: 3.125vw;
  font-weight: 700;
  text-align: center;
  &:nth-child(1) {
    display: flex;
    align-items: flex-end;
    gap: 0.78125vw;
    position: relative;
    width: auto;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0e100f;
      font-weight: bold;
      text-align: center;
      border-radius: 0.52083vw;
      transform-origin: center center;

      &:nth-child(1) {
        width: 23.4375vw;
        height: 5.20833vw;
        font-size: 1.82292vw;
        font-weight: bold;
        text-align: center;
        background: linear-gradient(45deg, #f100cb 2%, #fec5fb 65%);
      }

      &:nth-child(2) {
        position: absolute;
        top: -3.125vw;
        right: 8.85417vw;
        width: 7.8125vw;
        height: 3.90625vw;
        font-size: 1.5625vw;
        background: linear-gradient(45deg, #2c55a7 2%, #7670b7 65%);
        box-shadow: 0.26042vw 0.52083vw 0.52083vw 0vw #000000;
      }

      &:nth-child(3) {
        width: 6.25vw;
        height: 3.125vw;
        color: #0e100f;
        font-size: 1.04167vw;
        background: linear-gradient(45deg, #ff2a17 2%, #ffea31 65%);
        box-shadow: 0.52083vw 0.72917vw 0.67708vw 0vw #000000;
      }
    }
  }
`;

const StoryListItem1st = styled(StoryListItem)`
  span {
    opacity: 0;
    transition: 1s ${(props) => props.theme.defaultBezier};
    &:nth-child(1) {
      transform: translateY(-20.83333vw) rotate(-20deg);
    }
    &:nth-child(2) {
      transform: translateY(-18.22917vw) rotate(20deg);
    }
    &:nth-child(3) {
      transform: translateY(-15.625vw) rotate(720deg);
    }
  }
  &.active {
    span {
      opacity: 1;
      &:nth-child(1) {
        transform: translateY(0px) rotate(0deg);
      }
      &:nth-child(2) {
        transform: translateY(0px) rotate(-10deg);
        transition-delay: 0.2s;
      }
      &:nth-child(3) {
        transform: translateY(0px) rotate(25deg);
        transition-delay: 0.4s;
      }
    }
  }
`;

const StoryListItem2nd = styled(StoryListItem)`
  gap: 10px;
  span {
    opacity: 0;
    transition: 1s cubic-bezier(0.99, -0.02, 0, 1.25);
    &:nth-child(1),
    &:nth-child(2) {
      transform: translateY(2.60417vw);
    }
    &:nth-child(3) {
      transform: scale(4);
    }
  }
  &.active {
    span {
      opacity: 1;
      transform: translateY(0px);
      &:nth-child(2) {
        transition-delay: 0.2s;
      }
      &:nth-child(3) {
        transition-delay: 0.6s;
        transform: scale(1);
      }
    }
  }
`;

const StoryListItem3rd = styled(StoryListItem)`
  svg {
    position: absolute;
    top: -7.8125vw;
    left: 5.20833vw;
    width: 7.8125vw;
    height: 6.77083vw;
    transition: 1s cubic-bezier(0.99, -0.02, 0, 1.25);
    transform: rotate(0deg) scale(0);
  }
  span {
    position: relative;
    &:after {
      content: "";
      width: 0%;
      height: 1.5625vw;
      background: red;
      position: absolute;
      bottom: -0.10417vw;
      left: 0.57292vw;
      z-index: -1;
      transition: 1.5s cubic-bezier(0.99, -0.02, 0, 1.25);
    }
  }
  &.active {
    span {
      &:after {
        width: 100%;
      }
    }
    svg {
      transform: rotate(45deg) scale(1);
    }
  }
`;

const StoryListItem4th = styled(StoryListItem)`
  svg {
    position: absolute;
    bottom: -10.41667vw;
    left: 0px;
    width: 8.07292vw;
    height: 6.45833vw;
    transition: 2s cubic-bezier(0.99, -0.02, 0, 1.25);
    transform: rotate(0deg) scale(0);
  }
  span {
    opacity: 0;
    transition: 2s cubic-bezier(0.99, -0.02, 0, 1.25);
    &:nth-child(even) {
      transform: translateY(2.60417vw);
    }

    &:nth-child(odd) {
      transform: translateY(-2.60417vw);
    }
  }
  &.active {
    svg {
      transform: rotate(800deg) scale(1);
    }
    span {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const StoryListItem5th = styled(StoryListItem)`
  position: relative;
  justify-content: normal;
  align-items: center;
  gap: 1.30208vw;
  span {
    padding: 1.04167vw 2.08333vw;
    color: #0e100f;
    border-radius: 0.52083vw;
    box-sizing: border-box;
    box-shadow: 0.67708vw 0.3125vw 1.04167vw 0.05208vw #000000;
    transition: 1.5s cubic-bezier(0.99, -0.02, 0, 1.25);
    &:nth-child(1) {
      background: linear-gradient(45deg, #ffe400, #daff00);
    }
    &:nth-child(2) {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 10;
      background: linear-gradient(45deg, #ff8709, #ed4f4f);
      box-shadow: -0.26042vw 0.52083vw 1.04167vw 1px #000000;
    }
    &:nth-child(3) {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;
      background: linear-gradient(45deg, #ff00cb, #3835f6);
    }
  }
  svg {
    width: 5.72917vw;
    height: 5.72917vw;
    transform: translateY(-200%) rotate(-360deg);
    transition: 1s cubic-bezier(0.99, -0.02, 0, 1.25);
    opacity: 0;
  }
  &.active {
    span {
      &:nth-child(2) {
        left: 28.125vw;
        transition-delay: 0.2s;
      }
      &:nth-child(3) {
        animation: 2s cubic-bezier(0.99, -0.02, 0, 1.25) boxAnimation forwards
          alternate;
        animation-delay: 0.4s;
      }
    }

    @keyframes boxAnimation {
      0% {
        top: 0px;
      }
      50% {
        top: 5.57292vw;
      }
      100% {
        top: 5.57292vw;
        left: 15.10417vw;
      }
    }

    @keyframes svgRotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    svg {
      transform: translateY(0%) rotate(0deg);
      transition-delay: 1s;
      animation: 3s linear svgRotate infinite;
      animation-delay: 1.6s;
      opacity: 1;
    }
  }
`;

const StoryListItem6th = styled(StoryListItem)`
  gap: 20px;
  span {
    transform: translateY(100%);
    transition: 1s cubic-bezier(0.7, 0, 0.3, 1);
    opacity: 0;
  }
  svg {
    position: absolute;
    top: -140px;
    left: 0px;
    width: 100%;
    z-index: -1;
    transition: 2s cubic-bezier(0.7, 0, 0.3, 1);
    stroke-dasharray: 5000;
    stroke-dashoffset: 5000;
  }
  &.active {
    span {
      transform: translateY(0%);
      opacity: 1;
      &:nth-child(2) {
        transition-delay: 0.1s;
      }
      &:nth-child(3) {
        transition-delay: 0.2s;
      }
    }
    svg {
      stroke-dasharray: 5000;
      stroke-dashoffset: 0;
    }
  }
`;

const Horizontal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const StoryWrapRef = useRef<HTMLDivElement>(null);

  const StoryTargetRefA = useRef<HTMLLIElement>(null);
  const StoryTargetRefB = useRef<HTMLLIElement>(null);
  const StoryTargetRefC = useRef<HTMLLIElement>(null);
  const StoryTargetRefD = useRef<HTMLLIElement>(null);
  const StoryTargetRefE = useRef<HTMLLIElement>(null);
  const StoryTargetRefF = useRef<HTMLLIElement>(null);

  const StroyBubbleRefA = useRef<HTMLDivElement>(null);
  const StroyBubbleRefB = useRef<HTMLDivElement>(null);
  const StroyBubbleRefC = useRef<HTMLDivElement>(null);

  //   useAddClassObserver("active", StoryTargetRefA, true);
  //   useAddClassObserver("active", StoryTargetRefB, true);
  //   useAddClassObserver("active", StoryTargetRefC, true);
  //   useAddClassObserver("active", StoryTargetRefD, true);
  //   useAddClassObserver("active", StoryTargetRefE, true);
  //   useAddClassObserver("active", StoryTargetRefF, true);

  //   useAddClassObserver("active", StroyBubbleRefA, true);
  //   useAddClassObserver("active", StroyBubbleRefB, true);
  //   useAddClassObserver("active", StroyBubbleRefC, true);

  const scrollHorizontal = () => {
    const sections = gsap.utils.toArray(StoryWrapRef.current!);
    const scrollTween = gsap.to(sections, {
      xPercent: -82 * sections.length,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
      },
    });
  };

  useEffect(() => {
    scrollHorizontal();
  }, []);

  const animationText = [
    {
      text: "컴",
    },
    {
      text: "포",
    },
    {
      text: "넌",
    },
    {
      text: "트",
    },
    {
      text: "단",
    },
    {
      text: "위",
    },
    {
      text: "마",
    },
    {
      text: "크",
    },
    {
      text: "업",
    },
    {
      text: "작",
    },
    {
      text: "업",
    },
    {
      text: "을",
    },
    {
      text: "했",
    },
    {
      text: "고",
    },
  ];

  return (
    <>
      <StoryLayout>
        <StoryContainer ref={containerRef}>
          <StoryWrap ref={StoryWrapRef}>
            <StoryTitle>
              DOSNOVENTA
              <StoryBubbleA ref={StroyBubbleRefA}>Encounter</StoryBubbleA>
              <StoryBubbleB ref={StroyBubbleRefB}>Trial</StoryBubbleB>
              <StoryBubbleC ref={StroyBubbleRefC}>Career</StoryBubbleC>
            </StoryTitle>
            <StoryList>
              <StoryListItem1st ref={StoryTargetRefA}>
                <span>디자인과 코드의 조화</span>
                <span>🧡</span>
                <span>🌈</span>
              </StoryListItem1st>
              <StoryListItem2nd ref={StoryTargetRefB}>
                <span>+ HTML +</span>
                <span>CSS +</span>
                <span>JS +</span>
              </StoryListItem2nd>
              <StoryListItem3rd ref={StoryTargetRefC}>
                <span>React+Typescript, Vue를 기반으로</span>
                <svg
                  width="100"
                  height="113"
                  viewBox="0 0 100 113"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.9433 24.6971C18.5656 19.4276 21.8749 14.0544 27.1498 12.6749C32.4523 11.2886 37.9084 14.3974 39.2795 19.6413L41.9371 29.8059C42.033 29.7611 42.1283 29.7156 42.2235 29.6702C42.674 29.4553 43.1225 29.2412 43.6216 29.1108C46.6933 28.3076 49.838 29.0184 52.1992 30.7701C53.255 29.9515 54.4153 29.258 55.7828 28.9005C57.5457 28.4395 59.3245 28.4868 60.965 28.946L60.8961 28.3154L59.7573 17.871C59.1696 12.4828 63.1598 7.63379 68.6081 7.0397C74.0283 6.44888 79.0353 10.2901 79.6256 15.7048L81.9252 36.7914L85.2 55.1013C86.8111 61.2634 86.0863 67.527 83.5899 72.9564L86.7665 85.1062C87.2615 86.9992 86.6835 88.9314 85.7099 90.4727C84.7359 92.0132 83.363 93.3389 81.6527 94.5871C78.2331 97.0841 73.4823 99.2257 68.0116 100.656C62.5407 102.086 57.3834 102.536 53.1854 102.03C51.0863 101.777 49.1947 101.307 47.5938 100.438C45.9927 99.5693 44.5785 98.1551 44.0845 96.2657L40.9598 84.3144C38.5541 82.7837 36.172 80.8823 33.8906 78.5274C29.7012 74.204 25.3632 70.4809 21.4681 67.138L21.4661 67.1364C19.1711 65.1666 17.0302 63.329 15.1637 61.5782C12.6471 59.2167 10.6218 57.0515 9.35561 54.613C8.08925 52.1746 7.81026 49.0718 9.32847 46.5607C10.5336 44.5678 12.4723 43.2438 14.5131 42.7026C17.8041 41.8281 21.2248 42.7222 24.5897 43.9274C24.6697 43.9564 24.7394 43.9889 24.8094 44.0216C24.8448 44.0381 24.8804 44.0547 24.9173 44.0709C24.95 44.0852 24.9836 44.0991 25.0195 44.1123L19.9433 24.6971ZM61.6334 35.0798L61.8074 36.6756C61.9655 38.124 63.2676 39.1703 64.7162 39.0123C66.1646 38.8544 67.2108 37.552 67.0527 36.1036L66.6143 32.0821C66.6016 31.9649 66.5812 31.8503 66.554 31.7388L64.9797 17.3018C64.7049 14.782 66.4628 12.5576 69.1771 12.2613C71.8634 11.9684 74.1269 13.7368 74.4036 16.274L75.973 30.6674L75.9264 30.6567L76.8839 39.0198L77.1696 40.6868C77.2475 41.0826 77.3342 41.5649 77.4089 41.9808C77.4094 41.9836 77.4099 41.9864 77.4104 41.9893C77.4903 42.4336 77.5563 42.801 77.5832 42.9039L80.1176 56.4302C83.1578 68.0579 75.9494 80.0444 63.8724 83.202C55.7474 85.3264 46.5216 84.0345 37.6431 74.8735C33.1431 70.2295 28.5616 66.2874 24.6158 62.8923L24.6104 62.8879L24.6001 62.8791C22.4292 61.0112 20.4512 59.3089 18.7855 57.7464C16.4384 55.5443 14.7141 53.592 13.978 52.1747C13.2417 50.7567 13.2583 50.2694 13.8571 49.2787C14.4013 48.3799 14.9586 48.0192 15.8819 47.7741C17.0876 47.4532 19.8453 47.839 22.7914 48.8942C25.7384 49.9492 28.8933 51.5074 31.3143 52.7738C32.6021 53.4445 34.19 52.9442 34.8606 51.6563C35.5313 50.3684 35.0308 48.7797 33.7428 48.1091C33.3802 47.9195 32.9204 47.7217 32.4494 47.5193C32.0173 47.3336 31.5761 47.1437 31.1918 46.9525L25.0255 23.3682C24.3799 20.899 25.8646 18.4401 28.479 17.7566C31.1207 17.066 33.5558 18.5181 34.197 20.9704L38.9513 39.1546C39.1195 39.8378 39.5548 40.4236 40.1584 40.7837C40.7628 41.1437 41.4863 41.2451 42.1659 41.0674C42.8466 40.8895 43.4269 40.4471 43.7779 39.8374C44.1288 39.2277 44.2208 38.504 44.0339 37.8257L43.3177 35.0863C43.8086 34.7184 44.3015 34.3623 44.9503 34.1927C47.0118 33.6537 48.9788 34.4744 50.0358 35.9601C50.5308 36.6658 51.3408 37.0836 52.2028 37.0779C53.0651 37.0731 53.8688 36.6452 54.3557 35.9327C54.9849 35.0222 55.9175 34.2945 57.1114 33.9823C58.8476 33.5284 60.5135 34.0123 61.6334 35.0798ZM65.2008 88.2843C59.6256 89.7419 53.4027 89.7052 47.2051 87.4323L49.167 94.9374C49.2104 95.1031 49.3542 95.3818 50.1113 95.7927C50.8693 96.2042 52.172 96.6202 53.8154 96.8183C57.1033 97.2141 61.748 96.8651 66.6827 95.5749C71.6174 94.2847 75.8699 92.3084 78.5519 90.3507C79.8922 89.3716 80.8181 88.3749 81.2793 87.6436C81.7416 86.9129 81.7276 86.5984 81.6849 86.4354L79.7436 79.0102C76.1224 83.3902 71.1407 86.7312 65.2008 88.2843Z"
                    fill="#161614"
                  ></path>
                  <path
                    d="M61.8074 36.6756L61.6334 35.0798C60.5135 34.0123 58.8476 33.5284 57.1114 33.9823C55.9175 34.2945 54.9849 35.0222 54.3557 35.9327C53.8688 36.6452 53.0651 37.0731 52.2028 37.0779C51.3408 37.0836 50.5308 36.6658 50.0358 35.9601C48.9788 34.4744 47.0118 33.6537 44.9503 34.1927C44.3015 34.3623 43.8086 34.7184 43.3177 35.0863L44.0339 37.8257C44.2208 38.504 44.1288 39.2277 43.7779 39.8374C43.4269 40.4471 42.8466 40.8895 42.1659 41.0674C41.4863 41.2451 40.7628 41.1437 40.1584 40.7837C39.5548 40.4236 39.1195 39.8378 38.9513 39.1546L34.197 20.9704C33.5558 18.5181 31.1207 17.066 28.479 17.7566C25.8646 18.4401 24.3799 20.899 25.0255 23.3682L31.1918 46.9525C31.5761 47.1437 32.0173 47.3336 32.4494 47.5193C32.9204 47.7217 33.3802 47.9195 33.7428 48.1091C35.0308 48.7797 35.5313 50.3684 34.8606 51.6563C34.19 52.9442 32.6021 53.4445 31.3143 52.7738C28.8933 51.5074 25.7384 49.9492 22.7914 48.8942C19.8453 47.839 17.0876 47.4532 15.8819 47.7741C14.9586 48.0192 14.4013 48.3799 13.8571 49.2787C13.2583 50.2694 13.2417 50.7567 13.978 52.1747C14.7141 53.592 16.4384 55.5443 18.7855 57.7464C20.4512 59.3089 22.4292 61.0112 24.6001 62.8791L24.6104 62.8879L24.6158 62.8923C28.5616 66.2874 33.1431 70.2295 37.6431 74.8735C46.5216 84.0345 55.7474 85.3264 63.8724 83.202C75.9494 80.0444 83.1578 68.0579 80.1176 56.4302L77.5832 42.9039C77.5563 42.801 77.4903 42.4336 77.4104 41.9893L77.4089 41.9808C77.3342 41.5649 77.2475 41.0826 77.1696 40.6868L76.8839 39.0198L75.9264 30.6567L75.973 30.6674L74.4036 16.274C74.1269 13.7368 71.8634 11.9684 69.1771 12.2613C66.4628 12.5576 64.7049 14.782 64.9797 17.3018L66.554 31.7388C66.5812 31.8503 66.6016 31.9649 66.6143 32.0821L67.0527 36.1036C67.2108 37.552 66.1646 38.8544 64.7162 39.0123C63.2676 39.1703 61.9655 38.124 61.8074 36.6756Z"
                    fill="#161614"
                  ></path>
                  <path
                    d="M47.2051 87.4323C53.4027 89.7052 59.6256 89.7419 65.2008 88.2843C71.1407 86.7312 76.1224 83.3902 79.7436 79.0102L81.6849 86.4354C81.7276 86.5984 81.7416 86.9129 81.2793 87.6436C80.8181 88.3749 79.8922 89.3716 78.5519 90.3507C75.8699 92.3084 71.6174 94.2847 66.6827 95.5749C61.748 96.8651 57.1033 97.2141 53.8154 96.8183C52.172 96.6202 50.8693 96.2042 50.1113 95.7927C49.3542 95.3818 49.2104 95.1031 49.167 94.9374L47.2051 87.4323Z"
                    fill="#161614"
                  ></path>
                  <path
                    d="M77.4088 41.9808C77.3342 41.5649 77.2475 41.0826 77.1696 40.6868L76.8839 39.0198L75.9264 30.6567L75.973 30.6674L74.4036 16.274C74.1269 13.7368 71.8634 11.9684 69.1771 12.2613C66.4628 12.5576 64.7049 14.782 64.9797 17.3018L66.554 31.7388C66.5812 31.8503 66.6016 31.9649 66.6143 32.0821L67.0527 36.1036C67.2108 37.552 66.1646 38.8544 64.7162 39.0123C63.2676 39.1703 61.9655 38.124 61.8074 36.6756L61.6334 35.0798C60.5135 34.0123 58.8476 33.5284 57.1114 33.9823C55.9175 34.2945 54.9849 35.0222 54.3557 35.9327C53.8688 36.6452 53.0651 37.0731 52.2028 37.0779C51.3408 37.0836 50.5308 36.6658 50.0358 35.9601C48.9788 34.4744 47.0118 33.6537 44.9503 34.1927C44.3015 34.3623 43.8086 34.7184 43.3177 35.0863L44.0339 37.8257C44.2208 38.504 44.1289 39.2277 43.7779 39.8374C43.4269 40.4471 42.8466 40.8895 42.1659 41.0674C41.4863 41.2451 40.7628 41.1437 40.1584 40.7837C39.5548 40.4236 39.1195 39.8378 38.9513 39.1546L34.197 20.9704C33.5558 18.5181 31.1207 17.066 28.479 17.7566C25.8646 18.4401 24.3799 20.899 25.0255 23.3682L31.1918 46.9525C31.5761 47.1437 32.0173 47.3336 32.4494 47.5193C32.9204 47.7217 33.3802 47.9195 33.7428 48.1091C35.0308 48.7797 35.5313 50.3684 34.8606 51.6563C34.19 52.9442 32.6021 53.4445 31.3143 52.7738C28.8933 51.5074 25.7384 49.9492 22.7914 48.8942C19.8453 47.839 17.0876 47.4532 15.8819 47.7741C14.9586 48.0192 14.4013 48.3799 13.8571 49.2787C13.2583 50.2694 13.2417 50.7567 13.978 52.1747C14.7141 53.592 16.4384 55.5443 18.7855 57.7464C20.4512 59.3089 22.4292 61.0112 24.6001 62.8791L24.6104 62.8879L24.6158 62.8923C28.5616 66.2874 33.1431 70.2295 37.6431 74.8735C46.5216 84.0345 55.7474 85.3264 63.8724 83.202C75.9494 80.0444 83.1577 68.0579 80.1176 56.4302L77.5832 42.9039C77.5563 42.801 77.4903 42.4336 77.4104 41.9893M77.4088 41.9808L77.4104 41.9893M77.4088 41.9808C77.4094 41.9836 77.4099 41.9865 77.4104 41.9893M27.1498 12.6749C21.8749 14.0544 18.5656 19.4276 19.9433 24.6971L25.0195 44.1123C24.9836 44.0991 24.95 44.0852 24.9173 44.0709C24.8804 44.0547 24.8448 44.0381 24.8094 44.0216C24.7394 43.9889 24.6697 43.9564 24.5897 43.9274C21.2248 42.7222 17.8041 41.8281 14.5131 42.7026C12.4723 43.2438 10.5336 44.5678 9.32847 46.5607C7.81026 49.0718 8.08925 52.1746 9.35561 54.613C10.6218 57.0515 12.6471 59.2167 15.1637 61.5782C17.0302 63.329 19.1711 65.1666 21.4661 67.1364L21.4681 67.138C25.3632 70.4809 29.7012 74.204 33.8906 78.5274C36.172 80.8823 38.5541 82.7837 40.9598 84.3144L44.0845 96.2657C44.5785 98.1551 45.9927 99.5693 47.5938 100.438C49.1947 101.307 51.0863 101.777 53.1854 102.03C57.3834 102.536 62.5407 102.086 68.0116 100.656C73.4823 99.2257 78.2331 97.0841 81.6527 94.5871C83.363 93.3389 84.7359 92.0132 85.7099 90.4727C86.6835 88.9314 87.2615 86.9992 86.7665 85.1062L83.5899 72.9565C86.0863 67.527 86.8111 61.2634 85.2 55.1013L81.9252 36.7914L79.6256 15.7048C79.0353 10.2901 74.0283 6.44888 68.6081 7.0397C63.1598 7.63379 59.1696 12.4828 59.7573 17.871L60.8961 28.3154L60.965 28.946C59.3245 28.4868 57.5457 28.4395 55.7828 28.9005C54.4153 29.258 53.255 29.9515 52.1992 30.7701C49.838 29.0184 46.6933 28.3076 43.6216 29.1108C43.1225 29.2412 42.674 29.4553 42.2235 29.6702C42.1283 29.7156 42.033 29.7611 41.9371 29.8059L39.2795 19.6413C37.9084 14.3974 32.4523 11.2886 27.1498 12.6749ZM47.2051 87.4323C53.4027 89.7052 59.6256 89.7419 65.2008 88.2843C71.1407 86.7312 76.1224 83.3902 79.7436 79.0102L81.6849 86.4354C81.7276 86.5984 81.7416 86.9129 81.2793 87.6436C80.8181 88.3749 79.8922 89.3716 78.5519 90.3508C75.8699 92.3084 71.6174 94.2847 66.6827 95.5749C61.7481 96.8651 57.1033 97.2141 53.8154 96.8183C52.172 96.6202 50.8693 96.2042 50.1113 95.7927C49.3542 95.3818 49.2104 95.1031 49.167 94.9374L47.2051 87.4323Z"
                    stroke="#FFFCE1"
                    stroke-width="3"
                  ></path>
                </svg>
              </StoryListItem3rd>
              <StoryListItem4th ref={StoryTargetRefD}>
                {animationText.map((item, index) => (
                  <span key={index}>{item.text}</span>
                ))}
                <svg
                  width="155"
                  height="124"
                  viewBox="0 0 155 124"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M114.577 16.7765C114.176 17.0039 114.012 17.4907 114.19 17.9137C123.826 41.3135 115.82 68.0885 94.5769 80.0841C73.3337 92.0796 46.239 85.1288 31.1434 64.8042C30.8702 64.4357 30.3648 64.322 29.9641 64.5494L0.464816 81.2031C0.00488856 81.4624 -0.140804 82.0629 0.150635 82.4996C25.729 120.911 74.9457 134.708 113.256 113.087C151.567 91.4655 165.096 42.2187 145.351 0.518573C145.123 0.0409342 144.536 -0.141026 144.076 0.118264L114.577 16.7719V16.7765Z"
                    fill="url(#paint0_linear_2080_57114)"
                  ></path>
                  <path
                    d="M114.577 16.7765C114.176 17.0039 114.012 17.4907 114.19 17.9137C123.826 41.3135 115.82 68.0885 94.5769 80.0841C73.3337 92.0796 46.239 85.1288 31.1434 64.8042C30.8702 64.4357 30.3648 64.322 29.9641 64.5494L0.464816 81.2031C0.00488856 81.4624 -0.140804 82.0629 0.150635 82.4996C25.729 120.911 74.9457 134.708 113.256 113.087C151.567 91.4655 165.096 42.2187 145.351 0.518573C145.123 0.0409342 144.536 -0.141026 144.076 0.118264L114.577 16.7719V16.7765Z"
                    fill="url(#pattern-home-animate-cutout-half-circle-0)"
                    fill-opacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-cutout-half-circle-0"
                      patternContentUnits="objectBoundingBox"
                      width="1.29555"
                      height="1.62184"
                    >
                      <use transform="scale(0.00259111 0.00324368)"></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57114"
                      x1="-18.9141"
                      y1="-15.6329"
                      x2="8.70042"
                      y2="120.212"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.335249" stop-color="#CD237F"></stop>
                      <stop offset="1" stop-color="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </StoryListItem4th>
              <StoryListItem5th ref={StoryTargetRefE}>
                <span>CREATIVE</span>
                <span>ANIMATION</span>
                <span>LAYOUT</span>
                <svg
                  width="124"
                  height="124"
                  fill="none"
                  viewBox="0 0 124 124"
                  aria-hidden="true"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="url(#paint0_radial_2080_57111)"
                    fill-rule="evenodd"
                    d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="url(#pattern-home-animate-asterisk-0)"
                    fill-rule="evenodd"
                    d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z"
                    clip-rule="evenodd"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_2080_57111"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="rotate(-90 63.541 25.385) scale(97.6761)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#217ffa"></stop>
                      <stop offset="0.33" stop-color="#334acf"></stop>
                      <stop offset="0.67" stop-color="#6664e4"></stop>
                      <stop offset="1" stop-color="#4f3bff"></stop>
                    </radialGradient>
                    <pattern
                      id="pattern-home-animate-asterisk-0"
                      width=".806"
                      height=".806"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use transform="scale(.00161)"></use>
                    </pattern>
                  </defs>
                </svg>
              </StoryListItem5th>
              <StoryListItem6th ref={StoryTargetRefF}>
                <span>를 만드는</span>
                <span>UI</span>
                <span>개발자 입니다.</span>
                <svg
                  id="linesSVG"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 892.5 399.09"
                >
                  <path
                    id="A"
                    d="M302.57,11.88c-11.08,3.44-22.92,7.01-34.17,10.94-13.03,4.53-30.3,11.47-46.71,20.04-16.47,8.54-31.88,18.78-42.56,27.3-13.04,10.19-25.2,22.39-35.12,35.48-4.9,6.57-9.26,13.33-12.97,20.1-3.57,6.83-6.77,13.51-9.03,20.16-10.04,28.03-9.04,58.42,4.55,84.47l2.68,4.83c.98,1.56,2.06,3.08,3.09,4.63l1.56,2.32,1.78,2.19,3.58,4.38,4,4.11c.7.67,1.34,1.35,2.04,2.03l2.22,1.9c1.48,1.24,2.94,2.52,4.46,3.75l4.78,3.44c6.55,4.41,13.61,8.2,21.03,11.35,7.44,3.13,15.19,5.58,23.06,7.63,7.86,2.05,15.9,3.52,23.94,4.73,8.04,1.2,16.14,2.03,24.24,2.62,8.1.56,16.21,1.05,24.25,1.1,8.06.12,16.12.37,24.2.32,32.35-.09,64.82-2.58,97.07-6.92,74.74-10.12,148.2-31.23,216.24-61.96,17.02-7.68,33.69-16.01,49.97-24.85,2.05-1.11,4.11-2.15,6.12-3.3l6.01-3.48,11.98-6.96c8-4.58,15.9-9.62,23.54-14.96,15.27-10.66,29.49-23.21,40.54-37.6,11.47-14.81,17.8-32.47,17.15-49.83-.54-18.51-10.1-36.31-25.68-48.33-7.73-6.04-16.65-10.7-25.99-14.28-9.34-3.58-19.13-6.03-29.01-7.88-9.9-1.82-19.88-2.99-29.9-3.71l-7.52-.45-7.42-.27-14.82-.52c-9.9-.36-19.81-.24-29.72-.39-9.9.03-19.83.31-29.76.46-79.45,2.46-159.2,13.99-236.45,34.17-21.54,5.5-42.8,12-63.93,18.75l-15.74,5.39c-5.22,1.81-10.51,3.51-15.66,5.51-10.35,3.9-20.77,7.62-31.04,11.8-20.55,8.28-40.84,17.51-60.12,28.51-19.27,10.97-37.42,23.99-52.77,39.34-7.67,7.67-14.61,16.05-20.4,24.86-5.73,8.84-10.46,18.13-13.95,27.73-6.97,19.12-9.23,39.81-3.56,59.14,2.71,9.64,7.56,18.75,13.76,26.9l4.96,5.95c1.82,1.87,3.75,3.66,5.61,5.48,1.8,1.89,4,3.41,6.04,5.07l3.11,2.46c1.04.78,2.19,1.48,3.3,2.22,8.75,6.06,18.57,10.81,28.7,14.72,5.03,2.05,10.29,3.62,15.48,5.3,5.3,1.41,10.58,2.95,15.98,4.03,14.69,3.22,29.74,5.27,44.86,6.5,7.55.62,15.19,1.03,22.75,1.18l11.38.31,5.69.14,5.7-.06c30.42.02,61.05-1.98,91.48-6,60.88-8.13,121-24.28,177.22-48.02,11.71-4.72,21.86-10.03,30.91-14.55"
                    fill="none"
                    stroke="#ff3b00"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  ></path>
                  <g
                    id="GroupB"
                    fill="none"
                    stroke="#ff3b00"
                    stroke-miterlimit="10"
                  >
                    <path
                      id="B2"
                      d="M73.89,334.5l3.11,2.46c1.04.78,2.19,1.48,3.3,2.22,8.75,6.06,18.57,10.81,28.7,14.72,5.03,2.05,10.29,3.62,15.48,5.3,5.3,1.41,10.58,2.95,15.98,4.03,14.69,3.22,29.74,5.27,44.86,6.5,7.55.62,15.19,1.03,22.75,1.18l11.38.31,5.69.14,5.7-.06c30.42.02,61.05-1.98,91.48-6"
                      stroke-width="10"
                    ></path>
                    <path
                      id="B1"
                      d="M133.46,386.93c48.44,10.22,98.65,9.23,147.87,5.71"
                      stroke-width="8"
                    ></path>
                  </g>
                  <g
                    id="GroupC"
                    fill="none"
                    stroke="#ff3b00"
                    stroke-miterlimit="10"
                  >
                    <path
                      id="C4"
                      d="M126.38,24.02c.79,7.67,5.31,23.14,8.76,34.56"
                      stroke-width="8"
                    ></path>
                    <path
                      id="C3"
                      d="M91.08,17.34c3.34,11.85,13.66,31.99,21.12,47.92"
                      stroke-width="10"
                    ></path>
                    <path
                      id="C2"
                      d="M49.41,13.99c16.68,20.76,27.9,42.85,43.21,63.56"
                      stroke-width="8"
                    ></path>
                    <path
                      id="C1"
                      d="M3.1,30.6c24.68,19.5,54.28,43.18,81.36,61.6"
                      stroke-width="10"
                    ></path>
                  </g>
                  <path
                    id="D"
                    d="M838.37 103.67 C837.41 112.7 836.45 121.72 835.5 130.76 829.97 134.34 824.44 137.92 818.91 141.51 823.77 145.66 828.63 149.82 833.49 153.97 833.7 164.21 833.91 174.45 834.13 184.69 841.4 177.47 848.67 170.25 855.94 163.04 865.86 164.09 875.78 165.14 885.7 166.19 880.59 159.76 875.49 153.34 870.39 146.91 873.13 136.37 875.88 125.83 878.63 115.29 871.27 118.78 863.92 122.28 856.57 125.78 853.7 121.15 850.84 116.53 847.98 111.91"
                    stroke-width="6"
                    stroke-miterlimit="10"
                    stroke="#ff3b00"
                    fill="none"
                  ></path>
                </svg>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 441.31 249.44"
                >
                  <path
                    d="M49.21,193.1c-7.62-14.96-10.07-32.02-7.67-48.44,2.63-16.56,10.13-31.33,19.71-44.14,9.63-12.79,21.4-23.51,33.85-32.93,6.21-4.72,12.68-9.07,19.24-13.18l4.89-3.12c1.66-1.01,3.34-1.93,5.02-2.92,3.37-1.89,6.66-3.95,10.09-5.73C174.19,21.19,218.87,8.82,264.1,6.41c22.62-1.16,45.36.11,67.71,3.89,11.18,1.72,22.31,4.31,33.31,7.86,10.96,3.6,21.74,8.36,31.65,14.86,17.84,11.62,32.33,29.7,37.13,51.5,2.38,10.84,1.75,22.58-1.79,33.06-1.61,5.33-4.15,10.25-6.84,14.97-2.85,4.64-6,9.03-9.5,13.02-14.02,16.05-31.55,27.59-49.01,37.56-17.5,10.12-35.71,19.03-54.42,26.71-17.55,7.3-35.63,13.25-53.96,18.22-18.35,4.91-36.99,8.9-55.84,11.38-18.85,2.53-37.87,3.88-56.91,4l-14.29-.16-14.28-.74c-9.55-.55-19.23-1.68-28.8-3.48-16.48-3.2-33.17-8.37-47.99-18.17-14.76-9.63-27.1-24.7-31.7-42.41-4.78-17.56-2.54-36.01,4.05-52.17,3.33-8.1,7.8-15.76,13.4-22.51,5.53-6.72,11.93-12.63,18.89-17.69,6.52-4.78,14.1-9.47,22.31-13.3"
                    fill="none"
                    stroke="#ff3b00"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  ></path>
                </svg> */}
              </StoryListItem6th>
            </StoryList>
          </StoryWrap>
        </StoryContainer>
      </StoryLayout>
    </>
  );
};

export default Horizontal;
