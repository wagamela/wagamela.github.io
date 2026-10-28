// Everything written on the site lives in this file.
// Change the text here and the page updates — no need to touch the components.
// Lines marked TODO are placeholders waiting for your real info.

export const profile = {
  name: "wagamela",
  githubUser: "wagamela",
  tagline: "Student developer who likes building things and learn.",
  location: "Türkiye",
  status: "Studying IT at OIBMTAL High School", // TODO
  // Your bio. Each string becomes its own paragraph.
  bio: [
    "Hi, I'm Emir. I'm a student in the IT class of a vocational high school, and I spend most of my free time developing small projects.",
    "I like to learn about new technologies and how to apply them in creative ways. I mostly like to work on frontend development, but I also enjoy learning about backend and game development.",
  ],
};

// icon: one of "github", "linkedin", "instagram", "x", "steam", "itch", "email" (pixel icons in SocialIcon.astro).
export const socials: { label: string; href: string; icon?: string }[] = [
  { label: "GitHub", href: "https://github.com/wagamela", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emir-akbulut-993564302/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/emirakblutt/",
    icon: "instagram",
  }, // TODO
  { label: "X", href: "https://x.com/wagamelaa", icon: "x" }, // TODO
  {
    label: "Steam",
    href: "https://steamcommunity.com/id/wagamela/",
    icon: "steam",
  }, // TODO
  { label: "itch.io", href: "https://wagamela.itch.io/", icon: "itch" }, // TODO
  { label: "Email", href: "mailto:wagamela.dev@gmail.com", icon: "email" }, // TODO
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  href?: string;
  // Logo file in /public, e.g. "RaynetLogo.svg". Shown in a frame beside the entry.
  logo?: string;
  description: string;
};

// Newest first.
export const experience: Experience[] = [
  {
    company: "Raynet",
    logo: "RaynetLogo.svg",
    role: "Software Development Intern",
    period: "Apr - July 2026 · 3 months", // TODO: e.g. "Jun – Aug 2025"
    description:
      "Three-month internship via Erasmus+ project. My first experience in a professional development environment.", // TODO
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  status: "current" | "past";
};

export const projects: Project[] = [
  {
    name: "Portfolio",
    description:
      "This site. Built with Astro, a pixel font and a homemade contribution graph.",
    tags: ["Astro", "TypeScript", "CSS"],
    href: "https://github.com/wagamela/wagamela.github.io",
    status: "current",
  },
  {
    name: "Project name", // TODO
    description: "One or two sentences about what it does and why you made it.", // TODO
    tags: ["Tag", "Tag"], // TODO
    href: "https://github.com/wagamela",
    status: "current",
  },
  {
    name: "Older project", // TODO
    description: "Something you built before. School projects count too.", // TODO
    tags: ["Tag"], // TODO
    status: "past",
  },
];

// Short words or phrases. Add an emoji if you like, or keep them plain.
export const interests: string[] = [
  "Web development",
  "Game development",
  "Open source",
  "Linux",
  "Gaming",
  "Football",
  "Basketball",
  "Speedcubing",
  "Electronics",
  "Jersey design",
];
