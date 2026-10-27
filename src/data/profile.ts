// Everything written on the site lives in this file.
// Change the text here and the page updates — no need to touch the components.
// Lines marked TODO are placeholders waiting for your real info.

export const profile = {
  name: "wagamela",
  githubUser: "wagamela",
  // One short line under your name.
  tagline: "Student developer who likes building things for the web.", // TODO
  location: "Türkiye", // TODO
  status: "Studying IT at a vocational high school", // TODO
  // Your bio. Each string becomes its own paragraph.
  bio: [
    "Hi, I'm Emir. I'm a student in the IT class of a vocational high school, and I spend most of my free time writing code.", // TODO
    "I like turning small ideas into working projects, learning how things work under the hood, and sharing what I build on GitHub.", // TODO
  ],
};

export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/wagamela" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-name" }, // TODO
  { label: "X", href: "https://x.com/your-name" }, // TODO
  { label: "Email", href: "mailto:you@example.com" }, // TODO
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  href?: string;
  description: string;
};

// Newest first.
export const experience: Experience[] = [
  {
    company: "Raynet",
    role: "Software Development Intern",
    period: "2025 · 3 months", // TODO: e.g. "Jun – Aug 2025"
    description:
      "Three-month internship. Write a sentence or two about what you worked on and what you learned.", // TODO
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
  "Web development", // TODO
  "Open source", // TODO
  "Linux", // TODO
  "Gaming", // TODO
  "Music", // TODO
];
