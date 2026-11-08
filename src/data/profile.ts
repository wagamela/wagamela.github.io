// Everything written on the site lives in this file.
// Change the text here and the page updates — no need to touch the components.
// Lines marked TODO are placeholders waiting for your real info.
// Text shown to visitors has an English (en) and a Turkish (tr) version; anything that reads
// the same in both languages can stay a plain string.

import type { Lang, Text } from "../i18n";

export const profile = {
  name: "wagamela",
  githubUser: "wagamela",
  tagline: {
    en: "Student developer who likes building things and learning.",
    tr: "Bir şeyler üretmeyi ve öğrenmeyi seven öğrenci geliştirici.",
  } as Text,
  location: "Türkiye",
  status: {
    en: "Studying IT at OIBMTAL High School",
    tr: "OIBMTAL'de Bilişim Teknolojileri öğrencisi",
  } as Text,
  bio: {
    en: [
      "Hi, I'm Emir. I'm a student in the IT class of a vocational high school, and I spend most of my free time developing small projects.",
      "I like to learn about new technologies and how to apply them in creative ways. I mostly like to work on frontend development, but I also enjoy learning about backend and game development.",
    ],
    tr: [
      "Merhaba, ben Emir. Bir meslek lisesinin bilişim bölümünde okuyorum ve boş zamanımın çoğunu küçük projeler geliştirerek geçiriyorum.",
      "Yeni teknolojileri ve bunları yaratıcı şekillerde nasıl kullanabileceğimi öğrenmeyi seviyorum. En çok frontend geliştirme üzerinde çalışıyorum ama backend ve oyun geliştirme öğrenmekten de keyif alıyorum.",
    ],
  } as Record<Lang, string[]>,
};

export const socials: { label: string | Text; href: string; icon?: string }[] = [
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
  { label: { en: "Email", tr: "E-posta" }, href: "mailto:wagamela.dev@gmail.com", icon: "email" },
];

export type Experience = {
  company: string;
  role: Text;
  period: Text;
  href?: string;
  logo?: string;
  description: Text;
};

// Newest first.
export const experience: Experience[] = [
  {
    company: "Raynet",
    href: "https://raynet-inc.com",
    logo: "RaynetLogo.svg",
    role: { en: "Software Development Intern", tr: "Yazılım Geliştirme Stajyeri" },
    period: { en: "Apr - July 2026 · 3 months", tr: "Nisan - Temmuz 2026 · 3 ay" },
    description: {
      en: "Three-month internship via Erasmus+ project. My first experience in a professional development environment.",
      tr: "Erasmus+ projesi kapsamında üç aylık staj. Profesyonel bir geliştirme ortamındaki ilk deneyimim.",
    },
  },
];

export type Project = {
  name: string | Text;
  description: Text;
  tags: (string | Text)[];
  href?: string;
  status: "current" | "past";
  details?: Record<Lang, string[]>;
  image?: string;
  imageAlt?: Text;
};

export const projects: Project[] = [
  {
    name: { en: "Portfolio", tr: "Portfolyo" },
    description: {
      en: "This site. A simple portfolio site built with Astro.",
      tr: "Bu site. Astro ile yapılmış basit bir portfolyo sitesi.",
    },
    tags: ["Astro", "TypeScript", "CSS"],
    href: "https://github.com/wagamela/wagamela.github.io",
    status: "current",
    image: "projects/portfolio.png",
    details: {
      en: ["This is a simple portfolio site I built to showcase my work, skills and interests to people."], // TODO
      tr: ["Çalışmalarımı, becerilerimi ve ilgi alanlarımı insanlara göstermek için yaptığım basit bir portfolyo sitesi."], // TODO
    },
  },
  {
    name: "Who's With Me",
    description: {
      en: "Who's With Me is a desktop game that developed with Unity for Egitijam26.",
      tr: "Who's With Me, Egitijam26 için Unity ile geliştirilmiş bir masaüstü oyunu.",
    },
    tags: ["Unity", "C#", { en: "Game Development", tr: "Oyun Geliştirme" }],
    href: "https://wagamela.itch.io/whos-with-me",
    status: "past",
    image: "projects/whos-with-me.png",
    imageAlt: {
      en: "A blue and a red character facing each other under a green swirling portal",
      tr: "Yeşil, dönen bir portalın altında birbirine bakan mavi ve kırmızı iki karakter",
    },
    details: {
      en: [
        "Who's With Me is a game that players are trying to control two different characters that are in the same universe but not in the same reality.",
      ],
      tr: [
        "Who's With Me, oyuncuların aynı evrende ama aynı gerçeklikte olmayan iki farklı karakteri kontrol etmeye çalıştığı bir oyun.",
      ],
    },
  },
  {
    name: "Teknofest Efficiency Challenge 2025 - AKS",
    description: {
      en: "I have participated in the Teknofest Efficiency Challenge 2025 as part of the Bolat team with the responsibilty of developing the AKS (Vehicle Control System) software.", // TODO
      tr: "Teknofest Efficiency Challenge 2025'e Bolat takımının bir üyesi olarak katıldım; görevim AKS (Araç Kontrol Sistemi) yazılımını geliştirmekti.", // TODO
    },
    tags: [
      { en: "Electronics", tr: "Elektronik" },
      { en: "Software Development", tr: "Yazılım Geliştirme" },
      { en: "Embedded Systems", tr: "Gömülü Sistemler" },
    ],
    status: "past",
    image: "projects/aks.png",
    details: {
      en: [
        "I contributed my team as the responsible developer for the AKS (Vehicle Control System) software. AKS is basically a embedded system for measuring various data from vehicle and manage the control of the vehicle. I developed the software using C++ and Arduino IDE. I also designed display for the vehicle with Nextion.",
      ],
      tr: [
        "Takımıma AKS (Araç Kontrol Sistemi) yazılımından sorumlu geliştirici olarak katkı sağladım. AKS, temelde araçtan çeşitli verileri ölçen ve aracın kontrolünü yöneten gömülü bir sistem. Yazılımı C++ ve Arduino IDE ile geliştirdim. Ayrıca Nextion ile aracın ekranını tasarladım.",
      ],
    },
  },
];

// Extra sections on the About page, below the short bio. Each string in "paragraphs" is its own paragraph.
export const aboutSections: { title: Text; paragraphs: Record<Lang, string[]> }[] = [
  {
    title: { en: "How I got into coding", tr: "Kodlamaya nasıl başladım" }, // TODO
    paragraphs: { en: ["Your story here."], tr: ["Hikâyen burada."] }, // TODO
  },
  {
    title: { en: "What I'm learning now", tr: "Şu an öğrendiklerim" }, // TODO
    paragraphs: {
      en: ["Tools, languages or topics you're working through."], // TODO
      tr: ["Üzerinde çalıştığın araçlar, diller veya konular."], // TODO
    },
  },
];

export const interests: (string | Text)[] = [
  { en: "Web development", tr: "Web geliştirme" },
  { en: "Game development", tr: "Oyun geliştirme" },
  { en: "Open source", tr: "Açık kaynak" },
  "Linux",
  { en: "Gaming", tr: "Oyun oynamak" },
  { en: "Football", tr: "Futbol" },
  { en: "Basketball", tr: "Basketbol" },
  "Speedcubing",
  { en: "Electronics", tr: "Elektronik" },
  { en: "Jersey design", tr: "Forma tasarımı" },
];
