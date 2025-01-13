import React, { useEffect, useRef } from "react";

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const numStars = 300; // 별의 총 개수
  const movingStarsCount = 50; // 움직이는 별의 총 개수
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
      this.y = Math.random() * window.innerHeight * 3; // Spread stars vertically over a larger area
      this.z = Math.random() * window.innerWidth;
      this.radius = Math.random() * 1.5 + 0.2; // Smaller stars
      this.speed = Math.random() * 0.5 + 0.1;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.twinkleSpeed = Math.random() * 0.1 + 0.02; // Faster twinkle
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.dx = this.isMoving ? (Math.random() - 0.5) * 0.5 : 0; // Random horizontal movement for some stars
      this.dy = this.isMoving ? (Math.random() - 0.5) * 0.5 : 0; // Random vertical movement for some stars
    }

    draw(ctx: CanvasRenderingContext2D) {
      const screenX =
        (this.x - window.innerWidth / 2) * (window.innerWidth / this.z) +
        window.innerWidth / 2;
      const screenY =
        (this.y - window.innerHeight / 2) * (window.innerWidth / this.z) +
        window.innerHeight / 2;
      const screenRadius = this.radius * (window.innerWidth / this.z);

      ctx.beginPath();
      ctx.arc(screenX, screenY, screenRadius, 0, Math.PI * 2);

      // Add shadow for a glowing effect
      ctx.shadowBlur = 15; // More pronounced glow
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

        // Wrap around screen edges for moving stars
        if (this.x > window.innerWidth) this.x = 0;
        if (this.x < 0) this.x = window.innerWidth;
        if (this.y > window.innerHeight * 3) this.y = 0;
        if (this.y < 0) this.y = window.innerHeight * 3;
      }

      this.y -= scrollDelta * this.speed; // Move with scroll direction

      this.opacity += this.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
      if (this.opacity > 1) this.opacity = 1;
      if (this.opacity < 0.3) this.opacity = 0.3; // Allow dimmer stars

      this.draw(ctx);
    }
  }

  const initStars = () => {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      const isMoving = i < movingStarsCount; // First few stars move randomly
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
  );
};

export default Starfield;
