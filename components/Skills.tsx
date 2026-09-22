"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Server, Monitor, Database, Cloud, Brain, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import { SKILLS } from "@/constants/data";
import { SkillItem } from "@/types";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Backend":       <Server  size={16} />,
  "Frontend":      <Monitor size={16} />,
  "Database":      <Database size={16} />,
  "Cloud & DevOps":<Cloud   size={16} />,
  "AI":            <Brain   size={16} />,
  "Tools":         <Wrench  size={16} />,
};

const CATEGORY_COLORS: Record<string, string> = {
  "Backend":        "text-brand-purple bg-brand-purple/10 border-brand-purple/20",
  "Frontend":       "text-brand-cyan   bg-brand-cyan/10   border-brand-cyan/20",
  "Database":       "text-sky-400      bg-sky-400/10      border-sky-400/20",
  "Cloud & DevOps": "text-blue-400     bg-blue-400/10     border-blue-400/20",
  "AI":             "text-emerald-400  bg-emerald-400/10  border-emerald-400/20",
  "Tools":          "text-orange-400   bg-orange-400/10   border-orange-400/20",
};

function SkillBar({ skill }: { skill: SkillItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="mb-3.5">
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="text-text">{skill.name}</span>
        <span className="font-mono text-brand-cyan">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface2">
        <div
          className="relative h-full rounded-full bg-brand-gradient transition-[width] duration-1000 ease-out"
          style={{ width: inView ? `${skill.level}%` : "0%" }}
        >
          {/* Shimmer shine on the bar */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      {/* Dynamic background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-brand-purple/8 blur-[110px]" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-brand-cyan/6 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-16 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            SKILLS
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            A full-stack toolkit, weighted toward the backend.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Categorized by where I spend my time — backend and data first,
            frontend and cloud close behind.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, i) => {
            const iconColor = CATEGORY_COLORS[category.title] ?? "text-brand-purple bg-brand-purple/10 border-brand-purple/20";
            return (
              <Reveal delay={i * 0.06} key={category.title}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-[0_8px_40px_-12px_rgba(124,92,255,0.2)]">
                  {/* Category header */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${iconColor}`}>
                      {CATEGORY_ICONS[category.title]}
                    </div>
                    <h4 className="text-sm font-semibold">{category.title}</h4>
                    <span className="ml-auto font-mono text-[10px] text-muted">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {category.skills.map((skill) => (
                    <SkillBar skill={skill} key={skill.name} />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
