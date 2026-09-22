import {
  AchievementItem,
  CertificationItem,
  CodingProfileItem,
  CounterItem,
  ExperienceItem,
  JourneyStep,
  ProjectItem,
  ServiceItem,
  SkillCategory,
  StatItem,
  TestimonialItem,
} from "@/types";

export const SITE = {
  name: "Harendra Pratap Singh",
  title:
    "Senior .NET Full Stack Engineer | Backend Specialist | Technical Lead | AI Integration Engineer",
  location: "Indore, Madhya Pradesh, India",
  email: "harendra@appstean.com",
  phone: "+91 XXXXX XXXXX",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/harendra-pratap/",
};

export const TYPING_LINES = [
  "Backend Specialist · .NET / C# / SQL Server",
  "Technical Lead · Architecture & Mentoring",
  "AI Integration Engineer · LLMs, OCR, Reporting",
];

export const ABOUT_HIGHLIGHTS = [
  "Leading backend development and system architecture discussions",
  "Managing two live enterprise applications in production",
  "Delivering the organization's first AI feature integrations",
  "Mentoring junior developers and supporting clients directly",
];

export const ABOUT_COUNTERS: CounterItem[] = [
  { target: 3, label: "Years Experience" },
  { target: 20, label: "Enterprise Modules" },
  { target: 50, label: "REST APIs Built" },
  { target: 10, label: "SQL Optimizations" },
  { target: 2, label: "Live Projects Managed" },
  { target: 4, label: "AI Integrations Delivered" },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "C# / .NET Core", level: 95 },
      { name: "ASP.NET MVC / Web API", level: 92 },
      { name: "Entity Framework Core / LINQ", level: 90 },
      { name: "JWT Auth / Middleware / DI", level: 88 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular / TypeScript", level: 85 },
      { name: "Angular Material / DevExtreme", level: 80 },
      { name: "HTML5 / CSS3 / SCSS", level: 85 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL Server / T-SQL", level: 93 },
      { name: "Stored Procs / Views / Triggers", level: 90 },
      { name: "Query Optimization / Exec Plans", level: 88 },
      { name: "Deadlock Resolution", level: 82 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Azure App Service / IIS", level: 80 },
      { name: "Git / GitHub / Azure DevOps", level: 85 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "TFS", level: 70 },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "OpenAI / Azure OpenAI API", level: 82 },
      { name: "Prompt Engineering", level: 85 },
      { name: "OCR Integration", level: 78 },
      { name: "LLM Reporting Insights", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Visual Studio / VS Code", level: 95 },
      { name: "SSMS / Postman / Swagger", level: 90 },
      { name: "Figma / Jira", level: 70 },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: "DEC 2023 — PRESENT",
    role: "Software Developer",
    org: "Appstean Infotech Pvt. Ltd. · Indore, Madhya Pradesh, India",
    points: [
      "Develop and maintain enterprise SaaS applications used in production by multiple client organizations",
      "Design scalable REST APIs and lead migration of legacy .NET Framework APIs to .NET Core",
      "Optimize SQL Server queries and execution plans, measurably reducing API response times",
      "Take on team-lead responsibilities: technical guidance, code review, and mentoring for junior developers",
      "Own direct client technical support and production issue resolution",
      "Lead integration of AI features into reporting workflows and OCR-based data entry",
      "Handle production deployments, SAP integration work, authentication systems, and report development",
    ],
  },
  {
    date: "JUN 2023 — DEC 2023",
    role: "Software Developer Intern",
    org: "YPSILON IT Solution",
    points: [
      "Built features for a Hospital Management System using Java and SQL",
      "Worked across the stack on data modeling, business logic, and query writing",
      "Gained first production-adjacent experience before moving into a full backend role",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Sales Force Automation System",
    tag: "SFA",
    category: "enterprise",
    description:
      "An enterprise pharmaceutical field-sales application covering the full sales rep workflow — from attendance to expense reconciliation.",
    features: [
      "Attendance",
      "Tour Planning",
      "Expense Mgmt",
      "Stock Statement",
      "Doctor Visits",
      "Approvals",
      "Dashboards",
    ],
    stack: "Angular · .NET · SQL Server — owned complete backend module delivery",
  },
  {
    title: "HRMS System",
    tag: "HRMS",
    category: "enterprise",
    description:
      "A human resources management platform handling the employee lifecycle from onboarding through resignation.",
    features: [
      "Payroll",
      "Leave",
      "Loan",
      "Onboarding",
      "Resignation",
      "Approval Workflow",
      "Employee Dashboard",
    ],
    stack: "Angular · .NET · SQL Server",
  },
  {
    title: "AI Sales Insights",
    tag: "AI",
    category: "ai",
    description:
      "Integrated an LLM directly into the reporting system so users could upload or generate reports and receive analysis in plain language.",
    features: [
      "Sales Trends",
      "Region Analysis",
      "Doctor Performance",
      "Product Analysis",
      "Month Comparisons",
    ],
    stack: "OpenAI / Azure OpenAI · .NET · SQL Server",
  },
  {
    title: "OCR Stock Statement Automation",
    tag: "OCR",
    category: "ai",
    description:
      "Users upload a photo or scan of a stock statement; OCR extracts product names and quantities and auto-fills the digital form, removing manual entry.",
    features: ["OCR Extraction", "Auto-fill", "Validation"],
    stack: "Azure OpenAI / OCR · .NET",
  },
  {
    title: "Dynamic Reporting Engine",
    tag: "Tooling",
    category: "tooling",
    description:
      "A configurable reporting tool where users choose their own filters and columns; the backend builds the SQL dynamically and exports to PDF or Excel.",
    features: ["Dynamic Filters", "Dynamic SQL", "PDF Export", "Excel Export"],
    stack: ".NET · SQL Server",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { icon: "★", title: "Star Performer of the Year", description: "Recognized for consistent delivery and technical ownership — Appstean Infotech 2025." },
  { icon: "🏅", title: "Notable New Comer Award", description: "Awarded for exceptional ramp-up speed and early impact delivered in the first year — Appstean Infotech 2024." },
  { icon: "✓", title: "Multiple Client Appreciations", description: "Direct recognition from multiple client stakeholders for outstanding support, delivery, and communication." },
  { icon: "◆", title: "First AI Integration", description: "Delivered the organization's first production AI feature — LLM-powered sales reporting insights." },
  { icon: "⬡", title: "Multi-Project Ownership", description: "Managed two enterprise applications concurrently while leading feature delivery across both." },
  { icon: "⚡", title: "SQL Performance Optimization", description: "Measurably reduced API response times through advanced query and index tuning on SQL Server." },
  { icon: "▲", title: "Production Deployments", description: "Successfully owned and executed multiple live production releases with zero critical incidents." },
  { icon: "◎", title: "Mentored Junior Developers", description: "Guided newer engineers through onboarding, code review, and end-to-end feature delivery." },
  { icon: "■", title: "SAP Integration Success", description: "Delivered a successful SAP integration for an enterprise client within tight timelines." },
];

export const EXPERTISE_TOPICS = [
  "API Architecture",
  "Authentication",
  "Middleware Pipeline",
  "SQL Optimization",
  "Caching",
  "Logging",
  "Background Jobs",
  "Microservice-Ready Design",
  "SOLID Principles",
  "Clean Architecture",
  "Repository Pattern",
  "CQRS Basics",
];

export const JOURNEY: JourneyStep[] = [
  { year: "2020–2023", title: "BCA", description: "Maharishi Mahesh Yogi Vedic Vishwavidyalaya" },
  { year: "Jun–Dec 2023", title: "Internship", description: "Java, SQL, Hospital Management System @ YPSILON" },
  { year: "Dec 2023", title: "Software Developer", description: "Joined Appstean Infotech on .NET/Angular projects" },
  { year: "2024–2026", title: "MCA", description: "Chandigarh University, alongside full-time delivery work" },
  { year: "Ongoing", title: "Technical Lead Track", description: "Architecture ownership, mentoring, and AI integration" },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { icon: "☁", name: "Azure AZ-204", status: "In Progress" },
  { icon: "#", name: ".NET", status: "Coming Soon" },
  { icon: "▤", name: "SQL Server", status: "Coming Soon" },
  { icon: "✺", name: "Applied AI", status: "Coming Soon" },
  { icon: "▲", name: "Angular", status: "Coming Soon" },
  { icon: "☕", name: "Java Full Stack", status: "Completed" },
  { icon: "⚡", name: "AI Implementation Workshop", status: "Completed" },
];

export const CODING_PROFILES: CodingProfileItem[] = [
  { short: "GH", name: "GitHub", url: "https://github.com/" },
  { short: "in", name: "LinkedIn", url: "https://www.linkedin.com/in/harendra-pratap/" },
  { short: "LC", name: "LeetCode", url: "https://leetcode.com/" },
  { short: "HR", name: "HackerRank", url: "https://www.hackerrank.com/" },
  { short: "CC", name: "CodeChef", url: "https://www.codechef.com/" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Reliable under production pressure — when something broke, they were already halfway to the fix.",
    name: "[Manager Name]",
    role: "Engineering Manager, Appstean Infotech",
  },
  {
    quote:
      "Explained a complex integration in terms our non-technical team could actually act on.",
    name: "[Client Name]",
    role: "Client Stakeholder",
  },
  {
    quote:
      "Patient with questions and generous with context — made ramping up onto the codebase easy.",
    name: "[Team Member Name]",
    role: "Junior Developer, Appstean Infotech",
  },
];

export const SERVICES: ServiceItem[] = [
  { number: "01", title: "Backend Development", description: "Designing and building robust .NET backends for enterprise-scale applications." },
  { number: "02", title: "Full Stack Development", description: "End-to-end delivery across Angular frontends and .NET backends." },
  { number: "03", title: "API Development", description: "Scalable, well-documented REST APIs built for long-term maintainability." },
  { number: "04", title: "SQL Optimization", description: "Diagnosing and resolving performance bottlenecks in SQL Server at scale." },
  { number: "05", title: "AI Integration", description: "Bringing LLMs and OCR into existing business workflows and reporting." },
  { number: "06", title: "Technical Consultation", description: "Architecture reviews, code audits, and implementation guidance." },
];

export const STATS: StatItem[] = [
  { target: 15, label: "Technologies Worked With" },
  { target: 10, label: "Projects Completed" },
  { target: 20, label: "Modules Delivered" },
  { target: 8, label: "Developers Mentored" },
  { target: 500, label: "API Endpoints Built" },
  { target: 100, label: "Queries Optimized" },
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];
