"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { PROJECTS } from "@/constants/data";
import { ProjectCategory } from "@/types";

const FILTERS: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All",        value: "all" },
  { label: "Enterprise", value: "enterprise" },
  { label: "AI",         value: "ai" },
  { label: "Tooling",    value: "tooling" },
];

const CATEGORY_META: Record<string, { bar: string; badge: string; glow: string }> = {
  enterprise: {
    bar:   "card-top-bar-enterprise",
    badge: "border-brand-purple/40 bg-brand-purple/10 text-brand-purple",
    glow:  "hover:shadow-[0_8px_40px_-12px_rgba(124,92,255,0.35)]",
  },
  ai: {
    bar:   "card-top-bar-ai",
    badge: "border-brand-cyan/40   bg-brand-cyan/10   text-brand-cyan",
    glow:  "hover:shadow-[0_8px_40px_-12px_rgba(34,211,238,0.35)]",
  },
  tooling: {
    bar:   "card-top-bar-tooling",
    badge: "border-brand-blue/40   bg-brand-blue/10   text-brand-blue",
    glow:  "hover:shadow-[0_8px_40px_-12px_rgba(61,90,254,0.35)]",
  },
};

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      {/* Dynamic background */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-brand-blue/6 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/3 h-96 w-96 rounded-full bg-brand-purple/6 blur-[120px]" />
      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-10 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            PROJECTS
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Systems I&apos;ve built and shipped.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Enterprise applications, AI-powered reporting, and automation
            tooling — filter by category below.
          </p>
        </Reveal>

        {/* Filter pills */}
        <Reveal className="mb-9 flex flex-wrap gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter === f.value
                  ? "bg-brand-gradient text-white shadow-[0_4px_20px_-4px_rgba(124,92,255,0.5)]"
                  : "border border-border text-muted hover:border-brand-purple hover:text-text"
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {visible.map((project, i) => {
            const meta = CATEGORY_META[project.category] ?? CATEGORY_META.tooling;
            return (
              <Reveal delay={i * 0.05} key={project.title}>
                <div
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-border/80 ${meta.glow}`}
                >
                  {/* Gradient top bar */}
                  <div className={`h-1 w-full ${meta.bar}`} />

                  <div className="flex flex-1 flex-col p-7">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold leading-snug">
                        {project.title}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${meta.badge}`}
                      >
                        {project.tag}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    {/* Feature chips */}
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-md bg-surface2 px-2.5 py-1 text-xs text-text"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Stack footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                      <span className="font-mono text-xs text-brand-purple">
                        {project.stack}
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
