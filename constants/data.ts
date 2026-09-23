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
  email: "jnvk.harendrasingh1951999@gmail.com",
  github: "https://github.com/ishu-dev7",
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
  { target: 3,   label: "Years Experience" },
  { target: 20,  label: "Enterprise Modules" },
  { target: 500, label: "REST APIs Built" },
  { target: 100, label: "SQL Optimizations" },
  { target: 4,   label: "Live Projects Managed" },
  { target: 4,   label: "AI Integrations Delivered" },
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
    categoryLabel: "Enterprise SaaS",
    category: "enterprise",
    description:
      "Enterprise pharmaceutical field-sales platform used by thousands of sales reps across multiple client organizations — covering the complete sales rep workflow.",
    role: "Backend Lead / Full Stack Developer",
    tech: ".NET Core, Angular 15, SQL Server, DevExtreme",
    features: ["Tour Planning", "Expense Management", "Reports", "Attendance", "Doctor Visits", "Approvals", "Stock Statement"],
    contribution: "Designed REST APIs, optimized SQL execution plans, led production deployments, integrated AI reporting.",
    highlights: [
      "Reduced API response times measurably by rewriting slow SQL queries and adding targeted indexes.",
      "Implemented AI-powered report summaries using Azure OpenAI — org's first LLM production feature.",
      "Led migration of legacy .NET Framework APIs to .NET Core across multiple modules.",
    ],
    stack: ".NET Core · Angular · SQL Server",
  },
  {
    title: "HRMS System",
    tag: "HRMS",
    categoryLabel: "Enterprise SaaS",
    category: "enterprise",
    description:
      "Full-cycle human resources management platform handling employee lifecycle from onboarding through payroll, leave, and resignation.",
    role: "Backend Developer / Full Stack",
    tech: ".NET Core, Angular, SQL Server",
    features: ["Payroll", "Leave Management", "Loan", "Onboarding", "Resignation", "Approval Workflow", "Employee Dashboard"],
    contribution: "Payroll engine, multi-level approval workflows, employee self-service portal.",
    highlights: [
      "Built multi-tier approval workflow engine from scratch supporting configurable escalation rules.",
      "Designed payroll calculation module handling complex salary structures and deductions.",
      "Implemented employee self-service features reducing HR team manual workload.",
    ],
    stack: ".NET Core · Angular · SQL Server",
  },
  {
    title: "AI Sales Insights",
    tag: "AI",
    categoryLabel: "AI Feature",
    category: "ai",
    description:
      "Integrated an LLM directly into the reporting system — users generate reports and receive plain-language analysis of trends, patterns, and anomalies.",
    role: "AI Integration Lead",
    tech: "Azure OpenAI, .NET Core, SQL Server",
    features: ["Sales Trends", "Region Analysis", "Doctor Performance", "Product Analysis", "Month Comparisons"],
    contribution: "First AI integration at Appstean Infotech — LLM-powered pharmaceutical sales reporting.",
    highlights: [
      "Delivered the organization's first production AI feature, enabling natural-language sales analysis.",
      "Engineered prompt templates for context-aware LLM responses grounded in real sales data.",
      "Built API pipeline connecting .NET backend to Azure OpenAI with structured output parsing.",
    ],
    stack: "Azure OpenAI · .NET Core · SQL Server",
  },
  {
    title: "OCR Stock Statement Automation",
    tag: "OCR",
    categoryLabel: "AI Automation",
    category: "ai",
    description:
      "Upload a photo or scan of a stock statement; OCR extracts product names and quantities and auto-fills the form — eliminating manual data entry entirely.",
    role: "Backend Developer",
    tech: "Azure OpenAI Vision, .NET Core",
    features: ["Image Upload", "OCR Extraction", "Auto-fill", "Validation", "Error Handling"],
    contribution: "Built the OCR pipeline from image upload through extraction, validation, and form population.",
    highlights: [
      "Built end-to-end OCR pipeline for scanned and photographed stock statement extraction.",
      "Handled edge cases across varied document formats, handwriting, and image quality.",
      "Implemented validation layer to catch OCR misreads before writing to database.",
    ],
    stack: "Azure OpenAI · .NET Core",
  },
  {
    title: "Dynamic Reporting Engine",
    tag: "Tooling",
    categoryLabel: "Internal Tooling",
    category: "tooling",
    description:
      "Configurable reporting tool where users define their own filters and columns; the backend generates SQL dynamically and exports to PDF or Excel.",
    role: "Backend Developer / Tooling",
    tech: ".NET Core, SQL Server, Crystal Reports",
    features: ["Dynamic Filters", "Custom Columns", "Dynamic SQL", "PDF Export", "Excel Export"],
    contribution: "Designed dynamic SQL generator and export pipeline used across multiple enterprise modules.",
    highlights: [
      "Built a dynamic SQL generator supporting complex multi-table joins from user-selected configurations.",
      "Implemented PDF and Excel export with custom headers, formatting, and pagination.",
      "Enabled business users to build their own reports without developer involvement.",
    ],
    stack: ".NET Core · SQL Server",
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
  { icon: "☕", name: "Java Full Stack", status: "Completed" },
  { icon: "⚡", name: "AI Implementation Workshop", status: "Completed" },
  { icon: "🤖", name: "Azure AI-200", status: "In Progress" },
  { icon: "#", name: ".NET Core", status: "Planned" },
  { icon: "▤", name: "SQL Server", status: "Planned" },
  { icon: "✺", name: "Applied AI", status: "Planned" },
];

export const CODING_PROFILES: CodingProfileItem[] = [
  { short: "GH", name: "GitHub", url: "https://github.com/ishu-dev7" },
  { short: "in", name: "LinkedIn", url: "https://www.linkedin.com/in/harendra-pratap/" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Reliable under production pressure — when something broke, they were already halfway to the fix.",
    name: "Engineering Manager",
    role: "Appstean Infotech",
  },
  {
    quote:
      "Explained a complex integration in terms our non-technical team could actually act on.",
    name: "Client Stakeholder",
    role: "Pharmaceutical Client",
  },
  {
    quote:
      "Patient with questions and generous with context — made ramping up onto the codebase easy.",
    name: "Junior Developer",
    role: "Appstean Infotech",
  },
];

export const SERVICES: ServiceItem[] = [
  { number: "01", title: "Backend Engineering", description: "Building robust, scalable .NET backends for enterprise SaaS — APIs, auth, background jobs, and deployment." },
  { number: "02", title: "Full Stack Delivery", description: "End-to-end feature ownership across Angular frontends and .NET backends, from design to production." },
  { number: "03", title: "API Design", description: "RESTful API architecture that teams can consume confidently — versioned, documented, and built to last." },
  { number: "04", title: "SQL Performance", description: "Query tuning, index optimization, and deadlock resolution that measurably reduces response times." },
  { number: "05", title: "AI Integration", description: "Embedding LLMs and OCR into real business workflows — reporting, data entry, and insights." },
  { number: "06", title: "Technical Leadership", description: "Code reviews, architecture decisions, junior mentoring, and cross-team technical collaboration." },
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
