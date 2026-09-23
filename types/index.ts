export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  date: string;
  role: string;
  org: string;
  points: string[];
}

export type ProjectCategory = "enterprise" | "ai" | "tooling";

export interface ProjectItem {
  title: string;
  tag: string;
  categoryLabel: string;
  category: ProjectCategory;
  description: string;
  role: string;
  tech: string;
  features: string[];
  contribution: string;
  highlights: string[];
  stack: string;
}

export interface AchievementItem {
  icon: string;
  title: string;
  description: string;
}

export interface JourneyStep {
  year: string;
  title: string;
  description: string;
}

export interface CertificationItem {
  icon: string;
  name: string;
  status: string;
}

export interface CodingProfileItem {
  short: string;
  name: string;
  url: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  target: number;
  label: string;
}

export interface CounterItem {
  target: number;
  label: string;
}
