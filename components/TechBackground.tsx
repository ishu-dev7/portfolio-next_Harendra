"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  symbol: string | null;
  color: string;
  alpha: number;
}

const SYMBOLS = [
  "</>", "{}", "=>", "[]", "//", "&&",
  "fn()", "API", ".NET", "SQL", "AI", "::", "async", "GET",
];

const COLORS = ["#7C5CFF", "#22D3EE", "#3D5AFE", "#a78bfa", "#38bdf8"];

function buildParticles(w: number, h: number): Particle[] {
  const density = Math.floor((w * h) / 12000);
  const count   = Math.min(Math.max(density, 30), 80);
  return Array.from({ length: count }, () => ({
    x:      Math.random() * w,
    y:      Math.random() * h,
    vx:     (Math.random() - 0.5) * 0.4,
    vy:     (Math.random() - 0.5) * 0.4,
    r:      1.8 + Math.random() * 1.4,
    symbol: Math.random() < 0.28 ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] : null,
    color:  COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha:  0.28 + Math.random() * 0.38,   // 0.28 – 0.66 per particle
  }));
}

interface Props {
  connectDist?: number;
}

export default function TechBackground({ connectDist = 140 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let particles: Particle[] = [];

    function resize() {
      canvas!.width  = canvas!.parentElement?.offsetWidth  || window.innerWidth;
      canvas!.height = canvas!.parentElement?.offsetHeight || 600;
      particles = buildParticles(canvas!.width, canvas!.height);
    }

    function toHex(a: number) {
      return Math.round(Math.min(a, 1) * 255)
        .toString(16)
        .padStart(2, "0");
    }

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;
      ctx!.clearRect(0, 0, W, H);

      // Move
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDist) {
            const a = (1 - dist / connectDist) * 0.22;
            ctx!.save();
            ctx!.strokeStyle = `rgba(124,92,255,${a})`;
            ctx!.lineWidth   = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
            ctx!.restore();
          }
        }
      }

      // Particles / symbols
      for (const p of particles) {
        if (p.symbol) {
          ctx!.save();
          ctx!.globalAlpha  = p.alpha;
          ctx!.font         = "bold 10px 'JetBrains Mono', monospace";
          ctx!.textAlign    = "center";
          ctx!.textBaseline = "middle";
          ctx!.fillStyle    = p.color;
          ctx!.fillText(p.symbol, p.x, p.y);
          ctx!.restore();
        } else {
          // Soft glow halo
          const g = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
          g.addColorStop(0, p.color + toHex(p.alpha * 0.6));
          g.addColorStop(1, "transparent");
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
          ctx!.fill();

          // Core dot
          ctx!.fillStyle = p.color + toHex(p.alpha);
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    }

    // Pause RAF when section scrolls out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!raf) draw();
        } else {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0.05 }
    );

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [connectDist]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
