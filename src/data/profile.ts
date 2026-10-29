// Everything written on the site lives in this file.
// Change the text here and the page updates — no need to touch the components.
// Lines marked TODO are placeholders waiting for your real info.

export const profile = {
  name: "wagamela",
  githubUser: "wagamela",
  tagline: "Student developer who likes building things and learning.",
  location: "Türkiye",
  status: "Studying IT at OIBMTAL High School",
  bio: [
    "Hi, I'm Emir. I'm a student in the IT class of a vocational high school, and I spend most of my free time developing small projects.",
    "I like to learn about new technologies and how to apply them in creative ways. I mostly like to work on frontend development, but I also enjoy learning about backend and game development.",
  ],
};

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
  },
  { label: "X", href: "https://x.com/wagamelaa", icon: "x" },
  {
    label: "Steam",
    href: "https://steamcommunity.com/id/wagamela/",
    icon: "steam",
  },
  { label: "itch.io", href: "https://wagamela.itch.io/", icon: "itch" },
  { label: "Email", href: "mailto:wagamela.dev@gmail.com", icon: "email" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  href?: string;
  logo?: string;
  description: string;
};

// Newest first.
export const experience: Experience[] = [
  {
    company: "Raynet",
    href: "https://raynet-inc.com",
    logo: "RaynetLogo.svg",
    role: "Software Development Intern",
    period: "Apr - July 2026 · 3 months",
    description:
      "Three-month internship via Erasmus+ project. My first experience in a professional development environment.",
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  status: "current" | "past";
  details?: string[];
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: "This site. A simple portfolio site built with Astro.",
    tags: ["Astro", "TypeScript", "CSS"],
    href: "https://github.com/wagamela/wagamela.github.io",
    status: "current",
    image: "portfolio.png",
    details: [
      "This is a simple portfolio site I built to showcase my work, skills and interests to people.", // TODO
    ],
  },
  {
    name: "Who's With Me",
    description:
      "Who's With Me is a desktop game that developed with Unity for Egitijam26.",
    tags: ["Unity", "C#", "Game Development"],
    href: "https://wagamela.itch.io/whos-with-me",
    status: "past",
    image: "whos-with-me.png",
    imageAlt: "A blue and a red character facing each other under a green swirling portal",
    details: [
      "Who's With Me is a game that players are trying to control two different characters that are in the same universe but not in the same reality.",
    ],
  },
  {
    name: "Teknofest Efficiency Challenge 2025 - AKS",
    description:
      "I have participated in the Teknofest Efficiency Challenge 2025 as part of the Bolat team with the responsibilty of developing the AKS (Vehicle Control System) software.", // TODO
    tags: ["Electronics", "Software Development", "Embedded Systems"],
    status: "past",
    image: "aks.png",
    details: [
      "I contributed my team as the responsible developer for the AKS (Vehicle Control System) software. AKS is basically a embedded system for measuring various data from vehicle and manage the control of the vehicle. I developed the software using C++ and Arduino IDE. I also designed display for the vehicle with Nextion.",
    ],
  },
];

// Extra sections on the About page, below the short bio. Each string in "paragraphs" is its own paragraph.
export const aboutSections: { title: string; paragraphs: string[] }[] = [
  {
    title: "How I got into coding", // TODO
    paragraphs: ["Your story here."], // TODO
  },
  {
    title: "What I'm learning now", // TODO
    paragraphs: ["Tools, languages or topics you're working through."], // TODO
  },
];

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
