export const experience = [
  {
    company: "Figgy",
    org: null as string | null,
    location: "Remote",
    role: "Software Developer Consultant",
    period: "Apr 2025 — Present",
    bullets: [
      "Implemented real-time booking workflows and role-based access control using Supabase authentication and JWT validation to support secure multi-user scheduling.",
      "Delivered mobile-responsive, WCAG-compliant UI components to improve usability for small-business operators and neurodiverse users.",
    ],
  },
  {
    company: "Ellumen",
    org: "Contracted by Dept. of Homeland Security" as string | null,
    location: "Remote",
    role: "Software Developer",
    period: "Jan 2022 — Mar 2025",
    bullets: [
      "Shipped 190+ production tasks within one year across 8 federal DHS applications, with 60%+ rated Exceptional, via GitLab/Jenkins CI/CD pipelines with rollback and disaster-recovery failover.",
      "Migrated a legacy static codebase to React with TypeScript and architected a USWDS-based component library used across 8+ federal applications, completing 133 stories across 2 years with full ADA and WCAG compliance.",
      "Shipped 190+ production tasks in one year for a high-priority legacy Angular application via GitLab and Jenkins CI/CD pipelines, maintaining rollback and disaster-recovery failover across all deployments.",
      "Architected a USWDS-based component library ensuring ADA and WCAG compliance across 8+ federal applications, standardizing UI patterns and enabling compliance-ready feature development.",
    ],
  },
  {
    company: "frog",
    org: null as string | null,
    location: "Remote · Austin, TX",
    role: "Design Technologist Intern",
    period: "Jan 2021 — Apr 2021",
    bullets: [
      "Built a modular React + TypeScript component system in 3 months, improving design-to-engineering handoff consistency across all user flows for a financial-wellness platform.",
      "Developed responsive Material UI layouts from Figma specs, creating reusable templates that streamlined handoff between design and engineering.",
      "Integrated AWS Cognito with GraphQL/Prisma authentication flows, implementing JWT validation and secure session handling to enforce role-based access control.",
    ],
  },
] as const;

export const experienceXr = [
  {
    company: "Ellumen",
    org: "Contracted by Dept. of Homeland Security" as string | null,
    location: "Remote · Washington D.C.",
    role: "Software Developer — XR",
    period: "Jan 2022 — Mar 2025",
    bullets: [
      "Led end-to-end XR engineering across 12 sprints on a classified HoloLens inspection prototype for DHS — sole assignee across 32+ Jira tickets spanning computer-vision pipelines, 3D spatial manipulation, AI/ML model training, and real-time AR UI — culminating in a full recorded HoloLens demo delivered to federal stakeholders.",
      "Built real-time trademark/logo identification in AR using Python (OpenCV) HAAR classifiers and AWS SageMaker models deployed via REST APIs on Azure, including image-annotation pipelines, S3 integration, 50%-confidence match filtering, and a live AI toggle within the HoloLens UI.",
      "Engineered the HoloLens frontend in Unity (C#): 3D object-scan workflows, results and failure panels, heads-up display research, minimizable world-view objects, and a Figma-to-Unity bridge for design-to-AR handoff.",
      "Researched and executed a backend migration from Azure to AWS for the AI/ML system, leading model-training optimization to improve image-prediction accuracy.",
    ],
  },
  {
    company: "frog",
    org: null as string | null,
    location: "Remote · Austin, TX",
    role: "Design Technologist Intern — XR",
    period: "Jan 2021 — Apr 2021",
    bullets: [
      "Prototyped an AR project in Adobe Aero showcasing the people of frog, visualized as tarot cards to illustrate their individual biographies and contributions; presented to frog leadership for internship evaluation.",
    ],
  },
  {
    company: "SpaceCRAFT",
    org: "Under the advisement of NASA · Texas A&M University" as string | null,
    location: "College Station, TX",
    role: "Undergraduate Research Student",
    period: "Sep 2016 — May 2019",
    bullets: [
      "Visualized extraterrestrial environments — simulating the Moon and Mars surfaces — in VR to enable cost-efficient testing and mitigate errors before fabrication; built in Unreal Engine (C++) with Blender 3D assets.",
      "Designed and implemented a modular VR keyboard asset in Unreal Engine for UI/UX operations across SpaceCRAFT simulations.",
      "Implemented Python + TensorFlow CNN-based object detection for a rover VR simulation to identify geological obstacles modeled on the Gale crater.",
    ],
  },
] as const;

export const projects = [
  {
    name: "IcedMangoes",
    kind: "Full-stack commerce",
    description:
      "Full-stack artist commerce platform template with Stripe Checkout, webhook validation, and Docker-containerized services. Service-layer architecture separates business logic from presentation; deployed via Vercel with environment-scoped config.",
    stack: "Next.js · Django · Supabase · Stripe · Tailwind · Docker",
    href: "https://github.com/esther-joseph/icedmangoes",
  },
  {
    name: "City in a Snowglobe",
    kind: "AR weather app · in review on Google Play",
    description:
      "Real-time AR snowglobe weather app rendering dynamic 3D environmental simulations from live forecast APIs, with optimized render loops for smooth mobile performance. Currently under review by the Google Play Store.",
    stack: "React · TypeScript · Three.js · WebXR · REST",
    href: "https://github.com/esther-joseph/city-in-a-snowglobe",
  },
] as const;

export const devpostProjects = [
  {
    name: "Meditation VR for Veterans with PTSD",
    badge: null as string | null,
    stack: "Unity · C# · HTC Vive · Quest 2 · LeapMotion",
    description:
      "A VR app for mental health and relaxation, designed as an accessible, calming environment for emotional regulation and stress relief.",
  },
  {
    name: "DivHack",
    badge: "$300 Winner" as string | null,
    stack: "Unity · C# · Google VR Cardboard",
    description:
      "Award-winning VR Cardboard demo visualizing a garden space to raise awareness for diversity at Texas A&M.",
  },
  {
    name: "His Name is Turon",
    badge: "48hr jam" as string | null,
    stack: "Unity · C# · Oculus Quest · Quill",
    description:
      "Chillenium game jam: a VR game about a lost robot searching for its creator, built from scratch in 48 hours with 3D assets authored in Quill.",
  },
  {
    name: "Pith",
    badge: null as string | null,
    stack: "HTC Vive · Unity · C# · Substance Painter · Maya",
    description:
      "VR procedural-dungeon game with a full gameplay loop and original 3D assets painted in Substance Painter.",
  },
  {
    name: "Healthcare Accessibility VR",
    badge: null as string | null,
    stack: "Unity · C# · Google Cardboard",
    description:
      "VR application improving access for hospitalized patients to view live sports, applying task analysis and inclusive XR design.",
  },
  {
    name: "Aggies Invent VR/AR",
    badge: null as string | null,
    stack: "HoloLens · Cloud Networking · IoT",
    description:
      "Envisioned an AR cloud-networked IoT interface for cross-command communication in manufacturing environments.",
  },
] as const;

export const devpostUrl = "https://devpost.com/esther8joseph" as const;

export const skills = [
  {
    title: "Frontend",
    items: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind", "CSS (Flexbox, Grid)", "Material UI", "USWDS", "Figma", "HTML/CSS"],
    sub: null,
  },
  {
    title: "Backend & DevOps",
    items: ["Django", "Node.js", "GraphQL", "Supabase", "Prisma", "AWS (Cognito, SageMaker, S3, EC2)", "Azure", "GitHub / GitLab", "Jenkins", "Docker", "Vercel"],
    sub: null,
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "C++", "Java", "SQL"],
    sub: null,
  },
  {
    title: "Compliance & process",
    items: ["WCAG / ADA", "Section 508", "USWDS", "Agile", "Jira", "Confluence", "Azure DevOps", "Technical documentation"],
    sub: null,
  },
  {
    title: "XR & Immersive",
    items: null,
    sub: [
      { label: "Platforms", items: ["HoloLens", "Oculus / Quest", "HTC Vive", "Google Cardboard", "WebXR"] },
      { label: "Engines & tools", items: ["Unity", "Unreal Engine", "Three.js", "Blender", "Quill", "Substance Painter", "Maya", "Adobe Aero"] },
      { label: "AI & computer vision", items: ["OpenCV", "TensorFlow (CNNs)", "AWS SageMaker", "Azure Cognitive Services", "Real-time rendering"] },
    ],
  },
] as const;

export const contact = {
  name: "Esther Joseph",
  location: "Dallas, TX",
  email: "esther8joseph@gmail.com",
  phone: "(469) 534-9668",
  linkedin: "https://linkedin.com/in/esther-joseph-dev",
  github: "https://github.com/esther-joseph",
  devpost: "https://devpost.com/esther8joseph",
} as const;

export const education = {
  school: "Texas A&M University",
  location: "College Station, TX",
  degree: "B.S. in Computer Science",
  period: "2015 — 2020",
  coursework: "Virtual Reality · Human-Computer Interaction · Machine Learning · Artificial Intelligence · Software Engineering · Data Structures & Algorithms · Undergraduate Engineering Research",
  activities: "Member of TAMU VR (Virtual & Augmented Reality) · Undergraduate research student under a former NASA astronaut on SpaceCRAFT.",
} as const;
