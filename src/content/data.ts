// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Mounajeyaseeli J",
  shortName: "Mouna",
  role: "Full Stack Engineer",
  tagline: "I build scalable web products, from enterprise banking platforms to e-commerce stores.",
  summary:
    "Full Stack Engineer with 5.5+ years of experience building web products across banking, pensions, wealth management, e-commerce, lending and health. I work across the stack: Angular, React and Next.js on the front end, NestJS, Prisma and PostgreSQL/MySQL on the back end, and Docker, Kubernetes, AWS and Azure for shipping it. I enjoy turning complex workflows into clean, configurable products, whatever the domain.",
  location: "Chennai, India",
  email: "mounajeya@gmail.com",
  linkedin: "https://www.linkedin.com/in/mounajeyaseeli",
  github: "https://github.com/Mouna2313",
  site: "https://mounajeyaseeli.vercel.app",
  // Google Search Console "HTML tag" verification code (the content="..." value). Leave "" until you have it.
  googleVerification: "",
  // Built from resume/resume.html with `npm run resume`. Set to "" to hide the download buttons.
  resume: "/resume.pdf",
  photo: "/mouna.webp",
  portrait: "/mouna-portrait.webp",
};

export const stats = [
  { value: "5.5+", label: "years building products" },
  { value: "15+", label: "projects across 3 companies" },
  { value: "8+", label: "industries, from banking to e-commerce" },
];

export const clients = ["Kotak Mahindra Bank", "ICICI Bank", "SBI Pension Funds", "CAMS"];

// Industries worked in, shown in the hero and About section.
export const domains = [
  "Banking & Custody",
  "Pensions (NPS)",
  "Wealth & Asset Management",
  "Capital Markets Compliance",
  "Lending",
  "E-commerce",
  "Email Marketing",
  "Health & Wellness",
];

export type Project = {
  slug: string;
  name: string;
  client?: string;
  domain: string;
  summary: string;
  problem: string;
  features: string[];
  stack: string[];
  // Layers of the architecture, top to bottom.
  architecture: { label: string; items: string[] }[];
  links?: { label: string; href: string }[];
  personal?: boolean;
  // Defaults to Fintuple / Software Engineer when left out.
  company?: string;
  role?: string;
  accent: "rose" | "emerald" | "sky" | "violet" | "amber" | "pink" | "indigo";
  // Three short highlights shown on the card.
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "kotak-foreign-custody",
    accent: "rose",
    highlights: ["FPI onboarding with KYC & AML", "JSON-configured journeys", "Maker-checker approvals"],
    name: "Foreign Custody Onboarding",
    client: "Kotak Mahindra Bank",
    domain: "Banking · Custody",
    summary:
      "Client onboarding platform for Kotak's Foreign Custody business, taking Foreign Portfolio Investors (FPIs) from application to approval.",
    problem:
      "Onboarding a foreign investor means collecting documents for the investor and every related party, running KYC and AML checks, and getting maker-checker sign-off, across many teams and long email threads.",
    features: [
      "Configurable onboarding journeys: steps, forms and approvals defined as JSON, not code",
      "FPI and related-party profiles with KYC and AML checks",
      "Document upload, mapping and generated Word/PDF documents",
      "Maker-checker approvals and task lists for each role",
      "User access management with Keycloak / IDAM single sign-on",
      "Audit trails and admin activity reports for the bank's compliance teams",
    ],
    stack: ["NestJS", "Prisma", "MySQL (AWS RDS)", "Netflix Conductor", "Redis", "Next.js", "Material UI", "Keycloak", "Kubernetes", "AWS S3", "Fluent Bit"],
    architecture: [
      { label: "Frontend", items: ["Next.js portal", "Material UI", "Keycloak SSO"] },
      { label: "API", items: ["NestJS", "Journey & form engine", "RBAC"] },
      { label: "Workflows", items: ["Netflix Conductor", "Approval flows", "Email notifications"] },
      { label: "Data & infra", items: ["MySQL on RDS", "S3 documents", "Kubernetes", "Fluent Bit logs"] },
    ],
  },
  {
    slug: "watch-tower-360",
    accent: "emerald",
    highlights: ["SEBI PIT rule engine", "Live Account Aggregator trades", "Automatic violation alerts"],
    name: "Watch Tower 360",
    domain: "Capital markets · Compliance",
    summary:
      "SEBI insider-trading (PIT) compliance platform for asset management companies, used by employees, compliance officers and admins.",
    problem:
      "SEBI requires fund houses to pre-clear employee trades, enforce trading windows and catch violations. Done by spreadsheet and email, it is slow and easy to miss breaches.",
    features: [
      "Trade pre-clearance requests with two-level (R1/R2) approval chains",
      "Rule engine: trading windows, contra-trade, holding period and threshold rules",
      "Live trade data from India's Account Aggregator (AA) matched against approvals",
      "Automatic alerts for violations, unreported trades and unconfirmed approvals",
      "Multi-tenant: one platform, many AMCs, each with its own portals",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "NATS", "MinIO", "Next.js", "Tailwind CSS", "Radix UI", "Azure Pipelines"],
    architecture: [
      { label: "Frontend", items: ["DP portal", "Compliance officer portal", "Admin portal"] },
      { label: "API", items: ["NestJS", "Rule engine", "Alerts"] },
      { label: "Async", items: ["BullMQ jobs", "NATS events", "Scheduled checks"] },
      { label: "Data", items: ["PostgreSQL", "Account Aggregator feed", "MinIO"] },
    ],
  },
  {
    slug: "nivruti",
    accent: "sky",
    highlights: ["CKYC, DigiLocker & e-sign", "CRA registration & eNACH", "Ledger-based contributions"],
    name: "Nivruti",
    client: "SBI Pension Funds",
    domain: "Pensions · NPS",
    summary:
      "National Pension System (NPS) platform for SBI Pension Funds: onboarding, payments and contribution processing in one place.",
    problem:
      "NPS onboarding involves subscribers, corporates and their branches, agencies and agents, each with its own KYC, registration and payment rules, plus data exchange with the central record-keeping agencies.",
    features: [
      "Onboarding for subscribers, corporates, branches, agencies and agents",
      "CKYC, DigiLocker and Aadhaar e-sign verification",
      "Registration with the record-keeping agencies (Protean, KFintech)",
      "CAMSPay payments and eNACH mandates",
      "Contribution processing with a ledger, a rule engine and CRA data uploads",
      "Automated receipts and end-of-day emails",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Socket.IO", "MinIO", "Next.js", "Tailwind CSS", "Radix UI", "React Hook Form", "Zod", "Docker"],
    architecture: [
      { label: "Frontend", items: ["Next.js", "Role-based dashboards", "Dynamic forms"] },
      { label: "API", items: ["NestJS", "Rule engine", "Ledger"] },
      { label: "Integrations", items: ["CKYC", "DigiLocker", "e-sign", "Protean / KFintech", "CAMSPay"] },
      { label: "Data & infra", items: ["PostgreSQL", "BullMQ", "MinIO", "Docker + Nginx"] },
    ],
  },
  {
    slug: "wealthserv",
    accent: "violet",
    highlights: ["10-step investor journey", "Shared form engine", "Turborepo monorepo"],
    name: "WealthServ 2.0",
    client: "CAMS",
    domain: "Wealth · AIF / PMS",
    summary:
      "Multi-tenant investor onboarding platform for AIFs and PMS, used by distributors, fund houses and reviewers.",
    problem:
      "Each fund house has its own forms and review rules for onboarding investors, and every case has to end in a clean submission to the registrar (RTA).",
    features: [
      "Ten-step onboarding: KYC, bank verification, nominees, scheme, review, contract, e-sign, RTA submission",
      "Form engine shared between backend and frontend",
      "Separate apps for distributors and AMCs, reviewers and platform admins",
      "Virus scanning, audit trail and full observability",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "NATS", "MinIO", "ClamAV", "Next.js", "Zustand", "Zod", "Turborepo", "Grafana"],
    architecture: [
      { label: "Frontend", items: ["Web app", "Reviews portal", "Admin console"] },
      { label: "Shared", items: ["Form engine", "Contracts (Zod)", "Design system"] },
      { label: "API", items: ["NestJS modules", "State machine", "Outbox events"] },
      { label: "Data & infra", items: ["PostgreSQL", "BullMQ", "MinIO", "Prometheus + Grafana"] },
    ],
  },
  {
    slug: "shopify-accessibility",
    accent: "pink",
    highlights: ["Custom Shopify themes", "WCAG 2.1 accessibility fixes", "Email templates & admin dashboards"],
    name: "Shopify Storefronts & Accessibility",
    domain: "E-commerce · Accessibility",
    company: "RRD GO Creative",
    role: "HTML Developer",
    summary:
      "Custom Shopify themes for e-commerce brands, plus accessibility development and fixes so every shopper can use the store.",
    problem:
      "Brands needed storefronts that matched their designs pixel for pixel and worked for everyone, including people who use a keyboard or screen reader.",
    features: [
      "Custom Shopify themes built from design files, with Liquid sections and theme settings",
      "Accessibility development and fixes to WCAG 2.1: semantic markup, ARIA, keyboard navigation, focus and colour contrast",
      "Responsive, cross-browser layouts that stay pixel-perfect on every screen",
      "Email templates that render consistently across mail clients",
      "Angular admin dashboards",
    ],
    stack: ["Shopify", "Liquid", "HTML5", "CSS3 / SCSS", "JavaScript", "WCAG 2.1", "Angular"],
    architecture: [
      { label: "Storefront", items: ["Shopify theme", "Liquid sections"] },
      { label: "UI", items: ["HTML5", "SCSS", "JavaScript"] },
      { label: "Quality", items: ["WCAG 2.1 checks", "Keyboard & screen reader", "Cross-browser QA"] },
    ],
  },
  {
    slug: "haso-client-projects",
    accent: "indigo",
    highlights: ["8+ client projects", "Loan management & admin dashboards", "E-commerce apps"],
    name: "Client Projects",
    domain: "Lending · E-commerce · Business apps",
    company: "Haso Technology",
    role: "Front End Developer",
    summary:
      "8+ projects for clients across lending, e-commerce and business operations, from loan management and admin dashboards to online stores.",
    problem:
      "Small and growing businesses needed web apps built quickly, each with its own workflows and integrations.",
    features: [
      "Loan management app in Angular",
      "Admin dashboards for managing users, orders and content",
      "E-commerce apps connected to WooCommerce",
      "Front ends integrated with REST APIs",
    ],
    stack: ["Angular", "Next.js", "TypeScript", "Ionic", "WooCommerce", "REST APIs", "SCSS"],
    architecture: [
      { label: "Frontend", items: ["Angular", "Next.js", "Ionic"] },
      { label: "Integrations", items: ["REST APIs", "WooCommerce"] },
    ],
  },
  {
    slug: "daybook",
    accent: "amber",
    highlights: ["12 tracking sections", "Diet plan & nutrition totals", "Deployed and used daily"],
    name: "Daybook",
    domain: "Personal project · Health",
    personal: true,
    summary:
      "A private daily log for food, activity, sleep, self care, reading, medicines and body measurements, which I use every day.",
    problem:
      "I wanted one place to follow my diet plan and track my health, instead of notes spread across apps.",
    features: [
      "Daily log across 12 sections, from food and sleep to medicines and screen time",
      "Diet plan with calorie and protein totals, and a saved-foods list with one-tap logging",
      "Progress views and goals",
      "Secure sign-in, with each user's data kept separate",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL (Neon)", "JWT", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Docker", "Render"],
    architecture: [
      { label: "Frontend", items: ["Next.js", "TanStack Query"] },
      { label: "API", items: ["NestJS", "JWT auth"] },
      { label: "Data & hosting", items: ["PostgreSQL on Neon", "Docker on Render"] },
    ],
    // Add the live URL once confirmed, e.g. { label: "Live app", href: "https://..." }
    links: [],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Fintuple",
    location: "Chennai",
    period: "Apr 2024 – Present",
    points: [
      "Core contributor to Finwyze, a JSON-driven low-code platform where journeys, forms and approvals are configured, not coded.",
      "Built a reusable Angular component library and a central SCSS system for forms, tables, steppers and theming.",
      "Built multi-tenant access control: RBAC/ABAC, maker-checker approvals and white-labeling.",
      "Delivered client platforms for Kotak, ICICI, SBI Pension Funds and CAMS, with KYC, e-sign, payment and SMS/email integrations.",
    ],
  },
  {
    role: "HTML Developer",
    company: "RRD GO Creative",
    location: "Chennai",
    period: "Feb 2022 – Apr 2024",
    points: [
      "Built custom Shopify themes for e-commerce brands, from design files to live stores.",
      "Led accessibility development and fixes to WCAG 2.1: semantic markup, ARIA, keyboard navigation and contrast.",
      "Built responsive, pixel-perfect interfaces, cross-client email templates and Angular admin dashboards.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Haso Technology",
    location: "Madurai",
    period: "Mar 2021 – Feb 2022",
    points: [
      "Delivered 8+ client projects across web and mobile with Angular, Ionic and Next.js.",
      "Built Ionic Android and iOS apps, including WooCommerce, EV charging and video call apps.",
      "Built Angular apps for loan management, admin dashboards and field service.",
    ],
  },
];

export const skills = [
  { group: "Frontend", items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Material UI", "Radix UI", "Ionic"] },
  { group: "Backend", items: ["NestJS", "Node.js", "REST APIs", "Prisma ORM", "JWT / OAuth", "Keycloak SSO", "BullMQ", "Socket.IO"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "Redis", "MinIO / S3"] },
  { group: "DevOps", items: ["Docker", "Kubernetes", "Nginx", "AWS", "Azure Pipelines", "Jenkins", "GitHub", "Bitbucket"] },
  { group: "Platforms", items: ["Config-driven, low-code platforms", "JSON-driven forms", "Workflow engines (Netflix Conductor)", "Multi-tenant architecture", "RBAC / ABAC", "Accessibility-first UI (WCAG 2.1)"] },
];

export const education = [
  {
    title: "MBA (Online)",
    place: "Vellore Institute of Technology (VIT)",
    period: "2024 – Present",
    note: "Project: feasibility of a configurable, low-code SaaS platform for SMEs, based on a survey of 60 SME owners and managers in Tamil Nadu.",
  },
  {
    title: "BE, Computer Science & Engineering",
    place: "UCEN, Anna University, Nagercoil",
    period: "2017 – 2021",
    note: "CGPA 7.5 · Vice President of the department association, Captain of the college sports committee",
  },
];
