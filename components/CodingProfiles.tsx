import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { CODING_PROFILES } from "@/constants/data";

const PLATFORM_META: Record<string, { bg: string; text: string; border: string }> = {
  "GitHub":    { bg: "bg-[#161b22]",    text: "text-[#e6edf3]", border: "border-[#30363d]"  },
  "LinkedIn":  { bg: "bg-[#0a66c2]/15", text: "text-[#0a66c2]", border: "border-[#0a66c2]/30" },
  "LeetCode":  { bg: "bg-[#ffa116]/10", text: "text-[#ffa116]", border: "border-[#ffa116]/30" },
  "HackerRank":{ bg: "bg-[#2ec866]/10", text: "text-[#2ec866]", border: "border-[#2ec866]/30" },
  "CodeChef":  { bg: "bg-[#5b4638]/20", text: "text-[#c97d4e]", border: "border-[#c97d4e]/30" },
};

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="pt-28 pb-16">
      <div className="mx-auto max-w-wrap px-7">
        <Reveal className="mb-16 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            CODING PROFILES
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Find me elsewhere.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Where I solve problems, share code, and build in public.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CODING_PROFILES.map((p) => {
            const meta = PLATFORM_META[p.name] ?? {
              bg: "bg-surface2", text: "text-brand-cyan", border: "border-border",
            };
            return (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${meta.bg} ${meta.border}`}
              >
                {/* Short code / avatar */}
                <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl border font-mono text-xl font-bold ${meta.bg} ${meta.text} ${meta.border}`}>
                  {p.short}
                </div>
                <div className={`text-sm font-semibold ${meta.text}`}>{p.name}</div>
                <div className="mt-1 font-mono text-[10px] text-muted">Visit profile</div>

                {/* Arrow on hover */}
                <ArrowUpRight
                  size={14}
                  className={`absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100 ${meta.text}`}
                />
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
