// Languages the site is built in, plus the interface text that isn't part of your content.
// English lives at /, Turkish at /tr/ (pages in src/pages/tr/ just render the English page;
// every component reads the language from the URL).

export const languages = { en: "EN", tr: "TR" } as const;
export type Lang = keyof typeof languages;
export type Text = Record<Lang, string>;

const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");

export const getLang = (url: URL): Lang => (url.pathname.replace(/\/?$/, "/").startsWith(`${base}tr/`) ? "tr" : "en");

// The home page for a language, e.g. "/" or "/tr/".
export const home = (lang: Lang) => (lang === "en" ? base : `${base}${lang}/`);

// The same page in another language.
export const localize = (url: URL, lang: Lang) =>
  home(lang) + url.pathname.replace(/\/?$/, "/").slice(base.length).replace(/^tr\//, "");

// Content that's the same in every language can stay a plain string.
export const pick = (value: string | Text, lang: Lang) => (typeof value === "string" ? value : value[lang]);

export const ui = {
  en: {
    home: "Home",
    projects: "Projects",
    about: "About",
    language: "Language",
    toggleTheme: "Toggle dark mode",
    photoOf: (name: string) => `Photo of ${name}`,
    projectsBy: (name: string) => `Projects by ${name}`,
    shortVersion: "The short version",
    contributions: "Contributions",
    graphFailed: "Couldn't load the graph right now.",
    seeOnGitHub: "See it on GitHub",
    inLastYear: "contributions in the last year",
    sampleData: " (sample data)",
    contributionsLabel: (total: number) => `${total} GitHub contributions in the last year`,
    contributionOn: (count: number, date: string) =>
      `${count === 0 ? "No" : count} contribution${count === 1 ? "" : "s"} on ${date}`,
    less: "Less",
    more: "More",
    experience: "Experience",
    nowBuilding: "Now building",
    earlier: "Earlier",
    interests: "My interests",
    imageSoon: "Image coming soon",
    builtWith: ["Hand-built with ", " · rebuilt daily, last on "],
  },
  tr: {
    home: "Ana Sayfa",
    projects: "Projeler",
    about: "Hakkımda",
    language: "Dil",
    toggleTheme: "Karanlık modu aç/kapat",
    photoOf: (name: string) => `${name} fotoğrafı`,
    projectsBy: (name: string) => `${name} projeleri`,
    shortVersion: "Kısaca",
    contributions: "Katkılar",
    graphFailed: "Grafik şu anda yüklenemedi.",
    seeOnGitHub: "GitHub'da gör",
    inLastYear: "katkı (son bir yıl)",
    sampleData: " (örnek veri)",
    contributionsLabel: (total: number) => `Son bir yılda ${total} GitHub katkısı`,
    contributionOn: (count: number, date: string) => `${date}: ${count === 0 ? "katkı yok" : `${count} katkı`}`,
    less: "Az",
    more: "Çok",
    experience: "Deneyim",
    nowBuilding: "Şu an üzerinde çalıştıklarım",
    earlier: "Önceki projeler",
    interests: "İlgi alanlarım",
    imageSoon: "Görsel yakında",
    builtWith: ["", " ile elle yapıldı · her gün yeniden derlenir, son: "],
  },
} satisfies Record<Lang, unknown>;
