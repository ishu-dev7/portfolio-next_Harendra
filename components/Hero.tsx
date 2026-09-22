"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { SITE, TYPING_LINES } from "@/constants/data";

const TECH_BADGES = [
  { label: ".NET / C#",   cls: "animate-float   -top-5  -left-6  rotate-[-8deg]",  color: "border-brand-purple/50 text-brand-purple" },
  { label: "SQL Server",  cls: "animate-float-2  top-10  -right-8 rotate-[6deg]",  color: "border-brand-cyan/50   text-brand-cyan" },
  { label: "Angular",     cls: "animate-float-3 bottom-24 -left-8  rotate-[5deg]",  color: "border-red-400/50      text-red-400" },
  { label: "Azure",       cls: "animate-float-4 bottom-10 -right-6 rotate-[-6deg]", color: "border-sky-400/50      text-sky-400" },
  { label: "AI / LLM",   cls: "animate-float-5  top-1/2  -right-10 rotate-[3deg]", color: "border-emerald-400/50  text-emerald-400" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_LINES[lineIndex];
    const speed = deleting ? 28 : 55;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setLineIndex((i) => (i + 1) % TYPING_LINES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, lineIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <ParticlesBackground />

      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -right-24 -top-32 z-0 h-[520px] w-[520px] rounded-full bg-brand-purple opacity-20 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 z-0 h-[420px] w-[420px] rounded-full bg-brand-cyan opacity-20 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue opacity-10 blur-[90px]" />

      {/* Dot grid overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 dot-grid opacity-40" />

      <div className="relative z-10 mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-7 md:grid-cols-[1.3fr_0.9fr]">
        {/* Left — text */}
        <div>
          {/* Available badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-1.5 text-sm text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
            Available for new opportunities
            <ArrowRight size={13} />
          </div>

          {/* Name */}
          <p className="mb-2 font-mono text-sm text-brand-cyan">Hi, I&apos;m</p>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="grad-text">Harendra</span> Pratap Singh
          </h1>

          {/* Typing line */}
          <div className="mt-4 flex min-h-[28px] items-center gap-2 font-mono text-sm text-brand-cyan md:text-base">
            <Sparkles size={14} className="shrink-0 opacity-70" />
            {text}
            <span className="typing-cursor" />
          </div>

          {/* Bio */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            Backend specialist and technical lead with ~3 years designing REST
            APIs, optimizing SQL Server at production scale, and integrating
            AI into business reporting — currently building enterprise SaaS at{" "}
            <span className="text-text font-medium">Appstean Infotech</span>.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="/HARENDRA_Updated_Resume.pdf"
              download="Harendra_Pratap_Singh_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.65)] transition-transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-[10px] border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-brand-purple hover:bg-brand-purple/5"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="rounded-[10px] border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-brand-cyan hover:bg-brand-cyan/5"
            >
              View Projects
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border text-muted transition-all hover:border-brand-cyan hover:bg-brand-cyan/8 hover:text-brand-cyan"
            >
              <Github size={18} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border text-muted transition-all hover:border-brand-cyan hover:bg-brand-cyan/8 hover:text-brand-cyan"
            >
              <Linkedin size={18} />
            </a>
            <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-border to-transparent" />
            <span className="font-mono text-xs text-muted">{SITE.email}</span>
          </div>
        </div>

        {/* Right — photo + floating badges */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Spinning decorative ring */}
            <div className="pointer-events-none absolute -inset-4 rounded-[36px] border border-dashed border-brand-purple/25 animate-spin-slow" />
            <div className="pointer-events-none absolute -inset-8 rounded-[44px] border border-dashed border-brand-cyan/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "18s" }} />

            {/* Profile image */}
            <div className="relative h-[360px] w-[300px] overflow-hidden rounded-3xl border border-white/10 glow-purple">
              <Image
                src="/Profile.jpeg"
                alt="Harendra Pratap Singh"
                fill
                priority
                className="object-cover object-top"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0b12]/60 to-transparent" />
            </div>

            {/* Floating tech badges */}
            {TECH_BADGES.map((b) => (
              <div
                key={b.label}
                className={`absolute ${b.cls} rounded-full border bg-bg/80 px-3 py-1.5 font-mono text-[11px] font-medium backdrop-blur-sm ${b.color}`}
              >
                {b.label}
              </div>
            ))}

            {/* Star performer badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-400 whitespace-nowrap backdrop-blur-sm">
              ★ Star Performer 2025
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs text-muted">
        <span>SCROLL</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
