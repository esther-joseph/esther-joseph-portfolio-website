export const experience = [
  {
    company: "Figgy",
    location: "Remote",
    role: "Software Developer Consultant",
    period: "April 2025 – Present",
    bullets: [
      "Implemented real-time booking workflows and role-based access control using Supabase authentication and JWT validation to support secure multi-user scheduling.",
      "Delivered mobile-responsive, accessible UI components to improve usability for small business operators and neuro-diverse users.",
    ],
  },
  {
    company: "Ellumen (Contracted by Department of Homeland Security)",
    location: "Remote",
    role: "Software Developer",
    period: "January 2022 – March 2025",
    bullets: [
      "Architected and implemented a reusable, accessible React component system using USWDS, standardizing UI patterns across multiple internal DHS applications used by federal operators and enabling consistent, compliance-ready feature development.",
      "Led a front-end refactor of a legacy Angular application, migrating to modern React patterns, integrating SonarQube for static analysis, and enforcing code quality gates and test coverage standards.",
      "Designed and automated CI/CD pipelines in GitLab and Jenkins with rollback strategies, enabling zero-downtime deployments and maintaining compliance in a federally regulated environment.",
      "Developed a Java-based data retrieval tool with PostgreSQL and Docker to generate audit-ready CSV reports, supporting compliance workflows and improving visibility into system data flows.",
    ],
  },
  {
    company: "frog",
    location: "Remote",
    role: "Design Technologist Intern",
    period: "January 2021 – April 2021",
    bullets: [
      "Built a modular TypeScript + React component system for a financial wellness platform, aligning UI behavior with design specifications and improving consistency across user flows.",
      "Developed responsive UI layouts using Material UI and Flexbox from Figma designs, creating reusable templates that streamlined handoff between design and engineering.",
      "Integrated AWS Cognito with GraphQL-based authentication flows, implementing JWT validation and secure session handling to enforce role-based access control.",
    ],
  },
] as const;

export const projects = [
  {
    name: "IcedMangoes",
    description:
      "Full-Stack Artist Commerce Platform. Architected and implemented a full-stack commerce platform supporting dynamic product listings and secure checkout flows; applied service-layer architecture to decouple business logic from presentation; integrated Stripe Checkout with webhook validation for transactional integrity; containerized services with Docker and deployed via Vercel with environment-scoped configuration.",
    stack: "Next.js • Django • Supabase • Stripe • Tailwind • Docker",
    href: "https://github.com/esther-joseph/icedmangoes",
  },
  {
    name: "City in a Snowglobe",
    description:
      "AR Weather App. Engineered an interactive AR weather application using Three.js and real-time forecast APIs to render dynamic 3D environmental simulations within a snowglobe interface; implemented optimized render loops and asynchronous data handling; structured responsive UI architecture to ensure smooth mobile performance and maintain rendering stability under asynchronous data updates.",
    stack: "React • TypeScript • Three.js • Vite • REST APIs",
    href: "https://github.com/esther-joseph/city-in-a-snowglobe",
  },
] as const;

export const skills = {
  frontend: [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "CSS (Flexbox, Grid)",
    "Material UI",
    "USWDS",
    "Figma",
  ],
  backendDevOps: [
    "Django",
    "Node.js",
    "GraphQL",
    "Supabase",
    "Prisma",
    "AWS (Cognito, S3, EC2)",
    "GitHub/GitLab",
    "Jenkins",
    "Docker",
    "Vercel",
  ],
  other: ["Python", "Java", "C++", "C#", "SQL"],
} as const;

export const summary =
  "Frontend-focused Full Stack Engineer specializing in secure, accessible web applications in regulated environments. Experienced in React, TypeScript, Django, and CI/CD automation with cloud-native deployments across AWS and Supabase ecosystems. Focused on scalable system design, performance optimization, and accessible interface engineering.";

export const contact = {
  name: "Esther Joseph",
  location: "Dallas, TX",
  email: "esther8joseph@gmail.com",
  phone: "(469) 534-9668",
  linkedin: "https://linkedin.com/in/esther-joseph-dev",
  github: "https://github.com/esther-joseph",
} as const;

export const education = {
  school: "Texas A&M University",
  location: "College Station, Texas",
  degree: "B.S. in Computer Science",
  period: "August 2015 – May 2020",
} as const;
