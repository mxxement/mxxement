import React, { useEffect, useRef } from "react";

import styled from "styled-components";

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const numStars = 300; // 별의 총 개수
  const movingStarsCount = 100; // 움직이는 별의 총 개수
  let stars: Star[] = []; // 별 객체 저장하는 배열
  let lastScrollY = 0; // 마지막 스크롤 위치를 저장해서 스크롤 변화량 계산

  class Star {
    x: number;
    y: number;
    z: number;
    radius: number;
    speed: number;
    opacity: number;
    twinkleSpeed: number;
    color: string;
    dx: number;
    dy: number;
    isMoving: boolean;

    constructor(isMoving: boolean) {
      this.isMoving = isMoving; // 별이 움직이는지 여부 나타내는 플래그
      this.init(); // 별 초기 속성
    }

    init() {
      const colors = ["#ffffff", "#ffe4c4", "#87ceeb", "#ffdead"];
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight * 4; // 넓은 영역으로 수직 별 분포
      this.z = Math.random() * window.innerWidth;
      this.radius = Math.random() * 1.5 + 0.3; // 작은 별
      this.speed = Math.random() * 0.5 + 0.1;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.twinkleSpeed = Math.random() * 0.1 + 0.02; // 속도
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.dx = this.isMoving ? (Math.random() - 0.5) * 0.5 : 0; // 좌우 별
      this.dy = this.isMoving ? (Math.random() - 0.5) * 0.5 : 0; // 상하 별
    }

    draw(ctx: CanvasRenderingContext2D) {
      const screenX =
        (this.x - window.innerWidth / 2) * (window.innerWidth / this.z) +
        window.innerWidth / 2; // *screenX 별이 화면에 표시 될 위치를 계산, 원근감을 반영하기 위해 z 값 (깊이) 사용
      const screenY =
        (this.y - window.innerHeight / 2) * (window.innerWidth / this.z) +
        window.innerHeight / 2; // *screenY 별이 화면에 표시 될 위치를 계산, 원근감을 반영하기 위해 z 값 (깊이) 사용
      const screenRadius = this.radius * (window.innerWidth / this.z); // *screenRadius 별의 크기를 깊이에 따라 조정

      ctx.beginPath();
      ctx.arc(screenX, screenY, screenRadius, 0, Math.PI * 2); //

      ctx.shadowBlur = 15;
      ctx.shadowColor = this.color;

      ctx.fillStyle = `rgba(${parseInt(this.color.slice(1, 3), 16)}, ${parseInt(
        this.color.slice(3, 5),
        16
      )}, ${parseInt(this.color.slice(5, 7), 16)}, ${this.opacity})`;
      ctx.fill();
    }

    update(ctx: CanvasRenderingContext2D, scrollDelta: number) {
      if (this.isMoving) {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x > window.innerWidth) this.x = 0;
        if (this.x < 0) this.x = window.innerWidth;
        if (this.y > window.innerHeight * 3) this.y = 0;
        if (this.y < 0) this.y = window.innerHeight * 3;
      }

      this.y -= scrollDelta * this.speed;

      this.opacity += this.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
      if (this.opacity > 1) this.opacity = 1;
      if (this.opacity < 0.3) this.opacity = 0.3;

      this.draw(ctx);
    }
  }

  const initStars = () => {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      const isMoving = i < movingStarsCount;
      stars.push(new Star(isMoving));
    }
  };

  const animate = (ctx: CanvasRenderingContext2D) => {
    const scrollDelta = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    stars.forEach((star) => star.update(ctx, scrollDelta));

    requestAnimationFrame(() => animate(ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    resize();
    window.addEventListener("resize", resize);

    animate(ctx);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <LayoutWrap>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      />
      <Shadow />
    </LayoutWrap>
  );
};

export default Starfield;
const LayoutWrap = styled.article`
  pointer-events: none;
`;

const Shadow = styled.div`
  position: relative;
  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 50%;
    z-index: -1;
    height: 100vw;
    width: 200vw;
    background: radial-gradient(#590911, #ff98a200 70%);
    transform: translateX(-50%) translateY(50vh);
    opacity: 0.5;
    pointer-events: none;
  }
`;
